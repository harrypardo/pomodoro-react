import { Button, Card } from '@material-ui/core';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
        width: 500px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;  
`;

export const StyledButton = styled(Button)`
        margin-right: 10px;
`;

export const StyledButtonContainer = styled.div`
        display: flex;
        justify-content: center;
`;

