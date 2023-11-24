
// const wrk = async (selectedText) => {
//   const apiKey = 'tnXU3lkmiKoYZxtsMoaA5j75la-pgVvGM6-LxT5Ce9E';
//   const apiUrl = `https://api.unsplash.com/photos/random?query=${selectedText}&client_id=${apiKey}`;

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`Network response was not ok. Status: ${response.status}`);
//     }

//     const data = await response.json();

//     if (data.urls && data.urls.full) {
//       var image=document.getElementById("myImage").src="data.urls.full";
//       alert(image);
//     } else {
//       alert('No images found.');
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// document.addEventListener('dblclick', function () {
//   const selectedText = window.getSelection().toString().trim();

//   if (selectedText !== '') {
//     try {
//       wrk(selectedText);
//     } catch (error) {
//       console.error('Error sending message to background script:', error);
//     }
//   }
// });


const wrk = async (selectedText) => {
  const apiKey = 'tnXU3lkmiKoYZxtsMoaA5j75la-pgVvGM6-LxT5Ce9E';
  const apiUrl = `https://api.unsplash.com/photos/random?query=${selectedText}&client_id=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.urls && data.urls.full) {
      // Check if the image element exists in the document
      var image = document.getElementById("myImage");
      if (image) {
        // Set the src attribute of the image element
        image.src = data.urls.full;
        alert(data.urls.full);
      } else {
        alert('Image element with id "myImage" not found.');
      }
    } else {
      alert('No images found.');
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

document.addEventListener('dblclick', function () {
  const selectedText = window.getSelection().toString().trim();

  if (selectedText !== '') {
    try {
      wrk(selectedText);
    } catch (error) {
      console.error('Error sending message to background script:', error);
    }
  }
});
