import json
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from thrift.server import TServer

from test import userService
import numpy as np

class Test:
    def test1(self, typ):
        x = np.arange(512)      
        print(typ)
        if typ:
            x = x*x + 5*x + 6 * x*x*x
            return x.tolist()
        else:
            x = np.sin(0.05*x)
            return x.tolist()


if __name__ == "__main__":
    port = 8000
    ip = "127.0.0.1"
    # 创建服务端
    handler = Test()  # 自定义类
    processor = userService.Processor(handler)  # userService为python接口文件自动生成
    # 监听端口
    transport = TSocket.TServerSocket(ip, port)  # ip与port位置不可交换
    # 选择传输层
    tfactory = TTransport.TBufferedTransportFactory()
    # 选择传输协议
    pfactory = TBinaryProtocol.TBinaryProtocolFactory()
    # 创建服务端
    server = TServer.TThreadedServer(processor, transport, tfactory, pfactory)
    print("start server in python")
    server.serve()
    print("Done")
