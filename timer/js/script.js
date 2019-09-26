window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Timer

    class Timer{
        constructor(id = 'timer', deadline = new Date()){
            this._fieldTimer = document.getElementById(id);
            this._fieldHours = this._fieldTimer.querySelector('.hours');
            this._fieldMinutes = this._fieldTimer.querySelector('.minutes');
            this._fieldSeconds = this._fieldTimer.querySelector('.seconds');
            this._deadline = deadline;
            this._updateClock = this._updateClock.bind(this);
        }
    
        _setTimeRemaining(){
            this._total = Date.parse(this._deadline) - Date.parse(new Date());
            this._seconds = Math.floor(this._total/1000 % 60);
            this._minutes = Math.floor(this._total/(1000*60) % 60);
            this._hours = Math.floor(this._total/(1000*60*60));
        }
    
        _editNumber(){
            this._hours = this._addZero(this._hours);
            this._minutes = this._addZero(this._minutes);
            this._seconds = this._addZero(this._seconds);        
        }
    
        _addZero(num){
            if(num < 10){
                return '0' + num;
            } else {       
                return num;
            }
        }
    
        _validateEndTime(){
            if(this._total <= 0){
                this.stop();
                this._hours = '00';
                this._minutes = '00';
                this._seconds = '00';
            }
        }
    
        _updateClock(){
            this._setTimeRemaining();
            this._editNumber();
            this._validateEndTime();
            this._showData();
        }

        _showData(){
            this._fieldHours.textContent = this._hours;
            this._fieldMinutes.textContent = this._minutes;
            this._fieldSeconds.textContent = this._seconds;
        }
    
        start(){
            this.interval = setInterval(this._updateClock, 1000);
        }
    
        stop(){
            clearInterval(this.interval);
        }
    }
    
    new Timer('timer', '2020-09-24 12:55:00').start();
    //new Timer().start();
});