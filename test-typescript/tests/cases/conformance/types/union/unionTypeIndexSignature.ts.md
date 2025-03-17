__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 1236,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 29,
            "name": "numOrDate",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 29,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 16,
                "end": 29,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 25,
                    "end": 29,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 29,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 31,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 49,
            "name": "anyVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
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
      "type": "VariableDeclaration",
      "start": 220,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 301,
            "name": "unionOfDifferentReturnType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 301,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 252,
                "end": 301,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 252,
                    "end": 276,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 254,
                        "end": 274,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 255,
                            "end": 264,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 256,
                              "end": 264,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 258,
                                "end": 264
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
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
                    "start": 279,
                    "end": 301,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 281,
                        "end": 299,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 282,
                            "end": 291,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 283,
                              "end": 291,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 285,
                                "end": 291
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 292,
                          "end": 298,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 294,
                            "end": 298,
                            "typeName": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 298,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
      "start": 303,
      "end": 351,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 350,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 303,
          "end": 312,
          "name": "numOrDate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 315,
          "end": 350,
          "object": {
            "type": "Identifier",
            "start": 315,
            "end": 341,
            "name": "unionOfDifferentReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 342,
            "end": 349,
            "value": "hello",
            "raw": "\"hello\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 412,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 411,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 369,
          "end": 378,
          "name": "numOrDate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 381,
          "end": 411,
          "object": {
            "type": "Identifier",
            "start": 381,
            "end": 407,
            "name": "unionOfDifferentReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 408,
            "end": 410,
            "value": 10,
            "raw": "10"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 513,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 512,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 512,
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 512,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 478,
                "end": 512,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 478,
                    "end": 502,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 480,
                        "end": 500,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 481,
                            "end": 490,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 482,
                              "end": 490,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 484,
                                "end": 490
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 491,
                          "end": 499,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 493,
                            "end": 499
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
                    "start": 505,
                    "end": 512
                  }
                ]
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
      "start": 514,
      "end": 574,
      "expression": {
        "type": "AssignmentExpression",
        "start": 514,
        "end": 573,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 514,
          "end": 520,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 523,
          "end": 573,
          "object": {
            "type": "Identifier",
            "start": 523,
            "end": 564,
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 565,
            "end": 572,
            "value": "hello",
            "raw": "\"hello\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 582,
      "end": 637,
      "expression": {
        "type": "AssignmentExpression",
        "start": 582,
        "end": 636,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 582,
          "end": 588,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 591,
          "end": 636,
          "object": {
            "type": "Identifier",
            "start": 591,
            "end": 632,
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 633,
            "end": 635,
            "value": 10,
            "raw": "10"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 816,
      "end": 899,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 820,
          "end": 898,
          "id": {
            "type": "Identifier",
            "start": 820,
            "end": 898,
            "name": "unionOfDifferentReturnType1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 847,
              "end": 898,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 849,
                "end": 898,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 849,
                    "end": 873,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 851,
                        "end": 871,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 852,
                            "end": 861,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 853,
                              "end": 861,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 855,
                                "end": 861
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 862,
                          "end": 870,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 864,
                            "end": 870
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
                    "start": 876,
                    "end": 898,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 878,
                        "end": 896,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 879,
                            "end": 888,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 880,
                              "end": 888,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 882,
                                "end": 888
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 889,
                          "end": 895,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 891,
                            "end": 895,
                            "typeName": {
                              "type": "Identifier",
                              "start": 891,
                              "end": 895,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
      "start": 900,
      "end": 949,
      "expression": {
        "type": "AssignmentExpression",
        "start": 900,
        "end": 948,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 900,
          "end": 909,
          "name": "numOrDate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 912,
          "end": 948,
          "object": {
            "type": "Identifier",
            "start": 912,
            "end": 939,
            "name": "unionOfDifferentReturnType1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 940,
            "end": 947,
            "value": "hello",
            "raw": "\"hello\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 957,
      "end": 1001,
      "expression": {
        "type": "AssignmentExpression",
        "start": 957,
        "end": 1000,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 957,
          "end": 966,
          "name": "numOrDate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 969,
          "end": 1000,
          "object": {
            "type": "Identifier",
            "start": 969,
            "end": 996,
            "name": "unionOfDifferentReturnType1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 997,
            "end": 999,
            "value": 10,
            "raw": "10"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1020,
      "end": 1103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1024,
          "end": 1102,
          "id": {
            "type": "Identifier",
            "start": 1024,
            "end": 1102,
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1066,
              "end": 1102,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1068,
                "end": 1102,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1068,
                    "end": 1092,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 1070,
                        "end": 1090,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 1071,
                            "end": 1080,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1072,
                              "end": 1080,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1074,
                                "end": 1080
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1081,
                          "end": 1089,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1083,
                            "end": 1089
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
                    "start": 1095,
                    "end": 1102
                  }
                ]
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
      "start": 1104,
      "end": 1165,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1104,
        "end": 1164,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1104,
          "end": 1110,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1113,
          "end": 1164,
          "object": {
            "type": "Identifier",
            "start": 1113,
            "end": 1155,
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1156,
            "end": 1163,
            "value": "hello",
            "raw": "\"hello\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1173,
      "end": 1229,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1173,
        "end": 1228,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1173,
          "end": 1179,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1182,
          "end": 1228,
          "object": {
            "type": "Identifier",
            "start": 1182,
            "end": 1224,
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1225,
            "end": 1227,
            "value": 10,
            "raw": "10"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
