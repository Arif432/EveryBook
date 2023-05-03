import { View, Text,Keyboard } from 'react-native'
import { Input } from 'react-native-elements'
import { useRef } from 'react'

const InputDisable = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current.blur();
    };
  
    return (
      <View className="mt-10"  keyboardShouldPersistTaps="handled">
        <Input ref={inputRef} onFocus={handleFocus} keyboardShouldPersistTaps={true}/>
      </View>
    );
}

export default InputDisable