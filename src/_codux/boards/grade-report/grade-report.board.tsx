import { createBoard } from '@wixc3/react-board';
import { GradeReport } from '../../../components/grade-report/grade-report';

export default createBoard({
    name: 'GradeReport',
    Board: () => <GradeReport />,
    isSnippet: true,
});
