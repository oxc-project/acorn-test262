__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 24
          },
          "typeArguments": null,
          "start": 15,
          "end": 24
        },
        "start": 13,
        "end": 24
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 34,
              "end": 35
            },
            "start": 27,
            "end": 36
          }
        ],
        "start": 25,
        "end": 38
      },
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 44,
            "end": 53
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 58
          },
          "definite": false,
          "start": 44,
          "end": 58
        }
      ],
      "declare": false,
      "start": 40,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 82,
                    "end": 88
                  },
                  "start": 79,
                  "end": 88
                },
                "start": 76,
                "end": 88
              },
              "start": 74,
              "end": 88
            },
            "start": 73,
            "end": 88
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 93
          },
          "definite": false,
          "start": 73,
          "end": 93
        }
      ],
      "declare": false,
      "start": 69,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 123
                  },
                  "start": 112,
                  "end": 123
                },
                "start": 109,
                "end": 123
              },
              "start": 107,
              "end": 123
            },
            "start": 106,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 123
        }
      ],
      "declare": false,
      "start": 102,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 146
                  },
                  "start": 135,
                  "end": 146
                },
                "start": 132,
                "end": 146
              },
              "start": 130,
              "end": 146
            },
            "start": 129,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 146
        }
      ],
      "declare": false,
      "start": 125,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 173
              },
              "typeArguments": null,
              "start": 164,
              "end": 173
            },
            "start": 162,
            "end": 173
          },
          "start": 161,
          "end": 173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 175,
        "end": 178
      },
      "expression": false,
      "start": 149,
      "end": 178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 204
          },
          "typeArguments": null,
          "start": 195,
          "end": 204
        },
        "start": 193,
        "end": 204
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 205,
        "end": 208
      },
      "expression": false,
      "start": 180,
      "end": 208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 221
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 234
          },
          "typeArguments": null,
          "start": 225,
          "end": 234
        },
        "start": 223,
        "end": 234
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 235,
        "end": 238
      },
      "expression": false,
      "start": 210,
      "end": 238
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 252
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 254
          }
        ],
        "start": 252,
        "end": 255
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 256,
        "end": 259
      },
      "declare": false,
      "start": 241,
      "end": 259
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 271
      },
      "generator": false,
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 276
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 286
                },
                "typeArguments": null,
                "start": 277,
                "end": 286
              }
            ],
            "start": 276,
            "end": 287
          },
          "start": 275,
          "end": 287
        },
        "start": 273,
        "end": 287
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 299
            },
            "start": 290,
            "end": 300
          }
        ],
        "start": 288,
        "end": 302
      },
      "expression": false,
      "start": 260,
      "end": 302
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "start": 308,
            "end": 317
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 322
          },
          "definite": false,
          "start": 308,
          "end": 322
        }
      ],
      "declare": false,
      "start": 304,
      "end": 323
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 341
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 368,
                          "end": 369
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 371
                        },
                        "start": 368,
                        "end": 371
                      },
                      "typeArguments": null,
                      "start": 361,
                      "end": 371
                    },
                    "start": 359,
                    "end": 371
                  },
                  "start": 358,
                  "end": 371
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 372,
                "end": 375
              },
              "expression": false,
              "start": 357,
              "end": 375
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 375
          }
        ],
        "start": 342,
        "end": 377
      },
      "abstract": false,
      "declare": false,
      "start": 334,
      "end": 377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 379
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "optional": false,
          "computed": false,
          "start": 378,
          "end": 381
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 382,
            "end": 383
          }
        ],
        "optional": false,
        "start": 378,
        "end": 384
      },
      "directive": null,
      "start": 378,
      "end": 385
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 419
                    },
                    "typeArguments": null,
                    "start": 410,
                    "end": 419
                  },
                  "start": 407,
                  "end": 419
                },
                "start": 404,
                "end": 419
              },
              "start": 402,
              "end": 419
            },
            "start": 400,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 419
        }
      ],
      "declare": false,
      "start": 396,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 426,
          "end": 427
        },
        "start": 421,
        "end": 427
      },
      "directive": null,
      "start": 421,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 450
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 464
            },
            "start": 455,
            "end": 465
          }
        ],
        "start": 453,
        "end": 467
      },
      "expression": false,
      "start": 439,
      "end": 467
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 480
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f6",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 493
          },
          "typeArguments": null,
          "start": 484,
          "end": 493
        },
        "start": 482,
        "end": 493
      },
      "body": null,
      "expression": false,
      "start": 469,
      "end": 494
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 506
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f6",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 519
              },
              "typeArguments": null,
              "start": 510,
              "end": 519
            },
            "start": 508,
            "end": 519
          },
          "start": 507,
          "end": 519
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 528,
              "end": 534
            },
            "start": 525,
            "end": 534
          },
          "start": 522,
          "end": 534
        },
        "start": 520,
        "end": 534
      },
      "body": null,
      "expression": false,
      "start": 495,
      "end": 535
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 545,
        "end": 547
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 552,
              "end": 555
            },
            "start": 550,
            "end": 555
          },
          "start": 548,
          "end": 555
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
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 568
            },
            "start": 559,
            "end": 569
          }
        ],
        "start": 557,
        "end": 571
      },
      "expression": false,
      "start": 536,
      "end": 571
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 575
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 576,
            "end": 578
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 580,
            "end": 581
          }
        ],
        "optional": false,
        "start": 573,
        "end": 582
      },
      "directive": null,
      "start": 573,
      "end": 583
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 612
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 613,
            "end": 615
          }
        ],
        "optional": false,
        "start": 610,
        "end": 616
      },
      "directive": null,
      "start": 610,
      "end": 617
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 654,
          "end": 656
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 654,
        "end": 658
      },
      "directive": null,
      "start": 654,
      "end": 659
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 686
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 699
          },
          "typeArguments": null,
          "start": 690,
          "end": 699
        },
        "start": 688,
        "end": 699
      },
      "body": null,
      "expression": false,
      "start": 667,
      "end": 700
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 720
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 733
              },
              "typeArguments": null,
              "start": 724,
              "end": 733
            },
            "start": 722,
            "end": 733
          },
          "start": 721,
          "end": 733
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 742,
              "end": 748
            },
            "start": 739,
            "end": 748
          },
          "start": 736,
          "end": 748
        },
        "start": 734,
        "end": 748
      },
      "body": null,
      "expression": false,
      "start": 701,
      "end": 749
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 769
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 773,
              "end": 779
            },
            "start": 771,
            "end": 779
          },
          "start": 770,
          "end": 779
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 782,
          "end": 788
        },
        "start": 780,
        "end": 788
      },
      "body": null,
      "expression": false,
      "start": 750,
      "end": 789
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 809
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 823
              },
              "typeArguments": null,
              "start": 814,
              "end": 823
            },
            "start": 812,
            "end": 823
          },
          "start": 810,
          "end": 823
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 833,
            "end": 835
          },
          "typeArguments": null,
          "start": 826,
          "end": 835
        },
        "start": 824,
        "end": 835
      },
      "body": null,
      "expression": false,
      "start": 790,
      "end": 836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 838,
          "end": 840
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 841,
            "end": 843
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 845,
            "end": 846
          }
        ],
        "optional": false,
        "start": 838,
        "end": 847
      },
      "directive": null,
      "start": 838,
      "end": 848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 877
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 878,
            "end": 880
          }
        ],
        "optional": false,
        "start": 875,
        "end": 881
      },
      "directive": null,
      "start": 875,
      "end": 882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 921
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 919,
        "end": 923
      },
      "directive": null,
      "start": 919,
      "end": 924
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 930
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 22,
    "end": 24,
    "range": [
      22,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 40,
    "end": 43,
    "range": [
      40,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 56,
    "end": 58,
    "range": [
      56,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81,
    "range": [
      79,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 102,
    "end": 105,
    "range": [
      102,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 112,
    "end": 114,
    "range": [
      112,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 125,
    "end": 128,
    "range": [
      125,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 135,
    "end": 137,
    "range": [
      135,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157,
    "range": [
      149,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 158,
    "end": 160,
    "range": [
      158,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 171,
    "end": 173,
    "range": [
      171,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 180,
    "end": 188,
    "range": [
      180,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 189,
    "end": 191,
    "range": [
      189,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 202,
    "end": 204,
    "range": [
      202,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218,
    "range": [
      210,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 225,
    "end": 231,
    "range": [
      225,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 241,
    "end": 250,
    "range": [
      241,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268,
    "range": [
      260,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 269,
    "end": 271,
    "range": [
      269,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 277,
    "end": 283,
    "range": [
      277,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 284,
    "end": 286,
    "range": [
      284,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296,
    "range": [
      290,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 311,
    "end": 317,
    "range": [
      311,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 320,
    "end": 322,
    "range": [
      320,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 334,
    "end": 339,
    "range": [
      334,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 349,
    "end": 355,
    "range": [
      349,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 361,
    "end": 367,
    "range": [
      361,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 400,
    "end": 402,
    "range": [
      400,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 407,
    "end": 409,
    "range": [
      407,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 417,
    "end": 419,
    "range": [
      417,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 421,
    "end": 423,
    "range": [
      421,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 439,
    "end": 447,
    "range": [
      439,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 448,
    "end": 450,
    "range": [
      448,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 455,
    "end": 461,
    "range": [
      455,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 462,
    "end": 464,
    "range": [
      462,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477,
    "range": [
      469,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 478,
    "end": 480,
    "range": [
      478,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 491,
    "end": 493,
    "range": [
      491,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 495,
    "end": 503,
    "range": [
      495,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 504,
    "end": 506,
    "range": [
      504,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 517,
    "end": 519,
    "range": [
      517,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 525,
    "end": 527,
    "range": [
      525,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 536,
    "end": 544,
    "range": [
      536,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 545,
    "end": 547,
    "range": [
      545,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 552,
    "end": 555,
    "range": [
      552,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 559,
    "end": 565,
    "range": [
      559,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 566,
    "end": 568,
    "range": [
      566,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 573,
    "end": 575,
    "range": [
      573,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 610,
    "end": 612,
    "range": [
      610,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 654,
    "end": 656,
    "range": [
      654,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 667,
    "end": 674,
    "range": [
      667,
      674
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 675,
    "end": 683,
    "range": [
      675,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 690,
    "end": 696,
    "range": [
      690,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 697,
    "end": 699,
    "range": [
      697,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 701,
    "end": 708,
    "range": [
      701,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 709,
    "end": 717,
    "range": [
      709,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 718,
    "end": 720,
    "range": [
      718,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 724,
    "end": 730,
    "range": [
      724,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 731,
    "end": 733,
    "range": [
      731,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 739,
    "end": 741,
    "range": [
      739,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 742,
    "end": 748,
    "range": [
      742,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 750,
    "end": 757,
    "range": [
      750,
      757
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 758,
    "end": 766,
    "range": [
      758,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 767,
    "end": 769,
    "range": [
      767,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 782,
    "end": 788,
    "range": [
      782,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 790,
    "end": 797,
    "range": [
      790,
      797
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 798,
    "end": 806,
    "range": [
      798,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 807,
    "end": 809,
    "range": [
      807,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 814,
    "end": 820,
    "range": [
      814,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 821,
    "end": 823,
    "range": [
      821,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 826,
    "end": 832,
    "range": [
      826,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 833,
    "end": 835,
    "range": [
      833,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 838,
    "end": 840,
    "range": [
      838,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 875,
    "end": 877,
    "range": [
      875,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 878,
    "end": 880,
    "range": [
      878,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 919,
    "end": 921,
    "range": [
      919,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  }
]
```
