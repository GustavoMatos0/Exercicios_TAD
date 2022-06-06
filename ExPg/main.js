class Conjunto{

    insere(v,valor){  //a
        v[v.length] = valor
        return v
    }

    remove(v,valor){    //b
        for(var i = 0; i<v.length; i++){       
            if(valor == v[i]){
                delete(v[i])
            }
        }
        return v
    }

    uni_ins_dif(v,v1){    //c,d,e
        var uni = v1
        var ins =[]
        var dif = []
        v.forEach(function (item) {
            if(v1.indexOf(item) != -1){
                ins.push(item)
            }else{
                uni.push(item)
            }
        });
        v1.map((item) => {
            if(v.indexOf(item) == -1) {
                dif.push(item);
            }
        });
        console.log(`União: ${uni}`)
        console.log(`Insersão: ${ins}`)
        console.log(`Diferença: ${dif}`)
    }
    
    pertence(v,valor){  //f
        var teste
        for(var i = 0; i<v.length; i++){
          if(v[i] == valor){
              var teste = true
              break;
          }else var teste = false
        }
        return teste
    }

    maior(v){ //h
        var maior = v[0]
        for(var i = 0; i<v.length; i++){
            if(v[i]>maior){
                maior = v[i]
            }
        }
        return maior
    }


    menor(v){  //g
        var menor = v[0]
        for(var i = 0; i<v.length; i++){
            if(v[i]<menor){
                menor = v[i]
            }
        }
        return menor
    }

    testeigual(v,v1){  //i
        if(JSON.stringify(v)==JSON.stringify(v1))
        return true
        else return false
    }

    tamanho(v){  //j
        var l = v.length
        return l
    }

    estavazio(v){  //k
        var l = v.length
        if(l == 0){
           return true
        }else return false
    }
}


