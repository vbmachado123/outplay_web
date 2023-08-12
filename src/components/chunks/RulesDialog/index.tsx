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
                        Guarde o seu número de participação! o sorteio será realizado em <strong>20/08/2023 às 16:30h</strong>
                    </Typography>

                    <hr />
                    <Typography variant="body2">
                        <strong>1. Seguir o nosso perfil no Instagram:</strong> Caso o ganhador não esteja seguindo, será desclassificado.
                    </Typography>
                    <Typography variant="body2">
                        <strong>2. Curtir a publicação do Sorteio:</strong> É necessário que o participante curta a publicação específica feita para o sorteio.
                    </Typography>
                    
                    <Typography variant="body2">
                        <strong>3. Compartilhar no Instagram Story:</strong> Compartilhe a publicação do sorteio no seu Instagram Story e marque
                        <a href="https://www.instagram.com/outplaybikestore/"> @outplaybikestore</a>. Lembre-se de que o Story deve ser mantido por 24 horas para ser considerado válido.
                    </Typography>
                    <Typography variant="body2">
                        <strong>4. Participações para contas ativas:</strong> Perfis duplicados ou criados com o intuito de aumentar as chances (fakes) serão desclassificados.
                    </Typography>
                    <Typography variant="body2">
                        <strong>5. Data, horário e local:</strong> O ganhador será selecionado aleatoriamente pelo sistema de cadastros do sorteio. No dia 20/08/2023 às 16:30h. O sorteio será divulgado online através do Instagram
                        <a href="https://www.instagram.com/outplaybikestore/" >@outplaybikestore</a>.
                    </Typography>
                    <Typography variant="body2">
                        <strong>6. O ganhador será anunciado publicamente e contatado por mensagem:</strong> Será transmitido o nome completo do ganhador na live on-line e o mesmo será contatado através de mensagens pelo WhatsApp.
                    </Typography>
                    <Typography variant="body2">
                        <strong>7. Caso descumprimento das regras o ganhador será desclassificado:</strong> O não cumprimento das regras, desclassificará o participante sorteado. Um novo sorteio acontecerá no mesmo dia e dentro das mesmas normas. Será anunciado em uma live on-line no Instagram
                        <a href="https://www.instagram.com/outplaybikestore/"> @outplaybikestore</a> o novo horário definido.
                    </Typography>

                    <hr/>
                    <Typography variant="h6"><strong>Importante</strong></Typography>
                    <Typography variant="body2">
                        <strong>Os dados do cadastro, não serão divulgados:</strong> Os dados utilizados no cadastro não serão divulgados e não serão compartilhados. 
                    </Typography>
                    <Typography variant="body2">
                        <strong>Uso de Imagem:</strong> Ao participar do sorteio estará automaticamente autorizando o uso de imagem. Será divulgado no Instagram <a href="https://www.instagram.com/outplaybikestore/">@outplaybikestore</a>  a foto do ganhador com o prêmio.
                    </Typography>
                    {/* <Typography variant="body1">Regras de participação:</Typography>

                    <Typography variant="body2">
                        <strong>1. Seguir o nosso perfil no Instagram:</strong> Caso o ganhador não esteja seguindo, será desclassificado.
                    </Typography>

                    <Typography variant="body2">
                        <strong>2. Curtir a publicação do sorteio:</strong>  É necessário que o participante curta a publicação específica feita para o sorteio. 
                    </Typography>

                    <Typography variant="body2">
                        <strong>3. Compartilhar a publicação do sorteio:</strong> Deverá compartilhar no Story e marcar o @outplaybikestore.
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
                    </Typography> */}
                </Stack>

            </DialogContent>
        </Dialog>
    )
}