__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 546,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 50,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 50,
          "typeName": {
            "type": "Identifier",
            "start": 16,
            "end": 25,
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 25,
            "end": 50,
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
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 162,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 57,
            "end": 63,
            "expression": {
              "type": "YieldExpression",
              "start": 57,
              "end": 62,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 77,
            "end": 87,
            "expression": {
              "type": "YieldExpression",
              "start": 77,
              "end": 86,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 83,
                "end": 86,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 101,
            "end": 127,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 126,
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 119,
                  "end": 126,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 125,
                    "end": 126,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 151,
            "argument": {
              "type": "Literal",
              "start": 148,
              "end": 150,
              "value": 10,
              "raw": "10"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 214,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 214,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 189,
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 189,
            "end": 214,
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
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 215,
        "end": 258,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 221,
            "end": 239,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 238,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 231,
                  "end": 238,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 237,
                    "end": 238,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 244,
            "end": 256,
            "argument": {
              "type": "Literal",
              "start": 251,
              "end": 255,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 319,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 318,
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 294,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 294,
                  "end": 318,
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
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 321,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 333,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 335,
        "end": 371,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 337,
          "end": 371,
          "typeName": {
            "type": "Identifier",
            "start": 337,
            "end": 346,
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 346,
            "end": 371,
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
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 372,
        "end": 441,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 378,
            "end": 413,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 412,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 393,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 396,
                  "end": 412,
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 412,
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 427,
            "end": 439,
            "argument": {
              "type": "Literal",
              "start": 434,
              "end": 438,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 546,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 455,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 457,
        "end": 493,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 459,
          "end": 493,
          "typeName": {
            "type": "Identifier",
            "start": 459,
            "end": 468,
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 468,
            "end": 493,
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
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 494,
        "end": 546,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 500,
            "end": 527,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 506,
                "end": 526,
                "id": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 510,
                  "end": 526,
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 526,
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 532,
            "end": 544,
            "argument": {
              "type": "Literal",
              "start": 539,
              "end": 543,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
