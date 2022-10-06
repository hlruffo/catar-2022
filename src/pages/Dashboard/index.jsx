import { Icon, Card, DateSelect } from "~/components"

export const Dashboard = () => (
  // O Fragment para quando temos vários elementos ele engloba tudo, vem do próprio React com um import { Fragment } from 'react', mas ele também entende apenas colocando <> e fechando no final com </>
  <>
    <header className="bg-red-500 text-white">
      <div className="container max-w-3xl flex justify-between p-4">
        <img src="./imgs/logo-black.svg" className="w-2832 md:w-40" />
        <a href="/profile">
          <Icon name="profile" className="w-10" />
        </a>
      </div>
    </header>

    <main className="space-y-6">
      <section id="header" className=" bg-red-500 text-white">
        <div className="container max-w-3xl space-y-2 p-4">
          <span>Olá Bruno</span>
          <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
        </div>
      </section>

      <section id="content" className="container max-w-3xl p-4 space-y-4">

        <DateSelect />


        <div className="space-y-4">
          <Card
            timeA={{ slug: 'sui' }}
            timeB={{ slug: 'cam' }}
            match={{ time: '07:00' }}
          />


          <Card
            timeA={{ slug: 'uru' }}
            timeB={{ slug: 'cor' }}
            match={{ time: '07:00' }}
          />


          <Card
            timeA={{ slug: 'por' }}
            timeB={{ slug: 'gan' }}
            match={{ time: '07:00' }}
          />
        </div>

      </section>
    </main>

  </>
)