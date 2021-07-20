const translateDic = {
	showcase_title_ro: 'Casa Departe De Casa',
	showcase_title_en: 'Home Away From Home',
};

let translateThis = false;

const btnTranslate = document.querySelector('.translate-btn');
const translateArray = document.querySelectorAll('.translate-text');
console.log(translateArray);

btnTranslate.addEventListener('click', function () {
	translateThis = !translateThis;
	translateArray.forEach((text) => {
		const textID = text.id;
		//console.log(text.id);
		text.innerText = translateThis
			? translateDic[`${textID}_ro`]
			: translateDic[`${textID}_en`];
	});
});
