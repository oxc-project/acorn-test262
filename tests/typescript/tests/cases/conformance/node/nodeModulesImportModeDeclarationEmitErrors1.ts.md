__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 33,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 17,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 17,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 48
          },
          "importKind": "value",
          "start": 32,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 56,
        "end": 61
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 71,
            "end": 88
          },
          "value": {
            "type": "Literal",
            "value": "foobar",
            "raw": "\"foobar\"",
            "start": 90,
            "end": 98
          },
          "start": 71,
          "end": 98
        }
      ],
      "importKind": "type",
      "start": 18,
      "end": 101
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 143
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 143
          },
          "importKind": "value",
          "start": 128,
          "end": 143
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 151,
        "end": 156
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 166,
            "end": 183
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 185,
            "end": 193
          },
          "start": 166,
          "end": 193
        }
      ],
      "importKind": "value",
      "start": 119,
      "end": 196
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 255
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 262
          },
          "importKind": "type",
          "start": 234,
          "end": 262
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 280
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req2",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 288
          },
          "importKind": "value",
          "start": 264,
          "end": 288
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 295,
        "end": 300
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 310,
            "end": 327
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 329,
            "end": 338
          },
          "start": 310,
          "end": 338
        }
      ],
      "importKind": "value",
      "start": 226,
      "end": 341
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 374
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 399
            },
            "typeArguments": null,
            "start": 383,
            "end": 399
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 416
            },
            "typeArguments": null,
            "start": 401,
            "end": 416
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 417,
          "end": 419
        },
        "declare": false,
        "start": 350,
        "end": 419
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 343,
      "end": 419
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 18,
  "end": 422
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 32,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 71,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"foobar\"",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 128,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 146,
    "end": 150
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 166,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 239,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 256,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 264,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 281,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Req2",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 290,
    "end": 294
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 295,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 310,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 329,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 343,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 350,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 360,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 375,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 383,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 401,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  }
]
```
