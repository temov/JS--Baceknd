import fs from'fs';
import { v4 as uuidv4 } from 'uuid';
import {EventEmitter} from "events";

import path from 'path';

const eventEmitter = new EventEmitter();

function greetStudents(studentFullname, studentEmail, studentPassword){

    const student = {

        id:uuidv4(),
        fullname: studentFullname,
        email: studentEmail,
        password: studentPassword
    }
    eventEmitter.emit('greet', student.fullname)
    const logFilePath = path.join('greeting_log.txt');
    fs.appendFileSync(logFilePath, student.fullname);
};


eventEmitter.on("greet", (studentFullname) => {
    console.log(`Hello, ${studentFullname}`)
});

greetStudents('Tode Temov', 'topgunt@getMaxListeners.com', 'wrongpass')


