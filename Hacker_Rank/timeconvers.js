// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s='12:01:00PM'
// Return '12:01:00'.

// s='00:01:00AM'
// Return '00:01:00'.


function timeConversion(s) {
    let period=s.slice(-2)
    let time=s.slice(0,-2).split(":")
    
     if (period === "AM" && time[0] === "12") {
        // If the time is 12:xx:xx AM, convert it to 00:xx:xx
        time[0] = "00";
    } else if (period === "PM") {
        // If the time is in PM period and not 12 PM, add 12 to the hour component
        time[0] = (time[0] % 12) + 12;
    }
      return time.join(":"); // Return the time in 24-hour format
}


// Test cases
console.log(timeConversion('12:01:00PM')); // Output: '12:01:00'
console.log(timeConversion('00:01:00AM')); // Output: '00:01:00'