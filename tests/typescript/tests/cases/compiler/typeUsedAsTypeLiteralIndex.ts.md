__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 402,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 24,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 9,
            "end": 15
          },
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 26,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 35,
        "end": 89,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 53,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 111,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 99,
            "decorators": [],
            "name": "K1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 110,
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 108,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 122,
        "end": 143,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 128,
            "end": 141,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 131,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 134,
                "end": 140
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 145,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 152,
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 155,
        "end": 164,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 155,
            "end": 158,
            "literal": {
              "type": "Literal",
              "start": 155,
              "end": 158,
              "value": "x",
              "raw": "\"x\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 161,
            "end": 164,
            "literal": {
              "type": "Literal",
              "start": 161,
              "end": 164,
              "value": "y",
              "raw": "\"y\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 166,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 173,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 176,
        "end": 232,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 182,
            "end": 195,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 188,
                "end": 194
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 234,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 241,
        "decorators": [],
        "name": "K3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 244,
        "end": 259,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 244,
            "end": 250
          },
          {
            "type": "TSStringKeyword",
            "start": 253,
            "end": 259
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 271,
        "end": 326,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 277,
            "end": 290,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 278,
              "end": 280,
              "decorators": [],
              "name": "K3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 289,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 283,
                "end": 289
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 328,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 335,
        "decorators": [],
        "name": "K4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 338,
        "end": 353,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 338,
            "end": 344
          },
          {
            "type": "TSStringKeyword",
            "start": 347,
            "end": 353
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 355,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 362,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 365,
        "end": 402,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 371,
            "end": 384,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 374,
              "decorators": [],
              "name": "K4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 383,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 377,
                "end": 383
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 389,
            "end": 400,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 391,
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 399,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 393,
                "end": 399
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
