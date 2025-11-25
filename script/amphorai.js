(function(){
  const imageInput = document.getElementById('imageInput');
  const uploadedImageContainer = document.getElementById('uploadedImageContainer');
  const uploadedImage = document.getElementById('uploadedImage');
  const uploadedCaption = document.getElementById('uploadedCaption');
  const noImageText = document.getElementById('noImageText');
  const preloader = document.getElementById('analysisPreloader');
  const analysisProgress = document.getElementById('analysisProgress');
  const modelContainer = document.getElementById('modelContainer');
  const leftBox = document.getElementById('leftBox');
  const rightBox = document.getElementById('rightBox');

  function resetRight() {
    preloader.style.display = 'none';
    modelContainer.style.display = 'none';
    analysisProgress.value = 0;
  }

  resetRight();

  imageInput.addEventListener('change', function(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // Show left and right boxes when an image is uploaded
    leftBox.style.display = 'block';
    rightBox.style.display = 'block';

    // Scroll down to the analysis area
    setTimeout(() => {
      rightBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);

    // Show preview on left
    const reader = new FileReader();
    reader.onload = function(ev) {
      uploadedImage.src = ev.target.result;
      uploadedImageContainer.style.display = 'block';
      noImageText.style.display = 'none';
      uploadedCaption.textContent = file.name;
    };
    reader.readAsDataURL(file);

    // Start mock analysis
    modelContainer.style.display = 'none';
    preloader.style.display = 'block';
    analysisProgress.value = 0;

    // animate progress for ~5s
    const duration = 5000; // ms
    const interval = 100; // update every 100ms
    const steps = duration / interval;
    let i = 0;
    const t = setInterval(() => {
      i++;
      analysisProgress.value = Math.min(100, Math.round((i/steps)*100));
      if (i >= steps) {
        clearInterval(t);
        preloader.style.display = 'none';
        modelContainer.style.display = 'block';
      }
    }, interval);
  });
})();
