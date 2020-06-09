import {
    browerEnv
} from '@/utils/tool/wxTool';
export default {
    data() {
        const isInWeChat = browerEnv() === '1';
        return {
            isInWeChat,
        };
    },
    methods: {
        
    },
    created() {
        if (this.isInWeChat) {
           
        }
    }
}
