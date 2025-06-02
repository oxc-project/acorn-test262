__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 885,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "FuncType1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 17,
        "end": 48,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 18,
            "end": 35,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 35,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 21,
                "end": 35,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 21,
                  "end": 24,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 22,
                      "end": 23,
                      "name": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 25,
                    "end": 29,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 26,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 28,
                        "end": 29,
                        "typeName": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 29,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 35,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 37,
          "end": 48,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 40,
            "end": 48,
            "exprName": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "decorators": [],
        "name": "FuncType2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 67,
        "end": 101,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 68,
            "end": 88,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 88,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 71,
                "end": 88,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 71,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 72,
                      "end": 73,
                      "name": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 75,
                      "end": 76,
                      "name": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 78,
                    "end": 82,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 82,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 81,
                        "end": 82,
                        "typeName": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 90,
          "end": 101,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 93,
            "end": 101,
            "exprName": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 104,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "tempTag2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 122,
          "end": 156,
          "decorators": [],
          "name": "templateStrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 156,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 156,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 156,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 158,
          "end": 170,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 159,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 161,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 170,
                "decorators": [],
                "name": "FuncType1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 172,
          "end": 181,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 181,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 175,
              "end": 181
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 190,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 184,
          "end": 190
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 192,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 209,
        "decorators": [],
        "name": "tempTag2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 210,
          "end": 244,
          "decorators": [],
          "name": "templateStrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 244,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 244,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 246,
          "end": 258,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 247,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 249,
              "end": 258,
              "typeName": {
                "type": "Identifier",
                "start": 249,
                "end": 258,
                "decorators": [],
                "name": "FuncType2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 260,
          "end": 272,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 272,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 263,
              "end": 272,
              "typeName": {
                "type": "Identifier",
                "start": 263,
                "end": 272,
                "decorators": [],
                "name": "FuncType2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 274,
          "end": 283,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 283,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 277,
              "end": 283
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 284,
        "end": 292,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 286,
          "end": 292
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 294,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 311,
        "decorators": [],
        "name": "tempTag2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 312,
          "end": 326,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 319,
            "end": 326,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 321,
              "end": 326,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 321,
                "end": 324
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 327,
        "end": 332,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 329,
          "end": 332
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 333,
        "end": 358,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 339,
            "end": 356,
            "argument": {
              "type": "Identifier",
              "start": 346,
              "end": 355,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 667,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 596,
        "end": 666,
        "tag": {
          "type": "Identifier",
          "start": 596,
          "end": 604,
          "decorators": [],
          "name": "tempTag2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 605,
          "end": 666,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 605,
              "end": 608,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 658,
              "end": 661,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 664,
              "end": 666,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 609,
              "end": 649,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 609,
                  "end": 610,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 614,
                "end": 649,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 616,
                    "end": 637,
                    "expression": {
                      "type": "CallExpression",
                      "start": 616,
                      "end": 636,
                      "callee": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 617,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 617,
                        "end": 625,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 618,
                            "end": 624
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 626,
                          "end": 635,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 638,
                    "end": 647,
                    "argument": {
                      "type": "Identifier",
                      "start": 645,
                      "end": 646,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "value": 0,
              "raw": "0"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 668,
      "end": 793,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 668,
        "end": 792,
        "tag": {
          "type": "Identifier",
          "start": 668,
          "end": 676,
          "decorators": [],
          "name": "tempTag2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 677,
          "end": 792,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 677,
              "end": 680,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 730,
              "end": 733,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 778,
              "end": 781,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 790,
              "end": 792,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 681,
              "end": 729,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 686,
                "end": 729,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 688,
                    "end": 717,
                    "expression": {
                      "type": "CallExpression",
                      "start": 688,
                      "end": 716,
                      "callee": {
                        "type": "Identifier",
                        "start": 688,
                        "end": 689,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 689,
                        "end": 705,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 690,
                            "end": 696
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 698,
                            "end": 704
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 706,
                          "end": 715,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 718,
                    "end": 727,
                    "argument": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 726,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 734,
              "end": 777,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 739,
                "end": 777,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 741,
                    "end": 765,
                    "expression": {
                      "type": "CallExpression",
                      "start": 741,
                      "end": 764,
                      "callee": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 742,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 742,
                        "end": 758,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 743,
                            "end": 749
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 751,
                            "end": 757
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 759,
                          "end": 763,
                          "value": null,
                          "raw": "null"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 766,
                    "end": 775,
                    "argument": {
                      "type": "Identifier",
                      "start": 773,
                      "end": 774,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            {
              "type": "Literal",
              "start": 782,
              "end": 789,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 885,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 794,
        "end": 884,
        "tag": {
          "type": "Identifier",
          "start": 794,
          "end": 802,
          "decorators": [],
          "name": "tempTag2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 803,
          "end": 884,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 803,
              "end": 806,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 856,
              "end": 859,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 870,
              "end": 873,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 882,
              "end": 884,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 807,
              "end": 855,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 807,
                  "end": 808,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 812,
                "end": 855,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 814,
                    "end": 843,
                    "expression": {
                      "type": "CallExpression",
                      "start": 814,
                      "end": 842,
                      "callee": {
                        "type": "Identifier",
                        "start": 814,
                        "end": 815,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 815,
                        "end": 831,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 816,
                            "end": 822
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 824,
                            "end": 830
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 832,
                          "end": 841,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 844,
                    "end": 853,
                    "argument": {
                      "type": "Identifier",
                      "start": 851,
                      "end": 852,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            {
              "type": "Identifier",
              "start": 860,
              "end": 869,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 874,
              "end": 881,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
