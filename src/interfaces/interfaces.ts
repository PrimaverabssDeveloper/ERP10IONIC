export interface ILogin {
    username: string;
    password: string;
    company: string;
}

export interface ICriaArtigos {
    Artigo: string;
    Descricao: string;
    Observacoes: string;
    CodBarras: string;
    UnidadeBase: string;
    IVA: string;
    Peso: number;
    Volume: number;
}

export interface IEditaArtigos {
    Descricao: string;
    CodBarras: string;
    UnidadeBase: string;
    Observacoes: string;
    IVA: number;
    Peso: number;
    Volume: number;
}

export interface ICriaClientes {
    Cliente: string;
    Nome: string;
    Descricao: string;
    Morada: string;
    Localidade: string;
    CodigoPostal: string;
    LocalidadeCodigoPostal: string;
    Telefone: string;
    NumContribuinte: string;
    Pais: string;
    Moeda: string;
}

export interface IEditaClientes {
    Nome: string;
    Descricao: string;
    Morada: string;
    Localidade: string;
    CodigoPostal: string;
    LocalidadeCodigoPostal: string;
    Telefone: string;
}

export interface IDocumentoVenda {
    Tipodoc: string;
    Serie: string;
    DataDoc: Date;
    DataVenc: Date;
    Entidade: string;
    TipoEntidade: string;
    Linhas: ILinha[];
}
export interface IDocumentoVendaFields {
    NomeCliente: string;
    NumContribuinte: string;
    Artigo: string;
    Quantidade: number;
    DescricaoArtigo: string;
    ArmazemArtigo: string;
    DescricaoDoc: string
}


export interface IDocumentoInterno {
    Tipodoc: string;
    Serie: string;
    DataDoc: Date;
    DataVenc: Date;
    Entidade: string;
    TipoEntidade: string;
    Linhas: ILinha[];
}
export interface IDocumentoInternoFields {
    NomeCliente: string;
    NumContribuinte: string;
    Artigo: string;
    Quantidade: number;
    DescricaoArtigo: string;
    ArmazemArtigo: string;
    DescricaoDoc: string
}

export interface ILinha {
    Artigo: string;
    Quantidade: number;
}