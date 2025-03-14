taggedTemplateContextualTyping2.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "FuncType1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 17,
        "end": 48,
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
                          "optional": false
                        }
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
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 21,
                  "end": 24,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 22,
                      "end": 23,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "decorators": [],
        "name": "FuncType2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 67,
        "end": 101,
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
                          "optional": false
                        }
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
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 71,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 72,
                      "end": 73,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 75,
                      "end": 76,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 104,
      "end": 191,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "tempTag2",
        "optional": false
      },
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
                "optional": false
              }
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
                "optional": false
              }
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 192,
      "end": 293,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 209,
        "decorators": [],
        "name": "tempTag2",
        "optional": false
      },
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
                "optional": false
              }
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
                "optional": false
              }
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
                "optional": false
              }
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 294,
      "end": 358,
      "async": false,
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
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 311,
        "decorators": [],
        "name": "tempTag2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 312,
          "end": 326,
          "argument": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
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
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 667,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 596,
        "end": 666,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 605,
          "end": 666,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 609,
              "end": 649,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 626,
                          "end": 635,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 617,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
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
                      }
                    }
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
                      "optional": false
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
                  "start": 609,
                  "end": 610,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            },
            {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "raw": "0",
              "value": 0
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 605,
              "end": 608,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 658,
              "end": 661,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 664,
              "end": 666,
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
          "start": 596,
          "end": 604,
          "decorators": [],
          "name": "tempTag2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 668,
      "end": 793,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 668,
        "end": 792,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 677,
          "end": 792,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 681,
              "end": 729,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 706,
                          "end": 715,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 688,
                        "end": 689,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
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
                      }
                    }
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
                      "optional": false
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
                  "start": 681,
                  "end": 682,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 734,
              "end": 777,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 759,
                          "end": 763,
                          "raw": "null",
                          "value": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 742,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "optional": false,
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
                      }
                    }
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
                      "optional": false
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
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ]
            },
            {
              "type": "Literal",
              "start": 782,
              "end": 789,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 677,
              "end": 680,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 730,
              "end": 733,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 778,
              "end": 781,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 790,
              "end": 792,
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
          "start": 668,
          "end": 676,
          "decorators": [],
          "name": "tempTag2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 885,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 794,
        "end": 884,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 803,
          "end": 884,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 807,
              "end": 855,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 832,
                          "end": 841,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 814,
                        "end": 815,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
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
                      }
                    }
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
                      "optional": false
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
                  "start": 807,
                  "end": 808,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            },
            {
              "type": "Identifier",
              "start": 860,
              "end": 869,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            {
              "type": "Literal",
              "start": 874,
              "end": 881,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 803,
              "end": 806,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 856,
              "end": 859,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 870,
              "end": 873,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 882,
              "end": 884,
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
          "start": 794,
          "end": 802,
          "decorators": [],
          "name": "tempTag2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
