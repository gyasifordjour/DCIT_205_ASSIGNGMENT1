import { createBoard } from '@wixc3/react-board';
import { SideBar } from '../../../components/side-bar/side-bar';


export default createBoard({
    name: 'SideBar',
    Board: () => (
        <SideBar />

    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 997,
        canvasHeight: 696
    }
});
