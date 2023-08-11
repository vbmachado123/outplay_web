import { Dialog, DialogTitle, IconButton, DialogContent, Stack, Typography } from "@mui/material";
import { WinnerProps } from "../../../services/interfaces/RegisterService";
import { Close } from '@mui/icons-material'

interface RulesDialogProps {
    open: boolean
    onClose: () => unknown,
    data: WinnerProps | null,
}


export const RulesDialog: React.FC<RulesDialogProps> = ({
    open,
    onClose,
    data,

}) => {

    return (
        <Dialog fullWidth maxWidth="md" onClose={onClose} open={open}>
            <DialogTitle
                color="GrayText"
                display="flex"
                justifyContent="space-between"
                alignItems="center">

                Boa Sorte!
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2}>
                    <Stack alignItems={"center"}>
                        <Typography variant="subtitle1">Seu Número do Sorteio: </Typography>
                        <Typography variant="h4"><strong>{data?.numero}</strong></Typography>

                    </Stack>

                    <Typography variant="body1">
                        Guarde o seu número de participação! o sorteio será realizado em <strong>20/08/23 às 20:00</strong>
                    </Typography>

                    <hr/>

                    <Typography variant="body1">Regras de participação:</Typography>

                    <Typography variant="body2">
                        <strong>1. Seguir o nosso perfil no Instagram:</strong> Caso o ganhador não esteja seguindo, será desclassificado.
                    </Typography>

                    <Typography variant="body2">
                        <strong>2. Curtir a publicação do sorteio:</strong> Apenas curtidas válidas até o horário do sorteio serão consideradas.
                    </Typography>

                    <Typography variant="body2">
                        <strong>3. Compartilhar a publicação do sorteio:</strong> O compartilhamento deve ser feito até o horário do sorteio para ser válido.
                    </Typography>

                    <Typography variant="body2">
                        <strong>4. Participação gratuita e limitada a uma entrada por pessoa:</strong> Perfis duplicados ou criados com o intuito de aumentar as chances serão desclassificados.
                    </Typography>

                    <Typography variant="body2">
                        <strong>5. O sorteio será realizado em data e horário especificados na publicação oficial:</strong> O ganhador será selecionado aleatoriamente entre os participantes elegíveis.
                    </Typography>

                    <Typography variant="body2">
                        <strong>6. O ganhador será anunciado publicamente e contatado por mensagem privada:</strong> Ele terá um prazo determinado para responder com seus dados para entrega do prêmio.
                    </Typography>

                    <Typography variant="body2">
                        <strong>7. Caso o ganhador não cumpra todas as regras ou não responda dentro do prazo, será desclassificado:</strong> Nesse caso, um novo sorteio será realizado para escolher um novo ganhador.
                    </Typography>
                </Stack>

            </DialogContent>
        </Dialog>
    )
}