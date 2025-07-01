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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 36,
              "end": 38
            },
            "start": 34,
            "end": 38
          },
          "start": 33,
          "end": 38
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 43,
              "end": 50
            },
            "start": 41,
            "end": 50
          },
          "start": 40,
          "end": 50
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 64,
                  "end": 67
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "start": 64,
                "end": 72
              },
              "prefix": true,
              "start": 62,
              "end": 73
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 85,
                  "end": 92
                }
              ],
              "start": 75,
              "end": 98
            },
            "alternate": null,
            "start": 58,
            "end": 98
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "directive": null,
            "start": 103,
            "end": 105
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "prefix": true,
              "start": 121,
              "end": 123
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 135,
                  "end": 142
                }
              ],
              "start": 125,
              "end": 148
            },
            "alternate": null,
            "start": 117,
            "end": 148
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "directive": null,
            "start": 153,
            "end": 155
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 173,
                  "end": 176
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "start": 173,
                "end": 181
              },
              "prefix": true,
              "start": 171,
              "end": 182
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 194,
                  "end": 201
                }
              ],
              "start": 184,
              "end": 207
            },
            "alternate": null,
            "start": 167,
            "end": 207
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "directive": null,
            "start": 212,
            "end": 214
          }
        ],
        "start": 52,
        "end": 223
      },
      "expression": false,
      "start": 22,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isHTMLTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 275,
              "end": 282
            },
            "start": 273,
            "end": 282
          },
          "start": 268,
          "end": 282
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 285,
          "end": 292
        },
        "start": 283,
        "end": 292
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 313
                    },
                    "prefix": true,
                    "start": 307,
                    "end": 313
                  },
                  "prefix": true,
                  "start": 306,
                  "end": 313
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 322
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 340
                  },
                  "start": 317,
                  "end": 340
                },
                "start": 306,
                "end": 340
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "html",
                  "raw": "'html'",
                  "start": 344,
                  "end": 350
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 359
                },
                "start": 344,
                "end": 359
              },
              "start": 306,
              "end": 359
            },
            "start": 299,
            "end": 360
          }
        ],
        "start": 293,
        "end": 362
      },
      "expression": false,
      "start": 247,
      "end": 362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 375
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
              "type": "TSUnknownKeyword",
              "start": 379,
              "end": 386
            },
            "start": 377,
            "end": 386
          },
          "start": 376,
          "end": 386
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 407
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 425
                  },
                  "start": 406,
                  "end": 425
                },
                "start": 401,
                "end": 425
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 429,
                  "end": 432
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 437
                },
                "start": 429,
                "end": 437
              },
              "start": 401,
              "end": 437
            },
            "start": 394,
            "end": 438
          }
        ],
        "start": 388,
        "end": 440
      },
      "expression": false,
      "start": 364,
      "end": 440
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 453
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
              "start": 454,
              "end": 455
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 454,
            "end": 455
          }
        ],
        "start": 453,
        "end": 456
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
                "start": 460,
                "end": 461
              },
              "typeArguments": null,
              "start": 460,
              "end": 461
            },
            "start": 458,
            "end": 461
          },
          "start": 457,
          "end": 461
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 477
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 482
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 500
                  },
                  "start": 481,
                  "end": 500
                },
                "start": 476,
                "end": 500
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 504,
                  "end": 507
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 512
                },
                "start": 504,
                "end": 512
              },
              "start": 476,
              "end": 512
            },
            "start": 469,
            "end": 513
          }
        ],
        "start": 463,
        "end": 515
      },
      "expression": false,
      "start": 442,
      "end": 515
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 528
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 532,
              "end": 534
            },
            "start": 530,
            "end": 534
          },
          "start": 529,
          "end": 534
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 568
                },
                "start": 549,
                "end": 568
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 572,
                  "end": 575
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 580
                },
                "start": 572,
                "end": 580
              },
              "start": 549,
              "end": 580
            },
            "start": 542,
            "end": 581
          }
        ],
        "start": 536,
        "end": 583
      },
      "expression": false,
      "start": 517,
      "end": 583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 596
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
              "start": 597,
              "end": 598
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 607,
              "end": 609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 597,
            "end": 609
          }
        ],
        "start": 596,
        "end": 610
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
                "start": 614,
                "end": 615
              },
              "typeArguments": null,
              "start": 614,
              "end": 615
            },
            "start": 612,
            "end": 615
          },
          "start": 611,
          "end": 615
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 649
                },
                "start": 630,
                "end": 649
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 653,
                  "end": 656
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 661
                },
                "start": 653,
                "end": 661
              },
              "start": 630,
              "end": 661
            },
            "start": 623,
            "end": 662
          }
        ],
        "start": 617,
        "end": 664
      },
      "expression": false,
      "start": 585,
      "end": 664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
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
                    "start": 684,
                    "end": 685
                  },
                  "typeArguments": null,
                  "start": 684,
                  "end": 685
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 688,
                  "end": 690
                }
              ],
              "start": 684,
              "end": 690
            },
            "start": 682,
            "end": 690
          },
          "start": 681,
          "end": 690
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 724
                },
                "start": 705,
                "end": 724
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 728,
                  "end": 731
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 736
                },
                "start": 728,
                "end": 736
              },
              "start": 705,
              "end": 736
            },
            "start": 698,
            "end": 737
          }
        ],
        "start": 692,
        "end": 739
      },
      "expression": false,
      "start": 666,
      "end": 739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 763,
              "end": 765
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 765
          }
        ],
        "start": 752,
        "end": 766
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
                    "start": 770,
                    "end": 771
                  },
                  "typeArguments": null,
                  "start": 770,
                  "end": 771
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 774,
                  "end": 776
                }
              ],
              "start": 770,
              "end": 776
            },
            "start": 768,
            "end": 776
          },
          "start": 767,
          "end": 776
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 792
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 810
                },
                "start": 791,
                "end": 810
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 814,
                  "end": 817
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 822
                },
                "start": 814,
                "end": 822
              },
              "start": 791,
              "end": 822
            },
            "start": 784,
            "end": 823
          }
        ],
        "start": 778,
        "end": 825
      },
      "expression": false,
      "start": 741,
      "end": 825
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 838
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
              "start": 839,
              "end": 840
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 849,
              "end": 855
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 839,
            "end": 855
          }
        ],
        "start": 838,
        "end": 856
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
                    "start": 860,
                    "end": 861
                  },
                  "typeArguments": null,
                  "start": 860,
                  "end": 861
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 864,
                  "end": 866
                }
              ],
              "start": 860,
              "end": 866
            },
            "start": 858,
            "end": 866
          },
          "start": 857,
          "end": 866
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 882
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 900
                },
                "start": 881,
                "end": 900
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 904,
                  "end": 907
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 912
                },
                "start": 904,
                "end": 912
              },
              "start": 881,
              "end": 912
            },
            "start": 874,
            "end": 913
          }
        ],
        "start": 868,
        "end": 915
      },
      "expression": false,
      "start": 827,
      "end": 915
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 915
}
```
