__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 24,
                      "end": 28
                    },
                    "typeArguments": null,
                    "start": 24,
                    "end": 28
                  }
                ],
                "start": 15,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 34,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 48
        }
      ],
      "declare": false,
      "start": 30,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 257,
                                "end": 263
                              },
                              "start": 255,
                              "end": 263
                            },
                            "start": 254,
                            "end": 263
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 266,
                            "end": 272
                          },
                          "start": 264,
                          "end": 272
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 253,
                        "end": 273
                      }
                    ],
                    "start": 251,
                    "end": 275
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 284,
                                "end": 290
                              },
                              "start": 282,
                              "end": 290
                            },
                            "start": 281,
                            "end": 290
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 293,
                              "end": 297
                            },
                            "typeArguments": null,
                            "start": 293,
                            "end": 297
                          },
                          "start": 291,
                          "end": 297
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 280,
                        "end": 298
                      }
                    ],
                    "start": 278,
                    "end": 300
                  }
                ],
                "start": 251,
                "end": 300
              },
              "start": 249,
              "end": 300
            },
            "start": 223,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 223,
          "end": 300
        }
      ],
      "declare": false,
      "start": 219,
      "end": 301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 311
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 340
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 341,
            "end": 348
          },
          "optional": false,
          "computed": true,
          "start": 314,
          "end": 349
        },
        "start": 302,
        "end": 349
      },
      "directive": null,
      "start": 302,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 368,
          "end": 377
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 406
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 407,
            "end": 409
          },
          "optional": false,
          "computed": true,
          "start": 380,
          "end": 410
        },
        "start": 368,
        "end": 410
      },
      "directive": null,
      "start": 368,
      "end": 411
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 483,
                                "end": 489
                              },
                              "start": 481,
                              "end": 489
                            },
                            "start": 480,
                            "end": 489
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 492,
                            "end": 498
                          },
                          "start": 490,
                          "end": 498
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 479,
                        "end": 499
                      }
                    ],
                    "start": 477,
                    "end": 501
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 504,
                    "end": 511
                  }
                ],
                "start": 477,
                "end": 511
              },
              "start": 475,
              "end": 511
            },
            "start": 434,
            "end": 511
          },
          "init": null,
          "definite": false,
          "start": 434,
          "end": 511
        }
      ],
      "declare": false,
      "start": 430,
      "end": 512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 519
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 563
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 564,
            "end": 571
          },
          "optional": false,
          "computed": true,
          "start": 522,
          "end": 572
        },
        "start": 513,
        "end": 572
      },
      "directive": null,
      "start": 513,
      "end": 573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 581,
          "end": 587
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 631
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 632,
            "end": 634
          },
          "optional": false,
          "computed": true,
          "start": 590,
          "end": 635
        },
        "start": 581,
        "end": 635
      },
      "directive": null,
      "start": 581,
      "end": 636
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 854,
                                "end": 860
                              },
                              "start": 852,
                              "end": 860
                            },
                            "start": 851,
                            "end": 860
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 863,
                            "end": 869
                          },
                          "start": 861,
                          "end": 869
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 850,
                        "end": 870
                      }
                    ],
                    "start": 848,
                    "end": 872
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 881,
                                "end": 887
                              },
                              "start": 879,
                              "end": 887
                            },
                            "start": 878,
                            "end": 887
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 890,
                              "end": 894
                            },
                            "typeArguments": null,
                            "start": 890,
                            "end": 894
                          },
                          "start": 888,
                          "end": 894
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 877,
                        "end": 895
                      }
                    ],
                    "start": 875,
                    "end": 897
                  }
                ],
                "start": 848,
                "end": 897
              },
              "start": 846,
              "end": 897
            },
            "start": 819,
            "end": 897
          },
          "init": null,
          "definite": false,
          "start": 819,
          "end": 897
        }
      ],
      "declare": false,
      "start": 815,
      "end": 898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 899,
          "end": 908
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 911,
            "end": 938
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 939,
            "end": 946
          },
          "optional": false,
          "computed": true,
          "start": 911,
          "end": 947
        },
        "start": 899,
        "end": 947
      },
      "directive": null,
      "start": 899,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 956,
          "end": 965
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 968,
            "end": 995
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 996,
            "end": 998
          },
          "optional": false,
          "computed": true,
          "start": 968,
          "end": 999
        },
        "start": 956,
        "end": 999
      },
      "directive": null,
      "start": 956,
      "end": 1000
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1073,
                                "end": 1079
                              },
                              "start": 1071,
                              "end": 1079
                            },
                            "start": 1070,
                            "end": 1079
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1082,
                            "end": 1088
                          },
                          "start": 1080,
                          "end": 1088
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 1069,
                        "end": 1089
                      }
                    ],
                    "start": 1067,
                    "end": 1091
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1094,
                    "end": 1101
                  }
                ],
                "start": 1067,
                "end": 1101
              },
              "start": 1065,
              "end": 1101
            },
            "start": 1023,
            "end": 1101
          },
          "init": null,
          "definite": false,
          "start": 1023,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 1103,
          "end": 1109
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1112,
            "end": 1154
          },
          "property": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1155,
            "end": 1162
          },
          "optional": false,
          "computed": true,
          "start": 1112,
          "end": 1163
        },
        "start": 1103,
        "end": 1163
      },
      "directive": null,
      "start": 1103,
      "end": 1164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 1172,
          "end": 1178
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1223
          },
          "property": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1224,
            "end": 1226
          },
          "optional": false,
          "computed": true,
          "start": 1181,
          "end": 1227
        },
        "start": 1172,
        "end": 1227
      },
      "directive": null,
      "start": 1172,
      "end": 1228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1235
}
```
