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
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "generator": true,
      "async": false,
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
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 25
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              },
              {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            ],
            "start": 25,
            "end": 50
          },
          "start": 16,
          "end": 50
        },
        "start": 14,
        "end": 50
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 57,
              "end": 62
            },
            "directive": null,
            "start": 57,
            "end": 63
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 83,
                "end": 86
              },
              "start": 77,
              "end": 86
            },
            "directive": null,
            "start": 77,
            "end": 87
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    },
                    "start": 108,
                    "end": 116
                  },
                  "start": 107,
                  "end": 116
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 125,
                    "end": 126
                  },
                  "start": 119,
                  "end": 126
                },
                "definite": false,
                "start": 107,
                "end": 126
              }
            ],
            "declare": false,
            "start": 101,
            "end": 127
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 148,
              "end": 150
            },
            "start": 141,
            "end": 151
          }
        ],
        "start": 51,
        "end": 162
      },
      "expression": false,
      "start": 0,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "generator": true,
      "async": false,
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
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 189
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 190,
                "end": 196
              },
              {
                "type": "TSBooleanKeyword",
                "start": 198,
                "end": 205
              },
              {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              }
            ],
            "start": 189,
            "end": 214
          },
          "start": 180,
          "end": 214
        },
        "start": 178,
        "end": 214
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 237,
                    "end": 238
                  },
                  "start": 231,
                  "end": 238
                },
                "definite": false,
                "start": 227,
                "end": 238
              }
            ],
            "declare": false,
            "start": 221,
            "end": 239
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 251,
              "end": 255
            },
            "start": 244,
            "end": 256
          }
        ],
        "start": 215,
        "end": 258
      },
      "expression": false,
      "start": 164,
      "end": 258
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 294
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 295,
                      "end": 301
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 303,
                      "end": 309
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 311,
                      "end": 317
                    }
                  ],
                  "start": 294,
                  "end": 318
                },
                "start": 285,
                "end": 318
              },
              "start": 283,
              "end": 318
            },
            "start": 274,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 318
        }
      ],
      "declare": true,
      "start": 260,
      "end": 319
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 333
      },
      "generator": true,
      "async": false,
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
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 346
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 347,
                "end": 353
              },
              {
                "type": "TSBooleanKeyword",
                "start": 355,
                "end": 362
              },
              {
                "type": "TSStringKeyword",
                "start": 364,
                "end": 370
              }
            ],
            "start": 346,
            "end": 371
          },
          "start": 337,
          "end": 371
        },
        "start": 335,
        "end": 371
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    },
                    "start": 385,
                    "end": 393
                  },
                  "start": 384,
                  "end": 393
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 412
                  },
                  "start": 396,
                  "end": 412
                },
                "definite": false,
                "start": 384,
                "end": 412
              }
            ],
            "declare": false,
            "start": 378,
            "end": 413
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 434,
              "end": 438
            },
            "start": 427,
            "end": 439
          }
        ],
        "start": 372,
        "end": 441
      },
      "expression": false,
      "start": 321,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 455
      },
      "generator": true,
      "async": false,
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
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 468
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 469,
                "end": 475
              },
              {
                "type": "TSBooleanKeyword",
                "start": 477,
                "end": 484
              },
              {
                "type": "TSStringKeyword",
                "start": 486,
                "end": 492
              }
            ],
            "start": 468,
            "end": 493
          },
          "start": 459,
          "end": 493
        },
        "start": 457,
        "end": 493
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 526
                  },
                  "start": 510,
                  "end": 526
                },
                "definite": false,
                "start": 506,
                "end": 526
              }
            ],
            "declare": false,
            "start": 500,
            "end": 527
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 539,
              "end": 543
            },
            "start": 532,
            "end": 544
          }
        ],
        "start": 494,
        "end": 546
      },
      "expression": false,
      "start": 443,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 546
}
```
