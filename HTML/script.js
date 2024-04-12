const rectangles = document.querySelectorAll('.rectangle');

function dragElement(el) {
  isDragging = true;
  posX = e.clientX - el.offsetLeft;
  posY = e.clientY - el.offsetTop;
  document.addEventListener('mousemove', moveDrag);
  document.addEventListener('mouseup', endDrag);
}

function allowDrop(el) {
  el.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent default browser behavior
    e.dataTransfer.dropEffect = "move"; // Set allowed drop effect
  });

  el.addEventListener('drop', (e) => {
    console.log('Dropped on:', el.id);
    const droppedData = e.dataTransfer.getData('text/plain'); // Assuming plain text data
    // Add logic to handle dropped data (droppedData)
  });
}

rectangles.forEach(rectangle => {
  dragElement(rectangle);
  allowDrop(rectangle);
});
