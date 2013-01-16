

$(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: true,
        events: $("a#link").attr("href"),
        eventDrop: function(event,dayDelta,minuteDelta,allDay,revertFunc) {
                    
            $.ajax({
                'url':$("a#move").attr("href"),
                'type':'POST',
                'data' :{
                    'id':event.id,
                    'dayDelta':dayDelta,
                    'minuteDelta':minuteDelta
                } ,
                'success':function(data, textStatus, xhr){
                    //the response is in the data variable

                    if(data.responseCode==200 ){           
                        $this.dialog('close'); 
                        
                    }
                    else if(data.responseCode==400){//bad request
                        alert("An error occured"+data.greeting);
                        $('#output').html(data);
                    }
                    else{
                        //if we got to this point we know that the controller
                        //did not return a json_encoded array. We can assume that           
                        //an unexpected PHP error occured
                        alert("An unexpeded error occured.");

                        //if you want to print the error:
                        $('#output').html(data);
                    }
                }


            });
            
            if (!confirm("Are you sure about this change?")) {
                revertFunc();
            }

        },
        dayClick: function (date, allDay, jsEvent, view) {
            if (allDay) {
                $("#click").click(function() {
                    $("#click").attr("disabled", "disabled");
                    data = new FormData($('#myForm')[0]);                                       
                    day = new Date(date);
                    data.append("date",date);
                    var $this=$(this); 
                    var url=$("#myForm").attr("action");
                    $.ajax({
                        'url':url,
                        'type':'POST',
                        'data' :data ,
                        'processData':false,
                        'contentType':false,
                        'success':function(data){
                            //the response is in the data variable

                            if(data.responseCode==200 ){           
                                $('#myModal').modal('hide') ;
                                $('#click').removeAttr("disabled"); 
                                calendar.fullCalendar('renderEvent',
                                {
                                    title: data.title,
                                    start: data.start,
                                    end: data.end,
                                    allDay: allDay
                                },
                                true // make the event "stick"
                                );
                                calendar.fullCalendar('unselect');
                                
                            }
                            else if(data.responseCode==400){//bad request
                                alert("An error occured"+data.greeting);
                                 $('#click').removeAttr("disabled"); 
                                $('#output').html(data);
                            }
                            else{
                                //if we got to this point we know that the controller
                                //did not return a json_encoded array. We can assume that           
                                //an unexpected PHP error occured
                                alert("An unexpeded error occured.");
                                 $('#click').removeAttr("disabled"); 
                                //if you want to print the error:
                                $('#output').html(data);
                            }
                        }
    
                    });
                });
                $( "#myModal" ).modal(); 
            }
               
        }
//        selectable: true,
//        selectHelper: true,
//        select: function(start, end, allDay) {
//            var title = prompt('Event Title:');
//            if (title) {
//                calendar.fullCalendar('renderEvent',
//                {
//                    title: title,
//                    start: start,
//                    end: end,
//                    allDay: allDay
//                },
//                true // make the event "stick"
//                );
//            }
//            calendar.fullCalendar('unselect');
//        }

    });
});