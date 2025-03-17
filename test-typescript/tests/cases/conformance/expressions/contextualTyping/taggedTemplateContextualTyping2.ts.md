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
        "name": "FuncType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "x",
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
                    "start": 25,
                    "end": 29,
                    "name": "p",
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
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "name": "FuncType2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "x",
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
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "start": 78,
                    "end": 82,
                    "name": "p",
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
      "start": 104,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "name": "tempTag2",
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
          "start": 122,
          "end": 156,
          "name": "templateStrs",
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
          "start": 158,
          "end": 170,
          "name": "f",
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
                "name": "FuncType1",
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
          "start": 172,
          "end": 181,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 181,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 175,
              "end": 181
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 209,
        "name": "tempTag2",
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
          "start": 210,
          "end": 244,
          "name": "templateStrs",
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
          "start": 246,
          "end": 258,
          "name": "f",
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
                "name": "FuncType2",
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
          "start": 260,
          "end": 272,
          "name": "h",
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
                "name": "FuncType2",
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
          "start": 274,
          "end": 283,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 283,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 277,
              "end": 283
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 311,
        "name": "tempTag2",
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
          "start": 312,
          "end": 326,
          "argument": {
            "type": "Identifier",
            "start": 315,
            "end": 319,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
        "tag": {
          "type": "Identifier",
          "start": 596,
          "end": 604,
          "name": "tempTag2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 605,
          "end": 666,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 609,
              "end": 649,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 609,
                  "end": 610,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 626,
                          "end": 635,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
              "start": 662,
              "end": 663,
              "value": 0,
              "raw": "0"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 605,
              "end": 608,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 658,
              "end": 661,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 664,
              "end": 666,
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
          "name": "tempTag2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 677,
          "end": 792,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 681,
              "end": 729,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 706,
                          "end": 715,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
              "start": 734,
              "end": 777,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "start": 782,
              "end": 789,
              "value": "hello",
              "raw": "\"hello\""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 677,
              "end": 680,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 730,
              "end": 733,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 778,
              "end": 781,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 790,
              "end": 792,
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
          "name": "tempTag2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 803,
          "end": 884,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 807,
              "end": 855,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 807,
                  "end": 808,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 832,
                          "end": 841,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
              "type": "Identifier",
              "start": 860,
              "end": 869,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Literal",
              "start": 874,
              "end": 881,
              "value": "hello",
              "raw": "\"hello\""
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 803,
              "end": 806,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 856,
              "end": 859,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 870,
              "end": 873,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 882,
              "end": 884,
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
