import React from "react";
import sweetalert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swal = withReactContent(sweetalert);

const erro = (TipoErro) =>{
    swal.fire({
        text: "Erro ao executar operação, tente novamente."+ TipoErro,
        icon: "error",
    });
}

export {erro};