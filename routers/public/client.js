//-------------------Client side Code-------------------\\
    //get data from server
    $.ajax({
        method: "GET",
        url: "/-u-r-l"
    }).then((response) => {
        console.log(':RESPONSE:', response);
    });
    //send data to server
    $.ajax({
        method: 'POST',
        url: '/u-r-l',
        data: {package: null},
    }).then((response) => {
        console.log(':POST:', response);
    })
    .catch((err) => {
        console.error('POST failed', err); 
        console.log('POST failed', err)
    });
    //delete from server
    $.ajax({
        type: 'DELETE',
        url: `/u-r-l/${taco}`
    }).then((res) => {
        console.log('DELETE:', res);
        getSongs();
    }).catch((err) => {
        console.log('FAILED:', err);
    });
    //update server
    $.ajax({
        method: 'PUT',
        url: `/u-r-l/${tacoOne}`,
        data: {
            taco: otherTaco
        }
    }).then((res) => {
        console.log('UPDATE:', res);
        getSongs();
    }).catch((err) => {
        console.log('FAILED:', err);
    });
//-----------------------------------------------------\\