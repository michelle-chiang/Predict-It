//
// //
// // // For notifications
// //
//
var defaultWidth = window.screen.width > 768 ? window.screen.width*1/3: window.screen.width;

var style = {
    Wrapper: {},
    Containers: {
        DefaultStyle: {
            position: 'fixed',
            width: defaultWidth,
            padding: '10px 10px 10px 20px',
            zIndex: 9998,
            WebkitBoxSizing: '',
            MozBoxSizing: '',
            boxSizing: '',
            height: 'auto',
            display: 'inline-block',
            border: '0',
            fontSize: '14px',
            WebkitFontSmoothing: "antialiased",
            fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
            fontWeight: '400',
            color: '#FFFFFF'

        },

        tl: {
            top: '0px',
            bottom: 'auto',
            left: '0px',
            right: 'auto'
        },

        tr: {
            top: '0px',
            bottom: 'auto',
            left: 'auto',
            right: '0px'
        },

        tc: {
            top: '0px',
            bottom: 'auto',
            margin: '0 auto',
            left: '50%',
            marginLeft: -(defaultWidth / 2)
        },

        bl: {
            top: 'auto',
            bottom: '0px',
            left: '0px',
            right: 'auto'
        },

        br: {
            top: 'auto',
            bottom: '0px',
            left: 'auto',
            right: '0px'
        },

        bc: {
            top: 'auto',
            bottom: '0px',
            margin: '0 auto',
            left: '50%',
            marginLeft: -(defaultWidth / 2)
        }

    },

    NotificationItem: {
        DefaultStyle: {
            position: 'relative',
            width: '100%',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '14px',
            margin: '10px 0 0',
            padding: '10px',
            display: 'block',
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            opacity: 0,
            transition: 'all 0.5s ease-in-out',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform, opacity',

            isHidden: {
                opacity: 0
            },

            isVisible: {
                opacity: 1
            }
        },

        success: {
            borderTop: 0,
            backgroundColor: '#a1e82c',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        },

        error: {
            borderTop: 0,
            backgroundColor: '#fc727a',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        },

        warning: {
            borderTop: 0,
            backgroundColor: '#ffbc67',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        },

        info: {
            borderTop: 0,
            backgroundColor: '#63d8f1',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0
        }
    },

    Title: {
        DefaultStyle: {
            fontSize: '30px',
            margin: '0',
            padding: 0,
            fontWeight: 'bold',
            color: '#FFFFFF',
            display: 'block',
            left: '15px',
            position: 'absolute',
            top: '50%',
            marginTop: '-15px'
        }

    },

    MessageWrapper: {
        DefaultStyle: {
            marginLeft: '55px',
            marginRight: '30px',
            padding: '0 12px 0 0',
            color: '#FFFFFF',
            maxWidthwidth: '89%'
        }
    },

    Dismiss: {
        DefaultStyle: {
            fontFamily: 'inherit',
            fontSize: '21px',
            color: '#000',
            float: 'right',
            position: 'absolute',
            right: '10px',
            top: '50%',
            marginTop: '-13px',
            backgroundColor: '#FFFFFF',
            display: 'block',
            borderRadius: '50%',
            opacity: '.4',
            lineHeight: '11px',
            width: '25px',
            height: '25px',
            outline: '0 !important',
            textAlign: 'center',
            padding: '6px 3px 3px 3px',
            fontWeight: '300',
            marginLeft: '65px'
        },

        success: {
            // color: '#f0f5ea',
            // backgroundColor: '#a1e82c'
        },

        error: {
            // color: '#f4e9e9',
            // backgroundColor: '#fc727a'
        },

        warning: {
            // color: '#f9f6f0',
            // backgroundColor: '#ffbc67'
        },

        info: {
            // color: '#e8f0f4',
            // backgroundColor: '#63d8f1'
        }
    },

    Action: {
        DefaultStyle: {
            background: '#ffffff',
            borderRadius: '2px',
            padding: '6px 20px',
            fontWeight: 'bold',
            margin: '10px 0 0 0',
            border: 0
        },

        success: {
            backgroundColor: '#a1e82c',
            color: '#ffffff'
        },

        error: {
            backgroundColor: '#fc727a',
            color: '#ffffff'
        },

        warning: {
            backgroundColor: '#ffbc67',
            color: '#ffffff'
        },

        info: {
            backgroundColor: '#63d8f1',
            color: '#ffffff'
        }
    },

    ActionWrapper: {
        DefaultStyle: {
            margin: 0,
            padding: 0
        }
    }
}

//
// //
// // // For icons
// //
//
const iconsArray = require('./iconsArray.json');

//
// //
// // // For tables
// //
//

