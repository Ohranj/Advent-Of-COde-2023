import requests
import sys
import os

url = 'https://adventofcode.com'
storeInputText = '/input.txt'

year = sys.argv[1]
day = sys.argv[2]



#Check given day is numeric
if not year.isnumeric() or not day.isnumeric():
    sys.exit('Append a numeric year followed by day to the cmd line when calling the script')


#Read sesion pasted into file
session = open("session.txt", "r").read()

try:
  x = requests.get(url + '/' + year + '/day/' + day + '/input', cookies={ 'session': session })
  x.raise_for_status()
except requests.exceptions.HTTPError as e:
   sys.exit('Provide a valid session cookie')
   


#Create directory and append input data to file
filename = './' + year + '/day' + day
os.makedirs(filename, exist_ok=True)
with open(filename + storeInputText, "w") as f:
    f.write(x.text.strip())