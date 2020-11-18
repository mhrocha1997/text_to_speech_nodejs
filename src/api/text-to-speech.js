const fs = require('fs');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const {IamAuthenticator} = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: '35VIrBnDt6EW27MK9cCcY1eRToMIwYg5TBwOQKIxfy35'}),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c2821717-9793-41aa-bcf5-f02e7fb2dff5'
});

const params = {
    text: 'Olá, IBM Watson',
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
        fs.writeFileSync('audio.wav',repairedFile);
        console.log('audio. wav written with a corrected wav header');
    })
    .catch(err =>{
        console.log(err);
    });