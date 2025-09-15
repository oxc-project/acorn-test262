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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
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
          "start": 124,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 140,
              "end": 141
            },
            "start": 133,
            "end": 142
          }
        ],
        "start": 127,
        "end": 144
      },
      "expression": false,
      "start": 111,
      "end": 144
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 157,
                "end": 158
              }
            ],
            "optional": false,
            "start": 153,
            "end": 159
          },
          "definite": false,
          "start": 149,
          "end": 159
        }
      ],
      "declare": false,
      "start": 145,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
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
          "start": 176,
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 195
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                }
              ],
              "optional": false,
              "start": 192,
              "end": 198
            },
            "start": 185,
            "end": 199
          }
        ],
        "start": 179,
        "end": 201
      },
      "expression": false,
      "start": 162,
      "end": 201
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 216,
                "end": 217
              }
            ],
            "optional": false,
            "start": 211,
            "end": 218
          },
          "definite": false,
          "start": 206,
          "end": 218
        }
      ],
      "declare": false,
      "start": 202,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 234
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 250,
              "end": 256
            },
            "start": 243,
            "end": 257
          }
        ],
        "start": 237,
        "end": 259
      },
      "expression": false,
      "start": 221,
      "end": 259
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 266
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 269,
            "end": 275
          },
          "definite": false,
          "start": 264,
          "end": 275
        }
      ],
      "declare": false,
      "start": 260,
      "end": 276
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 291
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 296,
            "end": 299
          },
          "start": 295,
          "end": 299
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "start": 307,
            "end": 316
          }
        ],
        "start": 301,
        "end": 318
      },
      "expression": false,
      "start": 278,
      "end": 318
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 325
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 332
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 333,
                "end": 334
              }
            ],
            "optional": false,
            "start": 328,
            "end": 335
          },
          "definite": false,
          "start": 323,
          "end": 335
        }
      ],
      "declare": false,
      "start": 319,
      "end": 336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 351
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
          "start": 352,
          "end": 353
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 365,
              "end": 369
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 388,
                    "end": 389
                  },
                  "start": 381,
                  "end": 390
                }
              ],
              "start": 371,
              "end": 396
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 419,
                    "end": 420
                  },
                  "start": 412,
                  "end": 421
                }
              ],
              "start": 402,
              "end": 427
            },
            "start": 361,
            "end": 427
          }
        ],
        "start": 355,
        "end": 429
      },
      "expression": false,
      "start": 338,
      "end": 429
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 436
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 443
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 444,
                "end": 445
              }
            ],
            "optional": false,
            "start": 439,
            "end": 446
          },
          "definite": false,
          "start": 434,
          "end": 446
        }
      ],
      "declare": false,
      "start": 430,
      "end": 447
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
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
          "start": 463,
          "end": 464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 476,
              "end": 483
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 496
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 515,
                      "end": 517
                    },
                    "start": 508,
                    "end": 518
                  }
                ],
                "start": 498,
                "end": 524
              },
              "start": 488,
              "end": 524
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 554,
                    "end": 556
                  },
                  "start": 547,
                  "end": 557
                }
              ],
              "start": 537,
              "end": 563
            },
            "start": 472,
            "end": 563
          }
        ],
        "start": 466,
        "end": 565
      },
      "expression": false,
      "start": 449,
      "end": 565
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 572
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 579
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 580,
                "end": 581
              }
            ],
            "optional": false,
            "start": 575,
            "end": 582
          },
          "definite": false,
          "start": 570,
          "end": 582
        }
      ],
      "declare": false,
      "start": 566,
      "end": 583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 598
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
          "start": 599,
          "end": 600
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "prefix": true,
              "start": 615,
              "end": 623
            },
            "start": 608,
            "end": 624
          }
        ],
        "start": 602,
        "end": 626
      },
      "expression": false,
      "start": 585,
      "end": 626
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 633
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 640
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 641,
                "end": 642
              }
            ],
            "optional": false,
            "start": 636,
            "end": 643
          },
          "definite": false,
          "start": 631,
          "end": 643
        }
      ],
      "declare": false,
      "start": 627,
      "end": 644
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 675
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 679,
              "end": 685
            },
            "start": 677,
            "end": 685
          },
          "start": 676,
          "end": 685
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 703
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 706
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 702,
                  "end": 706
                }
              ],
              "start": 700,
              "end": 708
            },
            "start": 693,
            "end": 709
          }
        ],
        "start": 687,
        "end": 711
      },
      "expression": false,
      "start": 662,
      "end": 711
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 725
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 726,
                "end": 727
              }
            ],
            "optional": false,
            "start": 721,
            "end": 728
          },
          "definite": false,
          "start": 716,
          "end": 728
        }
      ],
      "declare": false,
      "start": 712,
      "end": 729
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 742
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 752
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 754,
                "end": 760
              },
              "start": 752,
              "end": 760
            },
            "accessibility": null,
            "static": false,
            "start": 749,
            "end": 761
          }
        ],
        "start": 743,
        "end": 763
      },
      "declare": false,
      "start": 731,
      "end": 763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 773,
        "end": 777
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 781,
              "end": 787
            },
            "start": 779,
            "end": 787
          },
          "start": 778,
          "end": 787
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 803
                      },
                      "typeArguments": null,
                      "start": 802,
                      "end": 803
                    },
                    "start": 800,
                    "end": 803
                  },
                  "start": 799,
                  "end": 803
                },
                "init": null,
                "definite": false,
                "start": 799,
                "end": 803
              }
            ],
            "declare": false,
            "start": 795,
            "end": 804
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 817
            },
            "start": 809,
            "end": 818
          }
        ],
        "start": 789,
        "end": 824
      },
      "expression": false,
      "start": 764,
      "end": 824
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 829,
            "end": 831
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 839,
                "end": 840
              }
            ],
            "optional": false,
            "start": 834,
            "end": 841
          },
          "definite": false,
          "start": 829,
          "end": 841
        }
      ],
      "declare": false,
      "start": 825,
      "end": 842
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
        "start": 850,
        "end": 851
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 861
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 863,
                "end": 869
              },
              "start": 861,
              "end": 869
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 858,
            "end": 870
          }
        ],
        "start": 852,
        "end": 872
      },
      "abstract": false,
      "declare": false,
      "start": 844,
      "end": 872
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 887
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 891,
              "end": 897
            },
            "start": 889,
            "end": 897
          },
          "start": 888,
          "end": 897
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 912,
                        "end": 913
                      },
                      "typeArguments": null,
                      "start": 912,
                      "end": 913
                    },
                    "start": 910,
                    "end": 913
                  },
                  "start": 909,
                  "end": 913
                },
                "init": null,
                "definite": false,
                "start": 909,
                "end": 913
              }
            ],
            "declare": false,
            "start": 905,
            "end": 914
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 927
            },
            "start": 919,
            "end": 928
          }
        ],
        "start": 899,
        "end": 930
      },
      "expression": false,
      "start": 873,
      "end": 930
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 935,
            "end": 938
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 946
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 947,
                "end": 948
              }
            ],
            "optional": false,
            "start": 941,
            "end": 949
          },
          "definite": false,
          "start": 935,
          "end": 949
        }
      ],
      "declare": false,
      "start": 931,
      "end": 950
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 963
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 982
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 985,
                    "end": 986
                  },
                  "definite": false,
                  "start": 981,
                  "end": 986
                }
              ],
              "declare": false,
              "start": 977,
              "end": 987
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 970,
            "end": 987
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1006
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1009,
                      "end": 1012
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1014,
                        "end": 1020
                      },
                      "start": 1012,
                      "end": 1020
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 1009,
                    "end": 1020
                  }
                ],
                "start": 1007,
                "end": 1022
              },
              "abstract": false,
              "declare": false,
              "start": 999,
              "end": 1022
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 992,
            "end": 1022
          }
        ],
        "start": 964,
        "end": 1024
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 952,
      "end": 1024
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1034,
        "end": 1039
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1056
            },
            "start": 1048,
            "end": 1057
          }
        ],
        "start": 1042,
        "end": 1059
      },
      "expression": false,
      "start": 1025,
      "end": 1059
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1064,
            "end": 1067
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1075
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1070,
            "end": 1077
          },
          "definite": false,
          "start": 1064,
          "end": 1077
        }
      ],
      "declare": false,
      "start": 1060,
      "end": 1078
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1113,
        "end": 1115
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "static": false,
            "start": 1122,
            "end": 1132
          }
        ],
        "start": 1116,
        "end": 1134
      },
      "declare": false,
      "start": 1103,
      "end": 1134
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1147
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1157,
                "end": 1163
              },
              "start": 1155,
              "end": 1163
            },
            "accessibility": null,
            "static": false,
            "start": 1154,
            "end": 1164
          }
        ],
        "start": 1148,
        "end": 1166
      },
      "declare": false,
      "start": 1135,
      "end": 1166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1181
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1200
                      },
                      "typeArguments": null,
                      "start": 1198,
                      "end": 1200
                    },
                    "start": 1196,
                    "end": 1200
                  },
                  "start": 1194,
                  "end": 1200
                },
                "init": null,
                "definite": false,
                "start": 1194,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1190,
            "end": 1201
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1213,
              "end": 1215
            },
            "start": 1206,
            "end": 1216
          }
        ],
        "start": 1184,
        "end": 1218
      },
      "expression": false,
      "start": 1167,
      "end": 1218
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1234
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1229,
            "end": 1236
          },
          "definite": false,
          "start": 1223,
          "end": 1236
        }
      ],
      "declare": false,
      "start": 1219,
      "end": 1237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1248,
        "end": 1250
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1262,
              "end": 1263
            },
            "start": 1255,
            "end": 1264
          }
        ],
        "start": 1253,
        "end": 1266
      },
      "expression": false,
      "start": 1239,
      "end": 1266
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1279
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1294
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1297,
                    "end": 1298
                  },
                  "definite": false,
                  "start": 1293,
                  "end": 1298
                }
              ],
              "declare": false,
              "start": 1289,
              "end": 1299
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1282,
            "end": 1299
          }
        ],
        "start": 1280,
        "end": 1301
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1267,
      "end": 1301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1316
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1332,
              "end": 1334
            },
            "start": 1325,
            "end": 1335
          }
        ],
        "start": 1319,
        "end": 1337
      },
      "expression": false,
      "start": 1302,
      "end": 1337
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
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1342,
            "end": 1345
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1348,
              "end": 1353
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1348,
            "end": 1355
          },
          "definite": false,
          "start": 1342,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1338,
      "end": 1356
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1366
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1378,
                "end": 1384
              },
              "start": 1376,
              "end": 1384
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1373,
            "end": 1385
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1401
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1403
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1405,
                "end": 1408
              },
              "expression": false,
              "start": 1401,
              "end": 1408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1390,
            "end": 1408
          }
        ],
        "start": 1367,
        "end": 1410
      },
      "abstract": false,
      "declare": false,
      "start": 1358,
      "end": 1410
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1423
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 1441,
                    "end": 1442
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1445,
                    "end": 1446
                  },
                  "definite": false,
                  "start": 1441,
                  "end": 1446
                }
              ],
              "declare": false,
              "start": 1437,
              "end": 1447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1430,
            "end": 1447
          }
        ],
        "start": 1424,
        "end": 1449
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1411,
      "end": 1449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1464
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
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1480,
              "end": 1482
            },
            "start": 1473,
            "end": 1483
          }
        ],
        "start": 1467,
        "end": 1485
      },
      "expression": false,
      "start": 1450,
      "end": 1485
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
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1490,
            "end": 1493
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1496,
              "end": 1501
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1496,
            "end": 1503
          },
          "definite": false,
          "start": 1490,
          "end": 1503
        }
      ],
      "declare": false,
      "start": 1486,
      "end": 1504
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1511,
        "end": 1513
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1516,
              "end": 1517
            },
            "initializer": null,
            "computed": false,
            "start": 1516,
            "end": 1517
          }
        ],
        "start": 1514,
        "end": 1519
      },
      "const": false,
      "declare": false,
      "start": 1506,
      "end": 1519
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1530,
        "end": 1532
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 1546,
                    "end": 1547
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1550,
                    "end": 1551
                  },
                  "definite": false,
                  "start": 1546,
                  "end": 1551
                }
              ],
              "declare": false,
              "start": 1542,
              "end": 1552
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1535,
            "end": 1552
          }
        ],
        "start": 1533,
        "end": 1554
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1520,
      "end": 1554
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1569
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
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1587
            },
            "start": 1578,
            "end": 1588
          }
        ],
        "start": 1572,
        "end": 1590
      },
      "expression": false,
      "start": 1555,
      "end": 1590
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1598
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1601,
              "end": 1606
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1601,
            "end": 1608
          },
          "definite": false,
          "start": 1595,
          "end": 1608
        }
      ],
      "declare": false,
      "start": 1591,
      "end": 1609
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 111,
  "end": 1609
}
```
