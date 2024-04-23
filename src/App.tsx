import { IconSetting } from './components/icons'
import Alert from './components/ui/alert'
import { Button, ButtonIcon } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select } from './components/ui/select'


function App() {
  return (
    <div className="h-screen min-w-[400px] bg-zinc-950 text-white flex flex-col">
      <header className="text-center font-medium text-base p-2 border-b border-zinc-700 bg-zinc-900 flex items-center justify-between">
        <h1>Tiktok Video Uploader</h1>
        <div className='flex gap-2 items-center'>
          <ButtonIcon className='text-xs px-2'>Get Cookie</ButtonIcon>
          <ButtonIcon><IconSetting /></ButtonIcon>
        </div>
      </header>
      <section className="p-2 flex-1 flex flex-col gap-2">
        <Alert variant="danger"><b>Site not supported</b>. You can enter link manually.</Alert>
        <Input placeholder="Enter Tiktok URL here" />
      </section>
      <div className="p-2 flex gap-2 items-center border-t border-zinc-700">
        <Select />
        <Button className="w-full bg-zinc-900 border-zinc-700">Download</Button>
        <Button className="w-full">Upload</Button>
      </div>
    </div>
  )
}

export default App
