__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 4715,
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
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 65,
            "decorators": [],
            "name": "strOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 65,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 49,
                "end": 65,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 58,
                    "end": 65
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
      "start": 67,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 96,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 96,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 81,
                "end": 96,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
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
      "start": 384,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 473,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 473,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 416,
                "end": 473,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 416,
                    "end": 444,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 418,
                        "end": 442,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 423,
                            "end": 432,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 424,
                              "end": 432,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 426,
                                "end": 432
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 433,
                          "end": 441,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 435,
                            "end": 441
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 447,
                    "end": 473,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 449,
                        "end": 471,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 454,
                            "end": 463,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 455,
                              "end": 463,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 457,
                                "end": 463
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 464,
                          "end": 470,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 466,
                            "end": 470,
                            "typeName": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 470,
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
      "start": 475,
      "end": 522,
      "expression": {
        "type": "AssignmentExpression",
        "start": 475,
        "end": 521,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 475,
          "end": 484,
          "decorators": [],
          "name": "numOrDate",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 487,
          "end": 521,
          "arguments": [
            {
              "type": "Literal",
              "start": 518,
              "end": 520,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 491,
            "end": 517,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 523,
      "end": 578,
      "expression": {
        "type": "AssignmentExpression",
        "start": 523,
        "end": 577,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 523,
          "end": 535,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 538,
          "end": 577,
          "arguments": [
            {
              "type": "Literal",
              "start": 569,
              "end": 576,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 542,
            "end": 568,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 588,
      "end": 626,
      "expression": {
        "type": "NewExpression",
        "start": 588,
        "end": 625,
        "arguments": [
          {
            "type": "Literal",
            "start": 620,
            "end": 624,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 592,
          "end": 619,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 799,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 799,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 799,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 691,
                "end": 799,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 691,
                    "end": 744,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 693,
                        "end": 717,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 698,
                            "end": 707,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 699,
                              "end": 707,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 701,
                                "end": 707
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 708,
                          "end": 716,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 710,
                            "end": 716
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 718,
                        "end": 742,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 723,
                            "end": 732,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 724,
                              "end": 732,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 726,
                                "end": 732
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 733,
                          "end": 741,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 735,
                            "end": 741
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 747,
                    "end": 799,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 749,
                        "end": 771,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 754,
                            "end": 763,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 755,
                              "end": 763,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 757,
                                "end": 763
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 764,
                          "end": 770,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 766,
                            "end": 770,
                            "typeName": {
                              "type": "Identifier",
                              "start": 766,
                              "end": 770,
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 772,
                        "end": 797,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 777,
                            "end": 786,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 778,
                              "end": 786,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 780,
                                "end": 786
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 787,
                          "end": 796,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 789,
                            "end": 796
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
      "start": 801,
      "end": 849,
      "expression": {
        "type": "AssignmentExpression",
        "start": 801,
        "end": 848,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 801,
          "end": 810,
          "decorators": [],
          "name": "numOrDate",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 813,
          "end": 848,
          "arguments": [
            {
              "type": "Literal",
              "start": 845,
              "end": 847,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 817,
            "end": 844,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 850,
      "end": 906,
      "expression": {
        "type": "AssignmentExpression",
        "start": 850,
        "end": 905,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 850,
          "end": 862,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 865,
          "end": 905,
          "arguments": [
            {
              "type": "Literal",
              "start": 897,
              "end": 904,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 869,
            "end": 896,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 907,
      "end": 945,
      "expression": {
        "type": "NewExpression",
        "start": 907,
        "end": 944,
        "arguments": [
          {
            "type": "Literal",
            "start": 939,
            "end": 943,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 911,
          "end": 938,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 976,
      "end": 1010,
      "expression": {
        "type": "NewExpression",
        "start": 976,
        "end": 1009,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 980,
          "end": 1007,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1039,
      "end": 1133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1043,
          "end": 1132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1043,
            "end": 1132,
            "decorators": [],
            "name": "unionOfDifferentParameterTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1073,
              "end": 1132,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1075,
                "end": 1132,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1075,
                    "end": 1103,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1077,
                        "end": 1101,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1082,
                            "end": 1091,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1083,
                              "end": 1091,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1085,
                                "end": 1091
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1092,
                          "end": 1100,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1094,
                            "end": 1100
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1106,
                    "end": 1132,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1108,
                        "end": 1130,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1122,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1114,
                              "end": 1122,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1116,
                                "end": 1122
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1123,
                          "end": 1129,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1125,
                            "end": 1129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1125,
                              "end": 1129,
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
      "start": 1134,
      "end": 1173,
      "expression": {
        "type": "NewExpression",
        "start": 1134,
        "end": 1172,
        "arguments": [
          {
            "type": "Literal",
            "start": 1169,
            "end": 1171,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1138,
          "end": 1168,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1203,
      "end": 1247,
      "expression": {
        "type": "NewExpression",
        "start": 1203,
        "end": 1246,
        "arguments": [
          {
            "type": "Literal",
            "start": 1238,
            "end": 1245,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1207,
          "end": 1237,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1277,
      "end": 1314,
      "expression": {
        "type": "NewExpression",
        "start": 1277,
        "end": 1313,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1281,
          "end": 1311,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1345,
      "end": 1469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1349,
          "end": 1468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1349,
            "end": 1468,
            "decorators": [],
            "name": "unionOfDifferentNumberOfSignatures",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1383,
              "end": 1468,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1385,
                "end": 1468,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1385,
                    "end": 1413,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1387,
                        "end": 1411,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1392,
                            "end": 1401,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1393,
                              "end": 1401,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1395,
                                "end": 1401
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1402,
                          "end": 1410,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1404,
                            "end": 1410
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1416,
                    "end": 1468,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1418,
                        "end": 1440,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1423,
                            "end": 1432,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1424,
                              "end": 1432,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1426,
                                "end": 1432
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1433,
                          "end": 1439,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1435,
                            "end": 1439,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1435,
                              "end": 1439,
                              "decorators": [],
                              "name": "Date",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1441,
                        "end": 1466,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1446,
                            "end": 1455,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1447,
                              "end": 1455,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1449,
                                "end": 1455
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1456,
                          "end": 1465,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1458,
                            "end": 1465
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
      "start": 1470,
      "end": 1511,
      "expression": {
        "type": "NewExpression",
        "start": 1470,
        "end": 1510,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1474,
          "end": 1508,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1542,
      "end": 1585,
      "expression": {
        "type": "NewExpression",
        "start": 1542,
        "end": 1584,
        "arguments": [
          {
            "type": "Literal",
            "start": 1581,
            "end": 1583,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1546,
          "end": 1580,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1616,
      "end": 1664,
      "expression": {
        "type": "NewExpression",
        "start": 1616,
        "end": 1663,
        "arguments": [
          {
            "type": "Literal",
            "start": 1655,
            "end": 1662,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1620,
          "end": 1654,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1696,
      "end": 1805,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1700,
          "end": 1804,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1700,
            "end": 1804,
            "decorators": [],
            "name": "unionWithDifferentParameterCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1732,
              "end": 1804,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1734,
                "end": 1804,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1734,
                    "end": 1762,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1736,
                        "end": 1760,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1741,
                            "end": 1750,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1742,
                              "end": 1750,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1744,
                                "end": 1750
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1751,
                          "end": 1759,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1753,
                            "end": 1759
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1765,
                    "end": 1804,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1767,
                        "end": 1802,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1772,
                            "end": 1781,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1773,
                              "end": 1781,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1775,
                                "end": 1781
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1783,
                            "end": 1792,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1784,
                              "end": 1792,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1786,
                                "end": 1792
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1793,
                          "end": 1801,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1795,
                            "end": 1801
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
      "start": 1806,
      "end": 1845,
      "expression": {
        "type": "NewExpression",
        "start": 1806,
        "end": 1844,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1810,
          "end": 1842,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1864,
      "end": 1910,
      "expression": {
        "type": "NewExpression",
        "start": 1864,
        "end": 1909,
        "arguments": [
          {
            "type": "Literal",
            "start": 1901,
            "end": 1908,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1868,
          "end": 1900,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1929,
      "end": 1979,
      "expression": {
        "type": "NewExpression",
        "start": 1929,
        "end": 1978,
        "arguments": [
          {
            "type": "Literal",
            "start": 1966,
            "end": 1973,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1975,
            "end": 1977,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1933,
          "end": 1965,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1986,
      "end": 2103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1990,
          "end": 2102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1990,
            "end": 2102,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2017,
              "end": 2102,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2019,
                "end": 2102,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2019,
                    "end": 2059,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2021,
                        "end": 2057,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2026,
                            "end": 2035,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2027,
                              "end": 2035,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2029,
                                "end": 2035
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2037,
                            "end": 2047,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2039,
                              "end": 2047,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2041,
                                "end": 2047
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2048,
                          "end": 2056,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2050,
                            "end": 2056
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2062,
                    "end": 2102,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2064,
                        "end": 2100,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2069,
                            "end": 2078,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2070,
                              "end": 2078,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2072,
                                "end": 2078
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2080,
                            "end": 2090,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2082,
                              "end": 2090,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2084,
                                "end": 2090
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2091,
                          "end": 2099,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2093,
                            "end": 2099
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
      "start": 2104,
      "end": 2156,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2104,
        "end": 2155,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2104,
          "end": 2112,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2115,
          "end": 2155,
          "arguments": [
            {
              "type": "Literal",
              "start": 2147,
              "end": 2154,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2119,
            "end": 2146,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2157,
      "end": 2213,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2157,
        "end": 2212,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2157,
          "end": 2165,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2168,
          "end": 2212,
          "arguments": [
            {
              "type": "Literal",
              "start": 2200,
              "end": 2207,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2209,
              "end": 2211,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2172,
            "end": 2199,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2214,
      "end": 2275,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2214,
        "end": 2274,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2214,
          "end": 2222,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2225,
          "end": 2274,
          "arguments": [
            {
              "type": "Literal",
              "start": 2257,
              "end": 2264,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2266,
              "end": 2273,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2229,
            "end": 2256,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2303,
      "end": 2348,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2303,
        "end": 2347,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2303,
          "end": 2311,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2314,
          "end": 2347,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2318,
            "end": 2345,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2359,
      "end": 2474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2363,
          "end": 2473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2363,
            "end": 2473,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2390,
              "end": 2473,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2392,
                "end": 2473,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2392,
                    "end": 2432,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2394,
                        "end": 2430,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2399,
                            "end": 2408,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2400,
                              "end": 2408,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2402,
                                "end": 2408
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2410,
                            "end": 2420,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2412,
                              "end": 2420,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2414,
                                "end": 2420
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2421,
                          "end": 2429,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2423,
                            "end": 2429
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2435,
                    "end": 2473,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2437,
                        "end": 2471,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2442,
                            "end": 2451,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2443,
                              "end": 2451,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2445,
                                "end": 2451
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2453,
                            "end": 2462,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2454,
                              "end": 2462,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2456,
                                "end": 2462
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2463,
                          "end": 2471,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2465,
                            "end": 2471
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
      "start": 2475,
      "end": 2527,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2475,
        "end": 2526,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2475,
          "end": 2483,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2486,
          "end": 2526,
          "arguments": [
            {
              "type": "Literal",
              "start": 2518,
              "end": 2525,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2490,
            "end": 2517,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2555,
      "end": 2611,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2555,
        "end": 2610,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2555,
          "end": 2563,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2566,
          "end": 2610,
          "arguments": [
            {
              "type": "Literal",
              "start": 2598,
              "end": 2605,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2607,
              "end": 2609,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2570,
            "end": 2597,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2639,
      "end": 2700,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2639,
        "end": 2699,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2639,
          "end": 2647,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2650,
          "end": 2699,
          "arguments": [
            {
              "type": "Literal",
              "start": 2682,
              "end": 2689,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2691,
              "end": 2698,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2654,
            "end": 2681,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2728,
      "end": 2773,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2728,
        "end": 2772,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2728,
          "end": 2736,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2739,
          "end": 2772,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2743,
            "end": 2770,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2802,
      "end": 2907,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2806,
          "end": 2906,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2806,
            "end": 2906,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2833,
              "end": 2906,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2835,
                "end": 2906,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2835,
                    "end": 2875,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2837,
                        "end": 2873,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2842,
                            "end": 2851,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2843,
                              "end": 2851,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2845,
                                "end": 2851
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2853,
                            "end": 2863,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2855,
                              "end": 2863,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2857,
                                "end": 2863
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2864,
                          "end": 2872,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2866,
                            "end": 2872
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2878,
                    "end": 2906,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2880,
                        "end": 2904,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2885,
                            "end": 2894,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2886,
                              "end": 2894,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2888,
                                "end": 2894
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2895,
                          "end": 2903,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2897,
                            "end": 2903
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
      "start": 2908,
      "end": 2960,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2908,
        "end": 2959,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2908,
          "end": 2916,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2919,
          "end": 2959,
          "arguments": [
            {
              "type": "Literal",
              "start": 2951,
              "end": 2958,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2923,
            "end": 2950,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2988,
      "end": 3044,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2988,
        "end": 3043,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2988,
          "end": 2996,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 2999,
          "end": 3043,
          "arguments": [
            {
              "type": "Literal",
              "start": 3031,
              "end": 3038,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3040,
              "end": 3042,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3003,
            "end": 3030,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3051,
      "end": 3112,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3051,
        "end": 3111,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3051,
          "end": 3059,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3062,
          "end": 3111,
          "arguments": [
            {
              "type": "Literal",
              "start": 3094,
              "end": 3101,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3103,
              "end": 3110,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3066,
            "end": 3093,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3127,
      "end": 3172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3127,
        "end": 3171,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3127,
          "end": 3135,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3138,
          "end": 3171,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 3142,
            "end": 3169,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3201,
      "end": 3321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3205,
          "end": 3320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3205,
            "end": 3320,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3228,
              "end": 3320,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3230,
                "end": 3320,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3230,
                    "end": 3274,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3232,
                        "end": 3272,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3237,
                            "end": 3246,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3238,
                              "end": 3246,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3240,
                                "end": 3246
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3248,
                            "end": 3262,
                            "argument": {
                              "type": "Identifier",
                              "start": 3251,
                              "end": 3252,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3252,
                              "end": 3262,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3254,
                                "end": 3262,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3254,
                                  "end": 3260
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3263,
                          "end": 3271,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3265,
                            "end": 3271
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3277,
                    "end": 3320,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3279,
                        "end": 3318,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3284,
                            "end": 3293,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3285,
                              "end": 3293,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3287,
                                "end": 3293
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3295,
                            "end": 3309,
                            "argument": {
                              "type": "Identifier",
                              "start": 3298,
                              "end": 3299,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3299,
                              "end": 3309,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3301,
                                "end": 3309,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3301,
                                  "end": 3307
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3310,
                          "end": 3318,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3312,
                            "end": 3318
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
      "start": 3322,
      "end": 3370,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3322,
        "end": 3369,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3322,
          "end": 3330,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3333,
          "end": 3369,
          "arguments": [
            {
              "type": "Literal",
              "start": 3361,
              "end": 3368,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3337,
            "end": 3360,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3371,
      "end": 3423,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3371,
        "end": 3422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3371,
          "end": 3379,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3382,
          "end": 3422,
          "arguments": [
            {
              "type": "Literal",
              "start": 3410,
              "end": 3417,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3419,
              "end": 3421,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3386,
            "end": 3409,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3424,
      "end": 3480,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3424,
        "end": 3479,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3424,
          "end": 3432,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3435,
          "end": 3479,
          "arguments": [
            {
              "type": "Literal",
              "start": 3463,
              "end": 3470,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3472,
              "end": 3474,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 3476,
              "end": 3478,
              "raw": "11",
              "value": 11
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3439,
            "end": 3462,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3481,
      "end": 3538,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3481,
        "end": 3537,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3481,
          "end": 3489,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3492,
          "end": 3537,
          "arguments": [
            {
              "type": "Literal",
              "start": 3520,
              "end": 3527,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3529,
              "end": 3536,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3496,
            "end": 3519,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3566,
      "end": 3607,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3566,
        "end": 3606,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3566,
          "end": 3574,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3577,
          "end": 3606,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 3581,
            "end": 3604,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3618,
      "end": 3733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3622,
          "end": 3732,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3622,
            "end": 3732,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3645,
              "end": 3732,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3647,
                "end": 3732,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3647,
                    "end": 3691,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3649,
                        "end": 3689,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3654,
                            "end": 3663,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3655,
                              "end": 3663,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3657,
                                "end": 3663
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3665,
                            "end": 3679,
                            "argument": {
                              "type": "Identifier",
                              "start": 3668,
                              "end": 3669,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3669,
                              "end": 3679,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3671,
                                "end": 3679,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3671,
                                  "end": 3677
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3680,
                          "end": 3688,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3682,
                            "end": 3688
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3694,
                    "end": 3732,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3696,
                        "end": 3730,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3701,
                            "end": 3710,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3702,
                              "end": 3710,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3704,
                                "end": 3710
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 3712,
                            "end": 3721,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3713,
                              "end": 3721,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3715,
                                "end": 3721
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3722,
                          "end": 3730,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3724,
                            "end": 3730
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
      "start": 3734,
      "end": 3782,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3734,
        "end": 3781,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3734,
          "end": 3742,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3745,
          "end": 3781,
          "arguments": [
            {
              "type": "Literal",
              "start": 3773,
              "end": 3780,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3749,
            "end": 3772,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3810,
      "end": 3862,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3810,
        "end": 3861,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3810,
          "end": 3818,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3821,
          "end": 3861,
          "arguments": [
            {
              "type": "Literal",
              "start": 3849,
              "end": 3856,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3858,
              "end": 3860,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3825,
            "end": 3848,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3890,
      "end": 3946,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3890,
        "end": 3945,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3890,
          "end": 3898,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3901,
          "end": 3945,
          "arguments": [
            {
              "type": "Literal",
              "start": 3929,
              "end": 3936,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3938,
              "end": 3940,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 3942,
              "end": 3944,
              "raw": "11",
              "value": 11
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3905,
            "end": 3928,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3974,
      "end": 4031,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3974,
        "end": 4030,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3974,
          "end": 3982,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 3985,
          "end": 4030,
          "arguments": [
            {
              "type": "Literal",
              "start": 4013,
              "end": 4020,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4022,
              "end": 4029,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3989,
            "end": 4012,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4059,
      "end": 4100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4059,
        "end": 4099,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4059,
          "end": 4067,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 4070,
          "end": 4099,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 4074,
            "end": 4097,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4129,
      "end": 4233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4133,
          "end": 4232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4133,
            "end": 4232,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4156,
              "end": 4232,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4158,
                "end": 4232,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 4158,
                    "end": 4202,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 4160,
                        "end": 4200,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4165,
                            "end": 4174,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4166,
                              "end": 4174,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4168,
                                "end": 4174
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 4176,
                            "end": 4190,
                            "argument": {
                              "type": "Identifier",
                              "start": 4179,
                              "end": 4180,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4180,
                              "end": 4190,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4182,
                                "end": 4190,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4182,
                                  "end": 4188
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4191,
                          "end": 4199,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4193,
                            "end": 4199
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 4205,
                    "end": 4232,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 4207,
                        "end": 4230,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4212,
                            "end": 4221,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4213,
                              "end": 4221,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4215,
                                "end": 4221
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4222,
                          "end": 4230,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4224,
                            "end": 4230
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
      "start": 4234,
      "end": 4282,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4234,
        "end": 4281,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4234,
          "end": 4242,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 4245,
          "end": 4281,
          "arguments": [
            {
              "type": "Literal",
              "start": 4273,
              "end": 4280,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4249,
            "end": 4272,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4310,
      "end": 4362,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4310,
        "end": 4361,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4310,
          "end": 4318,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 4321,
          "end": 4361,
          "arguments": [
            {
              "type": "Literal",
              "start": 4349,
              "end": 4356,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4358,
              "end": 4360,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4325,
            "end": 4348,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4369,
      "end": 4425,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4369,
        "end": 4424,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4369,
          "end": 4377,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 4380,
          "end": 4424,
          "arguments": [
            {
              "type": "Literal",
              "start": 4408,
              "end": 4415,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4417,
              "end": 4419,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 4421,
              "end": 4423,
              "raw": "11",
              "value": 11
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4384,
            "end": 4407,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4432,
      "end": 4489,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4432,
        "end": 4488,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4432,
          "end": 4440,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 4443,
          "end": 4488,
          "arguments": [
            {
              "type": "Literal",
              "start": 4471,
              "end": 4478,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4480,
              "end": 4487,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4447,
            "end": 4470,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4504,
      "end": 4545,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4504,
        "end": 4544,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4504,
          "end": 4512,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 4515,
          "end": 4544,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 4519,
            "end": 4542,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4574,
      "end": 4673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4578,
          "end": 4672,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4578,
            "end": 4672,
            "decorators": [],
            "name": "unionWithAbstractSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4604,
              "end": 4672,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4606,
                "end": 4672,
                "types": [
                  {
                    "type": "TSConstructorType",
                    "start": 4607,
                    "end": 4641,
                    "abstract": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4621,
                        "end": 4630,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4622,
                          "end": 4630,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4624,
                            "end": 4630
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4632,
                      "end": 4641,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4635,
                        "end": 4641
                      }
                    }
                  },
                  {
                    "type": "TSConstructorType",
                    "start": 4646,
                    "end": 4671,
                    "abstract": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4651,
                        "end": 4660,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4652,
                          "end": 4660,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4654,
                            "end": 4660
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4662,
                      "end": 4671,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4665,
                        "end": 4671
                      }
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
      "type": "ExpressionStatement",
      "start": 4674,
      "end": 4714,
      "expression": {
        "type": "NewExpression",
        "start": 4674,
        "end": 4713,
        "arguments": [
          {
            "type": "Literal",
            "start": 4705,
            "end": 4712,
            "raw": "'hello'",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 4678,
          "end": 4704,
          "decorators": [],
          "name": "unionWithAbstractSignature",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
