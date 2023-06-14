import { FlatList } from 'react-native';
import { RenderDados } from './RenderDados';


export const RenderLista = (props) => {
    console.log(props.resultado)
    return  <FlatList
    data={props.resultado}
    renderItem={({item, index}) => <RenderDados
                                        universidade={item.name}
                                        pais={item.country}
                                        indice={index}/>}
    keyExtractor={idx => Math.random()}/>
}
