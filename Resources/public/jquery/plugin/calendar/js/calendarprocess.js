

$(function() {
    
    function resetForm($form) {
        $form.find('input:text, input:password, input:file, select, textarea').val('');
        $form.find('input:radio, input:checkbox')
        .removeAttr('checked').removeAttr('selected');
    }
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: true,
        events: $("a#link").attr("href"),
        timeFormat: 'H(:mm)',
        agenda: 'h:mm{ - h:mm}',
        allDayText: 'all-day',
         allDaySlot: true,
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

                    if(xhr.status  == 200 ){           
                        alert('event update');             
                    }
                    else if(xhr.status == 500){//internal server error
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
           
            $('#deleteBtn').hide();
            if (allDay) {
                $('#myform').find('input:text, input:password, input:file, select, textarea').val('');
                $('#myform').find('input:radio, input:checkbox')
                .removeAttr('checked').removeAttr('selected');
                var  currentDate = new Date();
                pickedDate = new Date(date); 
                $('#divTitle').html('Sart date '+pickedDate.getDate()+'/'+(pickedDate.getMonth()+1)+'/'+pickedDate.getFullYear());
                if(pickedDate > currentDate )
                {
                    $('#form_end_day').val(pickedDate.getDate());
                    $('#form_end_month').val(pickedDate.getMonth()+1);
                    $('#form_end_year').val(pickedDate.getFullYear());         
                }
                else
                {
                    $('#form_end_day').val(currentDate.getDate());
                    $('#form_end_month').val(currentDate.getMonth()+1);
                    $('#form_end_year').val(currentDate.getFullYear());     
                }
               
                $("#save").click(function() {
                    if($('#form_title').val() !='')
                    {
                        $("#save").attr("disabled", "disabled");
                        data = new FormData($('#myForm')[0]);  
                        day = new Date(date);
                        data.append("date",day);
                        var $this=$(this); 
                        var url=$("#myForm").attr("action");
                        $.ajax({
                            'url':url,
                            'type':'POST',
                            'data' :data ,
                            'processData':false,
                            'contentType':false,
                            'success':function(data,textStatus, xhr){
                                //the response is in the data variable

                                if(xhr.status == 200 ){           
                                    $('#myModal').modal('hide') ;
                                    $('#save').removeAttr("disabled"); 
                                    $('#calendar').fullCalendar('renderEvent',
                                    {
                                        title: data.title,
                                        start: data.start,
                                        end: data.end,
                                        allDay: allDay
                                    },
                                    true // make the event "stick"
                                    );
                                    $('#calendar').fullCalendar('unselect');
                                    
                                }
                               
                            },
                            'error': function (xhr, textStatus) {
                                if(xhr.status == 400){//bad request
                                    alert(" Start date is bigger thand end date");
                                    $('#save').removeAttr("disabled"); 
                                    $('#output').html(textStatus);
                                }
                                else{
                                    //if we got to this point we know that the controller
                                    //did not return a json_encoded array. We can assume that           
                                    //an unexpected PHP error occured
                                    alert("An unexpeded error occured.");
                                    $('#save').removeAttr("disabled"); 
                                    //if you want to print the error:
                                    $('#output').html(data);
                                }
                            }
                        });
                    }else{
                        alert('title can not be empty');
                    }

                });

                $( "#myModal" ).modal(); 
            }
               
        },
        eventClick: function(calEvent, jsEvent, view) {
            var  url = null;
            $('#deleteBtn').show();
            $('#myModalLabel').val('Modifier une entrée');
            date = new Date(calEvent.end);
            $('#form_title').attr('value', calEvent.title);
            $('#form_end_day').val(date.getDay());
            $('#form_end_month').val(date.getMonth());
            $('#form_end_year').val(date.getFullYear());
            
            $.ajaxSetup({
                'type': 'POST',
                'data':{
                    'id':  calEvent.id 
                },
                'error':function(data,textStatus, xhr){
                    if(xhr.status == 500){//bad request
                        alert("An error occured"+textStatus);
                    }
                }
            });
            
            $("#save").click(function() {
                $("#save").attr("disabled", "disabled");
                url = $('a#update').attr('href');
                $.ajax({
                    'url':url,
                    'type':'POST',
                    'data':{
                        'id':  calEvent.id 
                    },
                    'success':function(data){
                      
                        $('#save').removeAttr("disabled"); 
                        $('#calendar').fullCalendar('renderEvent',
                        {
                            title: data.title,
                            start: data.start,
                            end: data.end,
                            allDay: allDay
                        },
                        true // make the event "stick"
                        );
                        $('#calendar').fullCalendar('unselect');
                    }
                });
            });
            $("#deleteBtn").click(function() {
                $("#deleteBtn").attr("disabled", "disabled");
                url = $('a#delete').attr('href');
                $.ajax({
                    'url':url,
                    'data':{
                        'id':  calEvent.id 
                    },
                    'success':function(data,textStatus, xhr){
                        if(xhr.status == 200)
                        {
                            $('#deleteBtn').removeAttr("disabled"); 
                            $('#calendar').fullCalendar( 'removeEvents',calEvent.id );
                            $('#myModal').modal('hide') ;
                        }
                       
                      
                    }                 
                });
            });
            $( "#myModal" ).modal();
        }

    });
});