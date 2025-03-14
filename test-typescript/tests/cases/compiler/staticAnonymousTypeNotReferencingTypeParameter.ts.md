__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 140,
  "end": 5389,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 224,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 168,
            "end": 206,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 180,
              "end": 206,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 186,
                  "end": 202,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 194,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 196,
                      "end": 197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 179,
              "decorators": [],
              "name": "Inner",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ReturnStatement",
            "start": 209,
            "end": 222,
            "argument": {
              "type": "Identifier",
              "start": 216,
              "end": 221,
              "decorators": [],
              "name": "Inner",
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
        "start": 149,
        "end": 154,
        "decorators": [],
        "name": "outer",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 158,
          "end": 162,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 159,
            "end": 162,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 161,
              "end": 162,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 154,
        "end": 157,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 156,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 238,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 238,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 232,
                "end": 238
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 241,
            "end": 251,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 241,
              "end": 249,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 247,
                  "end": 248,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 241,
                "end": 246,
                "decorators": [],
                "name": "outer",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 492,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 273,
        "end": 492,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 362,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "decorators": [],
              "name": "clone",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 362,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 336,
                "end": 362,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 338,
                    "end": 360,
                    "argument": {
                      "type": "CallExpression",
                      "start": 345,
                      "end": 359,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 357,
                          "end": 358,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 345,
                        "end": 356,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 350,
                          "decorators": [],
                          "name": "array",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 356,
                          "decorators": [],
                          "name": "slice",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 293,
                  "end": 317,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 317,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 298,
                      "end": 317,
                      "exprName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 317,
                        "decorators": [],
                        "name": "ListWrapper2",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 319,
                  "end": 329,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 326,
                      "end": 329,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 326,
                        "end": 327,
                        "typeName": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 327,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 330,
                "end": 335,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 332,
                  "end": 335,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 332,
                    "end": 333,
                    "typeName": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 333,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 289,
                "end": 292,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 290,
                    "end": 291,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 365,
            "end": 490,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 380,
              "decorators": [],
              "name": "reversed",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 380,
              "end": 490,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 427,
                "end": 490,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 433,
                    "end": 472,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 437,
                        "end": 471,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 437,
                          "end": 438,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 441,
                          "end": 471,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 460,
                              "end": 463,
                              "decorators": [],
                              "name": "dit",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 465,
                              "end": 470,
                              "decorators": [],
                              "name": "array",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 441,
                            "end": 459,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 441,
                              "end": 453,
                              "decorators": [],
                              "name": "ListWrapper2",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 454,
                              "end": 459,
                              "decorators": [],
                              "name": "clone",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 477,
                    "end": 486,
                    "argument": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 485,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 384,
                  "end": 408,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 408,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 389,
                      "end": 408,
                      "exprName": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 408,
                        "decorators": [],
                        "name": "ListWrapper2",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 410,
                  "end": 420,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 420,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 417,
                      "end": 420,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 417,
                        "end": 418,
                        "typeName": {
                          "type": "Identifier",
                          "start": 417,
                          "end": 418,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 426,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 423,
                  "end": 426,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 423,
                    "end": 424,
                    "typeName": {
                      "type": "Identifier",
                      "start": 423,
                      "end": 424,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 380,
                "end": 383,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 381,
                    "end": 382,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 272,
        "decorators": [],
        "name": "ListWrapper2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 493,
      "end": 1180,
      "body": {
        "type": "TSModuleBlock",
        "start": 510,
        "end": 1180,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 809,
            "end": 1178,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 816,
              "end": 1178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 899,
                "end": 1178,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 909,
                    "end": 1146,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 920,
                      "end": 1146,
                      "body": [
                        {
                          "type": "ForStatement",
                          "start": 934,
                          "end": 1136,
                          "body": {
                            "type": "BlockStatement",
                            "start": 984,
                            "end": 1136,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 1002,
                                "end": 1039,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 1008,
                                    "end": 1038,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 1008,
                                      "end": 1014,
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "start": 1017,
                                      "end": 1038,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "start": 1026,
                                          "end": 1034,
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1026,
                                            "end": 1031,
                                            "decorators": [],
                                            "name": "array",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1032,
                                            "end": 1033,
                                            "decorators": [],
                                            "name": "i",
                                            "optional": false
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 1036,
                                          "end": 1037,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 1017,
                                        "end": 1025,
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false
                                      },
                                      "optional": false
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const"
                              },
                              {
                                "type": "IfStatement",
                                "start": 1056,
                                "end": 1122,
                                "alternate": null,
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 1068,
                                  "end": 1122,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 1090,
                                      "end": 1104,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 1097,
                                        "end": 1103,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "test": {
                                  "type": "Identifier",
                                  "start": 1060,
                                  "end": 1066,
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "init": {
                            "type": "VariableDeclaration",
                            "start": 939,
                            "end": 968,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 943,
                                "end": 948,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 943,
                                  "end": 944,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 947,
                                  "end": 948,
                                  "raw": "0",
                                  "value": 0
                                }
                              },
                              {
                                "type": "VariableDeclarator",
                                "start": 950,
                                "end": 968,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 950,
                                  "end": 953,
                                  "decorators": [],
                                  "name": "len",
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 956,
                                  "end": 968,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 956,
                                    "end": 961,
                                    "decorators": [],
                                    "name": "array",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 962,
                                    "end": 968,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let"
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 970,
                            "end": 977,
                            "operator": "<",
                            "left": {
                              "type": "Identifier",
                              "start": 970,
                              "end": 971,
                              "decorators": [],
                              "name": "i",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 974,
                              "end": 977,
                              "decorators": [],
                              "name": "len",
                              "optional": false
                            }
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "start": 979,
                            "end": 982,
                            "argument": {
                              "type": "Identifier",
                              "start": 979,
                              "end": 980,
                              "decorators": [],
                              "name": "i",
                              "optional": false
                            },
                            "operator": "++",
                            "prefix": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 918,
                      "decorators": [],
                      "name": "array",
                      "optional": false
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1155,
                    "end": 1172,
                    "argument": {
                      "type": "Identifier",
                      "start": 1162,
                      "end": 1171,
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
                "start": 825,
                "end": 833,
                "decorators": [],
                "name": "funkyFor",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 840,
                  "end": 850,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 845,
                    "end": 850,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 847,
                      "end": 850,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 847,
                        "end": 848,
                        "typeName": {
                          "type": "Identifier",
                          "start": 847,
                          "end": 848,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 852,
                  "end": 894,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 860,
                    "end": 894,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 862,
                      "end": 894,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 863,
                          "end": 873,
                          "decorators": [],
                          "name": "element",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 870,
                            "end": 873,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 872,
                              "end": 873,
                              "typeName": {
                                "type": "Identifier",
                                "start": 872,
                                "end": 873,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 875,
                          "end": 888,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 880,
                            "end": 888,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 882,
                              "end": 888
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 890,
                        "end": 894,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 893,
                          "end": 894,
                          "typeName": {
                            "type": "Identifier",
                            "start": 893,
                            "end": 894,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 895,
                "end": 898,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 897,
                  "end": 898,
                  "typeName": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 898,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 833,
                "end": 839,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 834,
                    "end": 835,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 835,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 837,
                    "end": 838,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 838,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 509,
        "decorators": [],
        "name": "tessst",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1181,
      "end": 1271,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1199,
        "end": 1271,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1203,
            "end": 1269,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1203,
              "end": 1212,
              "decorators": [],
              "name": "scanRange",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1216,
                "end": 1229,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1221,
                  "end": 1229,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1223,
                    "end": 1229
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1231,
                "end": 1245,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1237,
                  "end": 1245,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1239,
                    "end": 1245
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1247,
                "end": 1264,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1255,
                  "end": 1264,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1257,
                    "end": 1264,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1260,
                      "end": 1264,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1263,
                        "end": 1264,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1263,
                          "end": 1264,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1265,
              "end": 1268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1267,
                "end": 1268,
                "typeName": {
                  "type": "Identifier",
                  "start": 1267,
                  "end": 1268,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1212,
              "end": 1215,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1213,
                  "end": 1214,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1214,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1191,
        "end": 1198,
        "decorators": [],
        "name": "Scanner",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1272,
      "end": 5138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1290,
        "end": 5138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1398,
            "end": 1494,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1405,
              "end": 1420,
              "decorators": [],
              "name": "createFixedSize",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1420,
              "end": 1494,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1467,
                "end": 1494,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1469,
                    "end": 1492,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1476,
                      "end": 1491,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1486,
                          "end": 1490,
                          "decorators": [],
                          "name": "size",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1480,
                        "end": 1485,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1444,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1424,
                    "end": 1444,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1426,
                      "end": 1444,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1433,
                        "end": 1444,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1458,
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1450,
                    "end": 1458,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1452,
                      "end": 1458
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1459,
                "end": 1466,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1461,
                  "end": 1466,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1461,
                    "end": 1464
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1497,
            "end": 1596,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1504,
              "end": 1522,
              "decorators": [],
              "name": "createGrowableSize",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1522,
              "end": 1596,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1569,
                "end": 1596,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1571,
                    "end": 1594,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1578,
                      "end": 1593,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1588,
                          "end": 1592,
                          "decorators": [],
                          "name": "size",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1582,
                        "end": 1587,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1523,
                  "end": 1546,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1526,
                    "end": 1546,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1528,
                      "end": 1546,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1535,
                        "end": 1546,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1548,
                  "end": 1560,
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1552,
                    "end": 1560,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1554,
                      "end": 1560
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1561,
                "end": 1568,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1563,
                  "end": 1568,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1563,
                    "end": 1566
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1599,
            "end": 1683,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1606,
              "end": 1611,
              "decorators": [],
              "name": "clone",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1611,
              "end": 1683,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1657,
                "end": 1683,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1659,
                    "end": 1681,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1666,
                      "end": 1680,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1678,
                          "end": 1679,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1666,
                        "end": 1677,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1666,
                          "end": 1671,
                          "decorators": [],
                          "name": "array",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1672,
                          "end": 1677,
                          "decorators": [],
                          "name": "slice",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1615,
                  "end": 1638,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1618,
                    "end": 1638,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1620,
                      "end": 1638,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1627,
                        "end": 1638,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1650,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1645,
                    "end": 1650,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1647,
                      "end": 1650,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1647,
                        "end": 1648,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1647,
                          "end": 1648,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1651,
                "end": 1656,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1653,
                  "end": 1656,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1653,
                    "end": 1654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1653,
                      "end": 1654,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1611,
                "end": 1614,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1612,
                    "end": 1613,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1612,
                      "end": 1613,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1686,
            "end": 1860,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1693,
              "end": 1709,
              "decorators": [],
              "name": "forEachWithIndex",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1709,
              "end": 1860,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1781,
                "end": 1860,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 1787,
                    "end": 1856,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1826,
                      "end": 1856,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1834,
                          "end": 1850,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1834,
                            "end": 1849,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 1837,
                                "end": 1845,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1837,
                                  "end": 1842,
                                  "decorators": [],
                                  "name": "array",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1843,
                                  "end": 1844,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 1847,
                                "end": 1848,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1834,
                              "end": 1836,
                              "decorators": [],
                              "name": "fn",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 1792,
                      "end": 1801,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1796,
                          "end": 1801,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 1796,
                            "end": 1797,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 1800,
                            "end": 1801,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1803,
                      "end": 1819,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 1803,
                        "end": 1804,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1807,
                        "end": 1819,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1807,
                          "end": 1812,
                          "decorators": [],
                          "name": "array",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1813,
                          "end": 1819,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1821,
                      "end": 1824,
                      "argument": {
                        "type": "Identifier",
                        "start": 1821,
                        "end": 1822,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1713,
                  "end": 1736,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1716,
                    "end": 1736,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1718,
                      "end": 1736,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1725,
                        "end": 1736,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1748,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1743,
                    "end": 1748,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1745,
                      "end": 1748,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1745,
                        "end": 1746,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1746,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1750,
                  "end": 1779,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1752,
                    "end": 1779,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1754,
                      "end": 1779,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1755,
                          "end": 1759,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1756,
                            "end": 1759,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1758,
                              "end": 1759,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1758,
                                "end": 1759,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1761,
                          "end": 1770,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1762,
                            "end": 1770,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1764,
                              "end": 1770
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1772,
                        "end": 1779,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1775,
                          "end": 1779
                        }
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1709,
                "end": 1712,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1710,
                    "end": 1711,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1710,
                      "end": 1711,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1863,
            "end": 1974,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1870,
              "end": 1875,
              "decorators": [],
              "name": "first",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1875,
              "end": 1974,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1919,
                "end": 1974,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1925,
                    "end": 1949,
                    "alternate": null,
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 1937,
                      "end": 1949,
                      "argument": {
                        "type": "Literal",
                        "start": 1944,
                        "end": 1948,
                        "raw": "null",
                        "value": null
                      }
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 1929,
                      "end": 1935,
                      "argument": {
                        "type": "Identifier",
                        "start": 1930,
                        "end": 1935,
                        "decorators": [],
                        "name": "array",
                        "optional": false
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1954,
                    "end": 1970,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1961,
                      "end": 1969,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 1961,
                        "end": 1966,
                        "decorators": [],
                        "name": "array",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 1967,
                        "end": 1968,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1879,
                  "end": 1902,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1882,
                    "end": 1902,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1884,
                      "end": 1902,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1891,
                        "end": 1902,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1904,
                  "end": 1914,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1909,
                    "end": 1914,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1911,
                      "end": 1914,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1911,
                        "end": 1912,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1911,
                          "end": 1912,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1915,
                "end": 1918,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1917,
                  "end": 1918,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1917,
                    "end": 1918,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1875,
                "end": 1878,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1876,
                    "end": 1877,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1876,
                      "end": 1877,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1977,
            "end": 2123,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1984,
              "end": 1988,
              "decorators": [],
              "name": "last",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1988,
              "end": 2123,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2032,
                "end": 2123,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 2038,
                    "end": 2083,
                    "alternate": null,
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 2071,
                      "end": 2083,
                      "argument": {
                        "type": "Literal",
                        "start": 2078,
                        "end": 2082,
                        "raw": "null",
                        "value": null
                      }
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 2042,
                      "end": 2069,
                      "operator": "||",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 2042,
                        "end": 2048,
                        "argument": {
                          "type": "Identifier",
                          "start": 2043,
                          "end": 2048,
                          "decorators": [],
                          "name": "array",
                          "optional": false
                        },
                        "operator": "!",
                        "prefix": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 2052,
                        "end": 2069,
                        "operator": "==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2052,
                          "end": 2064,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2052,
                            "end": 2057,
                            "decorators": [],
                            "name": "array",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2058,
                            "end": 2064,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2068,
                          "end": 2069,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2088,
                    "end": 2119,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2095,
                      "end": 2118,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 2095,
                        "end": 2100,
                        "decorators": [],
                        "name": "array",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "BinaryExpression",
                        "start": 2101,
                        "end": 2117,
                        "operator": "-",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2101,
                          "end": 2113,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2101,
                            "end": 2106,
                            "decorators": [],
                            "name": "array",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2107,
                            "end": 2113,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2116,
                          "end": 2117,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1992,
                  "end": 2015,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1995,
                    "end": 2015,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1997,
                      "end": 2015,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2004,
                        "end": 2015,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2017,
                  "end": 2027,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2022,
                    "end": 2027,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2024,
                      "end": 2027,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2024,
                        "end": 2025,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2024,
                          "end": 2025,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2028,
                "end": 2031,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2030,
                  "end": 2031,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2030,
                    "end": 2031,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1988,
                "end": 1991,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1989,
                    "end": 1990,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1990,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2126,
            "end": 2273,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2133,
              "end": 2140,
              "decorators": [],
              "name": "indexOf",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2140,
              "end": 2273,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2223,
                "end": 2273,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2229,
                    "end": 2269,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2236,
                      "end": 2268,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2250,
                          "end": 2255,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 2257,
                          "end": 2267,
                          "decorators": [],
                          "name": "startIndex",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2236,
                        "end": 2249,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2236,
                          "end": 2241,
                          "decorators": [],
                          "name": "array",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2242,
                          "end": 2249,
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2144,
                  "end": 2167,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2147,
                    "end": 2167,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2149,
                      "end": 2167,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2156,
                        "end": 2167,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2169,
                  "end": 2179,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2174,
                    "end": 2179,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2176,
                      "end": 2179,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2176,
                        "end": 2177,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2176,
                          "end": 2177,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2181,
                  "end": 2189,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2186,
                    "end": 2189,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2188,
                      "end": 2189,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2188,
                        "end": 2189,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2191,
                  "end": 2213,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2191,
                    "end": 2209,
                    "decorators": [],
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2201,
                      "end": 2209,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2203,
                        "end": 2209
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 2212,
                    "end": 2213,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2214,
                "end": 2222,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2216,
                  "end": 2222
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2140,
                "end": 2143,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2141,
                    "end": 2142,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2141,
                      "end": 2142,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2276,
            "end": 2382,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2283,
              "end": 2291,
              "decorators": [],
              "name": "contains",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2291,
              "end": 2382,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2347,
                "end": 2382,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2349,
                    "end": 2380,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2356,
                      "end": 2379,
                      "operator": "!==",
                      "left": {
                        "type": "CallExpression",
                        "start": 2356,
                        "end": 2372,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2369,
                            "end": 2371,
                            "decorators": [],
                            "name": "el",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2356,
                          "end": 2368,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2356,
                            "end": 2360,
                            "decorators": [],
                            "name": "list",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2361,
                            "end": 2368,
                            "decorators": [],
                            "name": "indexOf",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 2377,
                        "end": 2379,
                        "argument": {
                          "type": "Literal",
                          "start": 2378,
                          "end": 2379,
                          "raw": "1",
                          "value": 1
                        },
                        "operator": "-",
                        "prefix": true
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2295,
                  "end": 2318,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2298,
                    "end": 2318,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2300,
                      "end": 2318,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2307,
                        "end": 2318,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2320,
                  "end": 2329,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2324,
                    "end": 2329,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2326,
                      "end": 2329,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2326,
                        "end": 2327,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2326,
                          "end": 2327,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2336,
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2333,
                    "end": 2336,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2335,
                      "end": 2336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2335,
                        "end": 2336,
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
                "start": 2337,
                "end": 2346,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2339,
                  "end": 2346
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2291,
                "end": 2294,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2292,
                    "end": 2293,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2292,
                      "end": 2293,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2385,
            "end": 2633,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2392,
              "end": 2400,
              "decorators": [],
              "name": "reversed",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2400,
              "end": 2633,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2446,
                "end": 2633,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2452,
                    "end": 2490,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2456,
                        "end": 2489,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2456,
                          "end": 2457,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 2460,
                          "end": 2489,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 2478,
                              "end": 2481,
                              "decorators": [],
                              "name": "dit",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2483,
                              "end": 2488,
                              "decorators": [],
                              "name": "array",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2460,
                            "end": 2477,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2460,
                              "end": 2471,
                              "decorators": [],
                              "name": "ListWrapper",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2472,
                              "end": 2477,
                              "decorators": [],
                              "name": "clone",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2495,
                    "end": 2516,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2499,
                        "end": 2515,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2499,
                          "end": 2515,
                          "decorators": [],
                          "name": "scanner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2506,
                            "end": 2515,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2508,
                              "end": 2515,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2508,
                                "end": 2515,
                                "decorators": [],
                                "name": "Scanner",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2521,
                    "end": 2557,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2521,
                      "end": 2556,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2539,
                          "end": 2540,
                          "raw": "3",
                          "value": 3
                        },
                        {
                          "type": "Literal",
                          "start": 2542,
                          "end": 2543,
                          "raw": "5",
                          "value": 5
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 2545,
                          "end": 2555,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 2551,
                            "end": 2555,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2521,
                        "end": 2538,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2521,
                          "end": 2528,
                          "decorators": [],
                          "name": "scanner",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2529,
                          "end": 2538,
                          "decorators": [],
                          "name": "scanRange",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2562,
                    "end": 2629,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 2569,
                      "end": 2628,
                      "alternate": {
                        "type": "Identifier",
                        "start": 2627,
                        "end": 2628,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 2613,
                        "end": 2624,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2613,
                          "end": 2622,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2613,
                            "end": 2614,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2615,
                            "end": 2622,
                            "decorators": [],
                            "name": "reverse",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "test": {
                        "type": "CallExpression",
                        "start": 2569,
                        "end": 2610,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2585,
                            "end": 2590,
                            "decorators": [],
                            "name": "array",
                            "optional": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 2592,
                            "end": 2609,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 2597,
                              "end": 2609,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2597,
                                "end": 2607,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2597,
                                  "end": 2598,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2599,
                                  "end": 2607,
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2592,
                                "end": 2593,
                                "decorators": [],
                                "name": "t",
                                "optional": false
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2569,
                          "end": 2584,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2569,
                            "end": 2575,
                            "decorators": [],
                            "name": "tessst",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2576,
                            "end": 2584,
                            "decorators": [],
                            "name": "funkyFor",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2404,
                  "end": 2427,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2407,
                    "end": 2427,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2409,
                      "end": 2427,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2416,
                        "end": 2427,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2429,
                  "end": 2439,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2434,
                    "end": 2439,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2436,
                      "end": 2439,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2436,
                        "end": 2437,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2436,
                          "end": 2437,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2440,
                "end": 2445,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 2442,
                  "end": 2445,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 2442,
                    "end": 2443,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2442,
                      "end": 2443,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2400,
                "end": 2403,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2401,
                    "end": 2402,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2401,
                      "end": 2402,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2636,
            "end": 2725,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2643,
              "end": 2649,
              "decorators": [],
              "name": "concat",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2649,
              "end": 2725,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2702,
                "end": 2725,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2704,
                    "end": 2723,
                    "argument": {
                      "type": "CallExpression",
                      "start": 2711,
                      "end": 2722,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2720,
                          "end": 2721,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2711,
                        "end": 2719,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2711,
                          "end": 2712,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2713,
                          "end": 2719,
                          "decorators": [],
                          "name": "concat",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2650,
                  "end": 2673,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2653,
                    "end": 2673,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2655,
                      "end": 2673,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2662,
                        "end": 2673,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2675,
                  "end": 2683,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2676,
                    "end": 2683,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2678,
                      "end": 2683,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2678,
                        "end": 2681
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2685,
                  "end": 2693,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2686,
                    "end": 2693,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2688,
                      "end": 2693,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2688,
                        "end": 2691
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2694,
                "end": 2701,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 2696,
                  "end": 2701,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2696,
                    "end": 2699
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2728,
            "end": 2839,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2735,
              "end": 2741,
              "decorators": [],
              "name": "insert",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2741,
              "end": 2839,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2806,
                "end": 2839,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2808,
                    "end": 2837,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2808,
                      "end": 2836,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2820,
                          "end": 2825,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 2827,
                          "end": 2828,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Identifier",
                          "start": 2830,
                          "end": 2835,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2808,
                        "end": 2819,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2808,
                          "end": 2812,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2813,
                          "end": 2819,
                          "decorators": [],
                          "name": "splice",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2745,
                  "end": 2768,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2748,
                    "end": 2768,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2750,
                      "end": 2768,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2757,
                        "end": 2768,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2770,
                  "end": 2779,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2774,
                    "end": 2779,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2776,
                      "end": 2779,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2776,
                        "end": 2777,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2776,
                          "end": 2777,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2781,
                  "end": 2794,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2786,
                    "end": 2794,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2788,
                      "end": 2794
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2796,
                  "end": 2804,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2801,
                    "end": 2804,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2803,
                      "end": 2804,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2803,
                        "end": 2804,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2741,
                "end": 2744,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2742,
                    "end": 2743,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2742,
                      "end": 2743,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2842,
            "end": 2990,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2849,
              "end": 2857,
              "decorators": [],
              "name": "removeAt",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2857,
              "end": 2990,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2915,
                "end": 2990,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2921,
                    "end": 2943,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2925,
                        "end": 2942,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2925,
                          "end": 2928,
                          "decorators": [],
                          "name": "res",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 2931,
                          "end": 2942,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 2931,
                            "end": 2935,
                            "decorators": [],
                            "name": "list",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2936,
                            "end": 2941,
                            "decorators": [],
                            "name": "index",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2948,
                    "end": 2970,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2948,
                      "end": 2969,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2960,
                          "end": 2965,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 2967,
                          "end": 2968,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2948,
                        "end": 2959,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2948,
                          "end": 2952,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2953,
                          "end": 2959,
                          "decorators": [],
                          "name": "splice",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2975,
                    "end": 2986,
                    "argument": {
                      "type": "Identifier",
                      "start": 2982,
                      "end": 2985,
                      "decorators": [],
                      "name": "res",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2861,
                  "end": 2884,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2864,
                    "end": 2884,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2866,
                      "end": 2884,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2873,
                        "end": 2884,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2886,
                  "end": 2895,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2890,
                    "end": 2895,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2892,
                      "end": 2895,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2892,
                        "end": 2893,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2892,
                          "end": 2893,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2897,
                  "end": 2910,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2902,
                    "end": 2910,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2904,
                      "end": 2910
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2911,
                "end": 2914,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2913,
                  "end": 2914,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2913,
                    "end": 2914,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2857,
                "end": 2860,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2858,
                    "end": 2859,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2858,
                      "end": 2859,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2993,
            "end": 3188,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3000,
              "end": 3009,
              "decorators": [],
              "name": "removeAll",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3009,
              "end": 3188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3061,
                "end": 3188,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 3067,
                    "end": 3184,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3106,
                      "end": 3184,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 3114,
                          "end": 3149,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 3118,
                              "end": 3148,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 3118,
                                "end": 3123,
                                "decorators": [],
                                "name": "index",
                                "optional": false
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 3126,
                                "end": 3148,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 3139,
                                    "end": 3147,
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3139,
                                      "end": 3144,
                                      "decorators": [],
                                      "name": "items",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3145,
                                      "end": 3146,
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3126,
                                  "end": 3138,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3126,
                                    "end": 3130,
                                    "decorators": [],
                                    "name": "list",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3131,
                                    "end": 3138,
                                    "decorators": [],
                                    "name": "indexOf",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3156,
                          "end": 3178,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3156,
                            "end": 3177,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 3168,
                                "end": 3173,
                                "decorators": [],
                                "name": "index",
                                "optional": false
                              },
                              {
                                "type": "Literal",
                                "start": 3175,
                                "end": 3176,
                                "raw": "1",
                                "value": 1
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3156,
                              "end": 3167,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 3156,
                                "end": 3160,
                                "decorators": [],
                                "name": "list",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3161,
                                "end": 3167,
                                "decorators": [],
                                "name": "splice",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 3072,
                      "end": 3081,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3076,
                          "end": 3081,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 3076,
                            "end": 3077,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 3080,
                            "end": 3081,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3083,
                      "end": 3099,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 3083,
                        "end": 3084,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 3087,
                        "end": 3099,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3087,
                          "end": 3092,
                          "decorators": [],
                          "name": "items",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3093,
                          "end": 3099,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 3101,
                      "end": 3104,
                      "argument": {
                        "type": "Identifier",
                        "start": 3103,
                        "end": 3104,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3013,
                  "end": 3036,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3016,
                    "end": 3036,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3018,
                      "end": 3036,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3025,
                        "end": 3036,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3038,
                  "end": 3047,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3042,
                    "end": 3047,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3044,
                      "end": 3047,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 3044,
                        "end": 3045,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3044,
                          "end": 3045,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3049,
                  "end": 3059,
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3054,
                    "end": 3059,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3056,
                      "end": 3059,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 3056,
                        "end": 3057,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3056,
                          "end": 3057,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3009,
                "end": 3012,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3010,
                    "end": 3011,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3010,
                      "end": 3011,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3191,
            "end": 3393,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3198,
              "end": 3204,
              "decorators": [],
              "name": "remove",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3204,
              "end": 3393,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3260,
                "end": 3393,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3266,
                    "end": 3295,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3270,
                        "end": 3294,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3270,
                          "end": 3275,
                          "decorators": [],
                          "name": "index",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 3278,
                          "end": 3294,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 3291,
                              "end": 3293,
                              "decorators": [],
                              "name": "el",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3278,
                            "end": 3290,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3278,
                              "end": 3282,
                              "decorators": [],
                              "name": "list",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3283,
                              "end": 3290,
                              "decorators": [],
                              "name": "indexOf",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "IfStatement",
                    "start": 3300,
                    "end": 3371,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 3316,
                      "end": 3371,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 3324,
                          "end": 3346,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3324,
                            "end": 3345,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 3336,
                                "end": 3341,
                                "decorators": [],
                                "name": "index",
                                "optional": false
                              },
                              {
                                "type": "Literal",
                                "start": 3343,
                                "end": 3344,
                                "raw": "1",
                                "value": 1
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3324,
                              "end": 3335,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 3324,
                                "end": 3328,
                                "decorators": [],
                                "name": "list",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3329,
                                "end": 3335,
                                "decorators": [],
                                "name": "splice",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 3353,
                          "end": 3365,
                          "argument": {
                            "type": "Literal",
                            "start": 3360,
                            "end": 3364,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3304,
                      "end": 3314,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 3304,
                        "end": 3309,
                        "decorators": [],
                        "name": "index",
                        "optional": false
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "start": 3312,
                        "end": 3314,
                        "argument": {
                          "type": "Literal",
                          "start": 3313,
                          "end": 3314,
                          "raw": "1",
                          "value": 1
                        },
                        "operator": "-",
                        "prefix": true
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3376,
                    "end": 3389,
                    "argument": {
                      "type": "Literal",
                      "start": 3383,
                      "end": 3388,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3208,
                  "end": 3231,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3211,
                    "end": 3231,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3213,
                      "end": 3231,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3220,
                        "end": 3231,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3233,
                  "end": 3242,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3237,
                    "end": 3242,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3239,
                      "end": 3242,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 3239,
                        "end": 3240,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3239,
                          "end": 3240,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3244,
                  "end": 3249,
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3246,
                    "end": 3249,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3248,
                      "end": 3249,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3248,
                        "end": 3249,
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
                "start": 3250,
                "end": 3259,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3252,
                  "end": 3259
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3204,
                "end": 3207,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3205,
                    "end": 3206,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3205,
                      "end": 3206,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3396,
            "end": 3467,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3403,
              "end": 3408,
              "decorators": [],
              "name": "clear",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3408,
              "end": 3467,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3447,
                "end": 3467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3449,
                    "end": 3465,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3449,
                      "end": 3464,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3449,
                        "end": 3460,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3449,
                          "end": 3453,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3454,
                          "end": 3460,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3463,
                        "end": 3464,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3409,
                  "end": 3432,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3412,
                    "end": 3432,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3414,
                      "end": 3432,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3421,
                        "end": 3432,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3434,
                  "end": 3445,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3438,
                    "end": 3445,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3440,
                      "end": 3445,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3440,
                        "end": 3443
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3470,
            "end": 3560,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3477,
              "end": 3484,
              "decorators": [],
              "name": "isEmpty",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3484,
              "end": 3560,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3532,
                "end": 3560,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3534,
                    "end": 3558,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 3541,
                      "end": 3557,
                      "operator": "==",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3541,
                        "end": 3552,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3541,
                          "end": 3545,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3546,
                          "end": 3552,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3556,
                        "end": 3557,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3485,
                  "end": 3508,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3488,
                    "end": 3508,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3490,
                      "end": 3508,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3497,
                        "end": 3508,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3510,
                  "end": 3521,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3514,
                    "end": 3521,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3516,
                      "end": 3521,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3516,
                        "end": 3519
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3522,
                "end": 3531,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3524,
                  "end": 3531
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3563,
            "end": 3732,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3570,
              "end": 3574,
              "decorators": [],
              "name": "fill",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3574,
              "end": 3732,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3664,
                "end": 3732,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3670,
                    "end": 3728,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3670,
                      "end": 3727,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3680,
                          "end": 3685,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3687,
                          "end": 3692,
                          "decorators": [],
                          "name": "start",
                          "optional": false
                        },
                        {
                          "type": "ConditionalExpression",
                          "start": 3694,
                          "end": 3726,
                          "alternate": {
                            "type": "Identifier",
                            "start": 3723,
                            "end": 3726,
                            "decorators": [],
                            "name": "end",
                            "optional": false
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "start": 3709,
                            "end": 3720,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3709,
                              "end": 3713,
                              "decorators": [],
                              "name": "list",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3714,
                              "end": 3720,
                              "decorators": [],
                              "name": "length",
                              "optional": false
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 3694,
                            "end": 3706,
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "start": 3694,
                              "end": 3697,
                              "decorators": [],
                              "name": "end",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3702,
                              "end": 3706,
                              "raw": "null",
                              "value": null
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3670,
                        "end": 3679,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3670,
                          "end": 3674,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3675,
                          "end": 3679,
                          "decorators": [],
                          "name": "fill",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3598,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3578,
                    "end": 3598,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3580,
                      "end": 3598,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3587,
                        "end": 3598,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3600,
                  "end": 3611,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3604,
                    "end": 3611,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3606,
                      "end": 3611,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3606,
                        "end": 3609
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3613,
                  "end": 3623,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3618,
                    "end": 3623,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3620,
                      "end": 3623
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 3625,
                  "end": 3642,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3625,
                    "end": 3638,
                    "decorators": [],
                    "name": "start",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3630,
                      "end": 3638,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3632,
                        "end": 3638
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 3641,
                    "end": 3642,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 3644,
                  "end": 3662,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3644,
                    "end": 3655,
                    "decorators": [],
                    "name": "end",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3647,
                      "end": 3655,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3649,
                        "end": 3655
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 3658,
                    "end": 3662,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3735,
            "end": 3955,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3742,
              "end": 3748,
              "decorators": [],
              "name": "equals",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3748,
              "end": 3955,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3803,
                "end": 3955,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 3809,
                    "end": 3848,
                    "alternate": null,
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 3835,
                      "end": 3848,
                      "argument": {
                        "type": "Literal",
                        "start": 3842,
                        "end": 3847,
                        "raw": "false",
                        "value": false
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3813,
                      "end": 3833,
                      "operator": "!=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3813,
                        "end": 3821,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3813,
                          "end": 3814,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3815,
                          "end": 3821,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 3825,
                        "end": 3833,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3825,
                          "end": 3826,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3827,
                          "end": 3833,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 3853,
                    "end": 3934,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3888,
                      "end": 3934,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 3896,
                          "end": 3928,
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "start": 3915,
                            "end": 3928,
                            "argument": {
                              "type": "Literal",
                              "start": 3922,
                              "end": 3927,
                              "raw": "false",
                              "value": false
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 3900,
                            "end": 3913,
                            "operator": "!==",
                            "left": {
                              "type": "MemberExpression",
                              "start": 3900,
                              "end": 3904,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 3900,
                                "end": 3901,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3902,
                                "end": 3903,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 3909,
                              "end": 3913,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 3909,
                                "end": 3910,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3911,
                                "end": 3912,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 3858,
                      "end": 3867,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3862,
                          "end": 3867,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 3862,
                            "end": 3863,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 3866,
                            "end": 3867,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3869,
                      "end": 3881,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 3869,
                        "end": 3870,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 3873,
                        "end": 3881,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3873,
                          "end": 3874,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3875,
                          "end": 3881,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 3883,
                      "end": 3886,
                      "argument": {
                        "type": "Identifier",
                        "start": 3885,
                        "end": 3886,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3939,
                    "end": 3951,
                    "argument": {
                      "type": "Literal",
                      "start": 3946,
                      "end": 3950,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3749,
                  "end": 3772,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3752,
                    "end": 3772,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3754,
                      "end": 3772,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3761,
                        "end": 3772,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3774,
                  "end": 3782,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3775,
                    "end": 3782,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3777,
                      "end": 3782,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3777,
                        "end": 3780
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3784,
                  "end": 3792,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3785,
                    "end": 3792,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3787,
                      "end": 3792,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3787,
                        "end": 3790
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3793,
                "end": 3802,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3795,
                  "end": 3802
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3958,
            "end": 4110,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3965,
              "end": 3970,
              "decorators": [],
              "name": "slice",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3970,
              "end": 4110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4049,
                "end": 4110,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4055,
                    "end": 4106,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4062,
                      "end": 4105,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4070,
                          "end": 4074,
                          "decorators": [],
                          "name": "from",
                          "optional": false
                        },
                        {
                          "type": "ConditionalExpression",
                          "start": 4076,
                          "end": 4104,
                          "alternate": {
                            "type": "Identifier",
                            "start": 4102,
                            "end": 4104,
                            "decorators": [],
                            "name": "to",
                            "optional": false
                          },
                          "consequent": {
                            "type": "Identifier",
                            "start": 4090,
                            "end": 4099,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 4076,
                            "end": 4087,
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "start": 4076,
                              "end": 4078,
                              "decorators": [],
                              "name": "to",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4083,
                              "end": 4087,
                              "raw": "null",
                              "value": null
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4062,
                        "end": 4069,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4062,
                          "end": 4063,
                          "decorators": [],
                          "name": "l",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4064,
                          "end": 4069,
                          "decorators": [],
                          "name": "slice",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3974,
                  "end": 3997,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3977,
                    "end": 3997,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3979,
                      "end": 3997,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3986,
                        "end": 3997,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3999,
                  "end": 4005,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4000,
                    "end": 4005,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4002,
                      "end": 4005,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4002,
                        "end": 4003,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4002,
                          "end": 4003,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 4007,
                  "end": 4023,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 4007,
                    "end": 4019,
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4011,
                      "end": 4019,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4013,
                        "end": 4019
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 4022,
                    "end": 4023,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 4025,
                  "end": 4042,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 4025,
                    "end": 4035,
                    "decorators": [],
                    "name": "to",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4027,
                      "end": 4035,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4029,
                        "end": 4035
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 4038,
                    "end": 4042,
                    "raw": "null",
                    "value": null
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4043,
                "end": 4048,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 4045,
                  "end": 4048,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 4045,
                    "end": 4046,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4045,
                      "end": 4046,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3970,
                "end": 3973,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3971,
                    "end": 3972,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3971,
                      "end": 3972,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4113,
            "end": 4232,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4120,
              "end": 4126,
              "decorators": [],
              "name": "splice",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4126,
              "end": 4232,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4198,
                "end": 4232,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4200,
                    "end": 4230,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4207,
                      "end": 4229,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4216,
                          "end": 4220,
                          "decorators": [],
                          "name": "from",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 4222,
                          "end": 4228,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4207,
                        "end": 4215,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4207,
                          "end": 4208,
                          "decorators": [],
                          "name": "l",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4209,
                          "end": 4215,
                          "decorators": [],
                          "name": "splice",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4130,
                  "end": 4153,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4133,
                    "end": 4153,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4135,
                      "end": 4153,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4142,
                        "end": 4153,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4155,
                  "end": 4161,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4156,
                    "end": 4161,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4158,
                      "end": 4161,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4158,
                        "end": 4159,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4158,
                          "end": 4159,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4163,
                  "end": 4175,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4167,
                    "end": 4175,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4169,
                      "end": 4175
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4177,
                  "end": 4191,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4183,
                    "end": 4191,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4185,
                      "end": 4191
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4192,
                "end": 4197,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 4194,
                  "end": 4197,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 4194,
                    "end": 4195,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4194,
                      "end": 4195,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4126,
                "end": 4129,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4127,
                    "end": 4128,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4127,
                      "end": 4128,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4235,
            "end": 4416,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4242,
              "end": 4246,
              "decorators": [],
              "name": "sort",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4246,
              "end": 4416,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4319,
                "end": 4416,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 4325,
                    "end": 4412,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 4389,
                      "end": 4412,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4397,
                          "end": 4406,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4397,
                            "end": 4405,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4397,
                              "end": 4403,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 4397,
                                "end": 4398,
                                "decorators": [],
                                "name": "l",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4399,
                                "end": 4403,
                                "decorators": [],
                                "name": "sort",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 4351,
                      "end": 4383,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4359,
                          "end": 4377,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4359,
                            "end": 4376,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 4366,
                                "end": 4375,
                                "decorators": [],
                                "name": "compareFn",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4359,
                              "end": 4365,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 4359,
                                "end": 4360,
                                "decorators": [],
                                "name": "l",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4361,
                                "end": 4365,
                                "decorators": [],
                                "name": "sort",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 4329,
                      "end": 4349,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4339,
                          "end": 4348,
                          "decorators": [],
                          "name": "compareFn",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 4329,
                        "end": 4338,
                        "decorators": [],
                        "name": "isPresent",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4250,
                  "end": 4273,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4253,
                    "end": 4273,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4255,
                      "end": 4273,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4262,
                        "end": 4273,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4275,
                  "end": 4281,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4276,
                    "end": 4281,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4278,
                      "end": 4281,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4278,
                        "end": 4279,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4278,
                          "end": 4279,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4283,
                  "end": 4317,
                  "decorators": [],
                  "name": "compareFn",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4293,
                    "end": 4317,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4295,
                      "end": 4317,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4296,
                          "end": 4300,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4297,
                            "end": 4300,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4299,
                              "end": 4300,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4299,
                                "end": 4300,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 4302,
                          "end": 4306,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4303,
                            "end": 4306,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4305,
                              "end": 4306,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4305,
                                "end": 4306,
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
                        "start": 4308,
                        "end": 4317,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4311,
                          "end": 4317
                        }
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4246,
                "end": 4249,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4247,
                    "end": 4248,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4247,
                      "end": 4248,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4419,
            "end": 4503,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4426,
              "end": 4434,
              "decorators": [],
              "name": "toString",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4434,
              "end": 4503,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4479,
                "end": 4503,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4481,
                    "end": 4501,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4488,
                      "end": 4500,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4488,
                        "end": 4498,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4488,
                          "end": 4489,
                          "decorators": [],
                          "name": "l",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4490,
                          "end": 4498,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4438,
                  "end": 4461,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4441,
                    "end": 4461,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4443,
                      "end": 4461,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4450,
                        "end": 4461,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4463,
                  "end": 4469,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4464,
                    "end": 4469,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4466,
                      "end": 4469,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4466,
                        "end": 4467,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4466,
                          "end": 4467,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4470,
                "end": 4478,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4472,
                  "end": 4478
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4434,
                "end": 4437,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4435,
                    "end": 4436,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4435,
                      "end": 4436,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4506,
            "end": 4593,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4513,
              "end": 4519,
              "decorators": [],
              "name": "toJSON",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4519,
              "end": 4593,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4564,
                "end": 4593,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4566,
                    "end": 4591,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4573,
                      "end": 4590,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4588,
                          "end": 4589,
                          "decorators": [],
                          "name": "l",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4573,
                        "end": 4587,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4573,
                          "end": 4577,
                          "decorators": [],
                          "name": "JSON",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4578,
                          "end": 4587,
                          "decorators": [],
                          "name": "stringify",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4523,
                  "end": 4546,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4526,
                    "end": 4546,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4528,
                      "end": 4546,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4535,
                        "end": 4546,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4548,
                  "end": 4554,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4549,
                    "end": 4554,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4551,
                      "end": 4554,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4551,
                        "end": 4552,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4551,
                          "end": 4552,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4555,
                "end": 4563,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4557,
                  "end": 4563
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4519,
                "end": 4522,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4520,
                    "end": 4521,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4520,
                      "end": 4521,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4597,
            "end": 5136,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4604,
              "end": 4611,
              "decorators": [],
              "name": "maximum",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4611,
              "end": 5136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4683,
                "end": 5136,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 4689,
                    "end": 4737,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 4711,
                      "end": 4737,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 4719,
                          "end": 4731,
                          "argument": {
                            "type": "Literal",
                            "start": 4726,
                            "end": 4730,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 4693,
                      "end": 4709,
                      "operator": "==",
                      "left": {
                        "type": "MemberExpression",
                        "start": 4693,
                        "end": 4704,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4693,
                          "end": 4697,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4698,
                          "end": 4704,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4708,
                        "end": 4709,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 4742,
                    "end": 4765,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4746,
                        "end": 4764,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 4746,
                          "end": 4757,
                          "decorators": [],
                          "name": "solution",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4754,
                            "end": 4757,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4756,
                              "end": 4757,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4756,
                                "end": 4757,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "start": 4760,
                          "end": 4764,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 4770,
                    "end": 4795,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4774,
                        "end": 4794,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 4774,
                          "end": 4782,
                          "decorators": [],
                          "name": "maxValue",
                          "optional": false
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "start": 4785,
                          "end": 4794,
                          "argument": {
                            "type": "Identifier",
                            "start": 4786,
                            "end": 4794,
                            "decorators": [],
                            "name": "Infinity",
                            "optional": false
                          },
                          "operator": "-",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ForStatement",
                    "start": 4800,
                    "end": 5111,
                    "body": {
                      "type": "BlockStatement",
                      "start": 4850,
                      "end": 5111,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 4858,
                          "end": 4886,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4862,
                              "end": 4885,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4862,
                                "end": 4871,
                                "decorators": [],
                                "name": "candidate",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 4874,
                                "end": 4885,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4874,
                                  "end": 4878,
                                  "decorators": [],
                                  "name": "list",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4879,
                                  "end": 4884,
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "IfStatement",
                          "start": 4893,
                          "end": 4944,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 4917,
                            "end": 4944,
                            "body": [
                              {
                                "type": "ContinueStatement",
                                "start": 4927,
                                "end": 4936,
                                "label": null
                              }
                            ]
                          },
                          "test": {
                            "type": "CallExpression",
                            "start": 4897,
                            "end": 4915,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 4905,
                                "end": 4914,
                                "decorators": [],
                                "name": "candidate",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 4897,
                              "end": 4904,
                              "decorators": [],
                              "name": "isBlank",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 4951,
                          "end": 4993,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4955,
                              "end": 4992,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 4955,
                                "end": 4969,
                                "decorators": [],
                                "name": "candidateValue",
                                "optional": false
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 4972,
                                "end": 4992,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 4982,
                                    "end": 4991,
                                    "decorators": [],
                                    "name": "candidate",
                                    "optional": false
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 4972,
                                  "end": 4981,
                                  "decorators": [],
                                  "name": "predicate",
                                  "optional": false
                                },
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "IfStatement",
                          "start": 5000,
                          "end": 5105,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 5031,
                            "end": 5105,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 5041,
                                "end": 5062,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 5041,
                                  "end": 5061,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5041,
                                    "end": 5049,
                                    "decorators": [],
                                    "name": "solution",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5052,
                                    "end": 5061,
                                    "decorators": [],
                                    "name": "candidate",
                                    "optional": false
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 5071,
                                "end": 5097,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 5071,
                                  "end": 5096,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5071,
                                    "end": 5079,
                                    "decorators": [],
                                    "name": "maxValue",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5082,
                                    "end": 5096,
                                    "decorators": [],
                                    "name": "candidateValue",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 5004,
                            "end": 5029,
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "start": 5004,
                              "end": 5018,
                              "decorators": [],
                              "name": "candidateValue",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5021,
                              "end": 5029,
                              "decorators": [],
                              "name": "maxValue",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 4805,
                      "end": 4818,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 4809,
                          "end": 4818,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 4809,
                            "end": 4814,
                            "decorators": [],
                            "name": "index",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 4817,
                            "end": 4818,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 4820,
                      "end": 4839,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 4820,
                        "end": 4825,
                        "decorators": [],
                        "name": "index",
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 4828,
                        "end": 4839,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4828,
                          "end": 4832,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4833,
                          "end": 4839,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 4841,
                      "end": 4848,
                      "argument": {
                        "type": "Identifier",
                        "start": 4841,
                        "end": 4846,
                        "decorators": [],
                        "name": "index",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 5116,
                    "end": 5132,
                    "argument": {
                      "type": "Identifier",
                      "start": 5123,
                      "end": 5131,
                      "decorators": [],
                      "name": "solution",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4615,
                  "end": 4638,
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4618,
                    "end": 4638,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4620,
                      "end": 4638,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4627,
                        "end": 4638,
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4640,
                  "end": 4649,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4644,
                    "end": 4649,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4646,
                      "end": 4649,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4646,
                        "end": 4647,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4646,
                          "end": 4647,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4651,
                  "end": 4678,
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4660,
                    "end": 4678,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4662,
                      "end": 4678,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4663,
                          "end": 4667,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4664,
                            "end": 4667,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4666,
                              "end": 4667,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4666,
                                "end": 4667,
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
                        "start": 4669,
                        "end": 4678,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4672,
                          "end": 4678
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4679,
                "end": 4682,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4681,
                  "end": 4682,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4681,
                    "end": 4682,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4611,
                "end": 4614,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4612,
                    "end": 4613,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4612,
                      "end": 4613,
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1278,
        "end": 1289,
        "decorators": [],
        "name": "ListWrapper",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5139,
      "end": 5194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5143,
          "end": 5193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5143,
            "end": 5149,
            "decorators": [],
            "name": "cloned",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5152,
            "end": 5193,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5170,
                "end": 5181,
                "decorators": [],
                "name": "ListWrapper",
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 5183,
                "end": 5192,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 5184,
                    "end": 5185,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 5186,
                    "end": 5187,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 5188,
                    "end": 5189,
                    "raw": "3",
                    "value": 3
                  },
                  {
                    "type": "Literal",
                    "start": 5190,
                    "end": 5191,
                    "raw": "4",
                    "value": 4
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5152,
              "end": 5169,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5152,
                "end": 5163,
                "decorators": [],
                "name": "ListWrapper",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5164,
                "end": 5169,
                "decorators": [],
                "name": "clone",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 5195,
      "end": 5237,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5212,
        "end": 5219,
        "decorators": [],
        "name": "isBlank",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5220,
          "end": 5226,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5221,
            "end": 5226,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 5223,
              "end": 5226
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5227,
        "end": 5236,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5229,
          "end": 5236
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 5238,
      "end": 5313,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5255,
        "end": 5264,
        "decorators": [],
        "name": "isPresent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5268,
          "end": 5302,
          "decorators": [],
          "name": "compareFn",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5278,
            "end": 5302,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 5280,
              "end": 5302,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5281,
                  "end": 5285,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5282,
                    "end": 5285,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5284,
                      "end": 5285,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5284,
                        "end": 5285,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 5287,
                  "end": 5291,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5288,
                    "end": 5291,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5290,
                      "end": 5291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5290,
                        "end": 5291,
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
                "start": 5293,
                "end": 5302,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5296,
                  "end": 5302
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5303,
        "end": 5312,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5305,
          "end": 5312
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5264,
        "end": 5267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5265,
            "end": 5266,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5265,
              "end": 5266,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5314,
      "end": 5389,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5333,
        "end": 5389,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 5336,
            "end": 5387,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5336,
              "end": 5340,
              "decorators": [],
              "name": "fill",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 5341,
                "end": 5351,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5346,
                  "end": 5351,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 5348,
                    "end": 5351
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 5353,
                "end": 5366,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5358,
                  "end": 5366,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5360,
                    "end": 5366
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 5368,
                "end": 5379,
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5371,
                  "end": 5379,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5373,
                    "end": 5379
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5380,
              "end": 5386,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5382,
                "end": 5386
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 5324,
        "end": 5329,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5329,
        "end": 5332,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5330,
            "end": 5331,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5330,
              "end": 5331,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
