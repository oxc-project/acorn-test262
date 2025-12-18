__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "unaliasedModule1",
        "raw": "\"unaliasedModule1\"",
        "start": 204,
        "end": 222
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 197,
      "end": 223
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "aliasedModule1",
          "raw": "\"aliasedModule1\"",
          "start": 245,
          "end": 261
        },
        "start": 237,
        "end": 262
      },
      "importKind": "value",
      "start": 225,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
      },
      "directive": null,
      "start": 264,
      "end": 267
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "importKind": "value",
          "start": 277,
          "end": 279
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 283
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 283
          },
          "importKind": "value",
          "start": 281,
          "end": 283
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "importKind": "value",
          "start": 285,
          "end": 287
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aliasedModule2",
        "raw": "\"aliasedModule2\"",
        "start": 294,
        "end": 310
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 269,
      "end": 311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "p1",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 314
      },
      "directive": null,
      "start": 312,
      "end": 315
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "start": 324,
          "end": 325
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aliasedModule3",
        "raw": "\"aliasedModule3\"",
        "start": 331,
        "end": 347
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 317,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 350
      },
      "directive": null,
      "start": 349,
      "end": 351
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 367
          },
          "start": 360,
          "end": 367
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aliasedModule4",
        "raw": "\"aliasedModule4\"",
        "start": 373,
        "end": 389
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 353,
      "end": 390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 393
      },
      "directive": null,
      "start": 391,
      "end": 394
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "unaliasedModule2",
        "raw": "\"unaliasedModule2\"",
        "start": 403,
        "end": 421
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 396,
      "end": 422
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 197,
  "end": 422
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "String",
    "value": "\"unaliasedModule1\"",
    "start": 204,
    "end": 222,
    "range": [
      204,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 225,
    "end": 231,
    "range": [
      225,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 237,
    "end": 244,
    "range": [
      237,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "String",
    "value": "\"aliasedModule1\"",
    "start": 245,
    "end": 261,
    "range": [
      245,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 264,
    "end": 266,
    "range": [
      264,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 269,
    "end": 275,
    "range": [
      269,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 281,
    "end": 283,
    "range": [
      281,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 285,
    "end": 287,
    "range": [
      285,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 289,
    "end": 293,
    "range": [
      289,
      293
    ]
  },
  {
    "type": "String",
    "value": "\"aliasedModule2\"",
    "start": 294,
    "end": 310,
    "range": [
      294,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 312,
    "end": 314,
    "range": [
      312,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 317,
    "end": 323,
    "range": [
      317,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 326,
    "end": 330,
    "range": [
      326,
      330
    ]
  },
  {
    "type": "String",
    "value": "\"aliasedModule3\"",
    "start": 331,
    "end": 347,
    "range": [
      331,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 353,
    "end": 359,
    "range": [
      353,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 362,
    "end": 364,
    "range": [
      362,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 365,
    "end": 367,
    "range": [
      365,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 368,
    "end": 372,
    "range": [
      368,
      372
    ]
  },
  {
    "type": "String",
    "value": "\"aliasedModule4\"",
    "start": 373,
    "end": 389,
    "range": [
      373,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 391,
    "end": 393,
    "range": [
      391,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 396,
    "end": 402,
    "range": [
      396,
      402
    ]
  },
  {
    "type": "String",
    "value": "\"unaliasedModule2\"",
    "start": 403,
    "end": 421,
    "range": [
      403,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  }
]
```
