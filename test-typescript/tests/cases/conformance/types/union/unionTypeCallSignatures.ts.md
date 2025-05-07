__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4539,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 28,
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
      "start": 30,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 64,
            "decorators": [],
            "name": "strOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 64,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 48,
                "end": 64,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 57,
                    "end": 64
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
      "start": 66,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 95,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 80,
                "end": 95,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 80,
                    "end": 86
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 89,
                    "end": 95
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
      "start": 364,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 445,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 445,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 445,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 396,
                "end": 445,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 396,
                    "end": 420,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 398,
                        "end": 418,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 399,
                            "end": 408,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 400,
                              "end": 408,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 402,
                                "end": 408
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 409,
                          "end": 417,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 411,
                            "end": 417
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 423,
                    "end": 445,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 425,
                        "end": 443,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 426,
                            "end": 435,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 427,
                              "end": 435,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 429,
                                "end": 435
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 436,
                          "end": 442,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 438,
                            "end": 442,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 438,
                              "end": 442,
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
      "start": 447,
      "end": 490,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 447,
        "end": 489,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 447,
          "end": 456,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 459,
          "end": 489,
          "arguments": [
            {
              "type": "Literal",
              "start": 486,
              "end": 488,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 459,
            "end": 485,
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
      "start": 491,
      "end": 542,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 491,
        "end": 541,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 491,
          "end": 503,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 506,
          "end": 541,
          "arguments": [
            {
              "type": "Literal",
              "start": 533,
              "end": 540,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 506,
            "end": 532,
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
      "start": 553,
      "end": 587,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 586,
        "arguments": [
          {
            "type": "Literal",
            "start": 581,
            "end": 585,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 553,
          "end": 580,
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
      "start": 619,
      "end": 745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 744,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 744,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 744,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 652,
                "end": 744,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 652,
                    "end": 697,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 654,
                        "end": 674,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 655,
                            "end": 664,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 656,
                              "end": 664,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 658,
                                "end": 664
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 665,
                          "end": 673,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 667,
                            "end": 673
                          }
                        },
                        "typeParameters": null
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 675,
                        "end": 695,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 676,
                            "end": 685,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 677,
                              "end": 685,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 679,
                                "end": 685
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 686,
                          "end": 694,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 688,
                            "end": 694
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 700,
                    "end": 744,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 702,
                        "end": 720,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 703,
                            "end": 712,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 704,
                              "end": 712,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 706,
                                "end": 712
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 713,
                          "end": 719,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 715,
                            "end": 719,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 715,
                              "end": 719,
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
                        "start": 721,
                        "end": 742,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 722,
                            "end": 731,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 723,
                              "end": 731,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 725,
                                "end": 731
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 732,
                          "end": 741,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 734,
                            "end": 741
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
      "start": 746,
      "end": 790,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 746,
        "end": 789,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 746,
          "end": 755,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 758,
          "end": 789,
          "arguments": [
            {
              "type": "Literal",
              "start": 786,
              "end": 788,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 758,
            "end": 785,
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
      "start": 791,
      "end": 843,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 791,
        "end": 842,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 791,
          "end": 803,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 806,
          "end": 842,
          "arguments": [
            {
              "type": "Literal",
              "start": 834,
              "end": 841,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 806,
            "end": 833,
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
      "start": 844,
      "end": 878,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 844,
        "end": 877,
        "arguments": [
          {
            "type": "Literal",
            "start": 872,
            "end": 876,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 844,
          "end": 871,
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
      "start": 909,
      "end": 939,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 909,
        "end": 938,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 909,
          "end": 936,
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
      "start": 968,
      "end": 1054,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 972,
          "end": 1053,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 972,
            "end": 1053,
            "decorators": [],
            "name": "unionOfDifferentParameterTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1053,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1004,
                "end": 1053,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1004,
                    "end": 1028,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1006,
                        "end": 1026,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1007,
                            "end": 1016,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1008,
                              "end": 1016,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1010,
                                "end": 1016
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1017,
                          "end": 1025,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1019,
                            "end": 1025
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1031,
                    "end": 1053,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1033,
                        "end": 1051,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1034,
                            "end": 1043,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1035,
                              "end": 1043,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1037,
                                "end": 1043
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1044,
                          "end": 1050,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1046,
                            "end": 1050,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1046,
                              "end": 1050,
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
      "start": 1055,
      "end": 1090,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1055,
        "end": 1089,
        "arguments": [
          {
            "type": "Literal",
            "start": 1086,
            "end": 1088,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1055,
          "end": 1085,
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
      "start": 1120,
      "end": 1160,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1120,
        "end": 1159,
        "arguments": [
          {
            "type": "Literal",
            "start": 1151,
            "end": 1158,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1120,
          "end": 1150,
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
      "start": 1190,
      "end": 1223,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1190,
        "end": 1222,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1190,
          "end": 1220,
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
      "start": 1254,
      "end": 1366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1258,
          "end": 1365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1258,
            "end": 1365,
            "decorators": [],
            "name": "unionOfDifferentNumberOfSignatures",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1292,
              "end": 1365,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1294,
                "end": 1365,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1294,
                    "end": 1318,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1296,
                        "end": 1316,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1297,
                            "end": 1306,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1298,
                              "end": 1306,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1300,
                                "end": 1306
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1307,
                          "end": 1315,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1309,
                            "end": 1315
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1321,
                    "end": 1365,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1323,
                        "end": 1341,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1324,
                            "end": 1333,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1325,
                              "end": 1333,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1327,
                                "end": 1333
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1334,
                          "end": 1340,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1336,
                            "end": 1340,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1336,
                              "end": 1340,
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
                        "start": 1342,
                        "end": 1363,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1343,
                            "end": 1352,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1344,
                              "end": 1352,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1346,
                                "end": 1352
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1353,
                          "end": 1362,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1355,
                            "end": 1362
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
      "start": 1367,
      "end": 1404,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1367,
        "end": 1403,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1367,
          "end": 1401,
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
      "start": 1435,
      "end": 1474,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1435,
        "end": 1473,
        "arguments": [
          {
            "type": "Literal",
            "start": 1470,
            "end": 1472,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1435,
          "end": 1469,
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
      "start": 1505,
      "end": 1549,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1505,
        "end": 1548,
        "arguments": [
          {
            "type": "Literal",
            "start": 1540,
            "end": 1547,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1505,
          "end": 1539,
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
      "start": 1581,
      "end": 1683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1585,
          "end": 1681,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1585,
            "end": 1681,
            "decorators": [],
            "name": "unionWithDifferentParameterCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1617,
              "end": 1681,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1619,
                "end": 1681,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1619,
                    "end": 1643,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1621,
                        "end": 1641,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1622,
                            "end": 1631,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1623,
                              "end": 1631,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1625,
                                "end": 1631
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1632,
                          "end": 1640,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1634,
                            "end": 1640
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1646,
                    "end": 1681,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1648,
                        "end": 1679,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1649,
                            "end": 1658,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1650,
                              "end": 1658,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1652,
                                "end": 1658
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1660,
                            "end": 1669,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1661,
                              "end": 1669,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1663,
                                "end": 1669
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1670,
                          "end": 1678,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1672,
                            "end": 1678
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
      "start": 1684,
      "end": 1719,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1684,
        "end": 1718,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1684,
          "end": 1716,
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
      "start": 1738,
      "end": 1780,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1738,
        "end": 1779,
        "arguments": [
          {
            "type": "Literal",
            "start": 1771,
            "end": 1778,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1738,
          "end": 1770,
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
      "start": 1799,
      "end": 1845,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1799,
        "end": 1844,
        "arguments": [
          {
            "type": "Literal",
            "start": 1832,
            "end": 1839,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1841,
            "end": 1843,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1799,
          "end": 1831,
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
      "start": 1852,
      "end": 1961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1856,
          "end": 1960,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1856,
            "end": 1960,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1883,
              "end": 1960,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1885,
                "end": 1960,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1885,
                    "end": 1921,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1887,
                        "end": 1919,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1888,
                            "end": 1897,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1889,
                              "end": 1897,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1891,
                                "end": 1897
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1899,
                            "end": 1909,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1901,
                              "end": 1909,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1903,
                                "end": 1909
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1910,
                          "end": 1918,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1912,
                            "end": 1918
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1924,
                    "end": 1960,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1926,
                        "end": 1958,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1927,
                            "end": 1936,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1928,
                              "end": 1936,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1930,
                                "end": 1936
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1938,
                            "end": 1948,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1940,
                              "end": 1948,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1942,
                                "end": 1948
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1949,
                          "end": 1957,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1951,
                            "end": 1957
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
      "start": 1962,
      "end": 2010,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1962,
        "end": 2009,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1962,
          "end": 1970,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1973,
          "end": 2009,
          "arguments": [
            {
              "type": "Literal",
              "start": 2001,
              "end": 2008,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1973,
            "end": 2000,
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
      "start": 2011,
      "end": 2063,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2011,
        "end": 2062,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2011,
          "end": 2019,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2022,
          "end": 2062,
          "arguments": [
            {
              "type": "Literal",
              "start": 2050,
              "end": 2057,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2059,
              "end": 2061,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2022,
            "end": 2049,
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
      "start": 2064,
      "end": 2121,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2064,
        "end": 2120,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2064,
          "end": 2072,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2075,
          "end": 2120,
          "arguments": [
            {
              "type": "Literal",
              "start": 2103,
              "end": 2110,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2112,
              "end": 2119,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2075,
            "end": 2102,
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
      "start": 2149,
      "end": 2190,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2149,
        "end": 2189,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2149,
          "end": 2157,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2160,
          "end": 2189,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2160,
            "end": 2187,
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
      "start": 2201,
      "end": 2308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2205,
          "end": 2307,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2205,
            "end": 2307,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2232,
              "end": 2307,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2234,
                "end": 2307,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2234,
                    "end": 2270,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2236,
                        "end": 2268,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2237,
                            "end": 2246,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2238,
                              "end": 2246,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2240,
                                "end": 2246
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2248,
                            "end": 2258,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2250,
                              "end": 2258,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2252,
                                "end": 2258
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2259,
                          "end": 2267,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2261,
                            "end": 2267
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2273,
                    "end": 2307,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2275,
                        "end": 2305,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2276,
                            "end": 2285,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2277,
                              "end": 2285,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2279,
                                "end": 2285
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2287,
                            "end": 2296,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2288,
                              "end": 2296,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2290,
                                "end": 2296
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2297,
                          "end": 2305,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2299,
                            "end": 2305
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
      "start": 2309,
      "end": 2357,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2309,
        "end": 2356,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2309,
          "end": 2317,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2320,
          "end": 2356,
          "arguments": [
            {
              "type": "Literal",
              "start": 2348,
              "end": 2355,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2320,
            "end": 2347,
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
      "start": 2385,
      "end": 2437,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2385,
        "end": 2436,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2385,
          "end": 2393,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2396,
          "end": 2436,
          "arguments": [
            {
              "type": "Literal",
              "start": 2424,
              "end": 2431,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2433,
              "end": 2435,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2396,
            "end": 2423,
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
      "start": 2465,
      "end": 2522,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2465,
        "end": 2521,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2465,
          "end": 2473,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2476,
          "end": 2521,
          "arguments": [
            {
              "type": "Literal",
              "start": 2504,
              "end": 2511,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2513,
              "end": 2520,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2476,
            "end": 2503,
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
      "start": 2550,
      "end": 2591,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2550,
        "end": 2590,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2550,
          "end": 2558,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2561,
          "end": 2590,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2561,
            "end": 2588,
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
      "start": 2620,
      "end": 2717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2624,
          "end": 2716,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2624,
            "end": 2716,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2651,
              "end": 2716,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2653,
                "end": 2716,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2653,
                    "end": 2689,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2655,
                        "end": 2687,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2656,
                            "end": 2665,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2657,
                              "end": 2665,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2659,
                                "end": 2665
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2667,
                            "end": 2677,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2669,
                              "end": 2677,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2671,
                                "end": 2677
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2678,
                          "end": 2686,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2680,
                            "end": 2686
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2692,
                    "end": 2716,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 2694,
                        "end": 2714,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2695,
                            "end": 2704,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2696,
                              "end": 2704,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2698,
                                "end": 2704
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2705,
                          "end": 2713,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2707,
                            "end": 2713
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
      "start": 2718,
      "end": 2766,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2718,
        "end": 2765,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2718,
          "end": 2726,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2729,
          "end": 2765,
          "arguments": [
            {
              "type": "Literal",
              "start": 2757,
              "end": 2764,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2729,
            "end": 2756,
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
      "start": 2767,
      "end": 2819,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2767,
        "end": 2818,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2767,
          "end": 2775,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2778,
          "end": 2818,
          "arguments": [
            {
              "type": "Literal",
              "start": 2806,
              "end": 2813,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2815,
              "end": 2817,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2778,
            "end": 2805,
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
      "start": 2826,
      "end": 2883,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2826,
        "end": 2882,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2826,
          "end": 2834,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2837,
          "end": 2882,
          "arguments": [
            {
              "type": "Literal",
              "start": 2865,
              "end": 2872,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 2874,
              "end": 2881,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 2837,
            "end": 2864,
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
      "start": 2907,
      "end": 2948,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2907,
        "end": 2947,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2907,
          "end": 2915,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2918,
          "end": 2947,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 2918,
            "end": 2945,
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
      "start": 2969,
      "end": 3081,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2973,
          "end": 3080,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2973,
            "end": 3080,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2996,
              "end": 3080,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2998,
                "end": 3080,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2998,
                    "end": 3038,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3000,
                        "end": 3036,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3001,
                            "end": 3010,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3002,
                              "end": 3010,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3004,
                                "end": 3010
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3012,
                            "end": 3026,
                            "argument": {
                              "type": "Identifier",
                              "start": 3015,
                              "end": 3016,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3016,
                              "end": 3026,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3018,
                                "end": 3026,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3018,
                                  "end": 3024
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3027,
                          "end": 3035,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3029,
                            "end": 3035
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3041,
                    "end": 3080,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3043,
                        "end": 3078,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3044,
                            "end": 3053,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3045,
                              "end": 3053,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3047,
                                "end": 3053
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3055,
                            "end": 3069,
                            "argument": {
                              "type": "Identifier",
                              "start": 3058,
                              "end": 3059,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3059,
                              "end": 3069,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3061,
                                "end": 3069,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3061,
                                  "end": 3067
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3070,
                          "end": 3078,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3072,
                            "end": 3078
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
      "start": 3082,
      "end": 3126,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3082,
        "end": 3125,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3082,
          "end": 3090,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3093,
          "end": 3125,
          "arguments": [
            {
              "type": "Literal",
              "start": 3117,
              "end": 3124,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3093,
            "end": 3116,
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
      "start": 3127,
      "end": 3175,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3127,
        "end": 3174,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3127,
          "end": 3135,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3138,
          "end": 3174,
          "arguments": [
            {
              "type": "Literal",
              "start": 3162,
              "end": 3169,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3171,
              "end": 3173,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3138,
            "end": 3161,
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
      "start": 3176,
      "end": 3228,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3176,
        "end": 3227,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3176,
          "end": 3184,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3187,
          "end": 3227,
          "arguments": [
            {
              "type": "Literal",
              "start": 3211,
              "end": 3218,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3220,
              "end": 3222,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3224,
              "end": 3226,
              "raw": "11",
              "value": 11,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3187,
            "end": 3210,
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
      "start": 3229,
      "end": 3282,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3229,
        "end": 3281,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3229,
          "end": 3237,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3240,
          "end": 3281,
          "arguments": [
            {
              "type": "Literal",
              "start": 3264,
              "end": 3271,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3273,
              "end": 3280,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3240,
            "end": 3263,
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
      "start": 3310,
      "end": 3347,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3310,
        "end": 3346,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3310,
          "end": 3318,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3321,
          "end": 3346,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 3321,
            "end": 3344,
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
      "start": 3358,
      "end": 3465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3362,
          "end": 3464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3362,
            "end": 3464,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3385,
              "end": 3464,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3387,
                "end": 3464,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3387,
                    "end": 3427,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3389,
                        "end": 3425,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3390,
                            "end": 3399,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3391,
                              "end": 3399,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3393,
                                "end": 3399
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3401,
                            "end": 3415,
                            "argument": {
                              "type": "Identifier",
                              "start": 3404,
                              "end": 3405,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3405,
                              "end": 3415,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3407,
                                "end": 3415,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3407,
                                  "end": 3413
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3416,
                          "end": 3424,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3418,
                            "end": 3424
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3430,
                    "end": 3464,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3432,
                        "end": 3462,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3433,
                            "end": 3442,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3434,
                              "end": 3442,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3436,
                                "end": 3442
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 3444,
                            "end": 3453,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3445,
                              "end": 3453,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3447,
                                "end": 3453
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3454,
                          "end": 3462,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3456,
                            "end": 3462
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
      "start": 3466,
      "end": 3510,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3466,
        "end": 3509,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3466,
          "end": 3474,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3477,
          "end": 3509,
          "arguments": [
            {
              "type": "Literal",
              "start": 3501,
              "end": 3508,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3477,
            "end": 3500,
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
      "start": 3538,
      "end": 3586,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3538,
        "end": 3585,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3538,
          "end": 3546,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3549,
          "end": 3585,
          "arguments": [
            {
              "type": "Literal",
              "start": 3573,
              "end": 3580,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3582,
              "end": 3584,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3549,
            "end": 3572,
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
      "start": 3614,
      "end": 3666,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3614,
        "end": 3665,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3614,
          "end": 3622,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3625,
          "end": 3665,
          "arguments": [
            {
              "type": "Literal",
              "start": 3649,
              "end": 3656,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3658,
              "end": 3660,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3662,
              "end": 3664,
              "raw": "11",
              "value": 11,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3625,
            "end": 3648,
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
      "start": 3694,
      "end": 3747,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3694,
        "end": 3746,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3694,
          "end": 3702,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3705,
          "end": 3746,
          "arguments": [
            {
              "type": "Literal",
              "start": 3729,
              "end": 3736,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 3738,
              "end": 3745,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3705,
            "end": 3728,
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
      "start": 3775,
      "end": 3812,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3775,
        "end": 3811,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3775,
          "end": 3783,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3786,
          "end": 3811,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 3786,
            "end": 3809,
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
      "start": 3841,
      "end": 3937,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3845,
          "end": 3936,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3845,
            "end": 3936,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3868,
              "end": 3936,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3870,
                "end": 3936,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3870,
                    "end": 3910,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3872,
                        "end": 3908,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3873,
                            "end": 3882,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3874,
                              "end": 3882,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3876,
                                "end": 3882
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3884,
                            "end": 3898,
                            "argument": {
                              "type": "Identifier",
                              "start": 3887,
                              "end": 3888,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3888,
                              "end": 3898,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3890,
                                "end": 3898,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3890,
                                  "end": 3896
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3899,
                          "end": 3907,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3901,
                            "end": 3907
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3913,
                    "end": 3936,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 3915,
                        "end": 3934,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3916,
                            "end": 3925,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3917,
                              "end": 3925,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3919,
                                "end": 3925
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3926,
                          "end": 3934,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3928,
                            "end": 3934
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
      "start": 3938,
      "end": 3982,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3938,
        "end": 3981,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3938,
          "end": 3946,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3949,
          "end": 3981,
          "arguments": [
            {
              "type": "Literal",
              "start": 3973,
              "end": 3980,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3949,
            "end": 3972,
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
      "start": 3983,
      "end": 4031,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3983,
        "end": 4030,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3983,
          "end": 3991,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 3994,
          "end": 4030,
          "arguments": [
            {
              "type": "Literal",
              "start": 4018,
              "end": 4025,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 4027,
              "end": 4029,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3994,
            "end": 4017,
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
      "start": 4059,
      "end": 4111,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4059,
        "end": 4110,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4059,
          "end": 4067,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4070,
          "end": 4110,
          "arguments": [
            {
              "type": "Literal",
              "start": 4094,
              "end": 4101,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 4103,
              "end": 4105,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 4107,
              "end": 4109,
              "raw": "11",
              "value": 11,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4070,
            "end": 4093,
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
      "start": 4139,
      "end": 4192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4139,
        "end": 4191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4139,
          "end": 4147,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4150,
          "end": 4191,
          "arguments": [
            {
              "type": "Literal",
              "start": 4174,
              "end": 4181,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 4183,
              "end": 4190,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4150,
            "end": 4173,
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
      "start": 4216,
      "end": 4253,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4216,
        "end": 4252,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4216,
          "end": 4224,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4227,
          "end": 4252,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 4227,
            "end": 4250,
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
      "start": 4282,
      "end": 4379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4286,
          "end": 4378,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4286,
            "end": 4378,
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4309,
              "end": 4378,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4311,
                "end": 4378,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 4311,
                    "end": 4340,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 4313,
                        "end": 4338,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 4314,
                            "end": 4328,
                            "argument": {
                              "type": "Identifier",
                              "start": 4317,
                              "end": 4318,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4318,
                              "end": 4328,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4320,
                                "end": 4328,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4320,
                                  "end": 4326
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4329,
                          "end": 4337,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4331,
                            "end": 4337
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 4343,
                    "end": 4378,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 4345,
                        "end": 4376,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4346,
                            "end": 4355,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4347,
                              "end": 4355,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4349,
                                "end": 4355
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 4357,
                            "end": 4366,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4358,
                              "end": 4366,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4360,
                                "end": 4366
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4367,
                          "end": 4375,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4369,
                            "end": 4375
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
      "start": 4380,
      "end": 4424,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4380,
        "end": 4423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4380,
          "end": 4388,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4391,
          "end": 4423,
          "arguments": [
            {
              "type": "Literal",
              "start": 4415,
              "end": 4422,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4391,
            "end": 4414,
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
      "start": 4486,
      "end": 4539,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4486,
        "end": 4538,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4486,
          "end": 4494,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 4497,
          "end": 4538,
          "arguments": [
            {
              "type": "Literal",
              "start": 4521,
              "end": 4528,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 4530,
              "end": 4537,
              "raw": "\"world\"",
              "value": "world",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 4497,
            "end": 4520,
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
