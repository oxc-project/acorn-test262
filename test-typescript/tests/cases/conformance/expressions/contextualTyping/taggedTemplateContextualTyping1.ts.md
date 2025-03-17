__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1058,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 48,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "FuncType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 16,
        "end": 47,
        "params": [
          {
            "type": "Identifier",
            "start": 17,
            "end": 34,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 34,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 20,
                "end": 34,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 24,
                    "end": 28,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 27,
                        "end": 28,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 28,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 34,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 20,
                  "end": 23,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 21,
                      "end": 22,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 36,
          "end": 47,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 39,
            "end": 47,
            "exprName": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 50,
      "end": 129,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 67,
        "decorators": [],
        "name": "tempTag1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 105,
          "decorators": [],
          "name": "templateStrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 105,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 105,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 107,
          "end": 118,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 118,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 118,
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 120,
          "end": 124,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 125,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 127,
          "end": 128,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 130,
      "end": 222,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 147,
        "decorators": [],
        "name": "tempTag1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 151,
          "end": 185,
          "decorators": [],
          "name": "templateStrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 185,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 185,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 185,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 187,
          "end": 198,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 190,
              "end": 198,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 198,
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 200,
          "end": 211,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 211,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 211,
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 217,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 214,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 218,
        "end": 221,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 220,
          "end": 221,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 288,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 288,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 269,
            "end": 286,
            "argument": {
              "type": "Identifier",
              "start": 276,
              "end": 285,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 240,
        "decorators": [],
        "name": "tempTag1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 244,
          "end": 258,
          "argument": {
            "type": "Identifier",
            "start": 247,
            "end": 251,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 258,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 253,
              "end": 258,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 253,
                "end": 256
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 259,
        "end": 262,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 261,
          "end": 262,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 240,
        "end": 243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 241,
            "end": 242,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 608,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 526,
        "end": 607,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 535,
          "end": 607,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 539,
              "end": 579,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 544,
                "end": 579,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 546,
                    "end": 567,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 546,
                      "end": 566,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 556,
                          "end": 565,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 547,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 547,
                        "end": 555,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 548,
                            "end": 554
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 568,
                    "end": 577,
                    "argument": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "Literal",
              "start": 602,
              "end": 604,
              "raw": "10",
              "value": 10
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 535,
              "end": 538,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 598,
              "end": 601,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 605,
              "end": 607,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 526,
          "end": 534,
          "decorators": [],
          "name": "tempTag1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 609,
      "end": 753,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 609,
        "end": 752,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 618,
          "end": 752,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 622,
              "end": 662,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 627,
                "end": 662,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 629,
                    "end": 650,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 629,
                      "end": 649,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 639,
                          "end": 648,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 630,
                        "end": 638,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 631,
                            "end": 637
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 651,
                    "end": 660,
                    "argument": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 622,
                  "end": 623,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 685,
              "end": 725,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 690,
                "end": 725,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 692,
                    "end": 713,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 692,
                      "end": 712,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 702,
                          "end": 711,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 692,
                        "end": 693,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 693,
                        "end": 701,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 694,
                            "end": 700
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 714,
                    "end": 723,
                    "argument": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 722,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "Literal",
              "start": 747,
              "end": 749,
              "raw": "10",
              "value": 10
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 618,
              "end": 621,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 681,
              "end": 684,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 743,
              "end": 746,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 750,
              "end": 752,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 609,
          "end": 617,
          "decorators": [],
          "name": "tempTag1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 754,
      "end": 905,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 754,
        "end": 904,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 763,
          "end": 904,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 767,
              "end": 807,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 772,
                "end": 807,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 774,
                    "end": 795,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 774,
                      "end": 794,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 784,
                          "end": 793,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 775,
                        "end": 783,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 776,
                            "end": 782
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 796,
                    "end": 805,
                    "argument": {
                      "type": "Identifier",
                      "start": 803,
                      "end": 804,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 830,
              "end": 887,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 853,
                "end": 887,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 855,
                    "end": 876,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 855,
                      "end": 875,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 865,
                          "end": 874,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 856,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 856,
                        "end": 864,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 857,
                            "end": 863
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 877,
                    "end": 885,
                    "argument": {
                      "type": "Identifier",
                      "start": 884,
                      "end": 885,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 831,
                  "end": 848,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 832,
                    "end": 848,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 834,
                      "end": 848,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 838,
                          "end": 842,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 839,
                            "end": 842,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 841,
                              "end": 842,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 841,
                                "end": 842,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 844,
                        "end": 848,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 847,
                          "end": 848,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 847,
                            "end": 848,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 834,
                        "end": 837,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 835,
                            "end": 836,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 835,
                              "end": 836,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "Identifier",
              "start": 892,
              "end": 901,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 763,
              "end": 766,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 826,
              "end": 829,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 888,
              "end": 891,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 902,
              "end": 904,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 754,
          "end": 762,
          "decorators": [],
          "name": "tempTag1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 906,
      "end": 1057,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 906,
        "end": 1056,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 915,
          "end": 1056,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 919,
              "end": 977,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 942,
                "end": 977,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 944,
                    "end": 965,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 944,
                      "end": 964,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 954,
                          "end": 963,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 945,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 945,
                        "end": 953,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 946,
                            "end": 952
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 966,
                    "end": 975,
                    "argument": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 920,
                  "end": 937,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 921,
                    "end": 937,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 923,
                      "end": 937,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 927,
                          "end": 931,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 928,
                            "end": 931,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 930,
                              "end": 931,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 930,
                                "end": 931,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 933,
                        "end": 937,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 936,
                          "end": 937,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 936,
                            "end": 937,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 923,
                        "end": 926,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 924,
                            "end": 925,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 924,
                              "end": 925,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 982,
              "end": 1022,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 987,
                "end": 1022,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 989,
                    "end": 1010,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 989,
                      "end": 1009,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 999,
                          "end": 1008,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 989,
                        "end": 990,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 990,
                        "end": 998,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 991,
                            "end": 997
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1011,
                    "end": 1020,
                    "argument": {
                      "type": "Identifier",
                      "start": 1018,
                      "end": 1019,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 982,
                  "end": 983,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "Identifier",
              "start": 1044,
              "end": 1053,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 915,
              "end": 918,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 978,
              "end": 981,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1040,
              "end": 1043,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 1054,
              "end": 1056,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 906,
          "end": 914,
          "decorators": [],
          "name": "tempTag1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
