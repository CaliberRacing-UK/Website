const resetLink = document.getElementById('resetView');
const modelViewer = document.getElementById('carModel');

resetLink?.addEventListener('click', (e) => {
  e.preventDefault(); // prevent scrolling to top
  const modelViewer = document.querySelector('#carModel');

  // Save initial camera orbit (optional)
  const initialOrbit = modelViewer.getCameraOrbit();

  document.querySelector('#resetView').addEventListener('click', () => {
    // Reset the camera orbit to initial
    modelViewer.cameraOrbit = initialOrbit.toString();
    // Request the camera to update
    modelViewer.jumpCameraToGoal();
  });
});