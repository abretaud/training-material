#!/bin/bash
set -e

# launch the instance in deamon mode

if [ "$1" = '-d' ];
then
    echo "Starting Galaxy in the background"
    startup &
    galaxy_instance="http://localhost:8080"
    galaxy-wait -g $galaxy_instance

    if [ "$(head -n 1 /tutorials/data-library_all.yaml)" != "{}" ];
    then
        echo "Downloading data from data-library_all.yaml"
        setup-data-libraries -i '/tutorials/data-library_all.yaml' -g $galaxy_instance -u $GALAXY_DEFAULT_ADMIN_USER -p $GALAXY_DEFAULT_ADMIN_PASSWORD -v
        startup
    else
        echo "No data libraries to install"
    fi

else
    echo "Use '-d' parameter to download tutorial data."
    echo "Starting Galaxy"
    startup
fi