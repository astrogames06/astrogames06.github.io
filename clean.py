import os

def delete_files_starting_with_dot(directory="."):
    # Get list of all files in the directory
    files = os.listdir(directory)
    
    # Iterate through each file
    for file in files:
        # Check if the file starts with a dot and is a file (not a directory)
        if file.startswith('.') and os.path.isfile(os.path.join(directory, file)):
            # If it is, delete the file
            os.remove(os.path.join(directory, file))
            print(f"Deleted file: {file}")

# Call the function to delete files starting with a dot in the current directory
delete_files_starting_with_dot()
