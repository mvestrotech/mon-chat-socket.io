var socket = io();

function addLine(tableID, message) {
    var refTable = document.getElementById(tableID);
    var newLine = refTable.insertRow(refTable.rowIndex);
    var newCell = newLine.insertCell(0);
    var newText = document.createTextNode(message.text)
    newCell.appendChild(newText);
}

$('#section-chat form').submit(function (e) {
    e.preventDefault();
    var message = {
        text : $('#message-imput').val()
    };
    $('#message-imput').val('');
    if (message.text.trim().length !== 0) {
        socket.emit('message', message);
    }
    $('#section-chat input').focus();
});

socket.on('message', function (message) {
    addLine('TableMessages', message);
});