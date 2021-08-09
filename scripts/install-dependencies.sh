echo "Installing backend dependencies..."
npm install

echo "Installing frontend dependencies..."
cd client || exit 1
npm install
