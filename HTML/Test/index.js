const handleRecord = function ({stream, mimeType}) {
  // to collect stream chunks
  let recordedChunks = [];
  stopped = false;
  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
    // shouldStop => forceStop by user
    if (shouldStop === true && stopped === false) {
      mediaRecorder.stop();
      stopped = true;
    }
  };
  mediaRecorder.onstop = function () {
    const blob = new Blob(recordedChunks, {
      type: mimeType
    });
    recordedChunks = []
    const filename = window.prompt('Enter file name'); // input filename from user for download
    downloadLink.href = URL.createObjectURL(blob); // create download link for the file
    downloadLink.download = `${filename}.webm`; // naming the file with user provided name
    stopRecord();
  };

  mediaRecorder.start(200); // here 200ms is interval of chunk collection
};
