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
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 15,
              "end": 21
            },
            "start": 13,
            "end": 21
          },
          "start": 12,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 39,
                "end": 44
              },
              "start": 33,
              "end": 44
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "directive": null,
                  "start": 56,
                  "end": 58
                }
              ],
              "start": 46,
              "end": 74
            },
            "alternate": null,
            "start": 29,
            "end": 74
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 89,
                  "end": 94
                },
                "start": 83,
                "end": 94
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 104,
                  "end": 109
                },
                "start": 98,
                "end": 109
              },
              "start": 83,
              "end": 109
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "directive": null,
                  "start": 121,
                  "end": 123
                }
              ],
              "start": 111,
              "end": 147
            },
            "alternate": null,
            "start": 79,
            "end": 147
          }
        ],
        "start": 23,
        "end": 149
      },
      "expression": false,
      "start": 0,
      "end": 149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 166,
              "end": 172
            },
            "start": 164,
            "end": 172
          },
          "start": 163,
          "end": 172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 206,
                  "end": 211
                },
                "consequent": [],
                "start": 201,
                "end": 212
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 226,
                  "end": 231
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 246
                    },
                    "directive": null,
                    "start": 245,
                    "end": 247
                  }
                ],
                "start": 221,
                "end": 247
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 279,
                  "end": 284
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 299
                    },
                    "directive": null,
                    "start": 298,
                    "end": 300
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 274,
                "end": 345
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 376
                    },
                    "directive": null,
                    "start": 375,
                    "end": 377
                  }
                ],
                "start": 354,
                "end": 377
              }
            ],
            "start": 180,
            "end": 394
          }
        ],
        "start": 174,
        "end": 396
      },
      "expression": false,
      "start": 151,
      "end": 396
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 409
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 413,
              "end": 419
            },
            "start": 411,
            "end": 419
          },
          "start": 410,
          "end": 419
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 435
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 440,
                    "end": 445
                  },
                  "start": 434,
                  "end": 445
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 450
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 455,
                    "end": 460
                  },
                  "start": 449,
                  "end": 460
                },
                "start": 434,
                "end": 460
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 476
              },
              "start": 434,
              "end": 476
            },
            "start": 427,
            "end": 477
          }
        ],
        "start": 421,
        "end": 509
      },
      "expression": false,
      "start": 398,
      "end": 509
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 522
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
              "start": 526,
              "end": 532
            },
            "start": 524,
            "end": 532
          },
          "start": 523,
          "end": 532
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 550,
                  "end": 551
                },
                "start": 544,
                "end": 551
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 556
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 561,
                  "end": 562
                },
                "start": 555,
                "end": 562
              },
              "start": 544,
              "end": 562
            },
            "consequent": {
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
                    "start": 581,
                    "end": 582
                  },
                  "start": 574,
                  "end": 583
                }
              ],
              "start": 564,
              "end": 599
            },
            "alternate": null,
            "start": 540,
            "end": 599
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 619
              },
              "typeArguments": null,
              "arguments": [],
              "start": 610,
              "end": 621
            },
            "start": 604,
            "end": 622
          }
        ],
        "start": 534,
        "end": 624
      },
      "expression": false,
      "start": 511,
      "end": 624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 637
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
              "start": 641,
              "end": 647
            },
            "start": 639,
            "end": 647
          },
          "start": 638,
          "end": 647
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 652,
                    "end": 653
                  },
                  "start": 652,
                  "end": 653
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 656,
                    "end": 657
                  },
                  "start": 656,
                  "end": 657
                }
              ],
              "start": 652,
              "end": 657
            },
            "start": 650,
            "end": 657
          },
          "start": 649,
          "end": 657
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 670
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 675,
                  "end": 676
                },
                "start": 669,
                "end": 676
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 681
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 687
                },
                "start": 680,
                "end": 687
              },
              "start": 669,
              "end": 687
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 699,
                    "end": 700
                  },
                  "directive": null,
                  "start": 699,
                  "end": 701
                }
              ],
              "start": 689,
              "end": 721
            },
            "alternate": null,
            "start": 665,
            "end": 721
          }
        ],
        "start": 659,
        "end": 723
      },
      "expression": false,
      "start": 626,
      "end": 723
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 736
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
              "start": 740,
              "end": 746
            },
            "start": 738,
            "end": 746
          },
          "start": 737,
          "end": 746
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 751,
                    "end": 752
                  },
                  "start": 751,
                  "end": 752
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 755,
                    "end": 756
                  },
                  "start": 755,
                  "end": 756
                }
              ],
              "start": 751,
              "end": 756
            },
            "start": 749,
            "end": 756
          },
          "start": 748,
          "end": 756
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 775
                },
                "start": 768,
                "end": 775
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 779,
                  "end": 780
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 786
                },
                "start": 779,
                "end": 786
              },
              "start": 768,
              "end": 786
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 799
                  },
                  "directive": null,
                  "start": 798,
                  "end": 800
                }
              ],
              "start": 788,
              "end": 820
            },
            "alternate": null,
            "start": 764,
            "end": 820
          }
        ],
        "start": 758,
        "end": 822
      },
      "expression": false,
      "start": 725,
      "end": 822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 835
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 839,
                  "end": 845
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 848,
                    "end": 853
                  },
                  "start": 848,
                  "end": 853
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 856,
                    "end": 861
                  },
                  "start": 856,
                  "end": 861
                }
              ],
              "start": 839,
              "end": 861
            },
            "start": 837,
            "end": 861
          },
          "start": 836,
          "end": 861
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 866,
                    "end": 867
                  },
                  "start": 866,
                  "end": 867
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 870,
                    "end": 871
                  },
                  "start": 870,
                  "end": 871
                },
                {
                  "type": "TSStringKeyword",
                  "start": 874,
                  "end": 880
                }
              ],
              "start": 866,
              "end": 880
            },
            "start": 864,
            "end": 880
          },
          "start": 863,
          "end": 880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 892,
                "end": 893
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 899
              },
              "start": 892,
              "end": 899
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 911,
                    "end": 912
                  },
                  "directive": null,
                  "start": 911,
                  "end": 913
                }
              ],
              "start": 901,
              "end": 945
            },
            "alternate": null,
            "start": 888,
            "end": 945
          }
        ],
        "start": 882,
        "end": 947
      },
      "expression": false,
      "start": 824,
      "end": 947
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 960
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 964,
                  "end": 970
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 973,
                    "end": 978
                  },
                  "start": 973,
                  "end": 978
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 981,
                    "end": 986
                  },
                  "start": 981,
                  "end": 986
                }
              ],
              "start": 964,
              "end": 986
            },
            "start": 962,
            "end": 986
          },
          "start": 961,
          "end": 986
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1020,
                  "end": 1021
                },
                "consequent": [],
                "start": 1015,
                "end": 1022
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1036,
                  "end": 1037
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1052
                    },
                    "directive": null,
                    "start": 1051,
                    "end": 1053
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1076,
                    "end": 1082
                  }
                ],
                "start": 1031,
                "end": 1082
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1096,
                  "end": 1101
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1116
                    },
                    "directive": null,
                    "start": 1115,
                    "end": 1117
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1140,
                    "end": 1146
                  }
                ],
                "start": 1091,
                "end": 1146
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1176,
                      "end": 1177
                    },
                    "directive": null,
                    "start": 1176,
                    "end": 1178
                  }
                ],
                "start": 1155,
                "end": 1178
              }
            ],
            "start": 994,
            "end": 1203
          }
        ],
        "start": 988,
        "end": 1205
      },
      "expression": false,
      "start": 949,
      "end": 1205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1205
}
```
