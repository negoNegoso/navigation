import 'styled-components/native'
import theme from '../theme';

declare module 'Styled-components'{
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType{
        
    }

}