const thArray = ["Ingredient","Mon","Tues","Wed","Thu","Fri","Sat","Sun","Total"];
const tdArray = [
    ["Chickpea", 24 , 24 , 24 , 24 , 24 , 19 , 19, 158],
    ["Carrots" ,12 , 12  ,12  ,12 , 12,  10  ,10, 80]
];

//
// //
// // // // For dashboard's charts
// //
//
var dataSets = {
    catPred: require('./ingredientCategoriesNeededPred.json'),
    ingPred: require('./ingredientsNeededPred.json'),
    itemsSold: require('./menuItemsSoldPast.json')
}
var today = new Date();
today = today.getMonth()+1 +'/'+today.getDate()+'/'+today.getFullYear().toString().substr(-2);;

// labels
// TODO: generate these dynamically in "generate Data Set"
var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// generate data set pertaining to specified predictors
function generateDataSet(startDate, endDate, database, labels, predictor="") {
    var predictorNames, dateData, sampleDate;
    var db = dataSets[database];
    var d = new Date(startDate);
    endDate = new Date(endDate);
    var dataBody = {
        labels: labels,
        series: []
    };
    var legend = {
        names: []
    };

    // catch dates without correct format
    try {
        sampleDate = d.toISOString().split('T')[0];
        var sampleDate1 = endDate.toISOString().split('T')[0];
        if (!sampleDate || !sampleDate1) {
            throw "invalid date"
        }
    } catch(error) {
        console.error("invalid date");
        return;
    }

    // find legend items
    if (predictor) {
        dateData = db[sampleDate][predictor]
    } else {
        dateData = db[sampleDate]
    }
    predictorNames = Object.keys(dateData)
    legend.names = predictorNames;

    // initialize series containers
    for (var i = 0; i < predictorNames.length; i++) {
        dataBody["series"].push([]); // initialize containers for each category
    }

    // fill in series data
    if (predictor) {
        for (d = new Date(startDate); d <= endDate; d.setDate(d.getDate()+1)) {
            for (i = 0; i < predictorNames.length; i++) {
                dataBody["series"][i].push(db[d.toISOString().split('T')[0]][predictor][predictorNames[i]]) 
            }
        }
    } else {
        for (d = new Date(startDate); d <= endDate; d.setDate(d.getDate()+1)) {
            for (i = 0; i < predictorNames.length; i++) {
                dataBody["series"][i].push(db[d.toISOString().split('T')[0]][predictorNames[i]]) 
            }
        }
    }
    return [dataBody, legend];
};

// placeholders for user inputs
// var today_date = new Date();
// var startDate = new Date(today_date.setDate(today_date.getDate()));
// var endDate = new Date(today_date.setDate(today_date.getDate()+6));
// var testData = generateDataSet(startDate, endDate, 'catPred', daysOfWeek);
// var testData = generateDataSet(startDate, endDate, 'ingPred', daysOfWeek, 'Vegetables');
// console.log("testData:", testData);


// var vegetablesNeeded = {
//   labels: daysOfWeek,
//   series: [],
//   name: "vegetablesNeeded"
// };
// var vegetableNames = Object.keys(ingPred[d.toISOString().split('T')[0]]["Vegetables"])
// // console.log("vegetableNames:", vegetableNames)
// for (i = 0; i < vegetableNames.length; i++) {
//     vegetablesNeeded["series"].push([]) // initialize containers for each category
// }
// for (d = new Date(startDate); d <= endDate; d.setDate(d.getDate()+1)) {
//     for (i = 0; i < vegetableNames.length; i++) {
//         vegetablesNeeded["series"][i].push(ingPred[d.toISOString().split('T')[0]]["Vegetables"][vegetableNames[i]]) 
//     }
// }
// var vegetablesNeededLegend = {
//     names: vegetableNames
// };

var optionsSales = {
  low: 0,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false,
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  },
};
var responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

// Data for Bar Chart
var dataBar = {
  labels: monthsOfYear,
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
  ]
};
var optionsBar = {
    seriesBarDistance: 10,
    axisX: {
        showGrid: false
    },
    height: "245px"
};
var responsiveBar = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];
var legendBar = {
    names: ["Sales (in thousands of dollars)"],
    types: ["info","danger"]
};



export {
    style, // For notifications (App container and Notifications view)
    thArray, tdArray, // For tables (TableList view)
    iconsArray, // For icons (Icons view)
    today, // For stats card
    daysOfWeek, monthsOfYear, // For graph labels
    generateDataSet, // For generating specific data sets

    // dataSales, legendSales,
    optionsSales, responsiveSales, 
    // vegetablesNeeded,
    dataBar, optionsBar, responsiveBar, legendBar // For charts (Dashboard view)
};
