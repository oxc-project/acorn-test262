__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 36,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 622,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 82,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 30,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 30,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 30,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 43,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 51,
          "end": 79,
          "key": {
            "type": "Literal",
            "start": 51,
            "end": 68,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 70,
            "end": 79,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 83,
      "end": 163,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 97,
          "end": 112,
          "imported": {
            "type": "Identifier",
            "start": 97,
            "end": 112,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 97,
            "end": 112,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 120,
        "end": 125,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 133,
          "end": 160,
          "key": {
            "type": "Literal",
            "start": 133,
            "end": 150,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 152,
            "end": 160,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 241,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 172,
        "end": 241,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 196,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 205,
            "end": 221,
            "expression": {
              "type": "Identifier",
              "start": 205,
              "end": 221,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 223,
            "end": 238,
            "expression": {
              "type": "Identifier",
              "start": 223,
              "end": 238,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 239,
          "end": 241,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 243,
      "end": 330,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 251,
          "end": 279,
          "imported": {
            "type": "Identifier",
            "start": 256,
            "end": 272,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 276,
            "end": 279,
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 286,
        "end": 291,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 299,
          "end": 327,
          "key": {
            "type": "Literal",
            "start": 299,
            "end": 316,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 318,
            "end": 327,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 331,
      "end": 416,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 339,
          "end": 366,
          "imported": {
            "type": "Identifier",
            "start": 344,
            "end": 359,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 363,
            "end": 366,
            "decorators": [],
            "name": "Imp",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 373,
        "end": 378,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 386,
          "end": 413,
          "key": {
            "type": "Literal",
            "start": 386,
            "end": 403,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 405,
            "end": 413,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 417,
      "end": 457,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 424,
        "end": 457,
        "id": {
          "type": "Identifier",
          "start": 434,
          "end": 437,
          "decorators": [],
          "name": "Loc",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 446,
            "end": 449,
            "expression": {
              "type": "Identifier",
              "start": 446,
              "end": 449,
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 451,
            "end": 454,
            "expression": {
              "type": "Identifier",
              "start": 451,
              "end": 454,
              "decorators": [],
              "name": "Imp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 455,
          "end": 457,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 459,
      "end": 541,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 473,
          "end": 489,
          "local": {
            "type": "Identifier",
            "start": 473,
            "end": 489,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 473,
            "end": 489,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 497,
        "end": 502,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 510,
          "end": 538,
          "key": {
            "type": "Literal",
            "start": 510,
            "end": 527,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 529,
            "end": 538,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 542,
      "end": 622,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 556,
          "end": 571,
          "local": {
            "type": "Identifier",
            "start": 556,
            "end": 571,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 556,
            "end": 571,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 579,
        "end": 584,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 592,
          "end": 619,
          "key": {
            "type": "Literal",
            "start": 592,
            "end": 609,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 611,
            "end": 619,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
