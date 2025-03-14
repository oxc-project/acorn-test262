matchReturnTypeInAllBranches.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 1204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 1075,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 1075,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 104,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 95,
              "decorators": [],
              "name": "iceCreamFlavor",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 143,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 134,
              "decorators": [],
              "name": "iceCreamRemaining",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 180,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 170,
              "decorators": [],
              "name": "wantsSprinkles",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 179,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 172,
                "end": 179
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 218,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 209,
              "decorators": [],
              "name": "soundsWhenEating",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 217,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 223,
            "end": 243,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 234,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 248,
            "end": 562,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 259,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 562,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 349,
                "end": 562,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 359,
                    "end": 396,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 359,
                      "end": 395,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 359,
                        "end": 378,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 359,
                          "end": 363
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 378,
                          "decorators": [],
                          "name": "iceCreamFlavor",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 395,
                        "decorators": [],
                        "name": "iceCreamFlavor",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 405,
                    "end": 434,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 405,
                      "end": 433,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 405,
                        "end": 427,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 405,
                          "end": 409
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 427,
                          "decorators": [],
                          "name": "iceCreamRemaining",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 430,
                        "end": 433,
                        "raw": "100",
                        "value": 100
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 443,
                    "end": 480,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 443,
                      "end": 479,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 443,
                        "end": 462,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 443,
                          "end": 447
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 448,
                          "end": 462,
                          "decorators": [],
                          "name": "wantsSprinkles",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 479,
                        "decorators": [],
                        "name": "wantsSprinkles",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 489,
                    "end": 530,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 489,
                      "end": 529,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 489,
                        "end": 510,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 489,
                          "end": 493
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 510,
                          "decorators": [],
                          "name": "soundsWhenEating",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 513,
                        "end": 529,
                        "decorators": [],
                        "name": "soundsWhenEating",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 539,
                    "end": 556,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 539,
                      "end": 555,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 539,
                        "end": 548,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 539,
                          "end": 543
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 544,
                          "end": 548,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 555,
                        "decorators": [],
                        "name": "name",
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
                  "start": 260,
                  "end": 282,
                  "decorators": [],
                  "name": "iceCreamFlavor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 307,
                  "decorators": [],
                  "name": "wantsSprinkles",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 300,
                      "end": 307
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 333,
                  "decorators": [],
                  "name": "soundsWhenEating",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 325,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 327,
                      "end": 333
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 335,
                  "end": 347,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 339,
                    "end": 347,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 341,
                      "end": 347
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 794,
            "end": 1073,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 801,
              "end": 812,
              "decorators": [],
              "name": "eatIceCream",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 812,
              "end": 1073,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 838,
                "end": 1073,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 848,
                    "end": 881,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 848,
                      "end": 880,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 848,
                        "end": 870,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 848,
                          "end": 852
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 853,
                          "end": 870,
                          "decorators": [],
                          "name": "iceCreamRemaining",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 880,
                        "decorators": [],
                        "name": "amount",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 890,
                    "end": 1067,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1030,
                      "end": 1067,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1044,
                          "end": 1057,
                          "argument": {
                            "type": "Literal",
                            "start": 1051,
                            "end": 1056,
                            "raw": "12345",
                            "value": 12345
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 931,
                      "end": 1008,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 945,
                          "end": 972,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 945,
                            "end": 971,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 945,
                              "end": 967,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 945,
                                "end": 949
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 950,
                                "end": 967,
                                "decorators": [],
                                "name": "iceCreamRemaining",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 970,
                              "end": 971,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 985,
                          "end": 998,
                          "argument": {
                            "type": "Literal",
                            "start": 992,
                            "end": 997,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 894,
                      "end": 921,
                      "operator": "<=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 894,
                        "end": 916,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 894,
                          "end": 898
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 899,
                          "end": 916,
                          "decorators": [],
                          "name": "iceCreamRemaining",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 920,
                        "end": 921,
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
                  "start": 813,
                  "end": 827,
                  "decorators": [],
                  "name": "amount",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 819,
                    "end": 827,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 821,
                      "end": 827
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 828,
                "end": 837,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 830,
                  "end": 837
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 66,
        "decorators": [],
        "name": "IceCreamMonster",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1076,
      "end": 1111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1080,
          "end": 1110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1110,
            "decorators": [],
            "name": "cookieMonster",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1093,
              "end": 1110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1095,
                "end": 1110,
                "typeName": {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1110,
                  "decorators": [],
                  "name": "IceCreamMonster",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1112,
      "end": 1204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1112,
        "end": 1203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1112,
          "end": 1125,
          "decorators": [],
          "name": "cookieMonster",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 1128,
          "end": 1203,
          "arguments": [
            {
              "type": "Literal",
              "start": 1148,
              "end": 1164,
              "raw": "\"Chocolate Chip\"",
              "value": "Chocolate Chip"
            },
            {
              "type": "Literal",
              "start": 1166,
              "end": 1171,
              "raw": "false",
              "value": false
            },
            {
              "type": "Literal",
              "start": 1173,
              "end": 1184,
              "raw": "\"COOOOOKIE\"",
              "value": "COOOOOKIE"
            },
            {
              "type": "Literal",
              "start": 1186,
              "end": 1202,
              "raw": "\"Cookie Monster\"",
              "value": "Cookie Monster"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1132,
            "end": 1147,
            "decorators": [],
            "name": "IceCreamMonster",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
