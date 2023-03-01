const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Елена",
            "id_3": "Дарья",
            "id_4": "Ирина",
            "id_5": "Юлия",
            "id_6": "Вероника",
            "id_7": "Светлана",
            "id_8": "Евгения",
            "id_9": "Людмила",
            "id_10": "Тамара"
        }
      
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Январь 31",
            "id_2": "Февраль 28",
            "id_3": "Март 31",
            "id_4": "Апрель 30",
            "id_5": "Май 31",
            "id_6": "Июнь 30",
            "id_7": "Июль 31",
            "id_8": "Август 31",
            "id_9": "Сентябрь 30",
            "id_10": "Октябрь 31",
            "id_11": "Ноябрь 30",
            "id_12": "Декабрь 31"
        }
      
    }`,

    


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    genderVar:'Мужчина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        let i = this.randomIntNumber(10, 1);
        return (i%2 === 0)? this.GENDER_MALE: this.GENDER_FEMALE; // this = genderGenerator
    },

    randomJob: function () {
        const maleJob =  this.randomValue(personJob.jobMaleJson);
        const femaleJob = this.randomValue(personJob.jobFemaleJson);

        if (this.genderVar === 'Мужчина'){
           return maleJob;

        }  else {
            return femaleJob; // this = jobGenerator
        };
    },

    randomMonth: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = MonthGenerator
        const amount = this.randomIntNumber(obj.list[prop].substr(-2), 1) // Day Generation Limit
        return `${amount} ${obj.list[prop].substr(0, obj.list[prop].length -2)}`;
    },

   yeareOfBirth: function() {
     const year = this.randomIntNumber(2000, 1977);
        return `${this.randomMonth(this.monthJson)} ${year}`
   },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = 
        return obj.list[prop];
    },

    randomFirstName: function() {

        const nameMale = this.randomValue(this.firstNameMaleJson);
        const nameFemale = this.randomValue(this.firstNameFemaleJson);

        if (this.randomGender() == this.GENDER_MALE){
            // ---- MaleName ----
            this.genderVar = this.GENDER_MALE;

            return nameMale;

            } else { 

            this.genderVar = this.GENDER_FEMALE;

            return nameFemale;

            };

        },

    patronymicVar: function() {
        const patronymic = this.randomValue(personPatronymic.firstNameMaleJson);
            
                // ---- MaleName patronymic ----
        if(this.genderVar === 'Мужчина'){
    
            if(patronymic.at(-1) === 'й') {
                    return patronymic.substr(0, patronymic.length-1) + 'евич';
                    
                } else if (patronymic.at(-1) === 'а') {
                    return patronymic.substr(0, patronymic.length-1) + 'ич';
    
                } else { 
                    return patronymic +'ович';
            };
    
                // ---- FemaleName patronymic ----
            } else { 
    
                if (patronymic.at(-1) === 'й') {
                    return patronymic.substr(0, patronymic.length-1) + 'евна';
    
                } else if (patronymic.at(-1) === 'а') {
                    return patronymic.substr(0, patronymic.length-1) + 'ична';
    
                } else { 
                    return patronymic + 'овна';
    
                };
    
            };
        },

     randomSurname: function() {
        if (this.genderVar == 'Мужчина'){
            return this.randomValue(this.surnameJson);

        } else { 
            return this.randomValue(this.surnameJson)+'a';
        }
    },

    randomImg: function() {
        if (this.genderVar == 'Мужчина') {
            return this.randomValue(personImg.imgMaleJson)
        } else {
            return this.randomValue(personImg.jmgFemaleJson)
        }
        
    },

    
    getPerson: function () {
        this.person = {};

        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronymic = this.patronymicVar();

        this.person.gender = this.genderVar;

        this.person.dateOfBirth = this.yeareOfBirth();

        this.person.job = this.randomJob();

        this.person.photo = this.randomImg();


        return this.person;
    },

};

const personPatronymic = {
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

};

const personJob =  {
    jobFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Артистка",
            "id_3": "Официантка",
            "id_4": "Акушерка",
            "id_5": "Няня"
        }
    }`,

    jobMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Автомеханик",
            "id_3": "Сварщик",
            "id_4": "Электрик",
            "id_5": "Строитель"

        }
    }`,
};

const personImg = {
    jmgFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "imgFemale/Azarova_julia.jpg",
            "id_2": "imgFemale/Irina.png",
            "id_3": "imgFemale/ivanova_vika.jpg",
            "id_4": "imgFemale/konstantinova_anna.jpg",
            "id_5": "imgFemale/olga.png"
        }
    }`,

    imgMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "imgMale/jurij.png",
            "id_2": "imgMale/novikov_ivan.jpg",
            "id_3": "imgMale/oleg.png",
            "id_4": "imgMale/semjonov.jpg",
            "id_5": "imgMale/valerij.png"

        }
    }`,
}