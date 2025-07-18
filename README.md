# React Infinite Scroll Image Gallery
Deployed at: https://infinitescrollsbmitrovic.netlify.app/


A responsive React application that displays an infinite scrolling gallery of images fetched from the Picsum Photos API. Users can browse through beautiful photos and search for specific authors.

## 🚀 Features

- **Infinite Scrolling**: Automatically loads more images as you scroll down
- **Search Functionality**: Filter images by photographer/author name
- **Responsive Design**: Optimized for various screen sizes
- **Loading States**: Visual feedback while images are being loaded
- **Image Optimization**: Images are loaded as blobs for better performance

## 🛠️ Technologies Used

- **React 19.1.0** - Frontend framework
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and responsive design
- **Picsum Photos API** - Source of random high-quality images

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SBMitrovic/ReactInfiniteScroll.git
   cd ReactInfiniteScroll
   ```

2. **Navigate to the app directory**
   ```bash
   cd my-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Visit `http://localhost:3000` to view the application

## 📱 Usage

### Browsing Images
- The gallery loads automatically when you open the application
- Scroll down to load more images (infinite scroll)
- Each image displays with the photographer's name

### Searching
- Use the search bar at the top to filter images by author name
- Type the photographer's name and click "Search"
- The app will show the number of results found
- Search is case-insensitive and supports partial matches

## 🏗️ Project Structure

```
my-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── imageCard.js       # Individual image component
│   │   ├── imageCard.css      # Image card styling
│   │   ├── imagesList.js      # Image gallery container
│   │   ├── imagesList.css     # Gallery styling
│   │   ├── searchButton.js    # Search functionality
│   │   └── searchButton.css   # Search styling
│   ├── App.js                 # Main application component
│   ├── App.css                # Global styles
│   ├── index.js               # React entry point
│   └── ...
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 API Reference

This application uses the [Picsum Photos API](https://picsum.photos/) to fetch random images:
- **Endpoint**: `https://picsum.photos/v2/list`
- **Pagination**: Uses page parameter for infinite scrolling
- **Response**: Returns an array of image objects with metadata

## 🎨 Styling

The application features:
- Modern gradient background
- Responsive grid layout for images
- Clean, minimalist design
- Smooth loading animations
- Mobile-friendly interface

## 🔍 Key Components

### App.js
- Main application logic
- Handles infinite scroll detection
- Manages state for images and pagination
- Integrates search functionality

### ImageCard.js
- Displays individual images
- Handles image loading with blob URLs
- Shows loading states
- Displays photographer attribution

### SearchButton.js
- Provides search input and button
- Filters images by author name
- Shows search result counts

## 🚧 Future Enhancements

- [ ] Add image lightbox/modal view
- [ ] Implement categories or tags filtering
- [ ] Add favorites functionality
- [ ] Improve error handling and retry mechanisms
- [ ] Add loading skeletons
- [ ] Implement virtual scrolling for better performance
- [ ] Add image download functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Stefan Mitrovic - [@SBMitrovic](https://github.com/SBMitrovic)

Project Link: [https://github.com/SBMitrovic/ReactInfiniteScroll](https://github.com/SBMitrovic/ReactInfiniteScroll)

## 🙏 Acknowledgments

- [Picsum Photos](https://picsum.photos/) for providing beautiful placeholder images
- [Create React App](https://create-react-app.dev/) for the project setup
- All the talented photographers whose work is featured through Picsum Photos