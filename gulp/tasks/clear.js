import { deleteAsync } from 'del';
import { path } from '../config/path.js';

 function clear () {
    return deleteAsync(path.root)
}

export default clear;