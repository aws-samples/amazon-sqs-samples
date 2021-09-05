exports.handler = function(event, context, callback){
    //SQS triggers with Records being an array list of message objects.
    event.Records.forEach(function(element) {
        //message is available in body as a stringified content.
        var message = JSON.parse(element.body)
        console.log(message)
    })
}