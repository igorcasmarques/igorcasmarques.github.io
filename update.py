import os, subprocess, shutil

from dotenv import load_dotenv
load_dotenv()

from django.core.exceptions import ImproperlyConfigured

def get_env_variable(var_name):
    """Get the environment variable or return exception."""
    try:
        return os.environ.get(var_name)
    except KeyError:
        error_msg = 'Set the {} environment variable'.format(var_name)
        raise ImproperlyConfigured(error_msg)


SOURCE_PATH = get_env_variable("SOURCE_PATH")
BUILD_PATH = get_env_variable("BUILD_PATH")
NEW_BUILD_PATH = get_env_variable("NEW_BUILD_PATH")


paths = {
    "source": SOURCE_PATH,
    "build": BUILD_PATH,
    "new_build": NEW_BUILD_PATH
}

branch_names = {
    "source": "main",
    "build": "build",
}


def build_website(folder_path):
    """Build the Docusaurus website from the source files."""
    
    try:
        subprocess.run(["npm", "run", "build"], cwd=folder_path, check=True, shell=True)
        print("Docusaurus built the website successfully.")

    except subprocess.CalledProcessError:
        print("Error: Docusaurus failed to build the website.")
        return False
    return True


def clean_build(folder_path):
    """Delete all contents of the build directory except for CNAME."""

    try: 
        for item in os.listdir(folder_path):        
            item_path = os.path.join(folder_path, item)

            if os.path.isfile(item_path):
                if item == "CNAME":
                    print(f"Preserved file: {item_path}")
                    continue
                os.remove(item_path)
                print(f"Deleted file: {item_path}")
            
            elif os.path.isdir(item_path):
                if item == ".git":
                    print(f"Preserved subdirectory: {item_path}")
                    continue
                shutil.rmtree(item_path)
                print(f"Deleted subdirectory: {item_path}")
        print("Build directory successfully cleaned.")
    
    except Exception as e:
        print(f"Error: {e}")
        return False
    
    return True
    

def copy_build(source_path, build_path):
    """Copy all contents of the build subdirectory
    in the source directory to the build directory."""

    try:
        for item in os.listdir(source_path):
            item_path = os.path.join(source_path, item)
            destination_path = os.path.join(build_path, item)
            if os.path.isdir(item_path):
                shutil.copytree(item_path, destination_path)
            else:
                shutil.copy2(item_path, destination_path)
            print(f"Copied {item_path} to {destination_path}")

        print(f"The contents of {source_path} were successfully copied to {build_path}.")
        return True

    except Exception as e:
        print(f"Error: {e}")
        return False


def run_git(folder_path, commit_message, branch_name):
    """Add and commit files to Git."""
    
    try:
        # Add to Git
        subprocess.run(["git", "add", "."], cwd=folder_path, check=True)
        print(f"Website {branch_name} files added to Git successfully.")

        # Commit to Git
        try:
            subprocess.run(["git", "commit", "-m", commit_message], cwd=folder_path, check=True)
            print(f"Git successfully committed the website {branch_name} files.")
        except: 
            print(f"No changes to commit.")
    
        # Push to origin
        try:
            subprocess.run(["git", "push", "--force", "origin", branch_name], cwd=folder_path, check=True)
            print(f"Git pushed the {branch_name} branch.")
        except:
            print("Everything up-to-date. No need to push.")
    
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return False
    return True

if __name__ == "__main__":
    
    commit_message = input("Enter commit message for this website's update: ")
    
    update_steps = [
        (build_website, [paths["source"]]),
        (clean_build, [paths["build"]]),
        (copy_build, [paths["new_build"], paths["build"]]),
        (run_git, [paths["source"], commit_message, branch_names["source"]]),
        (run_git, [paths["build"], commit_message, branch_names["build"]]),
    ]

    for func, args in update_steps:
        if not func(*args):
            print(f"Error occurred during the execution of {func.__name__}. Exiting.")
            exit(1)
   
    print("Website successfully updated.")
