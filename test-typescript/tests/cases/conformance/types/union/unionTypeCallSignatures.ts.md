__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 4541,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 29,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
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
      "start": 365,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 446,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 446,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 446,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 397,
                "end": 446,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 397,
                    "end": 421,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 399,
                        "end": 419,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 400,
                            "end": 409,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 401,
                              "end": 409,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 403,
                                "end": 409
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 410,
                          "end": 418,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 412,
                            "end": 418
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 424,
                    "end": 446,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 426,
                        "end": 444,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 427,
                            "end": 436,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 428,
                              "end": 436,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 430,
                                "end": 436
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 437,
                          "end": 443,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 439,
                            "end": 443,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 443,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
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
      "start": 448,
      "end": 491,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 448,
        "end": 490,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 448,
          "end": 457,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 460,
          "end": 490,
          "arguments": [
            {
              "type": "Literal",
              "start": 487,
              "end": 489,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 460,
            "end": 486,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 543,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 492,
        "end": 542,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 492,
          "end": 504,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 507,
          "end": 542,
          "arguments": [
            {
              "type": "Literal",
              "start": 534,
              "end": 541,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 507,
            "end": 533,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 588,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 554,
        "end": 587,
        "arguments": [
          {
            "type": "Literal",
            "start": 582,
            "end": 586,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 554,
          "end": 581,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 620,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 745,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 745,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 651,
              "end": 745,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 653,
                "end": 745,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 653,
                    "end": 698,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 655,
                        "end": 675,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 656,
                            "end": 665,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 657,
                              "end": 665,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 659,
                                "end": 665
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 666,
                          "end": 674,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 668,
                            "end": 674
                          }
                        },
                        "typeParameters": null
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 676,
                        "end": 696,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 677,
                            "end": 686,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 678,
                              "end": 686,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 680,
                                "end": 686
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 687,
                          "end": 695,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 689,
                            "end": 695
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 701,
                    "end": 745,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 703,
                        "end": 721,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 704,
                            "end": 713,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 705,
                              "end": 713,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 707,
                                "end": 713
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 714,
                          "end": 720,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 716,
                            "end": 720,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 716,
                              "end": 720,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 722,
                        "end": 743,
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
                          "end": 742,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 735,
                            "end": 742
                          }
                        },
                        "typeParameters": null
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
      "start": 747,
      "end": 791,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 747,
        "end": 790,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 747,
          "end": 756,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 759,
          "end": 790,
          "arguments": [
            {
              "type": "Literal",
              "start": 787,
              "end": 789,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 759,
            "end": 786,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 792,
      "end": 844,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 792,
        "end": 843,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 792,
          "end": 804,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 807,
          "end": 843,
          "arguments": [
            {
              "type": "Literal",
              "start": 835,
              "end": 842,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 807,
            "end": 834,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 845,
      "end": 879,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 845,
        "end": 878,
        "arguments": [
          {
            "type": "Literal",
            "start": 873,
            "end": 877,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 845,
          "end": 872,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 910,
      "end": 940,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 910,
        "end": 939,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 910,
          "end": 937,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 969,
      "end": 1055,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 973,
          "end": 1054,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 973,
            "end": 1054,
            "decorators": [],
            "name": "unionOfDifferentParameterTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1003,
              "end": 1054,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1005,
                "end": 1054,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1005,
                    "end": 1029,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1007,
                        "end": 1027,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1008,
                            "end": 1017,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1009,
                              "end": 1017,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1011,
                                "end": 1017
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1018,
                          "end": 1026,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1020,
                            "end": 1026
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1032,
                    "end": 1054,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1034,
                        "end": 1052,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1044,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1036,
                              "end": 1044,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1038,
                                "end": 1044
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1045,
                          "end": 1051,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1047,
                            "end": 1051,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1047,
                              "end": 1051,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
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
      "start": 1056,
      "end": 1091,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1056,
        "end": 1090,
        "arguments": [
          {
            "type": "Literal",
            "start": 1087,
            "end": 1089,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1056,
          "end": 1086,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1121,
      "end": 1161,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1121,
        "end": 1160,
        "arguments": [
          {
            "type": "Literal",
            "start": 1152,
            "end": 1159,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1121,
          "end": 1151,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1191,
      "end": 1224,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1191,
        "end": 1223,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1191,
          "end": 1221,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1255,
      "end": 1367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1259,
          "end": 1366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1259,
            "end": 1366,
            "decorators": [],
            "name": "unionOfDifferentNumberOfSignatures",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1293,
              "end": 1366,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1295,
                "end": 1366,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1295,
                    "end": 1319,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1297,
                        "end": 1317,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1298,
                            "end": 1307,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1299,
                              "end": 1307,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1301,
                                "end": 1307
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1308,
                          "end": 1316,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1310,
                            "end": 1316
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1322,
                    "end": 1366,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1324,
                        "end": 1342,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1325,
                            "end": 1334,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1326,
                              "end": 1334,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1328,
                                "end": 1334
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1335,
                          "end": 1341,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1337,
                            "end": 1341,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1337,
                              "end": 1341,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1343,
                        "end": 1364,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1344,
                            "end": 1353,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1345,
                              "end": 1353,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1347,
                                "end": 1353
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1354,
                          "end": 1363,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1356,
                            "end": 1363
                          }
                        },
                        "typeParameters": null
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
      "start": 1368,
      "end": 1405,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1368,
        "end": 1404,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1368,
          "end": 1402,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1436,
      "end": 1475,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1436,
        "end": 1474,
        "arguments": [
          {
            "type": "Literal",
            "start": 1471,
            "end": 1473,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1436,
          "end": 1470,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1506,
      "end": 1550,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1506,
        "end": 1549,
        "arguments": [
          {
            "type": "Literal",
            "start": 1541,
            "end": 1548,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1506,
          "end": 1540,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1582,
      "end": 1684,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1586,
          "end": 1682,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1586,
            "end": 1682,
            "decorators": [],
            "name": "unionWithDifferentParameterCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1618,
              "end": 1682,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1620,
                "end": 1682,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1620,
                    "end": 1644,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1622,
                        "end": 1642,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1623,
                            "end": 1632,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1624,
                              "end": 1632,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1626,
                                "end": 1632
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1633,
                          "end": 1641,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1635,
                            "end": 1641
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1647,
                    "end": 1682,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1649,
                        "end": 1680,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1650,
                            "end": 1659,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1651,
                              "end": 1659,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1653,
                                "end": 1659
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1661,
                            "end": 1670,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1662,
                              "end": 1670,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1664,
                                "end": 1670
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1671,
                          "end": 1679,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1673,
                            "end": 1679
                          }
                        },
                        "typeParameters": null
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
      "start": 1685,
      "end": 1720,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1685,
        "end": 1719,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1685,
          "end": 1717,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1739,
      "end": 1781,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1739,
        "end": 1780,
        "arguments": [
          {
            "type": "Literal",
            "start": 1772,
            "end": 1779,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1739,
          "end": 1771,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1800,
      "end": 1846,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1800,
        "end": 1845,
        "arguments": [
          {
            "type": "Literal",
            "start": 1833,
            "end": 1840,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1842,
            "end": 1844,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1800,
          "end": 1832,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1853,
      "end": 1962,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1857,
          "end": 1961,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1857,
            "end": 1961,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1884,
              "end": 1961,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1886,
                "end": 1961,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1886,
                    "end": 1922,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1888,
                        "end": 1920,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1889,
                            "end": 1898,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1890,
                              "end": 1898,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1892,
                                "end": 1898
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1900,
                            "end": 1910,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1902,
                              "end": 1910,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1904,
                                "end": 1910
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1911,
                          "end": 1919,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1913,
                            "end": 1919
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1925,
                    "end": 1961,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1927,
                        "end": 1959,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1928,
                            "end": 1937,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1929,
                              "end": 1937,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1931,
                                "end": 1937
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1939,
                            "end": 1949,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1941,
                              "end": 1949,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1943,
                                "end": 1949
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1950,
                          "end": 1958,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1952,
                            "end": 1958
                          }
                        },
                        "typeParameters": null
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
      "start": 1963,
      "end": 2011,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1963,
        "end": 2010,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1963,
          "end": 1971,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1974,
          "end": 2010,
          "arguments": [
            {
              "type": "Literal",
              "start": 2002,
              "end": 2009,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1974,
            "end": 2001,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2012,
      "end": 2064,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2012,
        "end": 2063,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2012,
          "end": 2020,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2023,
          "end": 2063,
          "arguments": [
            {
              "type": "Literal",
              "start": 2051,
              "end": 2058,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2060,
              "end": 2062,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2023,
            "end": 2050,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2065,
      "end": 2122,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2065,
        "end": 2121,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2065,
          "end": 2073,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2076,
          "end": 2121,
          "arguments": [
            {
              "type": "Literal",
              "start": 2104,
              "end": 2111,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2113,
              "end": 2120,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2076,
            "end": 2103,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2150,
      "end": 2191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2150,
        "end": 2190,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2150,
          "end": 2158,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2161,
          "end": 2190,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2161,
            "end": 2188,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2202,
      "end": 2309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2206,
          "end": 2308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2206,
            "end": 2308,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2233,
              "end": 2308,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2235,
                "end": 2308,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2235,
                    "end": 2271,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2237,
                        "end": 2269,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2238,
                            "end": 2247,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2239,
                              "end": 2247,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2241,
                                "end": 2247
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2249,
                            "end": 2259,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2251,
                              "end": 2259,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2253,
                                "end": 2259
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2260,
                          "end": 2268,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2262,
                            "end": 2268
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2274,
                    "end": 2308,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2276,
                        "end": 2306,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2277,
                            "end": 2286,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2278,
                              "end": 2286,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2280,
                                "end": 2286
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2288,
                            "end": 2297,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2289,
                              "end": 2297,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2291,
                                "end": 2297
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2298,
                          "end": 2306,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2300,
                            "end": 2306
                          }
                        },
                        "typeParameters": null
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
      "start": 2310,
      "end": 2358,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2310,
        "end": 2357,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2310,
          "end": 2318,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2321,
          "end": 2357,
          "arguments": [
            {
              "type": "Literal",
              "start": 2349,
              "end": 2356,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2321,
            "end": 2348,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2386,
      "end": 2438,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2386,
        "end": 2437,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2386,
          "end": 2394,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2397,
          "end": 2437,
          "arguments": [
            {
              "type": "Literal",
              "start": 2425,
              "end": 2432,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2434,
              "end": 2436,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2397,
            "end": 2424,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2466,
      "end": 2523,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2466,
        "end": 2522,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2466,
          "end": 2474,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2477,
          "end": 2522,
          "arguments": [
            {
              "type": "Literal",
              "start": 2505,
              "end": 2512,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2514,
              "end": 2521,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2477,
            "end": 2504,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2551,
      "end": 2592,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2551,
        "end": 2591,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2551,
          "end": 2559,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2562,
          "end": 2591,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2562,
            "end": 2589,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2621,
      "end": 2718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2625,
          "end": 2717,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2625,
            "end": 2717,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2652,
              "end": 2717,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2654,
                "end": 2717,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2654,
                    "end": 2690,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2656,
                        "end": 2688,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2657,
                            "end": 2666,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2658,
                              "end": 2666,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2660,
                                "end": 2666
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2668,
                            "end": 2678,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2670,
                              "end": 2678,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2672,
                                "end": 2678
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2679,
                          "end": 2687,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2681,
                            "end": 2687
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2693,
                    "end": 2717,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2695,
                        "end": 2715,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2696,
                            "end": 2705,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2697,
                              "end": 2705,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2699,
                                "end": 2705
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2706,
                          "end": 2714,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2708,
                            "end": 2714
                          }
                        },
                        "typeParameters": null
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
      "start": 2719,
      "end": 2767,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2719,
        "end": 2766,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2719,
          "end": 2727,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2730,
          "end": 2766,
          "arguments": [
            {
              "type": "Literal",
              "start": 2758,
              "end": 2765,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2730,
            "end": 2757,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2768,
      "end": 2820,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2768,
        "end": 2819,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2768,
          "end": 2776,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2779,
          "end": 2819,
          "arguments": [
            {
              "type": "Literal",
              "start": 2807,
              "end": 2814,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2816,
              "end": 2818,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2779,
            "end": 2806,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2827,
      "end": 2884,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2827,
        "end": 2883,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2827,
          "end": 2835,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2838,
          "end": 2883,
          "arguments": [
            {
              "type": "Literal",
              "start": 2866,
              "end": 2873,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 2875,
              "end": 2882,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2838,
            "end": 2865,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2908,
      "end": 2949,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2908,
        "end": 2948,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2908,
          "end": 2916,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2919,
          "end": 2948,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2919,
            "end": 2946,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2970,
      "end": 3082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2974,
          "end": 3081,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2974,
            "end": 3081,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2997,
              "end": 3081,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2999,
                "end": 3081,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2999,
                    "end": 3039,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3001,
                        "end": 3037,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3002,
                            "end": 3011,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3003,
                              "end": 3011,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3005,
                                "end": 3011
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3013,
                            "end": 3027,
                            "argument": {
                              "type": "Identifier",
                              "start": 3016,
                              "end": 3017,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3017,
                              "end": 3027,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3019,
                                "end": 3027,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3019,
                                  "end": 3025
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3028,
                          "end": 3036,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3030,
                            "end": 3036
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3042,
                    "end": 3081,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3044,
                        "end": 3079,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3045,
                            "end": 3054,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3046,
                              "end": 3054,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3048,
                                "end": 3054
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3056,
                            "end": 3070,
                            "argument": {
                              "type": "Identifier",
                              "start": 3059,
                              "end": 3060,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3060,
                              "end": 3070,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3062,
                                "end": 3070,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3062,
                                  "end": 3068
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3071,
                          "end": 3079,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3073,
                            "end": 3079
                          }
                        },
                        "typeParameters": null
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
      "start": 3083,
      "end": 3127,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3083,
        "end": 3126,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3083,
          "end": 3091,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3094,
          "end": 3126,
          "arguments": [
            {
              "type": "Literal",
              "start": 3118,
              "end": 3125,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3094,
            "end": 3117,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3128,
      "end": 3176,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3128,
        "end": 3175,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3128,
          "end": 3136,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3139,
          "end": 3175,
          "arguments": [
            {
              "type": "Literal",
              "start": 3163,
              "end": 3170,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3172,
              "end": 3174,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3139,
            "end": 3162,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3177,
      "end": 3229,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3177,
        "end": 3228,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3177,
          "end": 3185,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3188,
          "end": 3228,
          "arguments": [
            {
              "type": "Literal",
              "start": 3212,
              "end": 3219,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3221,
              "end": 3223,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 3225,
              "end": 3227,
              "raw": "11",
              "value": 11
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3188,
            "end": 3211,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3230,
      "end": 3283,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3230,
        "end": 3282,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3230,
          "end": 3238,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3241,
          "end": 3282,
          "arguments": [
            {
              "type": "Literal",
              "start": 3265,
              "end": 3272,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3274,
              "end": 3281,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3241,
            "end": 3264,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3311,
      "end": 3348,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3311,
        "end": 3347,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3311,
          "end": 3319,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3322,
          "end": 3347,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 3322,
            "end": 3345,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3359,
      "end": 3466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3363,
          "end": 3465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3363,
            "end": 3465,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3386,
              "end": 3465,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3388,
                "end": 3465,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3388,
                    "end": 3428,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3390,
                        "end": 3426,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3391,
                            "end": 3400,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3392,
                              "end": 3400,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3394,
                                "end": 3400
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3402,
                            "end": 3416,
                            "argument": {
                              "type": "Identifier",
                              "start": 3405,
                              "end": 3406,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3406,
                              "end": 3416,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3408,
                                "end": 3416,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3408,
                                  "end": 3414
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3417,
                          "end": 3425,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3419,
                            "end": 3425
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3431,
                    "end": 3465,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3433,
                        "end": 3463,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3434,
                            "end": 3443,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3435,
                              "end": 3443,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3437,
                                "end": 3443
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 3445,
                            "end": 3454,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3446,
                              "end": 3454,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3448,
                                "end": 3454
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3455,
                          "end": 3463,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3457,
                            "end": 3463
                          }
                        },
                        "typeParameters": null
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
      "start": 3467,
      "end": 3511,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3467,
        "end": 3510,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3467,
          "end": 3475,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3478,
          "end": 3510,
          "arguments": [
            {
              "type": "Literal",
              "start": 3502,
              "end": 3509,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3478,
            "end": 3501,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3539,
      "end": 3587,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3539,
        "end": 3586,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3539,
          "end": 3547,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3550,
          "end": 3586,
          "arguments": [
            {
              "type": "Literal",
              "start": 3574,
              "end": 3581,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3583,
              "end": 3585,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3550,
            "end": 3573,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3615,
      "end": 3667,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3615,
        "end": 3666,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3615,
          "end": 3623,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3626,
          "end": 3666,
          "arguments": [
            {
              "type": "Literal",
              "start": 3650,
              "end": 3657,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3659,
              "end": 3661,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 3663,
              "end": 3665,
              "raw": "11",
              "value": 11
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3626,
            "end": 3649,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3695,
      "end": 3748,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3695,
        "end": 3747,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3695,
          "end": 3703,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3706,
          "end": 3747,
          "arguments": [
            {
              "type": "Literal",
              "start": 3730,
              "end": 3737,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 3739,
              "end": 3746,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3706,
            "end": 3729,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3776,
      "end": 3813,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3776,
        "end": 3812,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3776,
          "end": 3784,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3787,
          "end": 3812,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 3787,
            "end": 3810,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3842,
      "end": 3938,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3846,
          "end": 3937,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3846,
            "end": 3937,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3869,
              "end": 3937,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3871,
                "end": 3937,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3871,
                    "end": 3911,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3873,
                        "end": 3909,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3874,
                            "end": 3883,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3875,
                              "end": 3883,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3877,
                                "end": 3883
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3885,
                            "end": 3899,
                            "argument": {
                              "type": "Identifier",
                              "start": 3888,
                              "end": 3889,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3889,
                              "end": 3899,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3891,
                                "end": 3899,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3891,
                                  "end": 3897
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3900,
                          "end": 3908,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3902,
                            "end": 3908
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3914,
                    "end": 3937,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3916,
                        "end": 3935,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3917,
                            "end": 3926,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3918,
                              "end": 3926,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3920,
                                "end": 3926
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3927,
                          "end": 3935,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3929,
                            "end": 3935
                          }
                        },
                        "typeParameters": null
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
      "start": 3939,
      "end": 3983,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3939,
        "end": 3982,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3939,
          "end": 3947,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3950,
          "end": 3982,
          "arguments": [
            {
              "type": "Literal",
              "start": 3974,
              "end": 3981,
              "raw": "'hello'",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3950,
            "end": 3973,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3984,
      "end": 4032,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3984,
        "end": 4031,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3984,
          "end": 3992,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3995,
          "end": 4031,
          "arguments": [
            {
              "type": "Literal",
              "start": 4019,
              "end": 4026,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4028,
              "end": 4030,
              "raw": "10",
              "value": 10
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3995,
            "end": 4018,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4060,
      "end": 4112,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4060,
        "end": 4111,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4060,
          "end": 4068,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4071,
          "end": 4111,
          "arguments": [
            {
              "type": "Literal",
              "start": 4095,
              "end": 4102,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4104,
              "end": 4106,
              "raw": "10",
              "value": 10
            },
            {
              "type": "Literal",
              "start": 4108,
              "end": 4110,
              "raw": "11",
              "value": 11
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4071,
            "end": 4094,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4140,
      "end": 4193,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4140,
        "end": 4192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4140,
          "end": 4148,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4151,
          "end": 4192,
          "arguments": [
            {
              "type": "Literal",
              "start": 4175,
              "end": 4182,
              "raw": "'hello'",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4184,
              "end": 4191,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4151,
            "end": 4174,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4217,
      "end": 4254,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4217,
        "end": 4253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4217,
          "end": 4225,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4228,
          "end": 4253,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 4228,
            "end": 4251,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4283,
      "end": 4380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4287,
          "end": 4379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4287,
            "end": 4379,
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4310,
              "end": 4379,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4312,
                "end": 4379,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 4312,
                    "end": 4341,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 4314,
                        "end": 4339,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 4315,
                            "end": 4329,
                            "argument": {
                              "type": "Identifier",
                              "start": 4318,
                              "end": 4319,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4319,
                              "end": 4329,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4321,
                                "end": 4329,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4321,
                                  "end": 4327
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4330,
                          "end": 4338,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4332,
                            "end": 4338
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 4344,
                    "end": 4379,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 4346,
                        "end": 4377,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4347,
                            "end": 4356,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4348,
                              "end": 4356,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4350,
                                "end": 4356
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4358,
                            "end": 4367,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4359,
                              "end": 4367,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4361,
                                "end": 4367
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4368,
                          "end": 4376,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4370,
                            "end": 4376
                          }
                        },
                        "typeParameters": null
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
      "start": 4381,
      "end": 4425,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4381,
        "end": 4424,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4381,
          "end": 4389,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4392,
          "end": 4424,
          "arguments": [
            {
              "type": "Literal",
              "start": 4416,
              "end": 4423,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4392,
            "end": 4415,
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4487,
      "end": 4540,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4487,
        "end": 4539,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4487,
          "end": 4495,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4498,
          "end": 4539,
          "arguments": [
            {
              "type": "Literal",
              "start": 4522,
              "end": 4529,
              "raw": "\"hello\"",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 4531,
              "end": 4538,
              "raw": "\"world\"",
              "value": "world"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4498,
            "end": 4521,
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
