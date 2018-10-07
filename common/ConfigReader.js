class ConfigReader{
	const fs = require('fs');
	constructor(fileName){//配置文件的文件名
		fs.open('myfile', 'r', (err, fd) => {
			if (err) {
				if (err.code === 'ENOENT') {
					console.error('文件不存在');
					return;
				}

				throw err;
			}

			console.log(fd);
		});
	}
}

export default ConfigReader;