# Countdown Timer
## Description:
The timer counts down at intervals of 1 second.

Start point: current system time.

End point: the specified date when creating the timer.

## How to use:
- **creating:**
```javascript
import { Timer } from './script';

const timer = new Timer('timerId', 'date');
``` 
**`timerId`** - id block timer, default value `timer`

**`date`** - date by which to count in ISO format(_example: '2020-09-24 12:55:00'_), default ***`now()`***

- **layout:**

The page layout must have blocks to display the result.

 **`.hours`** - set this class to div to show the remaining hours

 **`.minutes`** - set this class to div to show the remaining minutes

 **`.seconds`** - set this class to div to show the remaining seconds

Example page layout:
```html
<div id="timer">
  <span class="hours">00</span>
  <span>:</span>
  <span class="minutes">00</span>
  <span>:</span>
  <span class="seconds">00</span>
  </div>
```
- **run:**

To start, you must call the ***`start`*** method:
```javascript
timer.start();
```
- **stor:**
```javascript
timer.stop();
```
