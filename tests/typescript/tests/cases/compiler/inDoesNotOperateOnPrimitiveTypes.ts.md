__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "validHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 21,
                    "end": 22
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 31,
                    "end": 37
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 21,
                  "end": 37
                }
              ],
              "start": 20,
              "end": 38
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
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
                      "start": 49,
                      "end": 50
                    },
                    "typeArguments": null,
                    "start": 49,
                    "end": 50
                  },
                  "start": 47,
                  "end": 50
                },
                "start": 42,
                "end": 50
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  },
                  "start": 57,
                  "end": 65
                },
                "start": 54,
                "end": 65
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 70,
                "end": 77
              },
              "start": 68,
              "end": 77
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 95
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 104
                    },
                    "start": 92,
                    "end": 104
                  },
                  "start": 85,
                  "end": 105
                }
              ],
              "start": 81,
              "end": 113
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 113
          },
          "definite": false,
          "start": 6,
          "end": 113
        }
      ],
      "declare": false,
      "start": 0,
      "end": 114
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
            "name": "alsoValidHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 137
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 141,
                    "end": 142
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 141,
                  "end": 142
                }
              ],
              "start": 140,
              "end": 143
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
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
                      "start": 154,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 155
                  },
                  "start": 152,
                  "end": 155
                },
                "start": 147,
                "end": 155
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "start": 159,
                "end": 170
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 175,
                "end": 182
              },
              "start": 173,
              "end": 182
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 200
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 209
                    },
                    "start": 197,
                    "end": 209
                  },
                  "start": 190,
                  "end": 210
                }
              ],
              "start": 186,
              "end": 263
            },
            "id": null,
            "generator": false,
            "start": 140,
            "end": 263
          },
          "definite": false,
          "start": 122,
          "end": 263
        }
      ],
      "declare": false,
      "start": 116,
      "end": 264
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidHasKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 288
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
              "start": 289,
              "end": 290
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 299,
                  "end": 305
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 308,
                  "end": 314
                }
              ],
              "start": 299,
              "end": 314
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 289,
            "end": 314
          }
        ],
        "start": 288,
        "end": 315
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
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
                "start": 326,
                "end": 327
              },
              "typeArguments": null,
              "start": 326,
              "end": 327
            },
            "start": 324,
            "end": 327
          },
          "start": 319,
          "end": 327
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 336,
              "end": 342
            },
            "start": 334,
            "end": 342
          },
          "start": 331,
          "end": 342
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 347,
          "end": 354
        },
        "start": 345,
        "end": 354
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 369
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 378
              },
              "start": 366,
              "end": 378
            },
            "start": 359,
            "end": 379
          }
        ],
        "start": 355,
        "end": 439
      },
      "expression": false,
      "start": 266,
      "end": 439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union1",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 456
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
              "start": 457,
              "end": 458
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 467,
                  "end": 473
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 476,
                  "end": 482
                }
              ],
              "start": 467,
              "end": 482
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 457,
            "end": 482
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 494,
              "end": 501
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 484,
            "end": 501
          }
        ],
        "start": 456,
        "end": 502
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 511
                  },
                  "typeArguments": null,
                  "start": 510,
                  "end": 511
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 515
                  },
                  "typeArguments": null,
                  "start": 514,
                  "end": 515
                }
              ],
              "start": 510,
              "end": 515
            },
            "start": 508,
            "end": 515
          },
          "start": 503,
          "end": 515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 521,
                "end": 526
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 535
              },
              "start": 521,
              "end": 535
            },
            "directive": null,
            "start": 521,
            "end": 536
          }
        ],
        "start": 517,
        "end": 596
      },
      "expression": false,
      "start": 441,
      "end": 596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union2",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 613
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
              "start": 614,
              "end": 615
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 624,
              "end": 630
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 630
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 633
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 642,
                  "end": 648
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 651,
                  "end": 657
                }
              ],
              "start": 642,
              "end": 657
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 657
          }
        ],
        "start": 613,
        "end": 658
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 666,
                    "end": 667
                  },
                  "typeArguments": null,
                  "start": 666,
                  "end": 667
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 671
                  },
                  "typeArguments": null,
                  "start": 670,
                  "end": 671
                }
              ],
              "start": 666,
              "end": 671
            },
            "start": 664,
            "end": 671
          },
          "start": 659,
          "end": 671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 677,
                "end": 682
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 691
              },
              "start": 677,
              "end": 691
            },
            "directive": null,
            "start": 677,
            "end": 692
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 752
                },
                "prefix": true,
                "start": 740,
                "end": 752
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 757,
                "end": 765
              },
              "start": 740,
              "end": 765
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\"",
                      "start": 773,
                      "end": 778
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 787
                    },
                    "start": 773,
                    "end": 787
                  },
                  "directive": null,
                  "start": 773,
                  "end": 788
                }
              ],
              "start": 767,
              "end": 798
            },
            "alternate": null,
            "start": 736,
            "end": 798
          }
        ],
        "start": 673,
        "end": 800
      },
      "expression": false,
      "start": 598,
      "end": 800
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union3",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 817
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
              "start": 818,
              "end": 819
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 818,
            "end": 819
          }
        ],
        "start": 817,
        "end": 820
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 828,
                    "end": 829
                  },
                  "typeArguments": null,
                  "start": 828,
                  "end": 829
                },
                {
                  "type": "TSStringKeyword",
                  "start": 832,
                  "end": 838
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 841,
                  "end": 847
                }
              ],
              "start": 828,
              "end": 847
            },
            "start": 826,
            "end": 847
          },
          "start": 821,
          "end": 847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 853,
                "end": 858
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 867
              },
              "start": 853,
              "end": 867
            },
            "directive": null,
            "start": 853,
            "end": 868
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 928
                  },
                  "prefix": true,
                  "start": 916,
                  "end": 928
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 933,
                  "end": 941
                },
                "start": 916,
                "end": 941
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 957
                  },
                  "prefix": true,
                  "start": 945,
                  "end": 957
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 962,
                  "end": 970
                },
                "start": 945,
                "end": 970
              },
              "start": 916,
              "end": 970
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\"",
                      "start": 978,
                      "end": 983
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 987,
                      "end": 992
                    },
                    "start": 978,
                    "end": 992
                  },
                  "directive": null,
                  "start": 978,
                  "end": 993
                }
              ],
              "start": 972,
              "end": 1045
            },
            "alternate": null,
            "start": 912,
            "end": 1045
          }
        ],
        "start": 849,
        "end": 1047
      },
      "expression": false,
      "start": 802,
      "end": 1047
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1064
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
              "start": 1065,
              "end": 1066
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1075,
                  "end": 1081
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1084,
                    "end": 1091
                  },
                  "start": 1084,
                  "end": 1091
                }
              ],
              "start": 1075,
              "end": 1091
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1065,
            "end": 1091
          }
        ],
        "start": 1064,
        "end": 1092
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
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
                "start": 1100,
                "end": 1101
              },
              "typeArguments": null,
              "start": 1100,
              "end": 1101
            },
            "start": 1098,
            "end": 1101
          },
          "start": 1093,
          "end": 1101
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 1107,
                "end": 1112
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1121
              },
              "start": 1107,
              "end": 1121
            },
            "directive": null,
            "start": 1107,
            "end": 1122
          }
        ],
        "start": 1103,
        "end": 1164
      },
      "expression": false,
      "start": 1049,
      "end": 1164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1175,
        "end": 1181
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
              "start": 1182,
              "end": 1183
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1192,
                  "end": 1198
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1201,
                  "end": 1207
                }
              ],
              "start": 1192,
              "end": 1207
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1182,
            "end": 1207
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1210
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1219,
                  "end": 1225
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1228,
                  "end": 1234
                }
              ],
              "start": 1219,
              "end": 1234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1209,
            "end": 1234
          }
        ],
        "start": 1181,
        "end": 1235
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
                  },
                  "typeArguments": null,
                  "start": 1239,
                  "end": 1240
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1243,
                    "end": 1244
                  },
                  "typeArguments": null,
                  "start": 1243,
                  "end": 1244
                }
              ],
              "start": 1239,
              "end": 1244
            },
            "start": 1237,
            "end": 1244
          },
          "start": 1236,
          "end": 1244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 1823,
                "end": 1828
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1832,
                "end": 1833
              },
              "start": 1823,
              "end": 1833
            },
            "directive": null,
            "start": 1823,
            "end": 1834
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1850,
                  "end": 1851
                },
                "prefix": true,
                "start": 1843,
                "end": 1851
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 1856,
                "end": 1864
              },
              "start": 1843,
              "end": 1864
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\"",
                      "start": 1876,
                      "end": 1881
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1885,
                      "end": 1886
                    },
                    "start": 1876,
                    "end": 1886
                  },
                  "directive": null,
                  "start": 1876,
                  "end": 1887
                }
              ],
              "start": 1866,
              "end": 1893
            },
            "alternate": null,
            "start": 1839,
            "end": 1893
          }
        ],
        "start": 1246,
        "end": 1895
      },
      "expression": false,
      "start": 1166,
      "end": 1895
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1906,
        "end": 1919
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
              "start": 1920,
              "end": 1921
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1930,
              "end": 1936
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1920,
            "end": 1936
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1948,
                    "end": 1949
                  },
                  "start": 1948,
                  "end": 1949
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1952,
                    "end": 1953
                  },
                  "start": 1952,
                  "end": 1953
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1956,
                    "end": 1957
                  },
                  "start": 1956,
                  "end": 1957
                }
              ],
              "start": 1948,
              "end": 1957
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1957
          }
        ],
        "start": 1919,
        "end": 1958
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1966,
                    "end": 1967
                  },
                  "typeArguments": null,
                  "start": 1966,
                  "end": 1967
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1971
                  },
                  "typeArguments": null,
                  "start": 1970,
                  "end": 1971
                }
              ],
              "start": 1966,
              "end": 1971
            },
            "start": 1964,
            "end": 1971
          },
          "start": 1959,
          "end": 1971
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 1977,
                "end": 1982
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1986,
                "end": 1991
              },
              "start": 1977,
              "end": 1991
            },
            "directive": null,
            "start": 1977,
            "end": 1992
          }
        ],
        "start": 1973,
        "end": 2052
      },
      "expression": false,
      "start": 1897,
      "end": 2052
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "intersection2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2063,
        "end": 2076
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
              "start": 2077,
              "end": 2078
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2077,
            "end": 2078
          }
        ],
        "start": 2076,
        "end": 2079
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2087,
                    "end": 2088
                  },
                  "typeArguments": null,
                  "start": 2087,
                  "end": 2088
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 2092,
                        "end": 2093
                      },
                      "start": 2092,
                      "end": 2093
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2096,
                        "end": 2097
                      },
                      "start": 2096,
                      "end": 2097
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2100,
                        "end": 2101
                      },
                      "start": 2100,
                      "end": 2101
                    }
                  ],
                  "start": 2092,
                  "end": 2101
                }
              ],
              "start": 2087,
              "end": 2102
            },
            "start": 2085,
            "end": 2102
          },
          "start": 2080,
          "end": 2102
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "key",
                "raw": "\"key\"",
                "start": 2108,
                "end": 2113
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 2117,
                "end": 2122
              },
              "start": 2108,
              "end": 2122
            },
            "directive": null,
            "start": 2108,
            "end": 2123
          }
        ],
        "start": 2104,
        "end": 2182
      },
      "expression": false,
      "start": 2054,
      "end": 2182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2182
}
```
