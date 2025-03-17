__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 66,
        "name": "IceCreamMonster",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 1075,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 95,
              "name": "iceCreamFlavor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 134,
              "name": "iceCreamRemaining",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 180,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 170,
              "name": "wantsSprinkles",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 209,
              "name": "soundsWhenEating",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 223,
            "end": 243,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 234,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 248,
            "end": 562,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 259,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 562,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 260,
                  "end": 282,
                  "name": "iceCreamFlavor",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 307,
                  "name": "wantsSprinkles",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 300,
                      "end": 307
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 333,
                  "name": "soundsWhenEating",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 325,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 327,
                      "end": 333
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 335,
                  "end": 347,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 339,
                    "end": 347,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 341,
                      "end": 347
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 359,
                          "end": 363
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 378,
                          "name": "iceCreamFlavor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 395,
                        "name": "iceCreamFlavor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 405,
                          "end": 409
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 427,
                          "name": "iceCreamRemaining",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 430,
                        "end": 433,
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 443,
                          "end": 447
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 448,
                          "end": 462,
                          "name": "wantsSprinkles",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 479,
                        "name": "wantsSprinkles",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 489,
                          "end": 493
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 510,
                          "name": "soundsWhenEating",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 513,
                        "end": 529,
                        "name": "soundsWhenEating",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 539,
                          "end": 543
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 544,
                          "end": 548,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 555,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 794,
            "end": 1073,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 801,
              "end": 812,
              "name": "eatIceCream",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 812,
              "end": 1073,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 813,
                  "end": 827,
                  "name": "amount",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 819,
                    "end": 827,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 821,
                      "end": 827
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 848,
                          "end": 852
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 853,
                          "end": 870,
                          "name": "iceCreamRemaining",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 880,
                        "name": "amount",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 890,
                    "end": 1067,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 894,
                      "end": 921,
                      "left": {
                        "type": "MemberExpression",
                        "start": 894,
                        "end": 916,
                        "object": {
                          "type": "ThisExpression",
                          "start": 894,
                          "end": 898
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 899,
                          "end": 916,
                          "name": "iceCreamRemaining",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<=",
                      "right": {
                        "type": "Literal",
                        "start": 920,
                        "end": 921,
                        "value": 0,
                        "raw": "0"
                      }
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
                              "object": {
                                "type": "ThisExpression",
                                "start": 945,
                                "end": 949
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 950,
                                "end": 967,
                                "name": "iceCreamRemaining",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 970,
                              "end": 971,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 985,
                          "end": 998,
                          "argument": {
                            "type": "Literal",
                            "start": 992,
                            "end": 997,
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ]
                    },
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
                            "value": 12345,
                            "raw": "12345"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1110,
            "name": "cookieMonster",
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
                  "name": "IceCreamMonster",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "cookieMonster",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 1128,
          "end": 1203,
          "callee": {
            "type": "Identifier",
            "start": 1132,
            "end": 1147,
            "name": "IceCreamMonster",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 1148,
              "end": 1164,
              "value": "Chocolate Chip",
              "raw": "\"Chocolate Chip\""
            },
            {
              "type": "Literal",
              "start": 1166,
              "end": 1171,
              "value": false,
              "raw": "false"
            },
            {
              "type": "Literal",
              "start": 1173,
              "end": 1184,
              "value": "COOOOOKIE",
              "raw": "\"COOOOOKIE\""
            },
            {
              "type": "Literal",
              "start": 1186,
              "end": 1202,
              "value": "Cookie Monster",
              "raw": "\"Cookie Monster\""
            }
          ],
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
