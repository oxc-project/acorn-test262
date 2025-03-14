unionTypeIndexSignature.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 29,
            "decorators": [],
            "name": "numOrDate",
            "optional": false,
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
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 31,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 49,
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
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
      "type": "VariableDeclaration",
      "start": 220,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 301,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 256,
                              "end": 264,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 258,
                                "end": 264
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
                          }
                        }
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 283,
                              "end": 291,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 285,
                                "end": 291
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
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
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
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
          "decorators": [],
          "name": "numOrDate",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 315,
          "end": 350,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 315,
            "end": 341,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 342,
            "end": 349,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      }
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
          "decorators": [],
          "name": "numOrDate",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 381,
          "end": 411,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 381,
            "end": 407,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 408,
            "end": 410,
            "raw": "10",
            "value": 10
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 512,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 482,
                              "end": 490,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 484,
                                "end": 490
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 491,
                          "end": 499,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 493,
                            "end": 499
                          }
                        }
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
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 523,
          "end": 573,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 523,
            "end": 564,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 565,
            "end": 572,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      }
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
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 591,
          "end": 636,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 591,
            "end": 632,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 633,
            "end": 635,
            "raw": "10",
            "value": 10
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 820,
            "end": 898,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 853,
                              "end": 861,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 855,
                                "end": 861
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 862,
                          "end": 870,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 864,
                            "end": 870
                          }
                        }
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
                            "decorators": [],
                            "name": "a",
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
                        "readonly": false,
                        "static": false,
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
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
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
          "decorators": [],
          "name": "numOrDate",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 912,
          "end": 948,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 912,
            "end": 939,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 940,
            "end": 947,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      }
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
          "decorators": [],
          "name": "numOrDate",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 969,
          "end": 1000,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 969,
            "end": 996,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 997,
            "end": 999,
            "raw": "10",
            "value": 10
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1024,
            "end": 1102,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1072,
                              "end": 1080,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1074,
                                "end": 1080
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1081,
                          "end": 1089,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1083,
                            "end": 1089
                          }
                        }
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
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1113,
          "end": 1164,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1113,
            "end": 1155,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1156,
            "end": 1163,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      }
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
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1182,
          "end": 1228,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1182,
            "end": 1224,
            "decorators": [],
            "name": "unionOfTypesWithAndWithoutStringSignature1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1225,
            "end": 1227,
            "raw": "10",
            "value": 10
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
