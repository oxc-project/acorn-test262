__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 60
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 75
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
                      "value": 0,
                      "raw": "0",
                      "start": 87,
                      "end": 88
                    },
                    "start": 80,
                    "end": 89
                  }
                ],
                "start": 78,
                "end": 90
              },
              "expression": false,
              "start": 63,
              "end": 90
            },
            "definite": false,
            "start": 35,
            "end": 90
          }
        ],
        "declare": false,
        "start": 29,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 90
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 124
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 133,
                "end": 136
              },
              "id": null,
              "generator": false,
              "start": 127,
              "end": 136
            },
            "definite": false,
            "start": 104,
            "end": 136
          }
        ],
        "declare": false,
        "start": 98,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 91,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 173
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 188
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
                      "value": 0,
                      "raw": "0",
                      "start": 200,
                      "end": 201
                    },
                    "start": 193,
                    "end": 202
                  }
                ],
                "start": 191,
                "end": 203
              },
              "expression": false,
              "start": 176,
              "end": 203
            },
            "definite": false,
            "start": 150,
            "end": 203
          }
        ],
        "declare": false,
        "start": 146,
        "end": 203
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 203
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 233
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 242,
                "end": 245
              },
              "id": null,
              "generator": false,
              "start": 236,
              "end": 245
            },
            "definite": false,
            "start": 215,
            "end": 245
          }
        ],
        "declare": false,
        "start": 211,
        "end": 246
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 204,
      "end": 246
    },
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
              "name": "fnExpressionVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 282
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 297
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
                      "value": 0,
                      "raw": "0",
                      "start": 309,
                      "end": 310
                    },
                    "start": 302,
                    "end": 311
                  }
                ],
                "start": 300,
                "end": 312
              },
              "expression": false,
              "start": 285,
              "end": 312
            },
            "definite": false,
            "start": 259,
            "end": 312
          }
        ],
        "declare": false,
        "start": 255,
        "end": 312
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 248,
      "end": 312
    },
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
              "name": "fnArrowVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 342
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 351,
                "end": 354
              },
              "id": null,
              "generator": false,
              "start": 345,
              "end": 354
            },
            "definite": false,
            "start": 324,
            "end": 354
          }
        ],
        "declare": false,
        "start": 320,
        "end": 355
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 313,
      "end": 355
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 410
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 425
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 429,
                  "end": 435
                },
                "start": 427,
                "end": 435
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 445,
                      "end": 446
                    },
                    "start": 438,
                    "end": 447
                  }
                ],
                "start": 436,
                "end": 448
              },
              "expression": false,
              "start": 413,
              "end": 448
            },
            "definite": false,
            "start": 383,
            "end": 448
          }
        ],
        "declare": false,
        "start": 377,
        "end": 448
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 370,
      "end": 448
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 484
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 488,
                    "end": 490
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 503,
                      "end": 506
                    },
                    "expression": false,
                    "start": 493,
                    "end": 506
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 506
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 509,
                  "end": 515
                },
                "start": 507,
                "end": 515
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 519,
                "end": 522
              },
              "id": null,
              "generator": false,
              "start": 487,
              "end": 522
            },
            "definite": false,
            "start": 462,
            "end": 522
          }
        ],
        "declare": false,
        "start": 456,
        "end": 523
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 449,
      "end": 523
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 561
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 576
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 580,
                  "end": 586
                },
                "start": 578,
                "end": 586
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 596,
                      "end": 597
                    },
                    "start": 589,
                    "end": 598
                  }
                ],
                "start": 587,
                "end": 599
              },
              "expression": false,
              "start": 564,
              "end": 599
            },
            "definite": false,
            "start": 536,
            "end": 599
          }
        ],
        "declare": false,
        "start": 532,
        "end": 599
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 525,
      "end": 599
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 631
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 637
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 650,
                      "end": 653
                    },
                    "expression": false,
                    "start": 640,
                    "end": 653
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 653
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 656,
                  "end": 662
                },
                "start": 654,
                "end": 662
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 666,
                "end": 669
              },
              "id": null,
              "generator": false,
              "start": 634,
              "end": 669
            },
            "definite": false,
            "start": 611,
            "end": 669
          }
        ],
        "declare": false,
        "start": 607,
        "end": 670
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 600,
      "end": 670
    },
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
              "name": "fnExpressionVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 708
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 723
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 727,
                  "end": 733
                },
                "start": 725,
                "end": 733
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 743,
                      "end": 744
                    },
                    "start": 736,
                    "end": 745
                  }
                ],
                "start": 734,
                "end": 746
              },
              "expression": false,
              "start": 711,
              "end": 746
            },
            "definite": false,
            "start": 683,
            "end": 746
          }
        ],
        "declare": false,
        "start": 679,
        "end": 746
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 672,
      "end": 746
    },
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
              "name": "fnArrowVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 778
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 784
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 797,
                      "end": 800
                    },
                    "expression": false,
                    "start": 787,
                    "end": 800
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 800
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 803,
                  "end": 809
                },
                "start": 801,
                "end": 809
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 813,
                "end": 816
              },
              "id": null,
              "generator": false,
              "start": 781,
              "end": 816
            },
            "definite": false,
            "start": 758,
            "end": 816
          }
        ],
        "declare": false,
        "start": 754,
        "end": 817
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 747,
      "end": 817
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
            "name": "fnExpressionConstVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 874
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 889
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
                    "value": 0,
                    "raw": "0",
                    "start": 901,
                    "end": 902
                  },
                  "start": 894,
                  "end": 903
                }
              ],
              "start": 892,
              "end": 904
            },
            "expression": false,
            "start": 877,
            "end": 904
          },
          "definite": false,
          "start": 841,
          "end": 904
        }
      ],
      "declare": false,
      "start": 835,
      "end": 904
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
            "name": "fnArrowConstVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 911,
            "end": 939
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "S",
              "raw": "\"S\"",
              "start": 948,
              "end": 951
            },
            "id": null,
            "generator": false,
            "start": 942,
            "end": 951
          },
          "definite": false,
          "start": 911,
          "end": 951
        }
      ],
      "declare": false,
      "start": 905,
      "end": 952
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
            "name": "fnExpressionLetVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 958,
            "end": 989
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1004
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
                    "value": 0,
                    "raw": "0",
                    "start": 1016,
                    "end": 1017
                  },
                  "start": 1009,
                  "end": 1018
                }
              ],
              "start": 1007,
              "end": 1019
            },
            "expression": false,
            "start": 992,
            "end": 1019
          },
          "definite": false,
          "start": 958,
          "end": 1019
        }
      ],
      "declare": false,
      "start": 954,
      "end": 1019
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
            "name": "fnArrowLetVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1050
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "S",
              "raw": "\"S\"",
              "start": 1059,
              "end": 1062
            },
            "id": null,
            "generator": false,
            "start": 1053,
            "end": 1062
          },
          "definite": false,
          "start": 1024,
          "end": 1062
        }
      ],
      "declare": false,
      "start": 1020,
      "end": 1063
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
            "name": "fnExpressionVarVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1100
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1112,
              "end": 1115
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
                    "value": 0,
                    "raw": "0",
                    "start": 1127,
                    "end": 1128
                  },
                  "start": 1120,
                  "end": 1129
                }
              ],
              "start": 1118,
              "end": 1130
            },
            "expression": false,
            "start": 1103,
            "end": 1130
          },
          "definite": false,
          "start": 1069,
          "end": 1130
        }
      ],
      "declare": false,
      "start": 1065,
      "end": 1130
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
            "name": "fnArrowVarVariableInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1135,
            "end": 1161
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "S",
              "raw": "\"S\"",
              "start": 1170,
              "end": 1173
            },
            "id": null,
            "generator": false,
            "start": 1164,
            "end": 1173
          },
          "definite": false,
          "start": 1135,
          "end": 1173
        }
      ],
      "declare": false,
      "start": 1131,
      "end": 1174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1208,
          "end": 1221
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
                "name": "fnExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1261
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1276
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
                        "value": 0,
                        "raw": "0",
                        "start": 1288,
                        "end": 1289
                      },
                      "start": 1281,
                      "end": 1290
                    }
                  ],
                  "start": 1279,
                  "end": 1292
                },
                "expression": false,
                "start": 1264,
                "end": 1292
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1249,
              "end": 1292
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1304
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1313,
                  "end": 1316
                },
                "id": null,
                "generator": false,
                "start": 1307,
                "end": 1316
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1297,
              "end": 1317
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1336,
                "end": 1357
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1369,
                  "end": 1372
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
                        "value": 0,
                        "raw": "0",
                        "start": 1384,
                        "end": 1385
                      },
                      "start": 1377,
                      "end": 1386
                    }
                  ],
                  "start": 1375,
                  "end": 1388
                },
                "expression": false,
                "start": 1360,
                "end": 1388
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1326,
              "end": 1388
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1403,
                "end": 1419
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1428,
                  "end": 1431
                },
                "id": null,
                "generator": false,
                "start": 1422,
                "end": 1431
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1393,
              "end": 1432
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1463
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1475,
                  "end": 1478
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
                        "value": 0,
                        "raw": "0",
                        "start": 1490,
                        "end": 1491
                      },
                      "start": 1483,
                      "end": 1492
                    }
                  ],
                  "start": 1481,
                  "end": 1494
                },
                "expression": false,
                "start": 1466,
                "end": 1494
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1438,
              "end": 1494
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 1506,
                "end": 1519
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1528,
                  "end": 1531
                },
                "id": null,
                "generator": false,
                "start": 1522,
                "end": 1531
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1499,
              "end": 1532
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1581
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1593,
                  "end": 1596
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
                        "value": 0,
                        "raw": "0",
                        "start": 1608,
                        "end": 1609
                      },
                      "start": 1601,
                      "end": 1610
                    }
                  ],
                  "start": 1599,
                  "end": 1612
                },
                "expression": false,
                "start": 1584,
                "end": 1612
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1537,
              "end": 1612
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1660
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1669,
                  "end": 1672
                },
                "id": null,
                "generator": false,
                "start": 1663,
                "end": 1672
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1621,
              "end": 1673
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1724
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1739
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1743,
                    "end": 1749
                  },
                  "start": 1741,
                  "end": 1749
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1759,
                        "end": 1760
                      },
                      "start": 1752,
                      "end": 1761
                    }
                  ],
                  "start": 1750,
                  "end": 1763
                },
                "expression": false,
                "start": 1727,
                "end": 1763
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1710,
              "end": 1763
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1777
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1784,
                    "end": 1790
                  },
                  "start": 1782,
                  "end": 1790
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1794,
                  "end": 1797
                },
                "id": null,
                "generator": false,
                "start": 1780,
                "end": 1797
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1768,
              "end": 1798
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 1813,
                "end": 1836
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1848,
                  "end": 1851
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1855,
                    "end": 1861
                  },
                  "start": 1853,
                  "end": 1861
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1871,
                        "end": 1872
                      },
                      "start": 1864,
                      "end": 1873
                    }
                  ],
                  "start": 1862,
                  "end": 1875
                },
                "expression": false,
                "start": 1839,
                "end": 1875
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1803,
              "end": 1875
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 1890,
                "end": 1908
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1915,
                    "end": 1921
                  },
                  "start": 1913,
                  "end": 1921
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1925,
                  "end": 1928
                },
                "id": null,
                "generator": false,
                "start": 1911,
                "end": 1928
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 1880,
              "end": 1929
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 1942,
                "end": 1962
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1977
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1981,
                    "end": 1987
                  },
                  "start": 1979,
                  "end": 1987
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1997,
                        "end": 1998
                      },
                      "start": 1990,
                      "end": 1999
                    }
                  ],
                  "start": 1988,
                  "end": 2001
                },
                "expression": false,
                "start": 1965,
                "end": 2001
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1935,
              "end": 2001
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2013,
                "end": 2028
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2035,
                    "end": 2041
                  },
                  "start": 2033,
                  "end": 2041
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2045,
                  "end": 2048
                },
                "id": null,
                "generator": false,
                "start": 2031,
                "end": 2048
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2006,
              "end": 2049
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2071,
                "end": 2100
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2112,
                  "end": 2115
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2119,
                    "end": 2125
                  },
                  "start": 2117,
                  "end": 2125
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2135,
                        "end": 2136
                      },
                      "start": 2128,
                      "end": 2137
                    }
                  ],
                  "start": 2126,
                  "end": 2139
                },
                "expression": false,
                "start": 2103,
                "end": 2139
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 2054,
              "end": 2139
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2165,
                "end": 2189
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2196,
                    "end": 2202
                  },
                  "start": 2194,
                  "end": 2202
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2206,
                  "end": 2209
                },
                "id": null,
                "generator": false,
                "start": 2192,
                "end": 2209
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 2148,
              "end": 2210
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2265,
                "end": 2284
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2299
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
                        "value": 0,
                        "raw": "0",
                        "start": 2311,
                        "end": 2312
                      },
                      "start": 2304,
                      "end": 2313
                    }
                  ],
                  "start": 2302,
                  "end": 2315
                },
                "expression": false,
                "start": 2287,
                "end": 2315
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2257,
              "end": 2315
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2328,
                "end": 2342
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2351,
                  "end": 2354
                },
                "id": null,
                "generator": false,
                "start": 2345,
                "end": 2354
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2320,
              "end": 2355
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnArrow",
                "start": 2360,
                "end": 2368
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2377,
                  "end": 2380
                },
                "id": null,
                "generator": false,
                "start": 2371,
                "end": 2380
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2360,
              "end": 2381
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnExpression",
                "start": 2386,
                "end": 2399
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2411,
                  "end": 2414
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
                        "value": 0,
                        "raw": "0",
                        "start": 2426,
                        "end": 2427
                      },
                      "start": 2419,
                      "end": 2428
                    }
                  ],
                  "start": 2417,
                  "end": 2429
                },
                "expression": false,
                "start": 2402,
                "end": 2429
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2386,
              "end": 2429
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2449,
                "end": 2474
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2486,
                  "end": 2489
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
                        "value": 0,
                        "raw": "0",
                        "start": 2501,
                        "end": 2502
                      },
                      "start": 2494,
                      "end": 2503
                    }
                  ],
                  "start": 2492,
                  "end": 2505
                },
                "expression": false,
                "start": 2477,
                "end": 2505
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2434,
              "end": 2505
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2525,
                "end": 2545
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 2554,
                  "end": 2557
                },
                "id": null,
                "generator": false,
                "start": 2548,
                "end": 2557
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 2510,
              "end": 2558
            }
          ],
          "start": 1222,
          "end": 2560
        },
        "abstract": false,
        "declare": false,
        "start": 1202,
        "end": 2560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1195,
      "end": 2560
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndirectlyExportedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 2584,
        "end": 2607
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
              "name": "fnExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 2615,
              "end": 2627
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2639,
                "end": 2642
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
                      "value": 0,
                      "raw": "0",
                      "start": 2654,
                      "end": 2655
                    },
                    "start": 2647,
                    "end": 2656
                  }
                ],
                "start": 2645,
                "end": 2658
              },
              "expression": false,
              "start": 2630,
              "end": 2658
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2615,
            "end": 2658
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2663,
              "end": 2670
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 2679,
                "end": 2682
              },
              "id": null,
              "generator": false,
              "start": 2673,
              "end": 2682
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2663,
            "end": 2683
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 2696,
              "end": 2714
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2726,
                "end": 2729
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
                      "value": 0,
                      "raw": "0",
                      "start": 2741,
                      "end": 2742
                    },
                    "start": 2734,
                    "end": 2743
                  }
                ],
                "start": 2732,
                "end": 2745
              },
              "expression": false,
              "start": 2717,
              "end": 2745
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2689,
            "end": 2745
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2757,
              "end": 2770
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 2779,
                "end": 2782
              },
              "id": null,
              "generator": false,
              "start": 2773,
              "end": 2782
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2750,
            "end": 2783
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 2810,
              "end": 2837
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2849,
                "end": 2852
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
                      "value": 0,
                      "raw": "0",
                      "start": 2864,
                      "end": 2865
                    },
                    "start": 2857,
                    "end": 2866
                  }
                ],
                "start": 2855,
                "end": 2868
              },
              "expression": false,
              "start": 2840,
              "end": 2868
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 2793,
            "end": 2868
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 2894,
              "end": 2916
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 2925,
                "end": 2928
              },
              "id": null,
              "generator": false,
              "start": 2919,
              "end": 2928
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 2877,
            "end": 2929
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2943,
              "end": 2962
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2974,
                "end": 2977
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
                      "value": 0,
                      "raw": "0",
                      "start": 2989,
                      "end": 2990
                    },
                    "start": 2982,
                    "end": 2991
                  }
                ],
                "start": 2980,
                "end": 2993
              },
              "expression": false,
              "start": 2965,
              "end": 2993
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2935,
            "end": 2993
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3006,
              "end": 3020
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3029,
                "end": 3032
              },
              "id": null,
              "generator": false,
              "start": 3023,
              "end": 3032
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2998,
            "end": 3033
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnArrow",
              "start": 3038,
              "end": 3046
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3055,
                "end": 3058
              },
              "id": null,
              "generator": false,
              "start": 3049,
              "end": 3058
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3038,
            "end": 3059
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnExpression",
              "start": 3064,
              "end": 3077
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3089,
                "end": 3092
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
                      "value": 0,
                      "raw": "0",
                      "start": 3104,
                      "end": 3105
                    },
                    "start": 3097,
                    "end": 3106
                  }
                ],
                "start": 3095,
                "end": 3107
              },
              "expression": false,
              "start": 3080,
              "end": 3107
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3064,
            "end": 3107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3127,
              "end": 3152
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3164,
                "end": 3167
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
                      "value": 0,
                      "raw": "0",
                      "start": 3179,
                      "end": 3180
                    },
                    "start": 3172,
                    "end": 3181
                  }
                ],
                "start": 3170,
                "end": 3183
              },
              "expression": false,
              "start": 3155,
              "end": 3183
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3112,
            "end": 3183
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3203,
              "end": 3223
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3232,
                "end": 3235
              },
              "id": null,
              "generator": false,
              "start": 3226,
              "end": 3235
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3188,
            "end": 3236
          }
        ],
        "start": 2608,
        "end": 3238
      },
      "abstract": false,
      "declare": false,
      "start": 2578,
      "end": 3238
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IndirectlyExportedClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3262,
                    "end": 3285
                  },
                  "typeArguments": null,
                  "start": 3262,
                  "end": 3285
                },
                "start": 3260,
                "end": 3285
              },
              "start": 3252,
              "end": 3285
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndirectlyExportedClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3315
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3288,
              "end": 3317
            },
            "definite": false,
            "start": 3252,
            "end": 3317
          }
        ],
        "declare": false,
        "start": 3246,
        "end": 3318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3239,
      "end": 3318
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InternalClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 3339,
        "end": 3352
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
              "name": "fnExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 3360,
              "end": 3372
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3384,
                "end": 3387
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
                      "value": 0,
                      "raw": "0",
                      "start": 3399,
                      "end": 3400
                    },
                    "start": 3392,
                    "end": 3401
                  }
                ],
                "start": 3390,
                "end": 3403
              },
              "expression": false,
              "start": 3375,
              "end": 3403
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3360,
            "end": 3403
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 3408,
              "end": 3415
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3424,
                "end": 3427
              },
              "id": null,
              "generator": false,
              "start": 3418,
              "end": 3427
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3408,
            "end": 3428
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 3441,
              "end": 3459
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3471,
                "end": 3474
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
                      "value": 0,
                      "raw": "0",
                      "start": 3486,
                      "end": 3487
                    },
                    "start": 3479,
                    "end": 3488
                  }
                ],
                "start": 3477,
                "end": 3490
              },
              "expression": false,
              "start": 3462,
              "end": 3490
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3434,
            "end": 3490
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 3502,
              "end": 3515
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3524,
                "end": 3527
              },
              "id": null,
              "generator": false,
              "start": 3518,
              "end": 3527
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3495,
            "end": 3528
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 3555,
              "end": 3582
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3594,
                "end": 3597
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
                      "value": 0,
                      "raw": "0",
                      "start": 3609,
                      "end": 3610
                    },
                    "start": 3602,
                    "end": 3611
                  }
                ],
                "start": 3600,
                "end": 3613
              },
              "expression": false,
              "start": 3585,
              "end": 3613
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 3538,
            "end": 3613
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowProtected",
              "optional": false,
              "typeAnnotation": null,
              "start": 3639,
              "end": 3661
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3670,
                "end": 3673
              },
              "id": null,
              "generator": false,
              "start": 3664,
              "end": 3673
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 3622,
            "end": 3674
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3688,
              "end": 3707
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3719,
                "end": 3722
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
                      "value": 0,
                      "raw": "0",
                      "start": 3734,
                      "end": 3735
                    },
                    "start": 3727,
                    "end": 3736
                  }
                ],
                "start": 3725,
                "end": 3738
              },
              "expression": false,
              "start": 3710,
              "end": 3738
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3680,
            "end": 3738
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3751,
              "end": 3765
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3774,
                "end": 3777
              },
              "id": null,
              "generator": false,
              "start": 3768,
              "end": 3777
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3743,
            "end": 3778
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnArrow",
              "start": 3783,
              "end": 3791
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3800,
                "end": 3803
              },
              "id": null,
              "generator": false,
              "start": 3794,
              "end": 3803
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3783,
            "end": 3804
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fnExpression",
              "start": 3809,
              "end": 3822
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3834,
                "end": 3837
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
                      "value": 0,
                      "raw": "0",
                      "start": 3849,
                      "end": 3850
                    },
                    "start": 3842,
                    "end": 3851
                  }
                ],
                "start": 3840,
                "end": 3852
              },
              "expression": false,
              "start": 3825,
              "end": 3852
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3809,
            "end": 3852
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticExpressionPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3872,
              "end": 3897
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3909,
                "end": 3912
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
                      "value": 0,
                      "raw": "0",
                      "start": 3924,
                      "end": 3925
                    },
                    "start": 3917,
                    "end": 3926
                  }
                ],
                "start": 3915,
                "end": 3928
              },
              "expression": false,
              "start": 3900,
              "end": 3928
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3857,
            "end": 3928
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnStaticArrowPrivate",
              "optional": false,
              "typeAnnotation": null,
              "start": 3948,
              "end": 3968
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 3977,
                "end": 3980
              },
              "id": null,
              "generator": false,
              "start": 3971,
              "end": 3980
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3933,
            "end": 3981
          }
        ],
        "start": 3353,
        "end": 3983
      },
      "abstract": false,
      "declare": false,
      "start": 3333,
      "end": 3983
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
            "name": "internalInstance",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InternalClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4008,
                  "end": 4021
                },
                "typeArguments": null,
                "start": 4008,
                "end": 4021
              },
              "start": 4006,
              "end": 4021
            },
            "start": 3990,
            "end": 4021
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "InternalClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 4028,
              "end": 4041
            },
            "typeArguments": null,
            "arguments": [],
            "start": 4024,
            "end": 4043
          },
          "definite": false,
          "start": 3990,
          "end": 4043
        }
      ],
      "declare": false,
      "start": 3984,
      "end": 4044
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4126,
              "end": 4156
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4168,
                "end": 4171
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4172,
                    "end": 4174
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4187,
                      "end": 4190
                    },
                    "expression": false,
                    "start": 4177,
                    "end": 4190
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4172,
                  "end": 4190
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
                      "value": 0,
                      "raw": "0",
                      "start": 4201,
                      "end": 4202
                    },
                    "start": 4194,
                    "end": 4203
                  }
                ],
                "start": 4192,
                "end": 4204
              },
              "expression": false,
              "start": 4159,
              "end": 4204
            },
            "definite": false,
            "start": 4126,
            "end": 4204
          }
        ],
        "declare": false,
        "start": 4120,
        "end": 4204
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4113,
      "end": 4204
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4218,
              "end": 4243
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4247,
                    "end": 4249
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4258,
                      "end": 4259
                    },
                    "id": null,
                    "generator": false,
                    "start": 4252,
                    "end": 4259
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4247,
                  "end": 4259
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4264,
                "end": 4267
              },
              "id": null,
              "generator": false,
              "start": 4246,
              "end": 4267
            },
            "definite": false,
            "start": 4218,
            "end": 4267
          }
        ],
        "declare": false,
        "start": 4212,
        "end": 4268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4205,
      "end": 4268
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4281,
              "end": 4309
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4321,
                "end": 4324
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4325,
                    "end": 4327
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4340,
                      "end": 4343
                    },
                    "expression": false,
                    "start": 4330,
                    "end": 4343
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4325,
                  "end": 4343
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
                      "value": 0,
                      "raw": "0",
                      "start": 4354,
                      "end": 4355
                    },
                    "start": 4347,
                    "end": 4356
                  }
                ],
                "start": 4345,
                "end": 4357
              },
              "expression": false,
              "start": 4312,
              "end": 4357
            },
            "definite": false,
            "start": 4281,
            "end": 4357
          }
        ],
        "declare": false,
        "start": 4277,
        "end": 4357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4270,
      "end": 4357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4369,
              "end": 4392
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4396,
                    "end": 4398
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4407,
                      "end": 4408
                    },
                    "id": null,
                    "generator": false,
                    "start": 4401,
                    "end": 4408
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4396,
                  "end": 4408
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4413,
                "end": 4416
              },
              "id": null,
              "generator": false,
              "start": 4395,
              "end": 4416
            },
            "definite": false,
            "start": 4369,
            "end": 4416
          }
        ],
        "declare": false,
        "start": 4365,
        "end": 4417
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4358,
      "end": 4417
    },
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
              "name": "fnParamExpressionVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4430,
              "end": 4458
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4470,
                "end": 4473
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4474,
                    "end": 4476
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4489,
                      "end": 4492
                    },
                    "expression": false,
                    "start": 4479,
                    "end": 4492
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4474,
                  "end": 4492
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
                      "value": 0,
                      "raw": "0",
                      "start": 4503,
                      "end": 4504
                    },
                    "start": 4496,
                    "end": 4505
                  }
                ],
                "start": 4494,
                "end": 4506
              },
              "expression": false,
              "start": 4461,
              "end": 4506
            },
            "definite": false,
            "start": 4430,
            "end": 4506
          }
        ],
        "declare": false,
        "start": 4426,
        "end": 4506
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4419,
      "end": 4506
    },
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
              "name": "fnParamArrowVarVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 4518,
              "end": 4541
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4545,
                    "end": 4547
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4556,
                      "end": 4557
                    },
                    "id": null,
                    "generator": false,
                    "start": 4550,
                    "end": 4557
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4545,
                  "end": 4557
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4562,
                "end": 4565
              },
              "id": null,
              "generator": false,
              "start": 4544,
              "end": 4565
            },
            "definite": false,
            "start": 4518,
            "end": 4565
          }
        ],
        "declare": false,
        "start": 4514,
        "end": 4566
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4507,
      "end": 4566
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4636,
              "end": 4684
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4696,
                "end": 4699
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4700,
                    "end": 4702
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4715,
                      "end": 4718
                    },
                    "expression": false,
                    "start": 4705,
                    "end": 4718
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4700,
                  "end": 4718
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4721,
                  "end": 4727
                },
                "start": 4719,
                "end": 4727
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4737,
                      "end": 4738
                    },
                    "start": 4730,
                    "end": 4739
                  }
                ],
                "start": 4728,
                "end": 4740
              },
              "expression": false,
              "start": 4687,
              "end": 4740
            },
            "definite": false,
            "start": 4636,
            "end": 4740
          }
        ],
        "declare": false,
        "start": 4630,
        "end": 4740
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4623,
      "end": 4740
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4754,
              "end": 4797
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4801,
                    "end": 4803
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4816,
                      "end": 4819
                    },
                    "expression": false,
                    "start": 4806,
                    "end": 4819
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4801,
                  "end": 4819
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4822,
                  "end": 4828
                },
                "start": 4820,
                "end": 4828
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 4832,
                "end": 4835
              },
              "id": null,
              "generator": false,
              "start": 4800,
              "end": 4835
            },
            "definite": false,
            "start": 4754,
            "end": 4835
          }
        ],
        "declare": false,
        "start": 4748,
        "end": 4836
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4741,
      "end": 4836
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4849,
              "end": 4895
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4907,
                "end": 4910
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4911,
                    "end": 4913
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 4926,
                      "end": 4929
                    },
                    "expression": false,
                    "start": 4916,
                    "end": 4929
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4911,
                  "end": 4929
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4932,
                  "end": 4938
                },
                "start": 4930,
                "end": 4938
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4948,
                      "end": 4949
                    },
                    "start": 4941,
                    "end": 4950
                  }
                ],
                "start": 4939,
                "end": 4951
              },
              "expression": false,
              "start": 4898,
              "end": 4951
            },
            "definite": false,
            "start": 4849,
            "end": 4951
          }
        ],
        "declare": false,
        "start": 4845,
        "end": 4951
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4838,
      "end": 4951
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4963,
              "end": 5004
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5008,
                    "end": 5010
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5023,
                      "end": 5026
                    },
                    "expression": false,
                    "start": 5013,
                    "end": 5026
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5008,
                  "end": 5026
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5029,
                  "end": 5035
                },
                "start": 5027,
                "end": 5035
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5039,
                "end": 5042
              },
              "id": null,
              "generator": false,
              "start": 5007,
              "end": 5042
            },
            "definite": false,
            "start": 4963,
            "end": 5042
          }
        ],
        "declare": false,
        "start": 4959,
        "end": 5043
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4952,
      "end": 5043
    },
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
              "name": "fnParamExpressionVarVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5056,
              "end": 5102
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5114,
                "end": 5117
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5118,
                    "end": 5120
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5133,
                      "end": 5136
                    },
                    "expression": false,
                    "start": 5123,
                    "end": 5136
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5118,
                  "end": 5136
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5139,
                  "end": 5145
                },
                "start": 5137,
                "end": 5145
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5155,
                      "end": 5156
                    },
                    "start": 5148,
                    "end": 5157
                  }
                ],
                "start": 5146,
                "end": 5158
              },
              "expression": false,
              "start": 5105,
              "end": 5158
            },
            "definite": false,
            "start": 5056,
            "end": 5158
          }
        ],
        "declare": false,
        "start": 5052,
        "end": 5158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5045,
      "end": 5158
    },
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
              "name": "fnParamArrowVarVariableOwnerHasReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5170,
              "end": 5211
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5215,
                    "end": 5217
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5230,
                      "end": 5233
                    },
                    "expression": false,
                    "start": 5220,
                    "end": 5233
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5215,
                  "end": 5233
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5236,
                  "end": 5242
                },
                "start": 5234,
                "end": 5242
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5246,
                "end": 5249
              },
              "id": null,
              "generator": false,
              "start": 5214,
              "end": 5249
            },
            "definite": false,
            "start": 5170,
            "end": 5249
          }
        ],
        "declare": false,
        "start": 5166,
        "end": 5250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5159,
      "end": 5250
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5278,
              "end": 5310
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5322,
                "end": 5325
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5326,
                    "end": 5328
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5343,
                        "end": 5347
                      },
                      "start": 5341,
                      "end": 5347
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5347,
                      "end": 5350
                    },
                    "expression": false,
                    "start": 5331,
                    "end": 5350
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5326,
                  "end": 5350
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5353,
                  "end": 5359
                },
                "start": 5351,
                "end": 5359
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5369,
                      "end": 5370
                    },
                    "start": 5362,
                    "end": 5371
                  }
                ],
                "start": 5360,
                "end": 5372
              },
              "expression": false,
              "start": 5313,
              "end": 5372
            },
            "definite": false,
            "start": 5278,
            "end": 5372
          }
        ],
        "declare": false,
        "start": 5272,
        "end": 5372
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5265,
      "end": 5372
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5386,
              "end": 5413
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5417,
                    "end": 5419
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5434,
                        "end": 5438
                      },
                      "start": 5432,
                      "end": 5438
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5438,
                      "end": 5441
                    },
                    "expression": false,
                    "start": 5422,
                    "end": 5441
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5417,
                  "end": 5441
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5444,
                  "end": 5450
                },
                "start": 5442,
                "end": 5450
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5454,
                "end": 5457
              },
              "id": null,
              "generator": false,
              "start": 5416,
              "end": 5457
            },
            "definite": false,
            "start": 5386,
            "end": 5457
          }
        ],
        "declare": false,
        "start": 5380,
        "end": 5458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5373,
      "end": 5458
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5471,
              "end": 5501
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5513,
                "end": 5516
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5517,
                    "end": 5519
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5534,
                        "end": 5538
                      },
                      "start": 5532,
                      "end": 5538
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5538,
                      "end": 5541
                    },
                    "expression": false,
                    "start": 5522,
                    "end": 5541
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5517,
                  "end": 5541
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5544,
                  "end": 5550
                },
                "start": 5542,
                "end": 5550
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5560,
                      "end": 5561
                    },
                    "start": 5553,
                    "end": 5562
                  }
                ],
                "start": 5551,
                "end": 5563
              },
              "expression": false,
              "start": 5504,
              "end": 5563
            },
            "definite": false,
            "start": 5471,
            "end": 5563
          }
        ],
        "declare": false,
        "start": 5467,
        "end": 5563
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5460,
      "end": 5563
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5575,
              "end": 5600
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5604,
                    "end": 5606
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5621,
                        "end": 5625
                      },
                      "start": 5619,
                      "end": 5625
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5625,
                      "end": 5628
                    },
                    "expression": false,
                    "start": 5609,
                    "end": 5628
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5604,
                  "end": 5628
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5631,
                  "end": 5637
                },
                "start": 5629,
                "end": 5637
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5641,
                "end": 5644
              },
              "id": null,
              "generator": false,
              "start": 5603,
              "end": 5644
            },
            "definite": false,
            "start": 5575,
            "end": 5644
          }
        ],
        "declare": false,
        "start": 5571,
        "end": 5645
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5564,
      "end": 5645
    },
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
              "name": "fnParamExpressionVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5658,
              "end": 5688
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5700,
                "end": 5703
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5704,
                    "end": 5706
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5721,
                        "end": 5725
                      },
                      "start": 5719,
                      "end": 5725
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5725,
                      "end": 5728
                    },
                    "expression": false,
                    "start": 5709,
                    "end": 5728
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5704,
                  "end": 5728
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5731,
                  "end": 5737
                },
                "start": 5729,
                "end": 5737
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5747,
                      "end": 5748
                    },
                    "start": 5740,
                    "end": 5749
                  }
                ],
                "start": 5738,
                "end": 5750
              },
              "expression": false,
              "start": 5691,
              "end": 5750
            },
            "definite": false,
            "start": 5658,
            "end": 5750
          }
        ],
        "declare": false,
        "start": 5654,
        "end": 5750
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5647,
      "end": 5750
    },
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
              "name": "fnParamArrowVarVariableOk",
              "optional": false,
              "typeAnnotation": null,
              "start": 5762,
              "end": 5787
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5791,
                    "end": 5793
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5808,
                        "end": 5812
                      },
                      "start": 5806,
                      "end": 5812
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5812,
                      "end": 5815
                    },
                    "expression": false,
                    "start": 5796,
                    "end": 5815
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5791,
                  "end": 5815
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5818,
                  "end": 5824
                },
                "start": 5816,
                "end": 5824
              },
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 5828,
                "end": 5831
              },
              "id": null,
              "generator": false,
              "start": 5790,
              "end": 5831
            },
            "definite": false,
            "start": 5762,
            "end": 5831
          }
        ],
        "declare": false,
        "start": 5758,
        "end": 5832
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5751,
      "end": 5832
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionConstVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 5847,
              "end": 5885
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5897,
                "end": 5900
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5901,
                    "end": 5903
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5916,
                      "end": 5919
                    },
                    "expression": false,
                    "start": 5906,
                    "end": 5919
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5901,
                  "end": 5919
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
                      "value": 0,
                      "raw": "0",
                      "start": 5930,
                      "end": 5931
                    },
                    "start": 5923,
                    "end": 5932
                  }
                ],
                "start": 5921,
                "end": 5933
              },
              "expression": false,
              "start": 5888,
              "end": 5933
            },
            "definite": false,
            "start": 5847,
            "end": 5933
          }
        ],
        "declare": false,
        "start": 5841,
        "end": 5933
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5834,
      "end": 5933
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowConstVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 5947,
              "end": 5980
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5984,
                    "end": 5986
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5995,
                      "end": 5996
                    },
                    "id": null,
                    "generator": false,
                    "start": 5989,
                    "end": 5996
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5984,
                  "end": 5996
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 6001,
                "end": 6004
              },
              "id": null,
              "generator": false,
              "start": 5983,
              "end": 6004
            },
            "definite": false,
            "start": 5947,
            "end": 6004
          }
        ],
        "declare": false,
        "start": 5941,
        "end": 6005
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5934,
      "end": 6005
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamExpressionLetVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6018,
              "end": 6054
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 6066,
                "end": 6069
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6070,
                    "end": 6072
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6085,
                      "end": 6088
                    },
                    "expression": false,
                    "start": 6075,
                    "end": 6088
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6070,
                  "end": 6088
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
                      "value": 0,
                      "raw": "0",
                      "start": 6099,
                      "end": 6100
                    },
                    "start": 6092,
                    "end": 6101
                  }
                ],
                "start": 6090,
                "end": 6102
              },
              "expression": false,
              "start": 6057,
              "end": 6102
            },
            "definite": false,
            "start": 6018,
            "end": 6102
          }
        ],
        "declare": false,
        "start": 6014,
        "end": 6102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6007,
      "end": 6102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnParamArrowLetVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6114,
              "end": 6145
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6149,
                    "end": 6151
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6160,
                      "end": 6161
                    },
                    "id": null,
                    "generator": false,
                    "start": 6154,
                    "end": 6161
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6149,
                  "end": 6161
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 6166,
                "end": 6169
              },
              "id": null,
              "generator": false,
              "start": 6148,
              "end": 6169
            },
            "definite": false,
            "start": 6114,
            "end": 6169
          }
        ],
        "declare": false,
        "start": 6110,
        "end": 6170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6103,
      "end": 6170
    },
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
              "name": "fnParamExpressionVarVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6183,
              "end": 6219
            },
            "init": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 6231,
                "end": 6234
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6235,
                    "end": 6237
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6250,
                      "end": 6253
                    },
                    "expression": false,
                    "start": 6240,
                    "end": 6253
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6235,
                  "end": 6253
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
                      "value": 0,
                      "raw": "0",
                      "start": 6264,
                      "end": 6265
                    },
                    "start": 6257,
                    "end": 6266
                  }
                ],
                "start": 6255,
                "end": 6267
              },
              "expression": false,
              "start": 6222,
              "end": 6267
            },
            "definite": false,
            "start": 6183,
            "end": 6267
          }
        ],
        "declare": false,
        "start": 6179,
        "end": 6267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6172,
      "end": 6267
    },
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
              "name": "fnParamArrowVarVariableInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 6279,
              "end": 6310
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6314,
                    "end": 6316
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6325,
                      "end": 6326
                    },
                    "id": null,
                    "generator": false,
                    "start": 6319,
                    "end": 6326
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6314,
                  "end": 6326
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "S",
                "raw": "\"S\"",
                "start": 6331,
                "end": 6334
              },
              "id": null,
              "generator": false,
              "start": 6313,
              "end": 6334
            },
            "definite": false,
            "start": 6279,
            "end": 6334
          }
        ],
        "declare": false,
        "start": 6275,
        "end": 6335
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6268,
      "end": 6335
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FnParamsExportedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 6373,
          "end": 6394
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
                "name": "fnExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 6422,
                "end": 6434
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6446,
                  "end": 6449
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6450,
                      "end": 6452
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6465,
                        "end": 6468
                      },
                      "expression": false,
                      "start": 6455,
                      "end": 6468
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6450,
                    "end": 6468
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
                        "value": 0,
                        "raw": "0",
                        "start": 6479,
                        "end": 6480
                      },
                      "start": 6472,
                      "end": 6481
                    }
                  ],
                  "start": 6470,
                  "end": 6483
                },
                "expression": false,
                "start": 6437,
                "end": 6483
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6422,
              "end": 6483
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 6488,
                "end": 6495
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6499,
                      "end": 6501
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6514,
                        "end": 6517
                      },
                      "expression": false,
                      "start": 6504,
                      "end": 6517
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6499,
                    "end": 6517
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6522,
                  "end": 6525
                },
                "id": null,
                "generator": false,
                "start": 6498,
                "end": 6525
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6488,
              "end": 6526
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6541,
                "end": 6562
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6574,
                  "end": 6577
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6578,
                      "end": 6580
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6593,
                        "end": 6596
                      },
                      "expression": false,
                      "start": 6583,
                      "end": 6596
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6578,
                    "end": 6596
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
                        "value": 0,
                        "raw": "0",
                        "start": 6607,
                        "end": 6608
                      },
                      "start": 6600,
                      "end": 6609
                    }
                  ],
                  "start": 6598,
                  "end": 6611
                },
                "expression": false,
                "start": 6565,
                "end": 6611
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6531,
              "end": 6611
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6626,
                "end": 6642
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6646,
                      "end": 6648
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6661,
                        "end": 6664
                      },
                      "expression": false,
                      "start": 6651,
                      "end": 6664
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6646,
                    "end": 6664
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6669,
                  "end": 6672
                },
                "id": null,
                "generator": false,
                "start": 6645,
                "end": 6672
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6616,
              "end": 6673
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpression",
                "optional": false,
                "typeAnnotation": null,
                "start": 6686,
                "end": 6704
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6716,
                  "end": 6719
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6720,
                      "end": 6722
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6735,
                        "end": 6738
                      },
                      "expression": false,
                      "start": 6725,
                      "end": 6738
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6720,
                    "end": 6738
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
                        "value": 0,
                        "raw": "0",
                        "start": 6749,
                        "end": 6750
                      },
                      "start": 6742,
                      "end": 6751
                    }
                  ],
                  "start": 6740,
                  "end": 6753
                },
                "expression": false,
                "start": 6707,
                "end": 6753
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6679,
              "end": 6753
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 6765,
                "end": 6778
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6782,
                      "end": 6784
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6797,
                        "end": 6800
                      },
                      "expression": false,
                      "start": 6787,
                      "end": 6800
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6782,
                    "end": 6800
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6805,
                  "end": 6808
                },
                "id": null,
                "generator": false,
                "start": 6781,
                "end": 6808
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6758,
              "end": 6809
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6831,
                "end": 6858
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6870,
                  "end": 6873
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6874,
                      "end": 6876
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6889,
                        "end": 6892
                      },
                      "expression": false,
                      "start": 6879,
                      "end": 6892
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6874,
                    "end": 6892
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
                        "value": 0,
                        "raw": "0",
                        "start": 6903,
                        "end": 6904
                      },
                      "start": 6896,
                      "end": 6905
                    }
                  ],
                  "start": 6894,
                  "end": 6907
                },
                "expression": false,
                "start": 6861,
                "end": 6907
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6814,
              "end": 6907
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtected",
                "optional": false,
                "typeAnnotation": null,
                "start": 6933,
                "end": 6955
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6959,
                      "end": 6961
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6974,
                        "end": 6977
                      },
                      "expression": false,
                      "start": 6964,
                      "end": 6977
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6959,
                    "end": 6977
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 6982,
                  "end": 6985
                },
                "id": null,
                "generator": false,
                "start": 6958,
                "end": 6985
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 6916,
              "end": 6986
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7024,
                "end": 7051
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7063,
                  "end": 7066
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7067,
                      "end": 7069
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7082,
                        "end": 7085
                      },
                      "expression": false,
                      "start": 7072,
                      "end": 7085
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7067,
                    "end": 7085
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7088,
                    "end": 7094
                  },
                  "start": 7086,
                  "end": 7094
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7104,
                        "end": 7105
                      },
                      "start": 7097,
                      "end": 7106
                    }
                  ],
                  "start": 7095,
                  "end": 7108
                },
                "expression": false,
                "start": 7054,
                "end": 7108
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7024,
              "end": 7108
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7113,
                "end": 7135
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7139,
                      "end": 7141
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7154,
                        "end": 7157
                      },
                      "expression": false,
                      "start": 7144,
                      "end": 7157
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7139,
                    "end": 7157
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7160,
                    "end": 7166
                  },
                  "start": 7158,
                  "end": 7166
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7170,
                  "end": 7173
                },
                "id": null,
                "generator": false,
                "start": 7138,
                "end": 7173
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7113,
              "end": 7174
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7189,
                "end": 7225
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7237,
                  "end": 7240
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7241,
                      "end": 7243
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7256,
                        "end": 7259
                      },
                      "expression": false,
                      "start": 7246,
                      "end": 7259
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7241,
                    "end": 7259
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7262,
                    "end": 7268
                  },
                  "start": 7260,
                  "end": 7268
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7278,
                        "end": 7279
                      },
                      "start": 7271,
                      "end": 7280
                    }
                  ],
                  "start": 7269,
                  "end": 7282
                },
                "expression": false,
                "start": 7228,
                "end": 7282
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7179,
              "end": 7282
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7297,
                "end": 7328
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7332,
                      "end": 7334
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7347,
                        "end": 7350
                      },
                      "expression": false,
                      "start": 7337,
                      "end": 7350
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7332,
                    "end": 7350
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7353,
                    "end": 7359
                  },
                  "start": 7351,
                  "end": 7359
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7363,
                  "end": 7366
                },
                "id": null,
                "generator": false,
                "start": 7331,
                "end": 7366
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7287,
              "end": 7367
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7380,
                "end": 7413
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7425,
                  "end": 7428
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7429,
                      "end": 7431
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7444,
                        "end": 7447
                      },
                      "expression": false,
                      "start": 7434,
                      "end": 7447
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7429,
                    "end": 7447
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7450,
                    "end": 7456
                  },
                  "start": 7448,
                  "end": 7456
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7466,
                        "end": 7467
                      },
                      "start": 7459,
                      "end": 7468
                    }
                  ],
                  "start": 7457,
                  "end": 7470
                },
                "expression": false,
                "start": 7416,
                "end": 7470
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7373,
              "end": 7470
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7482,
                "end": 7510
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7514,
                      "end": 7516
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7529,
                        "end": 7532
                      },
                      "expression": false,
                      "start": 7519,
                      "end": 7532
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7514,
                    "end": 7532
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7535,
                    "end": 7541
                  },
                  "start": 7533,
                  "end": 7541
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7545,
                  "end": 7548
                },
                "id": null,
                "generator": false,
                "start": 7513,
                "end": 7548
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7475,
              "end": 7549
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7571,
                "end": 7613
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7625,
                  "end": 7628
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7629,
                      "end": 7631
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7644,
                        "end": 7647
                      },
                      "expression": false,
                      "start": 7634,
                      "end": 7647
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7629,
                    "end": 7647
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 7650,
                    "end": 7656
                  },
                  "start": 7648,
                  "end": 7656
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 7666,
                        "end": 7667
                      },
                      "start": 7659,
                      "end": 7668
                    }
                  ],
                  "start": 7657,
                  "end": 7670
                },
                "expression": false,
                "start": 7616,
                "end": 7670
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7554,
              "end": 7670
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedMethodHasReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7696,
                "end": 7733
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7737,
                      "end": 7739
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7752,
                        "end": 7755
                      },
                      "expression": false,
                      "start": 7742,
                      "end": 7755
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7737,
                    "end": 7755
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 7758,
                    "end": 7764
                  },
                  "start": 7756,
                  "end": 7764
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7768,
                  "end": 7771
                },
                "id": null,
                "generator": false,
                "start": 7736,
                "end": 7771
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7679,
              "end": 7772
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 7819,
                "end": 7842
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7854,
                  "end": 7857
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7858,
                      "end": 7860
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 7875,
                          "end": 7879
                        },
                        "start": 7873,
                        "end": 7879
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7880,
                        "end": 7883
                      },
                      "expression": false,
                      "start": 7863,
                      "end": 7883
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7858,
                    "end": 7883
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
                        "value": 0,
                        "raw": "0",
                        "start": 7894,
                        "end": 7895
                      },
                      "start": 7887,
                      "end": 7896
                    }
                  ],
                  "start": 7885,
                  "end": 7898
                },
                "expression": false,
                "start": 7845,
                "end": 7898
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7819,
              "end": 7898
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 7903,
                "end": 7921
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7925,
                      "end": 7927
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 7942,
                          "end": 7946
                        },
                        "start": 7940,
                        "end": 7946
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7947,
                        "end": 7950
                      },
                      "expression": false,
                      "start": 7930,
                      "end": 7950
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7925,
                    "end": 7950
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 7955,
                  "end": 7958
                },
                "id": null,
                "generator": false,
                "start": 7924,
                "end": 7958
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7903,
              "end": 7959
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 7974,
                "end": 8006
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8018,
                  "end": 8021
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8022,
                      "end": 8024
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8039,
                          "end": 8043
                        },
                        "start": 8037,
                        "end": 8043
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8044,
                        "end": 8047
                      },
                      "expression": false,
                      "start": 8027,
                      "end": 8047
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8022,
                    "end": 8047
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
                        "value": 0,
                        "raw": "0",
                        "start": 8058,
                        "end": 8059
                      },
                      "start": 8051,
                      "end": 8060
                    }
                  ],
                  "start": 8049,
                  "end": 8062
                },
                "expression": false,
                "start": 8009,
                "end": 8062
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 7964,
              "end": 8062
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8077,
                "end": 8104
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8108,
                      "end": 8110
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8125,
                          "end": 8129
                        },
                        "start": 8123,
                        "end": 8129
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8130,
                        "end": 8133
                      },
                      "expression": false,
                      "start": 8113,
                      "end": 8133
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8108,
                    "end": 8133
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8138,
                  "end": 8141
                },
                "id": null,
                "generator": false,
                "start": 8107,
                "end": 8141
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8067,
              "end": 8142
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8155,
                "end": 8184
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8196,
                  "end": 8199
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8200,
                      "end": 8202
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8217,
                          "end": 8221
                        },
                        "start": 8215,
                        "end": 8221
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8221,
                        "end": 8224
                      },
                      "expression": false,
                      "start": 8205,
                      "end": 8224
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8200,
                    "end": 8224
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
                        "value": 0,
                        "raw": "0",
                        "start": 8235,
                        "end": 8236
                      },
                      "start": 8228,
                      "end": 8237
                    }
                  ],
                  "start": 8226,
                  "end": 8239
                },
                "expression": false,
                "start": 8187,
                "end": 8239
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8148,
              "end": 8239
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8251,
                "end": 8275
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8279,
                      "end": 8281
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8296,
                          "end": 8300
                        },
                        "start": 8294,
                        "end": 8300
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8300,
                        "end": 8303
                      },
                      "expression": false,
                      "start": 8284,
                      "end": 8303
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8279,
                    "end": 8303
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8308,
                  "end": 8311
                },
                "id": null,
                "generator": false,
                "start": 8278,
                "end": 8311
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8244,
              "end": 8312
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8334,
                "end": 8372
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8384,
                  "end": 8387
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8388,
                      "end": 8390
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8405,
                          "end": 8409
                        },
                        "start": 8403,
                        "end": 8409
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8409,
                        "end": 8412
                      },
                      "expression": false,
                      "start": 8393,
                      "end": 8412
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8388,
                    "end": 8412
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
                        "value": 0,
                        "raw": "0",
                        "start": 8423,
                        "end": 8424
                      },
                      "start": 8416,
                      "end": 8425
                    }
                  ],
                  "start": 8414,
                  "end": 8427
                },
                "expression": false,
                "start": 8375,
                "end": 8427
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8317,
              "end": 8427
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedOnlyOnParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 8453,
                "end": 8486
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8490,
                      "end": 8492
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8507,
                          "end": 8511
                        },
                        "start": 8505,
                        "end": 8511
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8511,
                        "end": 8514
                      },
                      "expression": false,
                      "start": 8495,
                      "end": 8514
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8490,
                    "end": 8514
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8519,
                  "end": 8522
                },
                "id": null,
                "generator": false,
                "start": 8489,
                "end": 8522
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8436,
              "end": 8523
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8560,
                "end": 8574
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8586,
                  "end": 8589
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8590,
                      "end": 8592
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8607,
                          "end": 8611
                        },
                        "start": 8605,
                        "end": 8611
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8612,
                        "end": 8615
                      },
                      "expression": false,
                      "start": 8595,
                      "end": 8615
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8590,
                    "end": 8615
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8618,
                    "end": 8624
                  },
                  "start": 8616,
                  "end": 8624
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8634,
                        "end": 8635
                      },
                      "start": 8627,
                      "end": 8636
                    }
                  ],
                  "start": 8625,
                  "end": 8638
                },
                "expression": false,
                "start": 8577,
                "end": 8638
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8560,
              "end": 8638
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 8643,
                "end": 8652
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8656,
                      "end": 8658
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8673,
                          "end": 8677
                        },
                        "start": 8671,
                        "end": 8677
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8678,
                        "end": 8681
                      },
                      "expression": false,
                      "start": 8661,
                      "end": 8681
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8656,
                    "end": 8681
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 8684,
                    "end": 8690
                  },
                  "start": 8682,
                  "end": 8690
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8694,
                  "end": 8697
                },
                "id": null,
                "generator": false,
                "start": 8655,
                "end": 8697
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8643,
              "end": 8698
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8713,
                "end": 8736
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8748,
                  "end": 8751
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8752,
                      "end": 8754
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8769,
                          "end": 8773
                        },
                        "start": 8767,
                        "end": 8773
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8774,
                        "end": 8777
                      },
                      "expression": false,
                      "start": 8757,
                      "end": 8777
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8752,
                    "end": 8777
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8780,
                    "end": 8786
                  },
                  "start": 8778,
                  "end": 8786
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8796,
                        "end": 8797
                      },
                      "start": 8789,
                      "end": 8798
                    }
                  ],
                  "start": 8787,
                  "end": 8800
                },
                "expression": false,
                "start": 8739,
                "end": 8800
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8703,
              "end": 8800
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowProtectedOK",
                "optional": false,
                "typeAnnotation": null,
                "start": 8815,
                "end": 8833
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8837,
                      "end": 8839
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8854,
                          "end": 8858
                        },
                        "start": 8852,
                        "end": 8858
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8859,
                        "end": 8862
                      },
                      "expression": false,
                      "start": 8842,
                      "end": 8862
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8837,
                    "end": 8862
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 8865,
                    "end": 8871
                  },
                  "start": 8863,
                  "end": 8871
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 8875,
                  "end": 8878
                },
                "id": null,
                "generator": false,
                "start": 8836,
                "end": 8878
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 8805,
              "end": 8879
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8892,
                "end": 8912
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8924,
                  "end": 8927
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8928,
                      "end": 8930
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8945,
                          "end": 8949
                        },
                        "start": 8943,
                        "end": 8949
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8949,
                        "end": 8952
                      },
                      "expression": false,
                      "start": 8933,
                      "end": 8952
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8928,
                    "end": 8952
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 8955,
                    "end": 8961
                  },
                  "start": 8953,
                  "end": 8961
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8971,
                        "end": 8972
                      },
                      "start": 8964,
                      "end": 8973
                    }
                  ],
                  "start": 8962,
                  "end": 8975
                },
                "expression": false,
                "start": 8915,
                "end": 8975
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8885,
              "end": 8975
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 8987,
                "end": 9002
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9006,
                      "end": 9008
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 9023,
                          "end": 9027
                        },
                        "start": 9021,
                        "end": 9027
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9027,
                        "end": 9030
                      },
                      "expression": false,
                      "start": 9011,
                      "end": 9030
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9006,
                    "end": 9030
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 9033,
                    "end": 9039
                  },
                  "start": 9031,
                  "end": 9039
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9043,
                  "end": 9046
                },
                "id": null,
                "generator": false,
                "start": 9005,
                "end": 9046
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8980,
              "end": 9047
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 9069,
                "end": 9098
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9110,
                  "end": 9113
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9114,
                      "end": 9116
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 9131,
                          "end": 9135
                        },
                        "start": 9129,
                        "end": 9135
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9135,
                        "end": 9138
                      },
                      "expression": false,
                      "start": 9119,
                      "end": 9138
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9114,
                    "end": 9138
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 9141,
                    "end": 9147
                  },
                  "start": 9139,
                  "end": 9147
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 9157,
                        "end": 9158
                      },
                      "start": 9150,
                      "end": 9159
                    }
                  ],
                  "start": 9148,
                  "end": 9161
                },
                "expression": false,
                "start": 9101,
                "end": 9161
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 9052,
              "end": 9161
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowProtectedOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 9187,
                "end": 9211
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9215,
                      "end": 9217
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 9232,
                          "end": 9236
                        },
                        "start": 9230,
                        "end": 9236
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9236,
                        "end": 9239
                      },
                      "expression": false,
                      "start": 9220,
                      "end": 9239
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9215,
                    "end": 9239
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 9242,
                    "end": 9248
                  },
                  "start": 9240,
                  "end": 9248
                },
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9252,
                  "end": 9255
                },
                "id": null,
                "generator": false,
                "start": 9214,
                "end": 9255
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected",
              "start": 9170,
              "end": 9256
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9312,
                "end": 9331
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9343,
                  "end": 9346
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9347,
                      "end": 9349
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9362,
                        "end": 9365
                      },
                      "expression": false,
                      "start": 9352,
                      "end": 9365
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9347,
                    "end": 9365
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
                        "value": 0,
                        "raw": "0",
                        "start": 9376,
                        "end": 9377
                      },
                      "start": 9369,
                      "end": 9378
                    }
                  ],
                  "start": 9367,
                  "end": 9380
                },
                "expression": false,
                "start": 9334,
                "end": 9380
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9304,
              "end": 9380
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9393,
                "end": 9407
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9411,
                      "end": 9413
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9426,
                        "end": 9429
                      },
                      "expression": false,
                      "start": 9416,
                      "end": 9429
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9411,
                    "end": 9429
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9434,
                  "end": 9437
                },
                "id": null,
                "generator": false,
                "start": 9410,
                "end": 9437
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9385,
              "end": 9438
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnArrow",
                "start": 9443,
                "end": 9451
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9455,
                      "end": 9457
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9470,
                        "end": 9473
                      },
                      "expression": false,
                      "start": 9460,
                      "end": 9473
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9455,
                    "end": 9473
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9478,
                  "end": 9481
                },
                "id": null,
                "generator": false,
                "start": 9454,
                "end": 9481
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 9443,
              "end": 9482
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "fnExpression",
                "start": 9487,
                "end": 9500
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9512,
                  "end": 9515
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9516,
                      "end": 9518
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9531,
                        "end": 9534
                      },
                      "expression": false,
                      "start": 9521,
                      "end": 9534
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9516,
                    "end": 9534
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
                        "value": 0,
                        "raw": "0",
                        "start": 9545,
                        "end": 9546
                      },
                      "start": 9538,
                      "end": 9547
                    }
                  ],
                  "start": 9536,
                  "end": 9548
                },
                "expression": false,
                "start": 9503,
                "end": 9548
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 9487,
              "end": 9548
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticExpressionPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9568,
                "end": 9593
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9605,
                  "end": 9608
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9609,
                      "end": 9611
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9624,
                        "end": 9627
                      },
                      "expression": false,
                      "start": 9614,
                      "end": 9627
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9609,
                    "end": 9627
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
                        "value": 0,
                        "raw": "0",
                        "start": 9638,
                        "end": 9639
                      },
                      "start": 9631,
                      "end": 9640
                    }
                  ],
                  "start": 9629,
                  "end": 9642
                },
                "expression": false,
                "start": 9596,
                "end": 9642
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9553,
              "end": 9642
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnStaticArrowPrivate",
                "optional": false,
                "typeAnnotation": null,
                "start": 9662,
                "end": 9682
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9686,
                      "end": 9688
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9701,
                        "end": 9704
                      },
                      "expression": false,
                      "start": 9691,
                      "end": 9704
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9686,
                    "end": 9704
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 9709,
                  "end": 9712
                },
                "id": null,
                "generator": false,
                "start": 9685,
                "end": 9712
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 9647,
              "end": 9713
            }
          ],
          "start": 6395,
          "end": 9715
        },
        "abstract": false,
        "declare": false,
        "start": 6367,
        "end": 9715
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6360,
      "end": 9715
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 9715
}
```
