#!/bin/bash

# Ensure the storage folder has the correct structure
STORAGE_PATH=/var/www/html/storage
STORAGE_BACKUP_PATH=/var/www/html/storage_

if [ ! -d "$STORAGE_PATH/app" ]; then
    echo "$STORAGE_PATH/app is not a directory, copying content from $STORAGE_BACKUP_PATH to $STORAGE_PATH"
    cp -r $STORAGE_BACKUP_PATH/. $STORAGE_PATH
    echo "Deleting $STORAGE_BACKUP_PATH..."
    rm -rf $STORAGE_BACKUP_PATH
fi

# Ensure the database folder and SQLite file exist
DB_FOLDER=$STORAGE_PATH/database
DB_FILE=$DB_FOLDER/database.sqlite

if [ ! -d "$DB_FOLDER" ]; then
    echo "$DB_FOLDER does not exist, initializing database folder"
    mkdir -p $DB_FOLDER
fi

if [ ! -f "$DB_FILE" ]; then
    echo "$DB_FILE not found, creating SQLite database"
    touch $DB_FILE
fi

echo "Script execution completed."
#!/bin/bash

# Ensure the storage folder has the correct structure
STORAGE_PATH=/var/www/html/storage
STORAGE_BACKUP_PATH=/var/www/html/storage_

if [ ! -d "$STORAGE_PATH/app" ]; then
    echo "$STORAGE_PATH/app is not a directory, copying content from $STORAGE_BACKUP_PATH to $STORAGE_PATH"
    cp -r $STORAGE_BACKUP_PATH/. $STORAGE_PATH
    echo "Deleting $STORAGE_BACKUP_PATH..."
    rm -rf $STORAGE_BACKUP_PATH
fi

# Ensure the database folder and SQLite file exist
DB_FOLDER=$STORAGE_PATH/database
DB_FILE=$DB_FOLDER/database.sqlite

if [ ! -d "$DB_FOLDER" ]; then
    echo "$DB_FOLDER does not exist, initializing database folder"
    mkdir -p $DB_FOLDER
fi

if [ ! -f "$DB_FILE" ]; then
    echo "$DB_FILE not found, creating SQLite database"
    touch $DB_FILE
fi

echo "Script execution completed."
