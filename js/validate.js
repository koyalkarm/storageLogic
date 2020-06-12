   var Applicant = {
        fname: "",
        lname: "",
        age: 0,
        phonenum: "",
        email: ""
    };
    var storageLogic = {
        saveItem: function () {
            var lscount = localStorage.length;
            var inputs = document.getElementsByClassName("form-control");
            Applicant.fname = inputs[0].value;
            Applicant.lname = inputs[1].value;
            Applicant.age = inputs[2].value;
            Applicant.phonenum = inputs[3].value;
            Applicant.email = inputs[4].value;
            if(Applicant.fname != '' && Applicant.lname !='' && Applicant.age !='' && Applicant.phonenum !='' && Applicant.email !=''){
                localStorage.setItem("Applicant_" + lscount, JSON.stringify(Applicant));
                location.reload();
            }
        },
        deleteItem: function(index){
            var key = localStorage.key(index);
            localStorage.removeItem(key);
            storageLogic.loadData();
        },
        loadData: function () {
            var datacount = localStorage.length;
            if (datacount > 0) {
                var render = "<table class='table'>";
                render += "<tr><th>First Name</th><th>Last Name</th><th>Age</th>" +
                    "<th>Phone Number</th><th>Email</th><th></th>";
                for (i = 0; i < datacount; i++) {
                    var key = localStorage.key(i);
                    var applicant = localStorage.getItem(key);
                    var data = JSON.parse(applicant);
                    render += "<tr><td>" + data.fname + "</td><td>" + data.lname + "</td>";
                    render += "<td>" + data.age + "</td>";
                    render += "<td>" + data.phonenum + "</td>";
                    render += "<td>" + data.email + "</td>";
                    render += "<td><button class='btn btn-danger del-btn' onClick='storageLogic.deleteItem(" + i + ")' >Delete</button></td>";
                }
                render += "</table>";
                var newTable = document.getElementById("dvContainer");
                newTable.innerHTML = render;
            }
        }
    };

    $(function(){
        storageLogic.loadData();
    })
    $('#btnsubmit').click(storageLogic.saveItem);

