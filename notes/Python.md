---
tags: [Python]
title: Python
created: '2020-12-24T17:29:19.931Z'
modified: '2020-12-25T15:35:18.403Z'
---

# Python

# Affichage

```python
>>> print('Hello')
Hello
```

# Calcules 

```python
+ -> addition 
- -> soustraction
* -> multiplication
/ -> division (retrun float)
// -> division (retrun int)
% -> reste de la division
```

# \
```python
'Aujourd\'hui'

"\n" -> retour à la ligne

"Hello"+"world" -> "Helloworld"
"Hello"*5 -> "HelloHelloHelloHelloHello"
```

# Demande
```python
a = input()
```

# Affectation

```python
x = x + 3
x += 3
```

# Conditions

```python
== -> égal
!= -> non égal
<= -> plus grand ou egal que
>= -> plus petit ou egal que
< -> plus grand que
> -> plus petit que
```

```python
if condition:
  code
elif condition:
  code
else:
  code
```

```python
and -> et
or -> ou
not -> inverser/non
```

# Liste

```python
words = ["Hello", "world", "!"]  
words[0] -> "Hello"
```

```python
"Hello" in words -> True
not "Hello" in words -> False == "Hello" not in words -> False
```

```python
words = ["Hello", "world", "!"]  
words.append("At everyone!")
-> ["Hello", "world", "!", "everyone!"]
```

```python 
words.insert(3, "At")
-> ["Hello", "world", "!", "At", "everyone!"]
words.index("At")
-> 3

max(list): Returns the list item with the maximum value
min(list): Returns the list item with minimum value
list.count(item): Returns a count of how many times an item occurs in a list
list.remove(item): Removes an object from a list
list.reverse(): Reverses items in a list.
```

# Boucle

```python
while condition:
  code
break -> stop boucle
continue -> prochaine itération
pass -> ne fait rien
```

```python
for i in words:
  print(i)
-> ---
Hello
world
!
At
everyone!
---
```


