__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 1868,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "f1",
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
          "start": 35,
          "end": 63,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 63,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 38,
              "end": 63,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 38,
                  "end": 49,
                  "typeName": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 41,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 41,
                    "end": 49,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 63,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 55,
                    "end": 63,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 56,
                        "end": 62
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 217,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 93,
            "expression": {
              "type": "AssignmentExpression",
              "start": 71,
              "end": 92,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 75,
                "end": 92,
                "callee": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 82,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 82,
                  "end": 90,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  ]
                },
                "arguments": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 98,
            "end": 100,
            "expression": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 121,
            "end": 177,
            "test": {
              "type": "BinaryExpression",
              "start": 125,
              "end": 141,
              "left": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 138,
                "end": 141,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 143,
              "end": 177,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 155,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 182,
            "end": 184,
            "expression": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 215,
            "expression": {
              "type": "CallExpression",
              "start": 205,
              "end": 214,
              "callee": {
                "type": "MemberExpression",
                "start": 205,
                "end": 210,
                "object": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 210,
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 211,
                  "end": 213,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 219,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 230,
        "decorators": [],
        "name": "f2",
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
          "start": 231,
          "end": 259,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 232,
            "end": 259,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 234,
              "end": 259,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 234,
                  "end": 245,
                  "typeName": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 237,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 237,
                    "end": 245,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 238,
                        "end": 244
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 248,
                  "end": 259,
                  "typeName": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 251,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 251,
                    "end": 259,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 252,
                        "end": 258
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 432,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 267,
            "end": 289,
            "expression": {
              "type": "AssignmentExpression",
              "start": 267,
              "end": 288,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 271,
                "end": 288,
                "callee": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 278,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 278,
                  "end": 286,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
                    }
                  ]
                },
                "arguments": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 294,
            "end": 296,
            "expression": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 317,
            "end": 392,
            "test": {
              "type": "BinaryExpression",
              "start": 321,
              "end": 341,
              "left": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 334,
                "end": 341,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 343,
              "end": 392,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 353,
                  "end": 355,
                  "expression": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 397,
            "end": 399,
            "expression": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 430,
            "expression": {
              "type": "CallExpression",
              "start": 420,
              "end": 429,
              "callee": {
                "type": "MemberExpression",
                "start": 420,
                "end": 425,
                "object": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 425,
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 426,
                  "end": 428,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 434,
      "end": 629,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 445,
        "decorators": [],
        "name": "f3",
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
          "start": 446,
          "end": 474,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 447,
            "end": 474,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 449,
              "end": 474,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 449,
                  "end": 460,
                  "typeName": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 452,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 452,
                    "end": 460,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 453,
                        "end": 459
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 463,
                  "end": 474,
                  "typeName": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 466,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 466,
                    "end": 474,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 467,
                        "end": 473
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 476,
        "end": 629,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 482,
            "end": 484,
            "expression": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 519,
            "end": 627,
            "test": {
              "type": "BinaryExpression",
              "start": 523,
              "end": 539,
              "left": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 536,
                "end": 539,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 541,
              "end": 589,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 551,
                  "end": 553,
                  "expression": {
                    "type": "Identifier",
                    "start": 551,
                    "end": 552,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 599,
              "end": 627,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 609,
                  "end": 611,
                  "expression": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 610,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 631,
      "end": 825,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 642,
        "decorators": [],
        "name": "f4",
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
          "start": 643,
          "end": 671,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 644,
            "end": 671,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 646,
              "end": 671,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 646,
                  "end": 657,
                  "typeName": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 649,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 649,
                    "end": 657,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 650,
                        "end": 656
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 660,
                  "end": 671,
                  "typeName": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 663,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 663,
                    "end": 671,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 664,
                        "end": 670
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 673,
        "end": 825,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 679,
            "end": 701,
            "expression": {
              "type": "AssignmentExpression",
              "start": 679,
              "end": 700,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 679,
                "end": 680,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 683,
                "end": 700,
                "callee": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 690,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 690,
                  "end": 698,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
                    }
                  ]
                },
                "arguments": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 706,
            "end": 708,
            "expression": {
              "type": "Identifier",
              "start": 706,
              "end": 707,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 729,
            "end": 823,
            "test": {
              "type": "BinaryExpression",
              "start": 733,
              "end": 749,
              "left": {
                "type": "Identifier",
                "start": 733,
                "end": 734,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 746,
                "end": 749,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 751,
              "end": 785,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 761,
                  "end": 763,
                  "expression": {
                    "type": "Identifier",
                    "start": 761,
                    "end": 762,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 795,
              "end": 823,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 805,
                  "end": 807,
                  "expression": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 806,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 842,
      "end": 863,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 849,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 850,
        "end": 863,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 852,
            "end": 861,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 852,
              "end": 853,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 853,
              "end": 861,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 855,
                "end": 861
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 864,
      "end": 895,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 870,
        "end": 871,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 880,
        "end": 881,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 882,
        "end": 895,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 884,
            "end": 893,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 885,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 885,
              "end": 893,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 887,
                "end": 893
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 896,
      "end": 927,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 902,
        "end": 903,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 912,
        "end": 913,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 914,
        "end": 927,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 916,
            "end": 925,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 916,
              "end": 917,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 917,
              "end": 925,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 919,
                "end": 925
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 929,
      "end": 1453,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 941,
        "decorators": [],
        "name": "foo",
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
          "start": 942,
          "end": 958,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 943,
            "end": 958,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 945,
              "end": 958,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 945,
                  "end": 946,
                  "typeName": {
                    "type": "Identifier",
                    "start": 945,
                    "end": 946,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 949,
                  "end": 958
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 960,
        "end": 1453,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 966,
            "end": 968,
            "expression": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 991,
            "end": 1057,
            "test": {
              "type": "LogicalExpression",
              "start": 995,
              "end": 1027,
              "left": {
                "type": "BinaryExpression",
                "start": 995,
                "end": 1009,
                "left": {
                  "type": "Identifier",
                  "start": 995,
                  "end": 996,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1009,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 1013,
                "end": 1027,
                "left": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1014,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1027,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1029,
              "end": 1057,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1039,
                  "end": 1041,
                  "expression": {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1040,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1062,
            "end": 1064,
            "expression": {
              "type": "Identifier",
              "start": 1062,
              "end": 1063,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1087,
            "end": 1153,
            "test": {
              "type": "LogicalExpression",
              "start": 1091,
              "end": 1123,
              "left": {
                "type": "BinaryExpression",
                "start": 1091,
                "end": 1105,
                "left": {
                  "type": "Identifier",
                  "start": 1091,
                  "end": 1092,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1105,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 1109,
                "end": 1123,
                "left": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1110,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1123,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1125,
              "end": 1153,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1135,
                  "end": 1137,
                  "expression": {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1136,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1158,
            "end": 1160,
            "expression": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1183,
            "end": 1214,
            "test": {
              "type": "UnaryExpression",
              "start": 1187,
              "end": 1189,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 1188,
                "end": 1189,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1191,
              "end": 1214,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1201,
                  "end": 1208,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1219,
            "end": 1221,
            "expression": {
              "type": "Identifier",
              "start": 1219,
              "end": 1220,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1232,
            "end": 1438,
            "test": {
              "type": "BinaryExpression",
              "start": 1236,
              "end": 1250,
              "left": {
                "type": "Identifier",
                "start": 1236,
                "end": 1237,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1249,
                "end": 1250,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1252,
              "end": 1404,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1262,
                  "end": 1264,
                  "expression": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1263,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1279,
                  "end": 1381,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1283,
                    "end": 1297,
                    "left": {
                      "type": "Identifier",
                      "start": 1283,
                      "end": 1284,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 1296,
                      "end": 1297,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1299,
                    "end": 1335,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1313,
                        "end": 1315,
                        "expression": {
                          "type": "Identifier",
                          "start": 1313,
                          "end": 1314,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1349,
                    "end": 1381,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1363,
                        "end": 1365,
                        "expression": {
                          "type": "Identifier",
                          "start": 1363,
                          "end": 1364,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1390,
                  "end": 1392,
                  "expression": {
                    "type": "Identifier",
                    "start": 1390,
                    "end": 1391,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1414,
              "end": 1438,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1424,
                  "end": 1426,
                  "expression": {
                    "type": "Identifier",
                    "start": 1424,
                    "end": 1425,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1443,
            "end": 1445,
            "expression": {
              "type": "Identifier",
              "start": 1443,
              "end": 1444,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1555,
      "end": 1586,
      "id": {
        "type": "Identifier",
        "start": 1565,
        "end": 1566,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1567,
        "end": 1586,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1573,
            "end": 1584,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1573,
              "end": 1574,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1575,
              "end": 1583,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1577,
                "end": 1583
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1588,
      "end": 1614,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1594,
        "end": 1595,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1596,
        "end": 1614,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1602,
            "end": 1612,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1602,
              "end": 1603,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1603,
              "end": 1611,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1605,
                "end": 1611
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1616,
      "end": 1697,
      "id": {
        "type": "Identifier",
        "start": 1625,
        "end": 1628,
        "decorators": [],
        "name": "goo",
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
          "start": 1629,
          "end": 1633,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1630,
            "end": 1633,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1632,
              "end": 1633,
              "typeName": {
                "type": "Identifier",
                "start": 1632,
                "end": 1633,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1635,
        "end": 1697,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1641,
            "end": 1643,
            "expression": {
              "type": "Identifier",
              "start": 1641,
              "end": 1642,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1648,
            "end": 1688,
            "test": {
              "type": "BinaryExpression",
              "start": 1652,
              "end": 1666,
              "left": {
                "type": "Identifier",
                "start": 1652,
                "end": 1653,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1665,
                "end": 1666,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1668,
              "end": 1688,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1678,
                  "end": 1682,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1678,
                    "end": 1681,
                    "object": {
                      "type": "Identifier",
                      "start": 1678,
                      "end": 1679,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1680,
                      "end": 1681,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1693,
            "end": 1695,
            "expression": {
              "type": "Identifier",
              "start": 1693,
              "end": 1694,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1721,
      "end": 1756,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1735,
          "end": 1755,
          "id": {
            "type": "Identifier",
            "start": 1735,
            "end": 1755,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1736,
              "end": 1755,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1738,
                "end": 1755,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1739,
                    "end": 1749,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1742,
                      "end": 1749,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1745,
                        "end": 1749
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1751,
                    "end": 1755
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1757,
      "end": 1786,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1771,
          "end": 1785,
          "id": {
            "type": "Identifier",
            "start": 1771,
            "end": 1785,
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1775,
              "end": 1785,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1777,
                "end": 1785,
                "typeName": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1785,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 1788,
      "end": 1823,
      "test": {
        "type": "BinaryExpression",
        "start": 1792,
        "end": 1809,
        "left": {
          "type": "Identifier",
          "start": 1792,
          "end": 1793,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 1805,
          "end": 1809,
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1811,
        "end": 1823,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1817,
            "end": 1821,
            "expression": {
              "type": "CallExpression",
              "start": 1817,
              "end": 1820,
              "callee": {
                "type": "Identifier",
                "start": 1817,
                "end": 1818,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 124,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 34,
        "decorators": [],
        "name": "AtTop",
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
          "start": 35,
          "end": 38,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 58,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 56,
            "expression": {
              "type": "AssignmentExpression",
              "start": 42,
              "end": 56,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 42,
                "end": 50,
                "object": {
                  "type": "ThisExpression",
                  "start": 42,
                  "end": 46
                },
                "property": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 50,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 86,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 84,
            "end": 85,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 87,
      "end": 124,
      "test": {
        "type": "BinaryExpression",
        "start": 91,
        "end": 109,
        "left": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "AtTop",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 111,
        "end": 124,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 117,
            "end": 122,
            "expression": {
              "type": "MemberExpression",
              "start": 117,
              "end": 122,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 119,
                "end": 122,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
