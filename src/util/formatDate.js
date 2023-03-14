export function formatDate(data){
    let dataSplit = data.split("/");
    let dataFormatada = dataSplit[2]+"/"+dataSplit[1]+"/"+dataSplit[0]
    return dataFormatada
}