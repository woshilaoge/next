import ConfigProvider from '../config-provider';
import MessageComponent from './message';
import toast, { withContext } from './toast';
import message from './toast2';

import type { MessageProps, MessageQuickProps, Message } from './types';

export type { MessageProps, MessageQuickProps, Message };

MessageComponent.show = toast.show;
MessageComponent.success = toast.success;
MessageComponent.warning = toast.warning;
MessageComponent.error = toast.error;
MessageComponent.notice = toast.notice;
MessageComponent.help = toast.help;
MessageComponent.loading = toast.loading;
MessageComponent.hide = toast.hide;
MessageComponent.withContext = withContext;

const MessageProvider = ConfigProvider.config(MessageComponent, {
    componentName: 'Message',
});

export default MessageProvider;

interface IMessageProvider {
    config: unknown;
}

let openV2 = false;
// 调用 config 开启 v2 版本的 message
(MessageProvider as unknown as IMessageProvider).config = (config: unknown) => {
    message.config(config);

    if (!openV2) {
        MessageProvider.show = message.open; // 兼容 show 用法, 后续计划都改成 open（ Notification 已经用了 open）
        MessageProvider.open = message.open;
        MessageProvider.hide = message.close; // 兼容 hide 用法, 后续计划都改成 open（ Notification 已经用了 close)
        MessageProvider.close = message.close;
        MessageProvider.destory = message.destory;
        MessageProvider.success = message.success;
        MessageProvider.warning = message.warning;
        MessageProvider.error = message.error;
        MessageProvider.notice = message.notice;
        MessageProvider.help = message.help;
        MessageProvider.loading = message.loading;

        openV2 = true;
    }
};
