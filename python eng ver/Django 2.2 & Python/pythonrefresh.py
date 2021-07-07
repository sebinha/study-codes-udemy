# age = 22

# name = "Victor"

# print("Hi my name is {} and I am {} years old".format(name, age))
'''
def hello(name="Sean", age=16):
    return "Hello {} you are {} years old".format(name, age)


sentance = hello()

print(sentance)

name = "Victor"
age = 22

sentance = hello(name, age)

print(sentance)
'''

'''
def tripleprint(oi):
    print("{}{}{}".format(oi, oi, oi))


tripleprint("hello")
'''
'''
names = ["Jane", "Peter", "Mark", "Johnny", 431, False, True, 4.332]

del[names[1]]  # Peter will be deleted

names[3] = "Depp"

print(names[0])
print(len(names))
print(names)
'''
'''
names = ["Jane", "Peter", "Mark", "Johnny"]

for name in names:
    print(name)

for numbers in range(1, 10):
    print(numbers)
'''
'''
age = 0

while age <= 18:
    print(age)
    age += 1
'''
'''
numbers = [76, 83, 16, 69, 52, 78, 10, 77, 45, 52, 32, 17, 58, 54, 79, 72, 55, 50, 81, 74, 45, 33, 38, 10, 40, 44, 70, 81, 79, 28, 83, 41, 14, 16, 27, 38, 20, 84, 24, 50, 59, 71, 1, 13, 56, 91, 29, 54,
           65, 23, 60, 57, 13, 39, 58, 94, 94, 42, 46, 58, 59, 29, 69, 60, 83, 9, 83, 5, 64, 70, 55, 89, 67, 89, 70, 8, 90, 17, 48, 17, 94, 18, 98, 72, 96, 26, 13, 7, 58, 67, 38, 48, 43, 98, 65, 8, 74, 44, 92]
for number in numbers:
    if number > 90:
        print(number)
'''
'''
names = {"Victor": 22, "Robert": 10, "Zendaya": 18}

# del(names["Victor"])
names["Akon"] = 48

print(names)
'''
'''
words = ["PoGo", "Spange", "Lie-Fi"]
definitions = ["Slang for Pokemon Go", "To collect spare change, either from couches, passerbys on the street or any numerous other ways and means",
               "When your phone or tablet indicates that you are connected to a wireless network, however you are still unable to load webpages or use any internet services with your device"]

cooldictionary = {words[0]: definitions[0], words[1]: definitions[1], words[2]: definitions[2]}

print(cooldictionary)
'''

'''
class Dog:

    dogInfo = "Male"

    def bark(self, str):
        print("BARK!" + str)


mydog = Dog()
mydog.bark("MEOW!")
mydog.name = "Max"
mydog.age = 11
print(mydog.name)
print(mydog.age)
Dog.doInfo = "Female"
print(Dog.dogInfo)
'''

'''
class Dog:

    def __init__(self, name=None, age=None, furcolor=None):
        self.name = name
        self.age = age
        self.furcolor = furcolor


mydog = Dog("Korn", "11", "White")

print(mydog.age)
'''

'''
class Car:
    def __init__(self, year, make, model):
        self.year = year
        self.make = make
        self.model = model

    def age(self):
        return (2020 - self.year)


mycar = Car(2005, "Honda", "Civic")

mycar.age = 2020 - mycar.year

print(mycar.age)
'''


# import django
# print(django.get_version())
