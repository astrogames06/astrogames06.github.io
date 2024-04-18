import os

def delete_files_with_question_mark(directory):
    # Get the list of files in the directory
    files = os.listdir(directory)

    # Iterate over each file
    for file_name in files:
        # Check if the file name contains a question mark
        if '?' in file_name:
            # Construct the full path to the file
            file_path = os.path.join(directory, file_name)
            try:
                # Attempt to delete the file
                os.remove(file_path)
                print(f"Deleted file: {file_name}")
            except Exception as e:
                # If an error occurs during deletion, print the error message
                print(f"Error deleting file {file_name}: {e}")

# Directory containing the files to be deleted
directory_path = "assets/sound"

# Call the function to delete files with a question mark in the name
delete_files_with_question_mark(directory_path)
