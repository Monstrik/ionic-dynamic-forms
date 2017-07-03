export class DBTranslator {

  // DB Button Types
  // 'Select'
  // 'Text' - Implemented
  // 'Button' - Implemented
  // 'Checkbox' - Implemented
  // 'Time' - Implemented
  // 'Label'
  // 'Left'
  // 'TextButton'
  // 'LabelBreak'
  // 'LabelInsert'
  // 'ClickOthersButton'
  // 'Header'
  // 'AutoComplete'
  // 'SelectUnit'
  // NULL

  translateDBtoJsonSection(data: any) {
    function createMultiQuestion(multiQuestionData) {
      let multiQuestion;
      let options = [];
      let buttonType;
      let elementSchema = multiQuestionData[0];
      multiQuestionData.forEach((element) => {

        switch (element.BUTTONTYPE) {
          case 'Text': {
            multiQuestion = {
              dbId: element.ALLBUTTONSID,
              name: element.ALLBUTTONSID,
              type: 'text',
              label: element.LABEL + '(' + element.BUTTONNAME + ')',
              grid: element.MULTITYPE
            };
            break;
          }
            ;
          case 'Time': {
            multiQuestion = {
              dbId: element.ALLBUTTONSID,
              name: element.ALLBUTTONSID,
              type: 'time',
              label: element.LABEL,
              grid: element.MULTITYPE
            };
            break;
          }
          case 'Button': {
            options.push({id: element.ALLBUTTONSID, name: element.BUTTONNAME})
            break;
          }
          case 'Checkbox': {
            buttonType = 'select-multi';
            options.push({id: element.ALLBUTTONSID, name: element.BUTTONNAME})
            break;
          }
          default:
            //this.devDebug('WARN: not implemented for type', element.BUTTONTYPE);
            multiQuestion = undefined;

            break;
        }
      });

      if (options.length > 0)
        multiQuestion = {
          name: elementSchema.ALLBUTTONSID,
          label: elementSchema.LABEL,
          grid: elementSchema.MULTITYPE,
          type: 'select',
          options: options,
          multiple: buttonType === 'select-multi'
        }

      return multiQuestion;
    }

    let sectionQuestions = [];
    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      if (row.MULTI === 0) {
        console.log('single question found')
      } else {
        let multiID = row.MULTIID;
        let multiQuestionData = data.filter((el) => {
          return el['MULTIID'] === multiID;
        });
        let q = createMultiQuestion(multiQuestionData);
        if (q != null) {
          sectionQuestions.push(q);
        }
        i = i + multiQuestionData.length - 1;
      }
    }


    let section = {
      title: data[0].SECTIONLABEL,
      description: '',
      type: 'regular',
      order: 1,
      fields: sectionQuestions
    };
    return section;
  }

}
