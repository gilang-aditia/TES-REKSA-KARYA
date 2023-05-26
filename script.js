var queue = [];

function enqueue() {
  var inputBox = document.getElementById('inputBox');
  var element = inputBox.value;
  if (element !== '') {
    queue.push(element);
    displayQueue();
    inputBox.value = '';
    inputBox.focus();
  }
}

function dequeue() {
  if (queue.length > 0) {
    queue.shift();
    displayQueue();
  }
}

function displayQueue() {
  var queueDiv = document.getElementById('queue');
  queueDiv.innerHTML = '';
  for (var i = 0; i < queue.length; i++) {
    var element = document.createElement('p');
    element.innerHTML = queue[i];
    queueDiv.appendChild(element);
  }
}
