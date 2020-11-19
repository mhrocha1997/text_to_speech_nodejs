const fs = require('fs');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const {IamAuthenticator} = require('ibm-watson/auth');


const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: '35VIrBnDt6EW27MK9cCcY1eRToMIwYg5TBwOQKIxfy35'}),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c2821717-9793-41aa-bcf5-f02e7fb2dff5'
});


function text_to_speech(request,response){
    const {id,comment} = request.body
    const params = {
        text: comment,
        voice: 'pt-BR_IsabelaV3Voice',
        accept: 'audio/wav'
    };

    textToSpeech    
        .synthesize(params)
        .then(response => {
            const audio = response.result;
            return textToSpeech.repairWavHeaderStream(audio);
        })
        .then(repairedFile => {
            fs.writeFileSync(`./frontend/audio/${id}.wav`,repairedFile);
        })
        .catch(err =>{
            console.log(err);
        });

        return response.json(comment)
}

module.exports = {text_to_speech};
