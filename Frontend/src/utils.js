class Utils {

    ConvertToDateComplete(umaData) {
        const date = new Date(umaData);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    ConvertData(umaData) {
        return (new Date(umaData)).toLocaleDateString();
  
    }
}

export default new Utils();