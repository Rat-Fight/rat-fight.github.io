import os

def search_directory(directory):
    
    files = os.listdir(directory)

    for file in files:
        if "." in file:
            extension = file.split('.')[1]
            files_classification.get(extension, []).append(directory + '/' +file)
        else:
            search_directory(directory + "/" + file)
    

files_classification = {
    "py": [],
    "js": [],
    "jsx": [],
    "html": [],
    "css": [],
}


main_directory = "./src"
search_directory(main_directory)
print(files_classification)

content = ''
for type, file_list in files_classification.items():
    for file in file_list:
        print(f"File: {file}")
        with open(file, 'r') as fhand:
            content += f"{file} \n \n"
            content += fhand.read()

with open('all_files.txt', 'w') as fhand:
    fhand.write(content)
