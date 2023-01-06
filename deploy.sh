echo "Switching to release branch"

# git checkout release

echo "Building app..."
npm run build

echo "Deploying files to server..."
cd build
# scp -r -O * abuser@116.203.235.59:/home/abuser/contact-app/
scp -r -O * abuser@116.203.235.59:/home/abuser/store/client/

 
echo "Done!"