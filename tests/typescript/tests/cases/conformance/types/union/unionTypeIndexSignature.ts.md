__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1235,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "numOrDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 28,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 15,
                "end": 28,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 24,
                    "end": 28,
                    "typeName": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 28,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 48,
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 301,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 300,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 300,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 251,
                "end": 300,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 251,
                    "end": 275,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 253,
                        "end": 273,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 254,
                            "end": 263,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 255,
                              "end": 263,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 257,
                                "end": 263
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 272,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 266,
                            "end": 272
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 278,
                    "end": 300,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 280,
                        "end": 298,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 281,
                            "end": 290,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 282,
                              "end": 290,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 284,
                                "end": 290
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 291,
                          "end": 297,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 293,
                            "end": 297,
                            "typeName": {
                              "type": "Identifier",
                              "start": 293,
                              "end": 297,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 350,
      "expression": {
        "type": "AssignmentExpression",
        "start": 302,
        "end": 349,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 302,
          "end": 311,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 314,
          "end": 349,
          "object": {
            "type": "Identifier",
            "start": 314,
            "end": 340,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 341,
            "end": 348,
            "value": "hello",
            "raw": "\"hello\""
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 411,
      "expression": {
        "type": "AssignmentExpression",
        "start": 368,
        "end": 410,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 368,
          "end": 377,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 380,
          "end": 410,
          "object": {
            "type": "Identifier",
            "start": 380,
            "end": 406,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 407,
            "end": 409,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 512,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 511,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 511,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 477,
                "end": 511,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 477,
                    "end": 501,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 479,
                        "end": 499,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 480,
                            "end": 489,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 481,
                              "end": 489,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 483,
                                "end": 489
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 490,
                          "end": 498,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 492,
                            "end": 498
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 504,
                    "end": 511
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 513,
      "end": 573,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 572,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 519,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 522,
          "end": 572,
          "object": {
            "type": "Identifier",
            "start": 522,
            "end": 563,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 564,
            "end": 571,
            "value": "hello",
            "raw": "\"hello\""
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 636,
      "expression": {
        "type": "AssignmentExpression",
        "start": 581,
        "end": 635,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 581,
          "end": 587,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 590,
          "end": 635,
          "object": {
            "type": "Identifier",
            "start": 590,
            "end": 631,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 632,
            "end": 634,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 898,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 897,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 897,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 846,
              "end": 897,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 848,
                "end": 897,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 848,
                    "end": 872,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 850,
                        "end": 870,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 851,
                            "end": 860,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 852,
                              "end": 860,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 854,
                                "end": 860
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 861,
                          "end": 869,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 863,
                            "end": 869
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 875,
                    "end": 897,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 877,
                        "end": 895,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 878,
                            "end": 887,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 879,
                              "end": 887,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 881,
                                "end": 887
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 888,
                          "end": 894,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 890,
                            "end": 894,
                            "typeName": {
                              "type": "Identifier",
                              "start": 890,
                              "end": 894,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 899,
      "end": 948,
      "expression": {
        "type": "AssignmentExpression",
        "start": 899,
        "end": 947,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 899,
          "end": 908,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 911,
          "end": 947,
          "object": {
            "type": "Identifier",
            "start": 911,
            "end": 938,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 939,
            "end": 946,
            "value": "hello",
            "raw": "\"hello\""
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 956,
      "end": 1000,
      "expression": {
        "type": "AssignmentExpression",
        "start": 956,
        "end": 999,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 956,
          "end": 965,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 968,
          "end": 999,
          "object": {
            "type": "Identifier",
            "start": 968,
            "end": 995,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 996,
            "end": 998,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1019,
      "end": 1102,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1101,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1101,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1065,
              "end": 1101,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1067,
                "end": 1101,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1067,
                    "end": 1091,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 1069,
                        "end": 1089,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 1070,
                            "end": 1079,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1071,
                              "end": 1079,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1073,
                                "end": 1079
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1080,
                          "end": 1088,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1082,
                            "end": 1088
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1094,
                    "end": 1101
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1103,
      "end": 1164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1103,
        "end": 1163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1103,
          "end": 1109,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1112,
          "end": 1163,
          "object": {
            "type": "Identifier",
            "start": 1112,
            "end": 1154,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1155,
            "end": 1162,
            "value": "hello",
            "raw": "\"hello\""
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1172,
      "end": 1228,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1172,
        "end": 1227,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1172,
          "end": 1178,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1181,
          "end": 1227,
          "object": {
            "type": "Identifier",
            "start": 1181,
            "end": 1223,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1224,
            "end": 1226,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
