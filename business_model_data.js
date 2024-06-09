Qualtrics.SurveyEngine.addOnload(function() {
  const modelDescriptions = {
    0: "a Fashion",
	1: "an Ultra-Fast Fashion",
    2: "a Fast Fashion",
    3: "a Slow Fashion",
    4: "an Ultra-Slow Fashion"
  };

  const enteredUniqueID = "${e://Field/UniqueID_Entered}";
  const testBusinessModel = {
    "R_2ew7IPJ0DwcX2mY": 3,
	"Test1": 2
	"Test2": 4
	"Test3": 0,	// Manually set business model for this UniqueID
  };

  const retrievedBusinessModel = testBusinessModel[enteredUniqueID]; // Get from the test object

  if (retrievedBusinessModel) { 
    const modelDescription = modelDescriptions[retrievedBusinessModel] || "fashion"; 
    const questionText = jQuery("#"+this.questionId).html().replace("[Model]", modelDescription);
    jQuery("#"+this.questionId).html(questionText);
  } else {
    console.warn("Business model not found for UniqueID:", enteredUniqueID);
  }
});