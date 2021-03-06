<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plataforma extends Model
{
    public $timestamps = false;
    public $incrementing = true;
    protected $fillable = [
        'descricao',
        'is_ativo'
    ];
    protected $primaryKey = "plataforma_id";
    protected $table = 'notificacao.plataforma';

    public function mensagens()
    {
        return $this->belongsToMany(
            \App\Models\Mensagem::class,
            'notificacao.mensagem_has_plataforma',
            'plataforma_id',
            'mensagem_id'
        )->as('mensagem_has_plataforma');
    }
}
