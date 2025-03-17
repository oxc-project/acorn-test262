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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "FuncType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 16,
        "end": 47,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 17,
            "end": 34,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 34,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 20,
                "end": 34,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 20,
                  "end": 23,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 21,
                      "end": 22,
                      "name": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 24,
                    "end": 28,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 27,
                        "end": 28,
                        "typeName": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 28,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 50,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 67,
        "name": "tempTag1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 105,
          "name": "templateStrs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 105,
                "name": "TemplateStringsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 107,
          "end": 118,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 118,
                "name": "FuncType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 120,
          "end": 124,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 125,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 127,
          "end": 128,
          "typeName": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 130,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 147,
        "name": "tempTag1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 151,
          "end": 185,
          "name": "templateStrs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 185,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 185,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 185,
                "name": "TemplateStringsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 187,
          "end": 198,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 190,
              "end": 198,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 198,
                "name": "FuncType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 200,
          "end": 211,
          "name": "h",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 211,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 211,
                "name": "FuncType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 217,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 214,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 218,
        "end": 221,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 220,
          "end": 221,
          "typeName": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 240,
        "name": "tempTag1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 244,
          "end": 258,
          "argument": {
            "type": "Identifier",
            "start": 247,
            "end": 251,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 240,
        "end": 243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 241,
            "end": 242,
            "name": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 259,
        "end": 262,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 261,
          "end": 262,
          "typeName": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 608,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 526,
        "end": 607,
        "tag": {
          "type": "Identifier",
          "start": 526,
          "end": 534,
          "name": "tempTag1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 535,
          "end": 607,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 539,
              "end": 579,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 544,
                "end": 579,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 546,
                    "end": 567,
                    "expression": {
                      "type": "CallExpression",
                      "start": 546,
                      "end": 566,
                      "callee": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 547,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 556,
                          "end": 565,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 568,
                    "end": 577,
                    "argument": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "Literal",
              "start": 602,
              "end": 604,
              "value": 10,
              "raw": "10"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 535,
              "end": 538,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 598,
              "end": 601,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 605,
              "end": 607,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 609,
      "end": 753,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 609,
        "end": 752,
        "tag": {
          "type": "Identifier",
          "start": 609,
          "end": 617,
          "name": "tempTag1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 618,
          "end": 752,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 622,
              "end": 662,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 622,
                  "end": 623,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 627,
                "end": 662,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 629,
                    "end": 650,
                    "expression": {
                      "type": "CallExpression",
                      "start": 629,
                      "end": 649,
                      "callee": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 639,
                          "end": 648,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 651,
                    "end": 660,
                    "argument": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 685,
              "end": 725,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 690,
                "end": 725,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 692,
                    "end": 713,
                    "expression": {
                      "type": "CallExpression",
                      "start": 692,
                      "end": 712,
                      "callee": {
                        "type": "Identifier",
                        "start": 692,
                        "end": 693,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 702,
                          "end": 711,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 714,
                    "end": 723,
                    "argument": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 722,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "Literal",
              "start": 747,
              "end": 749,
              "value": 10,
              "raw": "10"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 618,
              "end": 621,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 681,
              "end": 684,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 743,
              "end": 746,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 750,
              "end": 752,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 754,
      "end": 905,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 754,
        "end": 904,
        "tag": {
          "type": "Identifier",
          "start": 754,
          "end": 762,
          "name": "tempTag1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 763,
          "end": 904,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 767,
              "end": 807,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 772,
                "end": 807,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 774,
                    "end": 795,
                    "expression": {
                      "type": "CallExpression",
                      "start": 774,
                      "end": 794,
                      "callee": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 784,
                          "end": 793,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 796,
                    "end": 805,
                    "argument": {
                      "type": "Identifier",
                      "start": 803,
                      "end": 804,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 830,
              "end": 887,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 831,
                  "end": 848,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 832,
                    "end": 848,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 834,
                      "end": 848,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 834,
                        "end": 837,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 835,
                            "end": 836,
                            "name": {
                              "type": "Identifier",
                              "start": 835,
                              "end": 836,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 838,
                          "end": 842,
                          "name": "p",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 839,
                            "end": 842,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 841,
                              "end": 842,
                              "typeName": {
                                "type": "Identifier",
                                "start": 841,
                                "end": 842,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 847,
                            "end": 848,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 853,
                "end": 887,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 855,
                    "end": 876,
                    "expression": {
                      "type": "CallExpression",
                      "start": 855,
                      "end": 875,
                      "callee": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 856,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 865,
                          "end": 874,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 877,
                    "end": 885,
                    "argument": {
                      "type": "Identifier",
                      "start": 884,
                      "end": 885,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "Identifier",
              "start": 892,
              "end": 901,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 763,
              "end": 766,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 826,
              "end": 829,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 888,
              "end": 891,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 902,
              "end": 904,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 906,
      "end": 1057,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 906,
        "end": 1056,
        "tag": {
          "type": "Identifier",
          "start": 906,
          "end": 914,
          "name": "tempTag1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 915,
          "end": 1056,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 919,
              "end": 977,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 920,
                  "end": 937,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 921,
                    "end": 937,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 923,
                      "end": 937,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 923,
                        "end": 926,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 924,
                            "end": 925,
                            "name": {
                              "type": "Identifier",
                              "start": 924,
                              "end": 925,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 927,
                          "end": 931,
                          "name": "p",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 928,
                            "end": 931,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 930,
                              "end": 931,
                              "typeName": {
                                "type": "Identifier",
                                "start": 930,
                                "end": 931,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 936,
                            "end": 937,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 942,
                "end": 977,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 944,
                    "end": 965,
                    "expression": {
                      "type": "CallExpression",
                      "start": 944,
                      "end": 964,
                      "callee": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 945,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 954,
                          "end": 963,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 966,
                    "end": 975,
                    "argument": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 982,
              "end": 1022,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 982,
                  "end": 983,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 987,
                "end": 1022,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 989,
                    "end": 1010,
                    "expression": {
                      "type": "CallExpression",
                      "start": 989,
                      "end": 1009,
                      "callee": {
                        "type": "Identifier",
                        "start": 989,
                        "end": 990,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 999,
                          "end": 1008,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1011,
                    "end": 1020,
                    "argument": {
                      "type": "Identifier",
                      "start": 1018,
                      "end": 1019,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "Identifier",
              "start": 1044,
              "end": 1053,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 915,
              "end": 918,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 978,
              "end": 981,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1040,
              "end": 1043,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1054,
              "end": 1056,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
