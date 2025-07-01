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
        "name": "noParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 51
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
              "start": 52,
              "end": 53
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 52,
            "end": 53
          }
        ],
        "start": 51,
        "end": 54
      },
      "params": [
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
                "start": 58,
                "end": 59
              },
              "typeArguments": null,
              "start": 58,
              "end": 59
            },
            "start": 56,
            "end": 59
          },
          "start": 55,
          "end": 59
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 61,
        "end": 64
      },
      "expression": false,
      "start": 34,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 73
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
              "start": 74,
              "end": 76
            }
          ],
          "expressions": [],
          "start": 74,
          "end": 76
        },
        "start": 65,
        "end": 76
      },
      "directive": null,
      "start": 65,
      "end": 77
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noGenericParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 167
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
              "start": 168,
              "end": 169
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 169
          }
        ],
        "start": 167,
        "end": 170
      },
      "params": [
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
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 194
              },
              "typeArguments": null,
              "start": 174,
              "end": 194
            },
            "start": 172,
            "end": 194
          },
          "start": 171,
          "end": 194
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 196,
        "end": 199
      },
      "expression": false,
      "start": 143,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 215
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
              "start": 216,
              "end": 218
            }
          ],
          "expressions": [],
          "start": 216,
          "end": 218
        },
        "start": 200,
        "end": 218
      },
      "directive": null,
      "start": 200,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics1a",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 336
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
              "start": 337,
              "end": 338
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 337,
            "end": 338
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 340,
            "end": 341
          }
        ],
        "start": 336,
        "end": 342
      },
      "params": [
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
                "start": 346,
                "end": 347
              },
              "typeArguments": null,
              "start": 346,
              "end": 347
            },
            "start": 344,
            "end": 347
          },
          "start": 343,
          "end": 347
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 352,
              "end": 358
            },
            "start": 350,
            "end": 358
          },
          "start": 349,
          "end": 358
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 360,
        "end": 363
      },
      "expression": false,
      "start": 313,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1a",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 378
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
              "start": 379,
              "end": 382
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 383,
              "end": 385
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 382,
              "end": 383
            }
          ],
          "start": 379,
          "end": 385
        },
        "start": 364,
        "end": 385
      },
      "directive": null,
      "start": 364,
      "end": 386
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 411
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
              "start": 412,
              "end": 413
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 412,
            "end": 413
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 415,
            "end": 416
          }
        ],
        "start": 411,
        "end": 417
      },
      "params": [
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
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 441
              },
              "typeArguments": null,
              "start": 421,
              "end": 441
            },
            "start": 419,
            "end": 441
          },
          "start": 418,
          "end": 441
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
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "start": 444,
            "end": 447
          },
          "start": 443,
          "end": 447
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 449,
        "end": 452
      },
      "expression": false,
      "start": 388,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1b",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 467
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
              "start": 468,
              "end": 471
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 472,
              "end": 474
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 471,
              "end": 472
            }
          ],
          "start": 468,
          "end": 474
        },
        "start": 453,
        "end": 474
      },
      "directive": null,
      "start": 453,
      "end": 475
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 588
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
              "start": 589,
              "end": 590
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 589,
            "end": 590
          }
        ],
        "start": 588,
        "end": 591
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
                "start": 598,
                "end": 618
              },
              "typeArguments": null,
              "start": 598,
              "end": 618
            },
            "start": 596,
            "end": 618
          },
          "start": 592,
          "end": 618
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                        "start": 627,
                        "end": 628
                      },
                      "typeArguments": null,
                      "start": 627,
                      "end": 628
                    },
                    "start": 625,
                    "end": 628
                  },
                  "start": 624,
                  "end": 628
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 633,
                  "end": 637
                },
                "start": 630,
                "end": 637
              },
              "start": 623,
              "end": 637
            },
            "start": 621,
            "end": 637
          },
          "start": 620,
          "end": 637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 639,
        "end": 642
      },
      "expression": false,
      "start": 565,
      "end": 642
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 657
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
              "start": 658,
              "end": 661
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 677,
              "end": 679
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 665,
                      "end": 671
                    },
                    "start": 663,
                    "end": 671
                  },
                  "start": 662,
                  "end": 671
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 677
              },
              "id": null,
              "generator": false,
              "start": 661,
              "end": 677
            }
          ],
          "start": 658,
          "end": 679
        },
        "start": 643,
        "end": 679
      },
      "directive": null,
      "start": 643,
      "end": 680
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 705
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
              "start": 706,
              "end": 707
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 706,
            "end": 707
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 710
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 709,
            "end": 710
          }
        ],
        "start": 705,
        "end": 711
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
                "start": 718,
                "end": 738
              },
              "typeArguments": null,
              "start": 718,
              "end": 738
            },
            "start": 716,
            "end": 738
          },
          "start": 712,
          "end": 738
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                        "start": 747,
                        "end": 748
                      },
                      "typeArguments": null,
                      "start": 747,
                      "end": 748
                    },
                    "start": 745,
                    "end": 748
                  },
                  "start": 744,
                  "end": 748
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 753,
                        "end": 754
                      },
                      "typeArguments": null,
                      "start": 753,
                      "end": 754
                    },
                    "start": 751,
                    "end": 754
                  },
                  "start": 750,
                  "end": 754
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 759,
                  "end": 763
                },
                "start": 756,
                "end": 763
              },
              "start": 743,
              "end": 763
            },
            "start": 741,
            "end": 763
          },
          "start": 740,
          "end": 763
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 765,
        "end": 768
      },
      "expression": false,
      "start": 682,
      "end": 768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 769,
          "end": 783
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
              "start": 784,
              "end": 787
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 816,
              "end": 818
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 792,
                      "end": 798
                    },
                    "start": 790,
                    "end": 798
                  },
                  "start": 789,
                  "end": 798
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 803,
                      "end": 809
                    },
                    "start": 801,
                    "end": 809
                  },
                  "start": 800,
                  "end": 809
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 815
              },
              "id": null,
              "generator": false,
              "start": 788,
              "end": 815
            }
          ],
          "start": 784,
          "end": 818
        },
        "start": 769,
        "end": 818
      },
      "directive": null,
      "start": 769,
      "end": 819
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics3",
        "optional": false,
        "typeAnnotation": null,
        "start": 963,
        "end": 976
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
              "start": 977,
              "end": 978
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 977,
            "end": 978
          }
        ],
        "start": 976,
        "end": 979
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
                "start": 986,
                "end": 1006
              },
              "typeArguments": null,
              "start": 986,
              "end": 1006
            },
            "start": 984,
            "end": 1006
          },
          "start": 980,
          "end": 1006
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "producer",
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1025
                  },
                  "typeArguments": null,
                  "start": 1024,
                  "end": 1025
                },
                "start": 1021,
                "end": 1025
              },
              "start": 1018,
              "end": 1025
            },
            "start": 1016,
            "end": 1025
          },
          "start": 1008,
          "end": 1025
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1027,
        "end": 1030
      },
      "expression": false,
      "start": 954,
      "end": 1030
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1031,
          "end": 1044
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
              "start": 1045,
              "end": 1048
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1056,
              "end": 1058
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1054,
                "end": 1056
              },
              "id": null,
              "generator": false,
              "start": 1048,
              "end": 1056
            }
          ],
          "start": 1045,
          "end": 1058
        },
        "start": 1031,
        "end": 1058
      },
      "directive": null,
      "start": 1031,
      "end": 1059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1060,
          "end": 1073
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
              "start": 1074,
              "end": 1077
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1092,
              "end": 1094
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1083,
                "end": 1092
              },
              "id": null,
              "generator": false,
              "start": 1077,
              "end": 1092
            }
          ],
          "start": 1074,
          "end": 1094
        },
        "start": 1060,
        "end": 1094
      },
      "directive": null,
      "start": 1060,
      "end": 1095
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1096,
          "end": 1109
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
              "start": 1110,
              "end": 1113
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1120,
              "end": 1122
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1119,
                "end": 1120
              },
              "id": null,
              "generator": false,
              "start": 1113,
              "end": 1120
            }
          ],
          "start": 1110,
          "end": 1122
        },
        "start": 1096,
        "end": 1122
      },
      "directive": null,
      "start": 1096,
      "end": 1123
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1274,
        "end": 1287
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
              "start": 1288,
              "end": 1289
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1288,
            "end": 1289
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1291,
              "end": 1292
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1291,
            "end": 1292
          }
        ],
        "start": 1287,
        "end": 1293
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
                "start": 1300,
                "end": 1320
              },
              "typeArguments": null,
              "start": 1300,
              "end": 1320
            },
            "start": 1298,
            "end": 1320
          },
          "start": 1294,
          "end": 1320
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
                "start": 1325,
                "end": 1326
              },
              "typeArguments": null,
              "start": 1325,
              "end": 1326
            },
            "start": 1323,
            "end": 1326
          },
          "start": 1322,
          "end": 1326
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
                  "name": "x",
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
                        "start": 1335,
                        "end": 1336
                      },
                      "typeArguments": null,
                      "start": 1335,
                      "end": 1336
                    },
                    "start": 1333,
                    "end": 1336
                  },
                  "start": 1332,
                  "end": 1336
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1341,
                  "end": 1345
                },
                "start": 1338,
                "end": 1345
              },
              "start": 1331,
              "end": 1345
            },
            "start": 1329,
            "end": 1345
          },
          "start": 1328,
          "end": 1345
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1347,
        "end": 1350
      },
      "expression": false,
      "start": 1265,
      "end": 1350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1351,
          "end": 1364
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
              "start": 1365,
              "end": 1368
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1369,
              "end": 1372
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1384,
              "end": 1386
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 1368,
              "end": 1369
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1379,
                "end": 1383
              },
              "id": null,
              "generator": false,
              "start": 1373,
              "end": 1383
            }
          ],
          "start": 1365,
          "end": 1386
        },
        "start": 1351,
        "end": 1386
      },
      "directive": null,
      "start": 1351,
      "end": 1387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1388,
          "end": 1401
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
              "start": 1402,
              "end": 1405
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1407,
              "end": 1410
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1419,
              "end": 1421
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1405,
              "end": 1407
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1417,
                "end": 1418
              },
              "id": null,
              "generator": false,
              "start": 1411,
              "end": 1418
            }
          ],
          "start": 1402,
          "end": 1421
        },
        "start": 1388,
        "end": 1421
      },
      "directive": null,
      "start": 1388,
      "end": 1422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1423,
          "end": 1436
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
              "start": 1437,
              "end": 1440
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1446,
              "end": 1449
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1455,
              "end": 1457
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1441,
              "end": 1445
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1450,
              "end": 1454
            }
          ],
          "start": 1437,
          "end": 1457
        },
        "start": 1423,
        "end": 1457
      },
      "directive": null,
      "start": 1423,
      "end": 1458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1609,
        "end": 1622
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1624
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1623,
            "end": 1624
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1626,
              "end": 1627
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1626,
            "end": 1627
          }
        ],
        "start": 1622,
        "end": 1628
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
                "start": 1635,
                "end": 1655
              },
              "typeArguments": null,
              "start": 1635,
              "end": 1655
            },
            "start": 1633,
            "end": 1655
          },
          "start": 1629,
          "end": 1655
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
                "start": 1660,
                "end": 1661
              },
              "typeArguments": null,
              "start": 1660,
              "end": 1661
            },
            "start": 1658,
            "end": 1661
          },
          "start": 1657,
          "end": 1661
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
                  "name": "x",
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
                        "start": 1670,
                        "end": 1671
                      },
                      "typeArguments": null,
                      "start": 1670,
                      "end": 1671
                    },
                    "start": 1668,
                    "end": 1671
                  },
                  "start": 1667,
                  "end": 1671
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1676,
                  "end": 1680
                },
                "start": 1673,
                "end": 1680
              },
              "start": 1666,
              "end": 1680
            },
            "start": 1664,
            "end": 1680
          },
          "start": 1663,
          "end": 1680
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1682,
        "end": 1685
      },
      "expression": false,
      "start": 1600,
      "end": 1685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1686,
          "end": 1699
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
              "start": 1700,
              "end": 1703
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 1706,
              "end": 1710
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1722,
              "end": 1724
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 1704,
              "end": 1705
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1717,
                "end": 1721
              },
              "id": null,
              "generator": false,
              "start": 1711,
              "end": 1721
            }
          ],
          "start": 1700,
          "end": 1724
        },
        "start": 1686,
        "end": 1724
      },
      "directive": null,
      "start": 1686,
      "end": 1725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1726,
          "end": 1739
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
              "start": 1740,
              "end": 1743
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1747,
              "end": 1750
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1759,
              "end": 1761
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1744,
              "end": 1746
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1757,
                "end": 1758
              },
              "id": null,
              "generator": false,
              "start": 1751,
              "end": 1758
            }
          ],
          "start": 1740,
          "end": 1761
        },
        "start": 1726,
        "end": 1761
      },
      "directive": null,
      "start": 1726,
      "end": 1762
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1763,
          "end": 1776
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
              "start": 1777,
              "end": 1780
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1784,
              "end": 1787
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1791,
              "end": 1793
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1780,
              "end": 1784
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1787,
              "end": 1791
            }
          ],
          "start": 1777,
          "end": 1793
        },
        "start": 1763,
        "end": 1793
      },
      "directive": null,
      "start": 1763,
      "end": 1794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1913,
        "end": 1926
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1927,
              "end": 1928
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1927,
            "end": 1928
          }
        ],
        "start": 1926,
        "end": 1929
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
                "start": 1936,
                "end": 1956
              },
              "typeArguments": null,
              "start": 1936,
              "end": 1956
            },
            "start": 1934,
            "end": 1956
          },
          "start": 1930,
          "end": 1956
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1965,
                        "end": 1966
                      },
                      "typeArguments": null,
                      "start": 1965,
                      "end": 1966
                    },
                    "start": 1963,
                    "end": 1966
                  },
                  "start": 1962,
                  "end": 1966
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1971,
                    "end": 1972
                  },
                  "typeArguments": null,
                  "start": 1971,
                  "end": 1972
                },
                "start": 1968,
                "end": 1972
              },
              "start": 1961,
              "end": 1972
            },
            "start": 1959,
            "end": 1972
          },
          "start": 1958,
          "end": 1972
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1981,
                        "end": 1982
                      },
                      "typeArguments": null,
                      "start": 1981,
                      "end": 1982
                    },
                    "start": 1979,
                    "end": 1982
                  },
                  "start": 1978,
                  "end": 1982
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1987,
                    "end": 1988
                  },
                  "typeArguments": null,
                  "start": 1987,
                  "end": 1988
                },
                "start": 1984,
                "end": 1988
              },
              "start": 1977,
              "end": 1988
            },
            "start": 1975,
            "end": 1988
          },
          "start": 1974,
          "end": 1988
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1997,
                        "end": 1998
                      },
                      "typeArguments": null,
                      "start": 1997,
                      "end": 1998
                    },
                    "start": 1995,
                    "end": 1998
                  },
                  "start": 1994,
                  "end": 1998
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2003,
                    "end": 2004
                  },
                  "typeArguments": null,
                  "start": 2003,
                  "end": 2004
                },
                "start": 2000,
                "end": 2004
              },
              "start": 1993,
              "end": 2004
            },
            "start": 1991,
            "end": 2004
          },
          "start": 1990,
          "end": 2004
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2006,
        "end": 2009
      },
      "expression": false,
      "start": 1904,
      "end": 2009
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2010,
          "end": 2023
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
              "start": 2024,
              "end": 2027
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2035,
              "end": 2038
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2045,
              "end": 2048
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2055,
              "end": 2057
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
                  "start": 2028,
                  "end": 2029
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2033,
                "end": 2034
              },
              "id": null,
              "generator": false,
              "start": 2028,
              "end": 2034
            },
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
                  "start": 2039,
                  "end": 2040
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2044,
                "end": 2045
              },
              "id": null,
              "generator": false,
              "start": 2039,
              "end": 2045
            },
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
                  "start": 2049,
                  "end": 2050
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2054,
                "end": 2055
              },
              "id": null,
              "generator": false,
              "start": 2049,
              "end": 2055
            }
          ],
          "start": 2024,
          "end": 2057
        },
        "start": 2010,
        "end": 2057
      },
      "directive": null,
      "start": 2010,
      "end": 2058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2059,
          "end": 2072
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
              "start": 2073,
              "end": 2076
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2084,
              "end": 2087
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2094,
              "end": 2097
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2104,
              "end": 2106
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
                  "start": 2077,
                  "end": 2078
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2083
              },
              "id": null,
              "generator": false,
              "start": 2077,
              "end": 2083
            },
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
                  "start": 2088,
                  "end": 2089
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2093,
                "end": 2094
              },
              "id": null,
              "generator": false,
              "start": 2088,
              "end": 2094
            },
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
                  "start": 2098,
                  "end": 2099
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2103,
                "end": 2104
              },
              "id": null,
              "generator": false,
              "start": 2098,
              "end": 2104
            }
          ],
          "start": 2073,
          "end": 2106
        },
        "start": 2059,
        "end": 2106
      },
      "directive": null,
      "start": 2059,
      "end": 2107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2108,
          "end": 2121
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
              "start": 2122,
              "end": 2125
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2143,
              "end": 2146
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2164,
              "end": 2167
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2185,
              "end": 2187
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2130,
                      "end": 2136
                    },
                    "start": 2128,
                    "end": 2136
                  },
                  "start": 2127,
                  "end": 2136
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2141,
                "end": 2142
              },
              "id": null,
              "generator": false,
              "start": 2126,
              "end": 2142
            },
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2151,
                      "end": 2157
                    },
                    "start": 2149,
                    "end": 2157
                  },
                  "start": 2148,
                  "end": 2157
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2163
              },
              "id": null,
              "generator": false,
              "start": 2147,
              "end": 2163
            },
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2172,
                      "end": 2178
                    },
                    "start": 2170,
                    "end": 2178
                  },
                  "start": 2169,
                  "end": 2178
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2183,
                "end": 2184
              },
              "id": null,
              "generator": false,
              "start": 2168,
              "end": 2184
            }
          ],
          "start": 2122,
          "end": 2187
        },
        "start": 2108,
        "end": 2187
      },
      "directive": null,
      "start": 2108,
      "end": 2188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2308,
        "end": 2321
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2322,
              "end": 2323
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2322,
            "end": 2323
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2325,
              "end": 2326
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2325,
            "end": 2326
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2328,
              "end": 2329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2328,
            "end": 2329
          }
        ],
        "start": 2321,
        "end": 2330
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
                "start": 2337,
                "end": 2357
              },
              "typeArguments": null,
              "start": 2337,
              "end": 2357
            },
            "start": 2335,
            "end": 2357
          },
          "start": 2331,
          "end": 2357
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2366,
                        "end": 2367
                      },
                      "typeArguments": null,
                      "start": 2366,
                      "end": 2367
                    },
                    "start": 2364,
                    "end": 2367
                  },
                  "start": 2363,
                  "end": 2367
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2372,
                    "end": 2373
                  },
                  "typeArguments": null,
                  "start": 2372,
                  "end": 2373
                },
                "start": 2369,
                "end": 2373
              },
              "start": 2362,
              "end": 2373
            },
            "start": 2360,
            "end": 2373
          },
          "start": 2359,
          "end": 2373
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2382,
                        "end": 2383
                      },
                      "typeArguments": null,
                      "start": 2382,
                      "end": 2383
                    },
                    "start": 2380,
                    "end": 2383
                  },
                  "start": 2379,
                  "end": 2383
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2388,
                    "end": 2389
                  },
                  "typeArguments": null,
                  "start": 2388,
                  "end": 2389
                },
                "start": 2385,
                "end": 2389
              },
              "start": 2378,
              "end": 2389
            },
            "start": 2376,
            "end": 2389
          },
          "start": 2375,
          "end": 2389
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                        "start": 2398,
                        "end": 2399
                      },
                      "typeArguments": null,
                      "start": 2398,
                      "end": 2399
                    },
                    "start": 2396,
                    "end": 2399
                  },
                  "start": 2395,
                  "end": 2399
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2404,
                    "end": 2405
                  },
                  "typeArguments": null,
                  "start": 2404,
                  "end": 2405
                },
                "start": 2401,
                "end": 2405
              },
              "start": 2394,
              "end": 2405
            },
            "start": 2392,
            "end": 2405
          },
          "start": 2391,
          "end": 2405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2407,
        "end": 2410
      },
      "expression": false,
      "start": 2299,
      "end": 2410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2411,
          "end": 2424
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
              "start": 2425,
              "end": 2428
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2436,
              "end": 2439
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2447,
              "end": 2450
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2458,
              "end": 2460
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
                  "start": 2429,
                  "end": 2430
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2434,
                "end": 2435
              },
              "id": null,
              "generator": false,
              "start": 2429,
              "end": 2435
            },
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
                  "start": 2440,
                  "end": 2441
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2445,
                "end": 2446
              },
              "id": null,
              "generator": false,
              "start": 2440,
              "end": 2446
            },
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
                  "start": 2451,
                  "end": 2452
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2456,
                "end": 2457
              },
              "id": null,
              "generator": false,
              "start": 2451,
              "end": 2457
            }
          ],
          "start": 2425,
          "end": 2460
        },
        "start": 2411,
        "end": 2460
      },
      "directive": null,
      "start": 2411,
      "end": 2461
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2462,
          "end": 2475
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
              "start": 2476,
              "end": 2479
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2487,
              "end": 2490
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2498,
              "end": 2501
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2509,
              "end": 2511
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
                  "start": 2480,
                  "end": 2481
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2485,
                "end": 2486
              },
              "id": null,
              "generator": false,
              "start": 2480,
              "end": 2486
            },
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
                  "start": 2491,
                  "end": 2492
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2496,
                "end": 2497
              },
              "id": null,
              "generator": false,
              "start": 2491,
              "end": 2497
            },
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
                  "start": 2502,
                  "end": 2503
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2507,
                "end": 2508
              },
              "id": null,
              "generator": false,
              "start": 2502,
              "end": 2508
            }
          ],
          "start": 2476,
          "end": 2511
        },
        "start": 2462,
        "end": 2511
      },
      "directive": null,
      "start": 2462,
      "end": 2512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2513,
          "end": 2526
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
              "start": 2527,
              "end": 2530
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2546,
              "end": 2549
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2566,
              "end": 2569
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2586,
              "end": 2588
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2534,
                      "end": 2540
                    },
                    "start": 2532,
                    "end": 2540
                  },
                  "start": 2531,
                  "end": 2540
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2545,
                "end": 2546
              },
              "id": null,
              "generator": false,
              "start": 2530,
              "end": 2546
            },
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2554,
                      "end": 2560
                    },
                    "start": 2552,
                    "end": 2560
                  },
                  "start": 2551,
                  "end": 2560
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2565,
                "end": 2566
              },
              "id": null,
              "generator": false,
              "start": 2550,
              "end": 2566
            },
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2574,
                      "end": 2580
                    },
                    "start": 2572,
                    "end": 2580
                  },
                  "start": 2571,
                  "end": 2580
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2585,
                "end": 2586
              },
              "id": null,
              "generator": false,
              "start": 2570,
              "end": 2586
            }
          ],
          "start": 2527,
          "end": 2588
        },
        "start": 2513,
        "end": 2588
      },
      "directive": null,
      "start": 2513,
      "end": 2589
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2654,
        "end": 2667
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
              "start": 2668,
              "end": 2669
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2668,
            "end": 2669
          }
        ],
        "start": 2667,
        "end": 2670
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
                "start": 2677,
                "end": 2697
              },
              "typeArguments": null,
              "start": 2677,
              "end": 2697
            },
            "start": 2675,
            "end": 2697
          },
          "start": 2671,
          "end": 2697
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
                "start": 2702,
                "end": 2703
              },
              "typeArguments": null,
              "start": 2702,
              "end": 2703
            },
            "start": 2700,
            "end": 2703
          },
          "start": 2699,
          "end": 2703
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
            "start": 2706,
            "end": 2707
          },
          "typeArguments": null,
          "start": 2706,
          "end": 2707
        },
        "start": 2704,
        "end": 2707
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2717,
              "end": 2718
            },
            "start": 2710,
            "end": 2719
          }
        ],
        "start": 2708,
        "end": 2721
      },
      "expression": false,
      "start": 2645,
      "end": 2721
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
            "typeAnnotation": null,
            "start": 2726,
            "end": 2727
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2730,
              "end": 2743
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
                  "start": 2744,
                  "end": 2747
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2762,
                  "end": 2764
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2748,
                  "end": 2761
                }
              ],
              "start": 2744,
              "end": 2764
            },
            "start": 2730,
            "end": 2764
          },
          "definite": false,
          "start": 2726,
          "end": 2764
        }
      ],
      "declare": false,
      "start": 2722,
      "end": 2765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2766,
          "end": 2767
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
              "start": 2768,
              "end": 2771
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2775,
              "end": 2778
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2782,
              "end": 2785
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2789,
              "end": 2791
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2771,
              "end": 2775
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2778,
              "end": 2782
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2785,
              "end": 2789
            }
          ],
          "start": 2768,
          "end": 2791
        },
        "start": 2766,
        "end": 2791
      },
      "directive": null,
      "start": 2766,
      "end": 2792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2901,
        "end": 2914
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
              "start": 2915,
              "end": 2916
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2915,
            "end": 2916
          }
        ],
        "start": 2914,
        "end": 2917
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
                "start": 2924,
                "end": 2944
              },
              "typeArguments": null,
              "start": 2924,
              "end": 2944
            },
            "start": 2922,
            "end": 2944
          },
          "start": 2918,
          "end": 2944
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 2949,
                "end": 2950
              },
              "typeArguments": null,
              "start": 2949,
              "end": 2950
            },
            "start": 2947,
            "end": 2950
          },
          "start": 2946,
          "end": 2950
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                "start": 2955,
                "end": 2956
              },
              "typeArguments": null,
              "start": 2955,
              "end": 2956
            },
            "start": 2953,
            "end": 2956
          },
          "start": 2952,
          "end": 2956
        },
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2961,
                "end": 2962
              },
              "typeArguments": null,
              "start": 2961,
              "end": 2962
            },
            "start": 2959,
            "end": 2962
          },
          "start": 2958,
          "end": 2962
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
            "start": 2965,
            "end": 2966
          },
          "typeArguments": null,
          "start": 2965,
          "end": 2966
        },
        "start": 2963,
        "end": 2966
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2980,
              "end": 2984
            },
            "start": 2973,
            "end": 2985
          }
        ],
        "start": 2967,
        "end": 2987
      },
      "expression": false,
      "start": 2892,
      "end": 2987
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
            "name": "a9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2992,
            "end": 2995
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2998,
              "end": 3011
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
                  "start": 3012,
                  "end": 3015
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3019,
                  "end": 3022
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3025,
                  "end": 3028
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3032,
                  "end": 3034
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 3016,
                  "end": 3018
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3023,
                  "end": 3024
                },
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3029,
                  "end": 3031
                }
              ],
              "start": 3012,
              "end": 3034
            },
            "start": 2998,
            "end": 3034
          },
          "definite": false,
          "start": 2992,
          "end": 3034
        }
      ],
      "declare": false,
      "start": 2988,
      "end": 3035
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
            "name": "a9a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 3045,
                "end": 3047
              },
              "start": 3043,
              "end": 3047
            },
            "start": 3040,
            "end": 3047
          },
          "init": null,
          "definite": false,
          "start": 3040,
          "end": 3047
        }
      ],
      "declare": false,
      "start": 3036,
      "end": 3048
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A91",
        "optional": false,
        "typeAnnotation": null,
        "start": 3165,
        "end": 3168
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
              "start": 3175,
              "end": 3176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3178,
                "end": 3184
              },
              "start": 3176,
              "end": 3184
            },
            "accessibility": null,
            "static": false,
            "start": 3175,
            "end": 3185
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3190,
              "end": 3191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3194,
                "end": 3200
              },
              "start": 3192,
              "end": 3200
            },
            "accessibility": null,
            "static": false,
            "start": 3190,
            "end": 3201
          }
        ],
        "start": 3169,
        "end": 3203
      },
      "declare": false,
      "start": 3155,
      "end": 3203
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A92",
        "optional": false,
        "typeAnnotation": null,
        "start": 3214,
        "end": 3217
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
              "start": 3224,
              "end": 3225
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3227,
                "end": 3233
              },
              "start": 3225,
              "end": 3233
            },
            "accessibility": null,
            "static": false,
            "start": 3224,
            "end": 3234
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 3239,
              "end": 3240
            },
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
                  "start": 3243,
                  "end": 3247
                },
                "typeArguments": null,
                "start": 3243,
                "end": 3247
              },
              "start": 3241,
              "end": 3247
            },
            "accessibility": null,
            "static": false,
            "start": 3239,
            "end": 3248
          }
        ],
        "start": 3218,
        "end": 3250
      },
      "declare": false,
      "start": 3204,
      "end": 3250
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
            "name": "a9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 3256,
            "end": 3259
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3262,
              "end": 3275
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
                  "start": 3276,
                  "end": 3279
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3290,
                  "end": 3293
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3318,
                  "end": 3321
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3338,
                  "end": 3340
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3280,
                  "end": 3289
                },
                {
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
                        "start": 3296,
                        "end": 3297
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 3299,
                        "end": 3300
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3296,
                      "end": 3300
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3302,
                        "end": 3303
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3309,
                          "end": 3313
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3305,
                        "end": 3315
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3302,
                      "end": 3315
                    }
                  ],
                  "start": 3294,
                  "end": 3317
                },
                {
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
                        "start": 3324,
                        "end": 3325
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 3327,
                        "end": 3328
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3324,
                      "end": 3328
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3330,
                        "end": 3331
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 3333,
                        "end": 3335
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3330,
                      "end": 3335
                    }
                  ],
                  "start": 3322,
                  "end": 3337
                }
              ],
              "start": 3276,
              "end": 3340
            },
            "start": 3262,
            "end": 3340
          },
          "definite": false,
          "start": 3256,
          "end": 3340
        }
      ],
      "declare": false,
      "start": 3252,
      "end": 3341
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
            "name": "a9e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 3351,
                "end": 3353
              },
              "start": 3349,
              "end": 3353
            },
            "start": 3346,
            "end": 3353
          },
          "init": null,
          "definite": false,
          "start": 3346,
          "end": 3353
        }
      ],
      "declare": false,
      "start": 3342,
      "end": 3354
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
            "name": "a9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3464,
            "end": 3467
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3470,
              "end": 3483
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
                  "start": 3484,
                  "end": 3487
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3496,
                  "end": 3499
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3508,
                  "end": 3511
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3521,
                  "end": 3523
                }
              ],
              "expressions": [
                {
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
                        "start": 3490,
                        "end": 3491
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3493,
                        "end": 3494
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3490,
                      "end": 3494
                    }
                  ],
                  "start": 3488,
                  "end": 3496
                },
                {
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
                        "start": 3502,
                        "end": 3503
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 3505,
                        "end": 3506
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3502,
                      "end": 3506
                    }
                  ],
                  "start": 3500,
                  "end": 3508
                },
                {
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
                        "start": 3514,
                        "end": 3515
                      },
                      "value": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 3517,
                        "end": 3518
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3514,
                      "end": 3518
                    }
                  ],
                  "start": 3512,
                  "end": 3520
                }
              ],
              "start": 3484,
              "end": 3523
            },
            "start": 3470,
            "end": 3523
          },
          "definite": false,
          "start": 3464,
          "end": 3523
        }
      ],
      "declare": false,
      "start": 3460,
      "end": 3524
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
            "name": "a9d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                      "start": 3536,
                      "end": 3537
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3539,
                        "end": 3545
                      },
                      "start": 3537,
                      "end": 3545
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3536,
                    "end": 3546
                  }
                ],
                "start": 3534,
                "end": 3548
              },
              "start": 3532,
              "end": 3548
            },
            "start": 3529,
            "end": 3548
          },
          "init": null,
          "definite": false,
          "start": 3529,
          "end": 3548
        }
      ],
      "declare": false,
      "start": 3525,
      "end": 3549
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3655,
                "end": 3658
              },
              "start": 3653,
              "end": 3658
            },
            "start": 3647,
            "end": 3658
          },
          "init": null,
          "definite": false,
          "start": 3647,
          "end": 3658
        }
      ],
      "declare": false,
      "start": 3643,
      "end": 3659
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
            "typeAnnotation": null,
            "start": 3664,
            "end": 3665
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3668,
              "end": 3681
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
                  "start": 3682,
                  "end": 3685
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3688,
                  "end": 3691
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3699,
                  "end": 3702
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3705,
                  "end": 3707
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 3686,
                  "end": 3687
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyVar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3692,
                  "end": 3698
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 3703,
                  "end": 3704
                }
              ],
              "start": 3682,
              "end": 3707
            },
            "start": 3668,
            "end": 3707
          },
          "definite": false,
          "start": 3664,
          "end": 3707
        }
      ],
      "declare": false,
      "start": 3660,
      "end": 3708
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
                "type": "TSAnyKeyword",
                "start": 3716,
                "end": 3719
              },
              "start": 3714,
              "end": 3719
            },
            "start": 3713,
            "end": 3719
          },
          "init": null,
          "definite": false,
          "start": 3713,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3709,
      "end": 3720
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 3834,
            "end": 3837
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3840,
              "end": 3853
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
                  "start": 3854,
                  "end": 3857
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3861,
                  "end": 3864
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3870,
                  "end": 3873
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3884,
                  "end": 3886
                }
              ],
              "expressions": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3858,
                  "end": 3860
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3865,
                  "end": 3869
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3874,
                  "end": 3883
                }
              ],
              "start": 3854,
              "end": 3886
            },
            "start": 3840,
            "end": 3886
          },
          "definite": false,
          "start": 3834,
          "end": 3886
        }
      ],
      "declare": false,
      "start": 3830,
      "end": 3887
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 3897,
                  "end": 3900
                },
                "start": 3897,
                "end": 3902
              },
              "start": 3895,
              "end": 3902
            },
            "start": 3892,
            "end": 3902
          },
          "init": null,
          "definite": false,
          "start": 3892,
          "end": 3902
        }
      ],
      "declare": false,
      "start": 3888,
      "end": 3903
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 3904
}
```
