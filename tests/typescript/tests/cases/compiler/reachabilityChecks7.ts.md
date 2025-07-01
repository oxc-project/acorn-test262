__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 77,
        "end": 84
      },
      "expression": false,
      "start": 57,
      "end": 84
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 91
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 111,
              "end": 114
            },
            "expression": false,
            "start": 94,
            "end": 114
          },
          "definite": false,
          "start": 90,
          "end": 114
        }
      ],
      "declare": false,
      "start": 86,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 219
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 220,
                "end": 224
              }
            ],
            "start": 219,
            "end": 225
          },
          "start": 212,
          "end": 225
        },
        "start": 210,
        "end": 225
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 226,
        "end": 234
      },
      "expression": false,
      "start": 191,
      "end": 234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 255
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 277,
                "end": 279
              },
              "start": 270,
              "end": 280
            },
            "alternate": null,
            "start": 263,
            "end": 280
          }
        ],
        "start": 257,
        "end": 282
      },
      "expression": false,
      "start": 236,
      "end": 282
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 301
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 312
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 313,
                "end": 319
              }
            ],
            "start": 312,
            "end": 320
          },
          "start": 305,
          "end": 320
        },
        "start": 303,
        "end": 320
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 321,
        "end": 329
      },
      "expression": false,
      "start": 284,
      "end": 329
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "voidFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 352,
          "end": 356
        },
        "start": 350,
        "end": 356
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 357,
        "end": 360
      },
      "expression": false,
      "start": 331,
      "end": 360
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "calltoVoidFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 385
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 387
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "voidFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 417
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 409,
                "end": 419
              },
              "start": 402,
              "end": 420
            },
            "alternate": null,
            "start": 395,
            "end": 420
          }
        ],
        "start": 389,
        "end": 422
      },
      "expression": false,
      "start": 362,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 444
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 448,
              "end": 454
            },
            "start": 446,
            "end": 454
          },
          "start": 445,
          "end": 454
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 457,
          "end": 461
        },
        "start": 455,
        "end": 461
      },
      "body": null,
      "expression": false,
      "start": 424,
      "end": 462
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 469
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 483
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Test",
                        "raw": "\"Test\"",
                        "start": 484,
                        "end": 490
                      }
                    ],
                    "optional": false,
                    "start": 480,
                    "end": 491
                  },
                  "directive": null,
                  "start": 480,
                  "end": 492
                }
              ],
              "start": 478,
              "end": 494
            },
            "id": null,
            "generator": false,
            "start": 472,
            "end": 494
          },
          "definite": false,
          "start": 467,
          "end": 494
        }
      ],
      "declare": false,
      "start": 463,
      "end": 494
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 494
}
```
