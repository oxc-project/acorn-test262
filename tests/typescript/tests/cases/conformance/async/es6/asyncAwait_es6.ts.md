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
        "name": "MyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 27
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeArguments": null,
              "start": 28,
              "end": 29
            }
          ],
          "start": 27,
          "end": 30
        },
        "start": 20,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 31
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
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 69
                },
                "typeArguments": null,
                "start": 55,
                "end": 69
              },
              "start": 53,
              "end": 69
            },
            "start": 44,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 69
        }
      ],
      "declare": true,
      "start": 32,
      "end": 70
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 93
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 94,
                      "end": 100
                    }
                  ],
                  "start": 93,
                  "end": 101
                },
                "start": 86,
                "end": 101
              },
              "start": 84,
              "end": 101
            },
            "start": 83,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 101
        }
      ],
      "declare": true,
      "start": 71,
      "end": 102
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
            "name": "mp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 128
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ],
                  "start": 128,
                  "end": 136
                },
                "start": 119,
                "end": 136
              },
              "start": 117,
              "end": 136
            },
            "start": 115,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 136
        }
      ],
      "declare": true,
      "start": 103,
      "end": 137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
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
        "start": 159,
        "end": 162
      },
      "expression": false,
      "start": 139,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
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
            "start": 184,
            "end": 191
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 192,
                "end": 196
              }
            ],
            "start": 191,
            "end": 197
          },
          "start": 184,
          "end": 197
        },
        "start": 182,
        "end": 197
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 198,
        "end": 201
      },
      "expression": false,
      "start": 163,
      "end": 201
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 219
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
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 232
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 233,
                "end": 237
              }
            ],
            "start": 232,
            "end": 238
          },
          "start": 223,
          "end": 238
        },
        "start": 221,
        "end": 238
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 239,
        "end": 242
      },
      "expression": false,
      "start": 202,
      "end": 242
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 250
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
              "start": 270,
              "end": 273
            },
            "expression": false,
            "start": 253,
            "end": 273
          },
          "definite": false,
          "start": 248,
          "end": 273
        }
      ],
      "declare": false,
      "start": 244,
      "end": 273
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 280
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "start": 301,
                  "end": 308
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 309,
                      "end": 313
                    }
                  ],
                  "start": 308,
                  "end": 314
                },
                "start": 301,
                "end": 314
              },
              "start": 299,
              "end": 314
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 315,
              "end": 318
            },
            "expression": false,
            "start": 283,
            "end": 318
          },
          "definite": false,
          "start": 278,
          "end": 318
        }
      ],
      "declare": false,
      "start": 274,
      "end": 318
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
            "name": "f6",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 325
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 355
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 356,
                      "end": 360
                    }
                  ],
                  "start": 355,
                  "end": 361
                },
                "start": 346,
                "end": 361
              },
              "start": 344,
              "end": 361
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 362,
              "end": 365
            },
            "expression": false,
            "start": 328,
            "end": 365
          },
          "definite": false,
          "start": 323,
          "end": 365
        }
      ],
      "declare": false,
      "start": 319,
      "end": 365
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 373
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 388,
              "end": 391
            },
            "id": null,
            "generator": false,
            "start": 376,
            "end": 391
          },
          "definite": false,
          "start": 371,
          "end": 391
        }
      ],
      "declare": false,
      "start": 367,
      "end": 392
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 399
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
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
                  "start": 412,
                  "end": 419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 420,
                      "end": 424
                    }
                  ],
                  "start": 419,
                  "end": 425
                },
                "start": 412,
                "end": 425
              },
              "start": 410,
              "end": 425
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 429,
              "end": 432
            },
            "id": null,
            "generator": false,
            "start": 402,
            "end": 432
          },
          "definite": false,
          "start": 397,
          "end": 432
        }
      ],
      "declare": false,
      "start": 393,
      "end": 433
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 440
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 462
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 463,
                      "end": 467
                    }
                  ],
                  "start": 462,
                  "end": 468
                },
                "start": 453,
                "end": 468
              },
              "start": 451,
              "end": 468
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 472,
              "end": 475
            },
            "id": null,
            "generator": false,
            "start": 443,
            "end": 475
          },
          "definite": false,
          "start": 438,
          "end": 475
        }
      ],
      "declare": false,
      "start": 434,
      "end": 476
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 484
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 500
            },
            "id": null,
            "generator": false,
            "start": 487,
            "end": 500
          },
          "definite": false,
          "start": 481,
          "end": 500
        }
      ],
      "declare": false,
      "start": 477,
      "end": 501
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 509
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 526
            },
            "id": null,
            "generator": false,
            "start": 512,
            "end": 526
          },
          "definite": false,
          "start": 506,
          "end": 526
        }
      ],
      "declare": false,
      "start": 502,
      "end": 527
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 535
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
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
                  "start": 548,
                  "end": 555
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 556,
                      "end": 562
                    }
                  ],
                  "start": 555,
                  "end": 563
                },
                "start": 548,
                "end": 563
              },
              "start": 546,
              "end": 563
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 569
            },
            "id": null,
            "generator": false,
            "start": 538,
            "end": 569
          },
          "definite": false,
          "start": 532,
          "end": 569
        }
      ],
      "declare": false,
      "start": 528,
      "end": 570
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 600
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
                    }
                  ],
                  "start": 600,
                  "end": 608
                },
                "start": 591,
                "end": 608
              },
              "start": 589,
              "end": 608
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 613
            },
            "id": null,
            "generator": false,
            "start": 581,
            "end": 613
          },
          "definite": false,
          "start": 575,
          "end": 613
        }
      ],
      "declare": false,
      "start": 571,
      "end": 614
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 621
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 635
                },
                "value": {
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
                    "start": 638,
                    "end": 641
                  },
                  "expression": false,
                  "start": 635,
                  "end": 641
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 627,
                "end": 641
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "start": 656,
                        "end": 663
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 664,
                            "end": 668
                          }
                        ],
                        "start": 663,
                        "end": 669
                      },
                      "start": 656,
                      "end": 669
                    },
                    "start": 654,
                    "end": 669
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 670,
                    "end": 673
                  },
                  "expression": false,
                  "start": 652,
                  "end": 673
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 644,
                "end": 673
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 684
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "name": "MyPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 688,
                        "end": 697
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 698,
                            "end": 702
                          }
                        ],
                        "start": 697,
                        "end": 703
                      },
                      "start": 688,
                      "end": 703
                    },
                    "start": 686,
                    "end": 703
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 704,
                    "end": 707
                  },
                  "expression": false,
                  "start": 684,
                  "end": 707
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 676,
                "end": 707
              }
            ],
            "start": 624,
            "end": 709
          },
          "definite": false,
          "start": 620,
          "end": 709
        }
      ],
      "declare": false,
      "start": 616,
      "end": 710
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
        "start": 718,
        "end": 719
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 731
            },
            "value": {
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
                "start": 734,
                "end": 737
              },
              "expression": false,
              "start": 731,
              "end": 737
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 723,
            "end": 737
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 747
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "start": 751,
                    "end": 758
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 759,
                        "end": 763
                      }
                    ],
                    "start": 758,
                    "end": 764
                  },
                  "start": 751,
                  "end": 764
                },
                "start": 749,
                "end": 764
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 765,
                "end": 768
              },
              "expression": false,
              "start": 747,
              "end": 768
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 739,
            "end": 768
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 778
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 791
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 792,
                        "end": 796
                      }
                    ],
                    "start": 791,
                    "end": 797
                  },
                  "start": 782,
                  "end": 797
                },
                "start": 780,
                "end": 797
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 798,
                "end": 801
              },
              "expression": false,
              "start": 778,
              "end": 801
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 770,
            "end": 801
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 818
            },
            "value": {
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
                "start": 821,
                "end": 824
              },
              "expression": false,
              "start": 818,
              "end": 824
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 803,
            "end": 824
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 839,
              "end": 841
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "start": 845,
                    "end": 852
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 853,
                        "end": 857
                      }
                    ],
                    "start": 852,
                    "end": 858
                  },
                  "start": 845,
                  "end": 858
                },
                "start": 843,
                "end": 858
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 859,
                "end": 862
              },
              "expression": false,
              "start": 841,
              "end": 862
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 826,
            "end": 862
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 879
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 892
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 893,
                        "end": 897
                      }
                    ],
                    "start": 892,
                    "end": 898
                  },
                  "start": 883,
                  "end": 898
                },
                "start": 881,
                "end": 898
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 899,
                "end": 902
              },
              "expression": false,
              "start": 879,
              "end": 902
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 864,
            "end": 902
          }
        ],
        "start": 720,
        "end": 904
      },
      "abstract": false,
      "declare": false,
      "start": 712,
      "end": 904
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 916,
        "end": 917
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 943,
                "end": 945
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
                "start": 948,
                "end": 951
              },
              "expression": false,
              "start": 928,
              "end": 951
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 921,
            "end": 951
          }
        ],
        "start": 918,
        "end": 953
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 906,
      "end": 953
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 970,
        "end": 973
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "block",
              "optional": false,
              "typeAnnotation": null,
              "start": 982,
              "end": 987
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1005,
                      "end": 1006
                    },
                    "start": 999,
                    "end": 1006
                  },
                  "directive": null,
                  "start": 999,
                  "end": 1007
                },
                {
                  "type": "BreakStatement",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "block",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1027
                  },
                  "start": 1016,
                  "end": 1028
                }
              ],
              "start": 989,
              "end": 1034
            },
            "start": 982,
            "end": 1034
          }
        ],
        "start": 976,
        "end": 1036
      },
      "expression": false,
      "start": 955,
      "end": 1036
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1036
}
```
