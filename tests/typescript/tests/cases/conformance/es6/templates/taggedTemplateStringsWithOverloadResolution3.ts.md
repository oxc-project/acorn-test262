__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 103
              },
              "typeArguments": null,
              "start": 83,
              "end": 103
            },
            "start": 81,
            "end": 103
          },
          "start": 77,
          "end": 103
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 108,
              "end": 114
            },
            "start": 106,
            "end": 114
          },
          "start": 105,
          "end": 114
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 117,
          "end": 123
        },
        "start": 115,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 64,
      "end": 124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 164
              },
              "typeArguments": null,
              "start": 144,
              "end": 164
            },
            "start": 142,
            "end": 164
          },
          "start": 138,
          "end": 164
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 169,
              "end": 175
            },
            "start": 167,
            "end": 175
          },
          "start": 166,
          "end": 175
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 178,
          "end": 184
        },
        "start": 176,
        "end": 184
      },
      "body": null,
      "expression": false,
      "start": 125,
      "end": 185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 198
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
              "value": null,
              "raw": "null",
              "start": 210,
              "end": 214
            },
            "start": 203,
            "end": 215
          }
        ],
        "start": 201,
        "end": 217
      },
      "expression": false,
      "start": 186,
      "end": 217
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 226,
                "end": 232
              },
              "start": 224,
              "end": 232
            },
            "start": 223,
            "end": 232
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 238
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 239,
                  "end": 242
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 253,
                  "end": 255
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 252
                }
              ],
              "start": 239,
              "end": 255
            },
            "start": 235,
            "end": 255
          },
          "definite": false,
          "start": 223,
          "end": 255
        }
      ],
      "declare": false,
      "start": 219,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 294,
              "end": 297
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 301,
              "end": 303
            }
          ],
          "expressions": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 298,
              "end": 300
            }
          ],
          "start": 294,
          "end": 303
        },
        "start": 290,
        "end": 303
      },
      "directive": null,
      "start": 290,
      "end": 304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 327
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 354
              },
              "typeArguments": null,
              "start": 334,
              "end": 354
            },
            "start": 332,
            "end": 354
          },
          "start": 328,
          "end": 354
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 359,
              "end": 365
            },
            "start": 357,
            "end": 365
          },
          "start": 356,
          "end": 365
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 370,
              "end": 376
            },
            "start": 368,
            "end": 376
          },
          "start": 367,
          "end": 376
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 379,
          "end": 385
        },
        "start": 377,
        "end": 385
      },
      "body": null,
      "expression": false,
      "start": 315,
      "end": 386
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 399
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
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 399,
        "end": 402
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 429
              },
              "typeArguments": null,
              "start": 409,
              "end": 429
            },
            "start": 407,
            "end": 429
          },
          "start": 403,
          "end": 429
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 434,
              "end": 440
            },
            "start": 432,
            "end": 440
          },
          "start": 431,
          "end": 440
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 445,
                "end": 446
              },
              "typeArguments": null,
              "start": 445,
              "end": 446
            },
            "start": 443,
            "end": 446
          },
          "start": 442,
          "end": 446
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 450
          },
          "typeArguments": null,
          "start": 449,
          "end": 450
        },
        "start": 447,
        "end": 450
      },
      "body": null,
      "expression": false,
      "start": 387,
      "end": 451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 464
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
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 485
            },
            "start": 469,
            "end": 486
          }
        ],
        "start": 467,
        "end": 488
      },
      "expression": false,
      "start": 452,
      "end": 488
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 502
                },
                "typeArguments": null,
                "start": 498,
                "end": 502
              },
              "start": 496,
              "end": 502
            },
            "start": 494,
            "end": 502
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 508
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 509,
                  "end": 512
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 515,
                  "end": 518
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 529,
                  "end": 531
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 513,
                  "end": 514
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 528
                }
              ],
              "start": 509,
              "end": 531
            },
            "start": 505,
            "end": 531
          },
          "definite": false,
          "start": 494,
          "end": 531
        }
      ],
      "declare": false,
      "start": 490,
      "end": 532
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 561
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 573
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 574,
                  "end": 577
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 580,
                  "end": 583
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 594,
                  "end": 596
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 578,
                  "end": 579
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 593
                }
              ],
              "start": 574,
              "end": 596
            },
            "start": 570,
            "end": 596
          },
          "definite": false,
          "start": 559,
          "end": 596
        }
      ],
      "declare": false,
      "start": 555,
      "end": 597
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 608
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 612
          },
          "optional": false,
          "computed": false,
          "start": 606,
          "end": 612
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 606,
        "end": 614
      },
      "directive": null,
      "start": 606,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 625,
          "end": 627
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 625,
        "end": 629
      },
      "directive": null,
      "start": 625,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 747
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 748,
              "end": 751
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 754,
              "end": 757
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 761,
              "end": 763
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 752,
              "end": 753
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 758,
              "end": 760
            }
          ],
          "start": 748,
          "end": 763
        },
        "start": 744,
        "end": 763
      },
      "directive": null,
      "start": 744,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 857,
          "end": 860
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 861,
              "end": 864
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 868,
              "end": 871
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 874,
              "end": 876
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 865,
              "end": 867
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 872,
              "end": 873
            }
          ],
          "start": 861,
          "end": 876
        },
        "start": 857,
        "end": 876
      },
      "directive": null,
      "start": 857,
      "end": 877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 936,
        "end": 939
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
              "start": 940,
              "end": 941
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 940,
            "end": 941
          }
        ],
        "start": 939,
        "end": 942
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 949,
                "end": 969
              },
              "typeArguments": null,
              "start": 949,
              "end": 969
            },
            "start": 947,
            "end": 969
          },
          "start": 943,
          "end": 969
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                "start": 974,
                "end": 975
              },
              "typeArguments": null,
              "start": 974,
              "end": 975
            },
            "start": 972,
            "end": 975
          },
          "start": 971,
          "end": 975
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 978,
          "end": 984
        },
        "start": 976,
        "end": 984
      },
      "body": null,
      "expression": false,
      "start": 927,
      "end": 985
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 995,
        "end": 998
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
              "start": 999,
              "end": 1000
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 999,
            "end": 1000
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1002,
            "end": 1003
          }
        ],
        "start": 998,
        "end": 1004
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1031
              },
              "typeArguments": null,
              "start": 1011,
              "end": 1031
            },
            "start": 1009,
            "end": 1031
          },
          "start": 1005,
          "end": 1031
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1036,
              "end": 1042
            },
            "start": 1034,
            "end": 1042
          },
          "start": 1033,
          "end": 1042
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 1047,
                "end": 1048
              },
              "typeArguments": null,
              "start": 1047,
              "end": 1048
            },
            "start": 1045,
            "end": 1048
          },
          "start": 1044,
          "end": 1048
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1054
              },
              "typeArguments": null,
              "start": 1053,
              "end": 1054
            },
            "start": 1051,
            "end": 1054
          },
          "start": 1050,
          "end": 1054
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1058
          },
          "typeArguments": null,
          "start": 1057,
          "end": 1058
        },
        "start": 1055,
        "end": 1058
      },
      "body": null,
      "expression": false,
      "start": 986,
      "end": 1059
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1069,
        "end": 1072
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
              "start": 1073,
              "end": 1074
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1074
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1076,
            "end": 1077
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1080
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1079,
            "end": 1080
          }
        ],
        "start": 1072,
        "end": 1081
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1088,
                "end": 1108
              },
              "typeArguments": null,
              "start": 1088,
              "end": 1108
            },
            "start": 1086,
            "end": 1108
          },
          "start": 1082,
          "end": 1108
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1113,
                "end": 1114
              },
              "typeArguments": null,
              "start": 1113,
              "end": 1114
            },
            "start": 1111,
            "end": 1114
          },
          "start": 1110,
          "end": 1114
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1120
              },
              "typeArguments": null,
              "start": 1119,
              "end": 1120
            },
            "start": 1117,
            "end": 1120
          },
          "start": 1116,
          "end": 1120
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 1125,
                "end": 1126
              },
              "typeArguments": null,
              "start": 1125,
              "end": 1126
            },
            "start": 1123,
            "end": 1126
          },
          "start": 1122,
          "end": 1126
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1129,
          "end": 1135
        },
        "start": 1127,
        "end": 1135
      },
      "body": null,
      "expression": false,
      "start": 1060,
      "end": 1136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1146,
        "end": 1149
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
              "value": null,
              "raw": "null",
              "start": 1161,
              "end": 1165
            },
            "start": 1154,
            "end": 1166
          }
        ],
        "start": 1152,
        "end": 1168
      },
      "expression": false,
      "start": 1137,
      "end": 1168
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1174,
            "end": 1175
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1181
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1182,
                  "end": 1185
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1188,
                  "end": 1190
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1186,
                  "end": 1187
                }
              ],
              "start": 1182,
              "end": 1190
            },
            "start": 1178,
            "end": 1190
          },
          "definite": false,
          "start": 1174,
          "end": 1190
        }
      ],
      "declare": false,
      "start": 1170,
      "end": 1191
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1196,
            "end": 1197
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1203
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1204,
                  "end": 1207
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1210,
                  "end": 1213
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1216,
                  "end": 1219
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1223,
                  "end": 1225
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1207,
                  "end": 1209
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1214,
                  "end": 1215
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1220,
                  "end": 1222
                }
              ],
              "start": 1204,
              "end": 1225
            },
            "start": 1200,
            "end": 1225
          },
          "definite": false,
          "start": 1196,
          "end": 1225
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1226
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1231,
            "end": 1232
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1238
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1239,
                  "end": 1242
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1245,
                  "end": 1248
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1251,
                  "end": 1254
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1257,
                  "end": 1259
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1243,
                  "end": 1244
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1249,
                  "end": 1250
                },
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1255,
                  "end": 1256
                }
              ],
              "start": 1239,
              "end": 1259
            },
            "start": 1235,
            "end": 1259
          },
          "definite": false,
          "start": 1231,
          "end": 1259
        }
      ],
      "declare": false,
      "start": 1227,
      "end": 1260
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1268,
                "end": 1274
              },
              "start": 1266,
              "end": 1274
            },
            "start": 1265,
            "end": 1274
          },
          "init": null,
          "definite": false,
          "start": 1265,
          "end": 1274
        }
      ],
      "declare": false,
      "start": 1261,
      "end": 1275
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1390,
            "end": 1391
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1397
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1398,
                  "end": 1401
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1404,
                  "end": 1406
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1402,
                  "end": 1403
                }
              ],
              "start": 1398,
              "end": 1406
            },
            "start": 1394,
            "end": 1406
          },
          "definite": false,
          "start": 1390,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1386,
      "end": 1406
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1411,
            "end": 1412
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1418
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1419,
                  "end": 1422
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1426,
                  "end": 1429
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1433,
                  "end": 1436
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1440,
                  "end": 1442
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1423,
                  "end": 1425
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1430,
                  "end": 1432
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1437,
                  "end": 1439
                }
              ],
              "start": 1419,
              "end": 1442
            },
            "start": 1415,
            "end": 1442
          },
          "definite": false,
          "start": 1411,
          "end": 1442
        }
      ],
      "declare": false,
      "start": 1407,
      "end": 1443
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1449
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1452,
              "end": 1455
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1456,
                  "end": 1459
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1463,
                  "end": 1466
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1470,
                  "end": 1473
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1476,
                  "end": 1478
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1460,
                  "end": 1462
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1467,
                  "end": 1469
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1474,
                  "end": 1475
                }
              ],
              "start": 1456,
              "end": 1478
            },
            "start": 1452,
            "end": 1478
          },
          "definite": false,
          "start": 1448,
          "end": 1478
        }
      ],
      "declare": false,
      "start": 1444,
      "end": 1479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1583,
          "end": 1586
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1587,
              "end": 1589
            }
          ],
          "expressions": [],
          "start": 1587,
          "end": 1589
        },
        "start": 1583,
        "end": 1589
      },
      "directive": null,
      "start": 1583,
      "end": 1590
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1651
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
              "start": 1652,
              "end": 1653
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1662,
              "end": 1668
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1652,
            "end": 1668
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1671
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1680,
              "end": 1686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1670,
            "end": 1686
          }
        ],
        "start": 1651,
        "end": 1687
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1714
              },
              "typeArguments": null,
              "start": 1694,
              "end": 1714
            },
            "start": 1692,
            "end": 1714
          },
          "start": 1688,
          "end": 1714
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                "start": 1719,
                "end": 1720
              },
              "typeArguments": null,
              "start": 1719,
              "end": 1720
            },
            "start": 1717,
            "end": 1720
          },
          "start": 1716,
          "end": 1720
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1726
              },
              "typeArguments": null,
              "start": 1725,
              "end": 1726
            },
            "start": 1723,
            "end": 1726
          },
          "start": 1722,
          "end": 1726
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1639,
      "end": 1728
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1741
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
              "start": 1742,
              "end": 1743
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1752,
              "end": 1758
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1742,
            "end": 1758
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1760,
              "end": 1761
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1770,
              "end": 1776
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1760,
            "end": 1776
          }
        ],
        "start": 1741,
        "end": 1777
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1784,
                "end": 1804
              },
              "typeArguments": null,
              "start": 1784,
              "end": 1804
            },
            "start": 1782,
            "end": 1804
          },
          "start": 1778,
          "end": 1804
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                "start": 1809,
                "end": 1810
              },
              "typeArguments": null,
              "start": 1809,
              "end": 1810
            },
            "start": 1807,
            "end": 1810
          },
          "start": 1806,
          "end": 1810
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1816
              },
              "typeArguments": null,
              "start": 1815,
              "end": 1816
            },
            "start": 1813,
            "end": 1816
          },
          "start": 1812,
          "end": 1816
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1729,
      "end": 1818
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1828,
        "end": 1831
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1858
              },
              "typeArguments": null,
              "start": 1838,
              "end": 1858
            },
            "start": 1836,
            "end": 1858
          },
          "start": 1832,
          "end": 1858
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1819,
      "end": 1859
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1869,
        "end": 1872
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1875,
        "end": 1878
      },
      "expression": false,
      "start": 1860,
      "end": 1878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1965,
          "end": 1968
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1969,
              "end": 1972
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1976,
              "end": 1979
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1983,
              "end": 1985
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1973,
              "end": 1975
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1980,
              "end": 1981
            }
          ],
          "start": 1969,
          "end": 1985
        },
        "start": 1965,
        "end": 1985
      },
      "directive": null,
      "start": 1965,
      "end": 1986
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1987,
          "end": 1990
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1991,
              "end": 1994
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1998,
              "end": 2001
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2005,
              "end": 2007
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1995,
              "end": 1996
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2002,
              "end": 2004
            }
          ],
          "start": 1991,
          "end": 2007
        },
        "start": 1987,
        "end": 2007
      },
      "directive": null,
      "start": 1987,
      "end": 2008
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2009,
          "end": 2012
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2013,
              "end": 2016
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2020,
              "end": 2023
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2034,
              "end": 2036
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 2017,
              "end": 2018
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2024,
              "end": 2033
            }
          ],
          "start": 2013,
          "end": 2036
        },
        "start": 2009,
        "end": 2036
      },
      "directive": null,
      "start": 2009,
      "end": 2037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2038,
          "end": 2041
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2042,
              "end": 2045
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2049,
              "end": 2052
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2058,
              "end": 2060
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2046,
              "end": 2048
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2053,
              "end": 2057
            }
          ],
          "start": 2042,
          "end": 2060
        },
        "start": 2038,
        "end": 2060
      },
      "directive": null,
      "start": 2038,
      "end": 2061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2164,
          "end": 2167
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2168,
              "end": 2171
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2177,
              "end": 2180
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2186,
              "end": 2188
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2172,
              "end": 2176
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2181,
              "end": 2185
            }
          ],
          "start": 2168,
          "end": 2188
        },
        "start": 2164,
        "end": 2188
      },
      "directive": null,
      "start": 2164,
      "end": 2189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2319,
          "end": 2322
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2323,
              "end": 2326
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2332,
              "end": 2335
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2341,
              "end": 2343
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2327,
              "end": 2331
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2336,
              "end": 2340
            }
          ],
          "start": 2323,
          "end": 2343
        },
        "start": 2319,
        "end": 2343
      },
      "directive": null,
      "start": 2319,
      "end": 2344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2345,
          "end": 2348
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2349,
              "end": 2352
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2358,
              "end": 2361
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2367,
              "end": 2369
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2353,
              "end": 2357
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2362,
              "end": 2366
            }
          ],
          "start": 2349,
          "end": 2369
        },
        "start": 2345,
        "end": 2369
      },
      "directive": null,
      "start": 2345,
      "end": 2370
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2465,
        "end": 2468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2475,
                "end": 2495
              },
              "typeArguments": null,
              "start": 2475,
              "end": 2495
            },
            "start": 2473,
            "end": 2495
          },
          "start": 2469,
          "end": 2495
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2504,
                      "end": 2510
                    },
                    "start": 2502,
                    "end": 2510
                  },
                  "start": 2501,
                  "end": 2510
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2515,
                  "end": 2519
                },
                "start": 2512,
                "end": 2519
              },
              "start": 2500,
              "end": 2519
            },
            "start": 2498,
            "end": 2519
          },
          "start": 2497,
          "end": 2519
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2522,
          "end": 2528
        },
        "start": 2520,
        "end": 2528
      },
      "body": null,
      "expression": false,
      "start": 2456,
      "end": 2529
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2539,
        "end": 2542
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2549,
                "end": 2569
              },
              "typeArguments": null,
              "start": 2549,
              "end": 2569
            },
            "start": 2547,
            "end": 2569
          },
          "start": 2543,
          "end": 2569
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2578,
                      "end": 2584
                    },
                    "start": 2576,
                    "end": 2584
                  },
                  "start": 2575,
                  "end": 2584
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2589,
                  "end": 2593
                },
                "start": 2586,
                "end": 2593
              },
              "start": 2574,
              "end": 2593
            },
            "start": 2572,
            "end": 2593
          },
          "start": 2571,
          "end": 2593
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2596,
          "end": 2602
        },
        "start": 2594,
        "end": 2602
      },
      "body": null,
      "expression": false,
      "start": 2530,
      "end": 2603
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2613,
        "end": 2616
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
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2628,
              "end": 2637
            },
            "start": 2621,
            "end": 2638
          }
        ],
        "start": 2619,
        "end": 2640
      },
      "expression": false,
      "start": 2604,
      "end": 2640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2641,
          "end": 2644
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2645,
              "end": 2648
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2668,
              "end": 2670
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2650,
                  "end": 2651
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2656,
                    "end": 2657
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toFixed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2658,
                    "end": 2665
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2656,
                  "end": 2665
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2656,
                "end": 2667
              },
              "id": null,
              "generator": false,
              "start": 2649,
              "end": 2667
            }
          ],
          "start": 2645,
          "end": 2670
        },
        "start": 2641,
        "end": 2670
      },
      "directive": null,
      "start": 2641,
      "end": 2671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2718,
          "end": 2721
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2722,
              "end": 2725
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2745,
              "end": 2747
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2727,
                  "end": 2728
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2733,
                    "end": 2734
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "substr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2735,
                    "end": 2741
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2733,
                  "end": 2741
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2742,
                    "end": 2743
                  }
                ],
                "optional": false,
                "start": 2733,
                "end": 2744
              },
              "id": null,
              "generator": false,
              "start": 2726,
              "end": 2744
            }
          ],
          "start": 2722,
          "end": 2747
        },
        "start": 2718,
        "end": 2747
      },
      "directive": null,
      "start": 2718,
      "end": 2748
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 2749
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72,
    "range": [
      64,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 73,
    "end": 76,
    "range": [
      73,
      76
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
    "type": "Identifier",
    "value": "strs",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 83,
    "end": 103,
    "range": [
      83,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114,
    "range": [
      108,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123,
    "range": [
      117,
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
    "value": "function",
    "start": 125,
    "end": 133,
    "range": [
      125,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 138,
    "end": 142,
    "range": [
      138,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 144,
    "end": 164,
    "range": [
      144,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194,
    "range": [
      186,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209,
    "range": [
      203,
      209
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 210,
    "end": 214,
    "range": [
      210,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 219,
    "end": 222,
    "range": [
      219,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 243,
    "end": 252,
    "range": [
      243,
      252
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 253,
    "end": 255,
    "range": [
      253,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 294,
    "end": 297,
    "range": [
      294,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 301,
    "end": 303,
    "range": [
      301,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 315,
    "end": 323,
    "range": [
      315,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 324,
    "end": 327,
    "range": [
      324,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 328,
    "end": 332,
    "range": [
      328,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 334,
    "end": 354,
    "range": [
      334,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 370,
    "end": 376,
    "range": [
      370,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
    "end": 385,
    "range": [
      379,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 387,
    "end": 395,
    "range": [
      387,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 403,
    "end": 407,
    "range": [
      403,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 409,
    "end": 429,
    "range": [
      409,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 452,
    "end": 460,
    "range": [
      452,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 469,
    "end": 475,
    "range": [
      469,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 476,
    "end": 485,
    "range": [
      476,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 494,
    "end": 496,
    "range": [
      494,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 498,
    "end": 502,
    "range": [
      498,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 509,
    "end": 512,
    "range": [
      509,
      512
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 519,
    "end": 528,
    "range": [
      519,
      528
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 559,
    "end": 561,
    "range": [
      559,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 574,
    "end": 577,
    "range": [
      574,
      577
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 584,
    "end": 593,
    "range": [
      584,
      593
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 594,
    "end": 596,
    "range": [
      594,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 606,
    "end": 608,
    "range": [
      606,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 609,
    "end": 612,
    "range": [
      609,
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
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 625,
    "end": 627,
    "range": [
      625,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 744,
    "end": 747,
    "range": [
      744,
      747
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 748,
    "end": 751,
    "range": [
      748,
      751
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 761,
    "end": 763,
    "range": [
      761,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 861,
    "end": 864,
    "range": [
      861,
      864
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 865,
    "end": 867,
    "range": [
      865,
      867
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 868,
    "end": 871,
    "range": [
      868,
      871
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 874,
    "end": 876,
    "range": [
      874,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 927,
    "end": 935,
    "range": [
      927,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 936,
    "end": 939,
    "range": [
      936,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 943,
    "end": 947,
    "range": [
      943,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 949,
    "end": 969,
    "range": [
      949,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 978,
    "end": 984,
    "range": [
      978,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 986,
    "end": 994,
    "range": [
      986,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 995,
    "end": 998,
    "range": [
      995,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1005,
    "end": 1009,
    "range": [
      1005,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1011,
    "end": 1031,
    "range": [
      1011,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042,
    "range": [
      1036,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1060,
    "end": 1068,
    "range": [
      1060,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1069,
    "end": 1072,
    "range": [
      1069,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1082,
    "end": 1086,
    "range": [
      1082,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1088,
    "end": 1108,
    "range": [
      1088,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135,
    "range": [
      1129,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1137,
    "end": 1145,
    "range": [
      1137,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1146,
    "end": 1149,
    "range": [
      1146,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1161,
    "end": 1165,
    "range": [
      1161,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1170,
    "end": 1173,
    "range": [
      1170,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1178,
    "end": 1181,
    "range": [
      1178,
      1181
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1182,
    "end": 1185,
    "range": [
      1182,
      1185
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1188,
    "end": 1190,
    "range": [
      1188,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1192,
    "end": 1195,
    "range": [
      1192,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1200,
    "end": 1203,
    "range": [
      1200,
      1203
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1204,
    "end": 1207,
    "range": [
      1204,
      1207
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1207,
    "end": 1209,
    "range": [
      1207,
      1209
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1210,
    "end": 1213,
    "range": [
      1210,
      1213
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1216,
    "end": 1219,
    "range": [
      1216,
      1219
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1220,
    "end": 1222,
    "range": [
      1220,
      1222
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1223,
    "end": 1225,
    "range": [
      1223,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1227,
    "end": 1230,
    "range": [
      1227,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1235,
    "end": 1238,
    "range": [
      1235,
      1238
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1239,
    "end": 1242,
    "range": [
      1239,
      1242
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1245,
    "end": 1248,
    "range": [
      1245,
      1248
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1251,
    "end": 1254,
    "range": [
      1251,
      1254
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1257,
    "end": 1259,
    "range": [
      1257,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1261,
    "end": 1264,
    "range": [
      1261,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1268,
    "end": 1274,
    "range": [
      1268,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1394,
    "end": 1397,
    "range": [
      1394,
      1397
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1398,
    "end": 1401,
    "range": [
      1398,
      1401
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1407,
    "end": 1410,
    "range": [
      1407,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1415,
    "end": 1418,
    "range": [
      1415,
      1418
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1419,
    "end": 1422,
    "range": [
      1419,
      1422
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1423,
    "end": 1425,
    "range": [
      1423,
      1425
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1426,
    "end": 1429,
    "range": [
      1426,
      1429
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1430,
    "end": 1432,
    "range": [
      1430,
      1432
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1433,
    "end": 1436,
    "range": [
      1433,
      1436
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1437,
    "end": 1439,
    "range": [
      1437,
      1439
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1440,
    "end": 1442,
    "range": [
      1440,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1444,
    "end": 1447,
    "range": [
      1444,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1452,
    "end": 1455,
    "range": [
      1452,
      1455
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1456,
    "end": 1459,
    "range": [
      1456,
      1459
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1460,
    "end": 1462,
    "range": [
      1460,
      1462
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1463,
    "end": 1466,
    "range": [
      1463,
      1466
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1467,
    "end": 1469,
    "range": [
      1467,
      1469
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1470,
    "end": 1473,
    "range": [
      1470,
      1473
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1476,
    "end": 1478,
    "range": [
      1476,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1583,
    "end": 1586,
    "range": [
      1583,
      1586
    ]
  },
  {
    "type": "Template",
    "value": "``",
    "start": 1587,
    "end": 1589,
    "range": [
      1587,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1639,
    "end": 1647,
    "range": [
      1639,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1648,
    "end": 1651,
    "range": [
      1648,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1654,
    "end": 1661,
    "range": [
      1654,
      1661
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1662,
    "end": 1668,
    "range": [
      1662,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1672,
    "end": 1679,
    "range": [
      1672,
      1679
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1680,
    "end": 1686,
    "range": [
      1680,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1688,
    "end": 1692,
    "range": [
      1688,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1694,
    "end": 1714,
    "range": [
      1694,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1729,
    "end": 1737,
    "range": [
      1729,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1738,
    "end": 1741,
    "range": [
      1738,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1744,
    "end": 1751,
    "range": [
      1744,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1752,
    "end": 1758,
    "range": [
      1752,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1762,
    "end": 1769,
    "range": [
      1762,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1770,
    "end": 1776,
    "range": [
      1770,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1778,
    "end": 1782,
    "range": [
      1778,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1784,
    "end": 1804,
    "range": [
      1784,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1819,
    "end": 1827,
    "range": [
      1819,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1828,
    "end": 1831,
    "range": [
      1828,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 1832,
    "end": 1836,
    "range": [
      1832,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 1838,
    "end": 1858,
    "range": [
      1838,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1860,
    "end": 1868,
    "range": [
      1860,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1965,
    "end": 1968,
    "range": [
      1965,
      1968
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1969,
    "end": 1972,
    "range": [
      1969,
      1972
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1973,
    "end": 1975,
    "range": [
      1973,
      1975
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1976,
    "end": 1979,
    "range": [
      1976,
      1979
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1983,
    "end": 1985,
    "range": [
      1983,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1987,
    "end": 1990,
    "range": [
      1987,
      1990
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1991,
    "end": 1994,
    "range": [
      1991,
      1994
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1998,
    "end": 2001,
    "range": [
      1998,
      2001
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2002,
    "end": 2004,
    "range": [
      2002,
      2004
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2005,
    "end": 2007,
    "range": [
      2005,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2009,
    "end": 2012,
    "range": [
      2009,
      2012
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2013,
    "end": 2016,
    "range": [
      2013,
      2016
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2020,
    "end": 2023,
    "range": [
      2020,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2024,
    "end": 2033,
    "range": [
      2024,
      2033
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2034,
    "end": 2036,
    "range": [
      2034,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2038,
    "end": 2041,
    "range": [
      2038,
      2041
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2042,
    "end": 2045,
    "range": [
      2042,
      2045
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2046,
    "end": 2048,
    "range": [
      2046,
      2048
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2049,
    "end": 2052,
    "range": [
      2049,
      2052
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2053,
    "end": 2057,
    "range": [
      2053,
      2057
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2058,
    "end": 2060,
    "range": [
      2058,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2164,
    "end": 2167,
    "range": [
      2164,
      2167
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2168,
    "end": 2171,
    "range": [
      2168,
      2171
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2172,
    "end": 2176,
    "range": [
      2172,
      2176
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2177,
    "end": 2180,
    "range": [
      2177,
      2180
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2181,
    "end": 2185,
    "range": [
      2181,
      2185
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2186,
    "end": 2188,
    "range": [
      2186,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2319,
    "end": 2322,
    "range": [
      2319,
      2322
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2323,
    "end": 2326,
    "range": [
      2323,
      2326
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2327,
    "end": 2331,
    "range": [
      2327,
      2331
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2332,
    "end": 2335,
    "range": [
      2332,
      2335
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2336,
    "end": 2340,
    "range": [
      2336,
      2340
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2341,
    "end": 2343,
    "range": [
      2341,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2345,
    "end": 2348,
    "range": [
      2345,
      2348
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2349,
    "end": 2352,
    "range": [
      2349,
      2352
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2353,
    "end": 2357,
    "range": [
      2353,
      2357
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 2358,
    "end": 2361,
    "range": [
      2358,
      2361
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2362,
    "end": 2366,
    "range": [
      2362,
      2366
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2367,
    "end": 2369,
    "range": [
      2367,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2456,
    "end": 2464,
    "range": [
      2456,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2465,
    "end": 2468,
    "range": [
      2465,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 2469,
    "end": 2473,
    "range": [
      2469,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 2475,
    "end": 2495,
    "range": [
      2475,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2504,
    "end": 2510,
    "range": [
      2504,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2512,
    "end": 2514,
    "range": [
      2512,
      2514
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2515,
    "end": 2519,
    "range": [
      2515,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2522,
    "end": 2528,
    "range": [
      2522,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2530,
    "end": 2538,
    "range": [
      2530,
      2538
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2539,
    "end": 2542,
    "range": [
      2539,
      2542
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2542,
    "end": 2543,
    "range": [
      2542,
      2543
    ]
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 2543,
    "end": 2547,
    "range": [
      2543,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 2549,
    "end": 2569,
    "range": [
      2549,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2578,
    "end": 2584,
    "range": [
      2578,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2586,
    "end": 2588,
    "range": [
      2586,
      2588
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2589,
    "end": 2593,
    "range": [
      2589,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2596,
    "end": 2602,
    "range": [
      2596,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2604,
    "end": 2612,
    "range": [
      2604,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2613,
    "end": 2616,
    "range": [
      2613,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2621,
    "end": 2627,
    "range": [
      2621,
      2627
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2628,
    "end": 2637,
    "range": [
      2628,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2641,
    "end": 2644,
    "range": [
      2641,
      2644
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2645,
    "end": 2648,
    "range": [
      2645,
      2648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2653,
    "end": 2655,
    "range": [
      2653,
      2655
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2658,
    "end": 2665,
    "range": [
      2658,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2668,
    "end": 2670,
    "range": [
      2668,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2718,
    "end": 2721,
    "range": [
      2718,
      2721
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2722,
    "end": 2725,
    "range": [
      2722,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2730,
    "end": 2732,
    "range": [
      2730,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 2735,
    "end": 2741,
    "range": [
      2735,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2745,
    "end": 2747,
    "range": [
      2745,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  }
]
```
