---
title: Typo 3
description: Ordinal numbers are hard.
slug: typo-3
authors: icasmarques
tags: [technical writing, typo, qa]
image: https://media.licdn.com/dms/image/D4E22AQHHSJnTfPcvhw/feedshare-shrink_800/0/1707693101339?e=1710979200&v=beta&t=qCV_yk6l6NRLQniMoWb5OJoZWN79xqSBwuZDA4Wv-H8
hide_table_of_contents: false
---

Who is going to tell [Intelcom](https://www.linkedin.com/company/intelcom-)?

![An email from Intelcom confirms a pickup date as February "12nd."](https://media.licdn.com/dms/image/D4E22AQHHSJnTfPcvhw/feedshare-shrink_800/0/1707693101339?e=1710979200&v=beta&t=qCV_yk6l6NRLQniMoWb5OJoZWN79xqSBwuZDA4Wv-H8)

Here's how I imagine their code:

```python
def pickup_date(month, day, year):
  last_digit = str(day)[-1]
  suffixes = {'1': 'st', '2': 'nd', '3': 'rd'}
  suffix = suffixes.get(last_digit, 'th')
 
  return f'{month} {day}{suffix} {year}'
```

If only they added this before the return statement...

```python
  exceptions = ['11', '12', '13']
  for exception in exceptions:
    if str(day).endswith(exception):
      suffix = 'th'
```
...no issues. Intelcom, I'll be emailing you my invoice tomorrow, February 13rd.
