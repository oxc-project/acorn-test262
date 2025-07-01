__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "function",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstract",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 67,
                "end": 74
              },
              "start": 65,
              "end": 74
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 75
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 87,
                "end": 94
              },
              "start": 85,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 95
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 107,
                "end": 114
              },
              "start": 105,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 100,
            "end": 115
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
            },
            "accessibility": null,
            "static": false,
            "start": 120,
            "end": 133
          }
        ],
        "start": 9,
        "end": 135
      },
      "declare": false,
      "start": 0,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 156
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 163
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 152,
              "end": 163
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 172
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 165,
              "end": 172
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "typeArguments": null,
              "start": 176,
              "end": 177
            },
            "start": 174,
            "end": 177
          },
          "start": 150,
          "end": 177
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "start": 185,
            "end": 197
          }
        ],
        "start": 179,
        "end": 199
      },
      "expression": false,
      "start": 138,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 212
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "function",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 223
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_function",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 234
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 215,
              "end": 234
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 243
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 236,
              "end": 243
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            "start": 245,
            "end": 248
          },
          "start": 213,
          "end": 248
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 267
            },
            "start": 256,
            "end": 268
          }
        ],
        "start": 250,
        "end": 270
      },
      "expression": false,
      "start": 201,
      "end": 270
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "abstract",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 294
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_abstract",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 305
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 286,
              "end": 305
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 314
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 307,
              "end": 314
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "typeArguments": null,
              "start": 318,
              "end": 319
            },
            "start": 316,
            "end": 319
          },
          "start": 284,
          "end": 319
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 338
            },
            "start": 327,
            "end": 339
          }
        ],
        "start": 321,
        "end": 341
      },
      "expression": false,
      "start": 272,
      "end": 341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "async",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 362
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_async",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 370
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 357,
              "end": 370
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 379
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 372,
              "end": 379
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
              },
              "typeArguments": null,
              "start": 383,
              "end": 384
            },
            "start": 381,
            "end": 384
          },
          "start": 355,
          "end": 384
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 403
            },
            "start": 392,
            "end": 404
          }
        ],
        "start": 386,
        "end": 406
      },
      "expression": false,
      "start": 343,
      "end": 406
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 419
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 427
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "_await",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 435
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 422,
              "end": 435
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 444
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 437,
              "end": 444
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 449
              },
              "typeArguments": null,
              "start": 448,
              "end": 449
            },
            "start": 446,
            "end": 449
          },
          "start": 420,
          "end": 449
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 468
            },
            "start": 457,
            "end": 469
          }
        ],
        "start": 451,
        "end": 471
      },
      "expression": false,
      "start": 408,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 471
}
```
