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
            "name": "strOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 48,
                "end": 64
              },
              "start": 46,
              "end": 64
            },
            "start": 34,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 64
        }
      ],
      "declare": false,
      "start": 30,
      "end": 65
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 80,
                "end": 95
              },
              "start": 78,
              "end": 95
            },
            "start": 70,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 95
        }
      ],
      "declare": false,
      "start": 66,
      "end": 96
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 402,
                                "end": 408
                              },
                              "start": 400,
                              "end": 408
                            },
                            "start": 399,
                            "end": 408
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 411,
                            "end": 417
                          },
                          "start": 409,
                          "end": 417
                        },
                        "start": 398,
                        "end": 418
                      }
                    ],
                    "start": 396,
                    "end": 420
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 429,
                                "end": 435
                              },
                              "start": 427,
                              "end": 435
                            },
                            "start": 426,
                            "end": 435
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 438,
                              "end": 442
                            },
                            "typeArguments": null,
                            "start": 438,
                            "end": 442
                          },
                          "start": 436,
                          "end": 442
                        },
                        "start": 425,
                        "end": 443
                      }
                    ],
                    "start": 423,
                    "end": 445
                  }
                ],
                "start": 396,
                "end": 445
              },
              "start": 394,
              "end": 445
            },
            "start": 368,
            "end": 445
          },
          "init": null,
          "definite": false,
          "start": 368,
          "end": 445
        }
      ],
      "declare": false,
      "start": 364,
      "end": 446
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
          "start": 447,
          "end": 456
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 485
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 486,
              "end": 488
            }
          ],
          "optional": false,
          "start": 459,
          "end": 489
        },
        "start": 447,
        "end": 489
      },
      "directive": null,
      "start": 447,
      "end": 490
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 503
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 532
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 533,
              "end": 540
            }
          ],
          "optional": false,
          "start": 506,
          "end": 541
        },
        "start": 491,
        "end": 541
      },
      "directive": null,
      "start": 491,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 553,
          "end": 580
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 581,
            "end": 585
          }
        ],
        "optional": false,
        "start": 553,
        "end": 586
      },
      "directive": null,
      "start": 553,
      "end": 587
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 658,
                                "end": 664
                              },
                              "start": 656,
                              "end": 664
                            },
                            "start": 655,
                            "end": 664
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 667,
                            "end": 673
                          },
                          "start": 665,
                          "end": 673
                        },
                        "start": 654,
                        "end": 674
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 679,
                                "end": 685
                              },
                              "start": 677,
                              "end": 685
                            },
                            "start": 676,
                            "end": 685
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 688,
                            "end": 694
                          },
                          "start": 686,
                          "end": 694
                        },
                        "start": 675,
                        "end": 695
                      }
                    ],
                    "start": 652,
                    "end": 697
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 706,
                                "end": 712
                              },
                              "start": 704,
                              "end": 712
                            },
                            "start": 703,
                            "end": 712
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 715,
                              "end": 719
                            },
                            "typeArguments": null,
                            "start": 715,
                            "end": 719
                          },
                          "start": 713,
                          "end": 719
                        },
                        "start": 702,
                        "end": 720
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 725,
                                "end": 731
                              },
                              "start": 723,
                              "end": 731
                            },
                            "start": 722,
                            "end": 731
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 734,
                            "end": 741
                          },
                          "start": 732,
                          "end": 741
                        },
                        "start": 721,
                        "end": 742
                      }
                    ],
                    "start": 700,
                    "end": 744
                  }
                ],
                "start": 652,
                "end": 744
              },
              "start": 650,
              "end": 744
            },
            "start": 623,
            "end": 744
          },
          "init": null,
          "definite": false,
          "start": 623,
          "end": 744
        }
      ],
      "declare": false,
      "start": 619,
      "end": 745
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
          "start": 746,
          "end": 755
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 785
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 786,
              "end": 788
            }
          ],
          "optional": false,
          "start": 758,
          "end": 789
        },
        "start": 746,
        "end": 789
      },
      "directive": null,
      "start": 746,
      "end": 790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 791,
          "end": 803
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 833
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 834,
              "end": 841
            }
          ],
          "optional": false,
          "start": 806,
          "end": 842
        },
        "start": 791,
        "end": 842
      },
      "directive": null,
      "start": 791,
      "end": 843
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 844,
          "end": 871
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 872,
            "end": 876
          }
        ],
        "optional": false,
        "start": 844,
        "end": 877
      },
      "directive": null,
      "start": 844,
      "end": 878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 909,
          "end": 936
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 909,
        "end": 938
      },
      "directive": null,
      "start": 909,
      "end": 939
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
            "name": "unionOfDifferentParameterTypes",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1010,
                                "end": 1016
                              },
                              "start": 1008,
                              "end": 1016
                            },
                            "start": 1007,
                            "end": 1016
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1019,
                            "end": 1025
                          },
                          "start": 1017,
                          "end": 1025
                        },
                        "start": 1006,
                        "end": 1026
                      }
                    ],
                    "start": 1004,
                    "end": 1028
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1037,
                                "end": 1043
                              },
                              "start": 1035,
                              "end": 1043
                            },
                            "start": 1034,
                            "end": 1043
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1046,
                              "end": 1050
                            },
                            "typeArguments": null,
                            "start": 1046,
                            "end": 1050
                          },
                          "start": 1044,
                          "end": 1050
                        },
                        "start": 1033,
                        "end": 1051
                      }
                    ],
                    "start": 1031,
                    "end": 1053
                  }
                ],
                "start": 1004,
                "end": 1053
              },
              "start": 1002,
              "end": 1053
            },
            "start": 972,
            "end": 1053
          },
          "init": null,
          "definite": false,
          "start": 972,
          "end": 1053
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1054
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1055,
          "end": 1085
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1086,
            "end": 1088
          }
        ],
        "optional": false,
        "start": 1055,
        "end": 1089
      },
      "directive": null,
      "start": 1055,
      "end": 1090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1120,
          "end": 1150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1151,
            "end": 1158
          }
        ],
        "optional": false,
        "start": 1120,
        "end": 1159
      },
      "directive": null,
      "start": 1120,
      "end": 1160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1190,
          "end": 1220
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1190,
        "end": 1222
      },
      "directive": null,
      "start": 1190,
      "end": 1223
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
            "name": "unionOfDifferentNumberOfSignatures",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1300,
                                "end": 1306
                              },
                              "start": 1298,
                              "end": 1306
                            },
                            "start": 1297,
                            "end": 1306
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1309,
                            "end": 1315
                          },
                          "start": 1307,
                          "end": 1315
                        },
                        "start": 1296,
                        "end": 1316
                      }
                    ],
                    "start": 1294,
                    "end": 1318
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1327,
                                "end": 1333
                              },
                              "start": 1325,
                              "end": 1333
                            },
                            "start": 1324,
                            "end": 1333
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1336,
                              "end": 1340
                            },
                            "typeArguments": null,
                            "start": 1336,
                            "end": 1340
                          },
                          "start": 1334,
                          "end": 1340
                        },
                        "start": 1323,
                        "end": 1341
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1346,
                                "end": 1352
                              },
                              "start": 1344,
                              "end": 1352
                            },
                            "start": 1343,
                            "end": 1352
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1355,
                            "end": 1362
                          },
                          "start": 1353,
                          "end": 1362
                        },
                        "start": 1342,
                        "end": 1363
                      }
                    ],
                    "start": 1321,
                    "end": 1365
                  }
                ],
                "start": 1294,
                "end": 1365
              },
              "start": 1292,
              "end": 1365
            },
            "start": 1258,
            "end": 1365
          },
          "init": null,
          "definite": false,
          "start": 1258,
          "end": 1365
        }
      ],
      "declare": false,
      "start": 1254,
      "end": 1366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1367,
          "end": 1401
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1367,
        "end": 1403
      },
      "directive": null,
      "start": 1367,
      "end": 1404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1435,
          "end": 1469
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1470,
            "end": 1472
          }
        ],
        "optional": false,
        "start": 1435,
        "end": 1473
      },
      "directive": null,
      "start": 1435,
      "end": 1474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1505,
          "end": 1539
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1540,
            "end": 1547
          }
        ],
        "optional": false,
        "start": 1505,
        "end": 1548
      },
      "directive": null,
      "start": 1505,
      "end": 1549
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
            "name": "unionWithDifferentParameterCount",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1625,
                                "end": 1631
                              },
                              "start": 1623,
                              "end": 1631
                            },
                            "start": 1622,
                            "end": 1631
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1634,
                            "end": 1640
                          },
                          "start": 1632,
                          "end": 1640
                        },
                        "start": 1621,
                        "end": 1641
                      }
                    ],
                    "start": 1619,
                    "end": 1643
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1652,
                                "end": 1658
                              },
                              "start": 1650,
                              "end": 1658
                            },
                            "start": 1649,
                            "end": 1658
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1663,
                                "end": 1669
                              },
                              "start": 1661,
                              "end": 1669
                            },
                            "start": 1660,
                            "end": 1669
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1672,
                            "end": 1678
                          },
                          "start": 1670,
                          "end": 1678
                        },
                        "start": 1648,
                        "end": 1679
                      }
                    ],
                    "start": 1646,
                    "end": 1681
                  }
                ],
                "start": 1619,
                "end": 1681
              },
              "start": 1617,
              "end": 1681
            },
            "start": 1585,
            "end": 1681
          },
          "init": null,
          "definite": false,
          "start": 1585,
          "end": 1681
        }
      ],
      "declare": false,
      "start": 1581,
      "end": 1683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1684,
          "end": 1716
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1684,
        "end": 1718
      },
      "directive": null,
      "start": 1684,
      "end": 1719
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1738,
          "end": 1770
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1771,
            "end": 1778
          }
        ],
        "optional": false,
        "start": 1738,
        "end": 1779
      },
      "directive": null,
      "start": 1738,
      "end": 1780
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1799,
          "end": 1831
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1832,
            "end": 1839
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1841,
            "end": 1843
          }
        ],
        "optional": false,
        "start": 1799,
        "end": 1844
      },
      "directive": null,
      "start": 1799,
      "end": 1845
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
            "name": "unionWithOptionalParameter1",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1891,
                                "end": 1897
                              },
                              "start": 1889,
                              "end": 1897
                            },
                            "start": 1888,
                            "end": 1897
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1903,
                                "end": 1909
                              },
                              "start": 1901,
                              "end": 1909
                            },
                            "start": 1899,
                            "end": 1909
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1912,
                            "end": 1918
                          },
                          "start": 1910,
                          "end": 1918
                        },
                        "start": 1887,
                        "end": 1919
                      }
                    ],
                    "start": 1885,
                    "end": 1921
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1930,
                                "end": 1936
                              },
                              "start": 1928,
                              "end": 1936
                            },
                            "start": 1927,
                            "end": 1936
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1942,
                                "end": 1948
                              },
                              "start": 1940,
                              "end": 1948
                            },
                            "start": 1938,
                            "end": 1948
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1951,
                            "end": 1957
                          },
                          "start": 1949,
                          "end": 1957
                        },
                        "start": 1926,
                        "end": 1958
                      }
                    ],
                    "start": 1924,
                    "end": 1960
                  }
                ],
                "start": 1885,
                "end": 1960
              },
              "start": 1883,
              "end": 1960
            },
            "start": 1856,
            "end": 1960
          },
          "init": null,
          "definite": false,
          "start": 1856,
          "end": 1960
        }
      ],
      "declare": false,
      "start": 1852,
      "end": 1961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1962,
          "end": 1970
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1973,
            "end": 2000
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2001,
              "end": 2008
            }
          ],
          "optional": false,
          "start": 1973,
          "end": 2009
        },
        "start": 1962,
        "end": 2009
      },
      "directive": null,
      "start": 1962,
      "end": 2010
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2011,
          "end": 2019
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2022,
            "end": 2049
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2050,
              "end": 2057
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2059,
              "end": 2061
            }
          ],
          "optional": false,
          "start": 2022,
          "end": 2062
        },
        "start": 2011,
        "end": 2062
      },
      "directive": null,
      "start": 2011,
      "end": 2063
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2064,
          "end": 2072
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2102
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2103,
              "end": 2110
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2112,
              "end": 2119
            }
          ],
          "optional": false,
          "start": 2075,
          "end": 2120
        },
        "start": 2064,
        "end": 2120
      },
      "directive": null,
      "start": 2064,
      "end": 2121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2149,
          "end": 2157
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2160,
            "end": 2187
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2160,
          "end": 2189
        },
        "start": 2149,
        "end": 2189
      },
      "directive": null,
      "start": 2149,
      "end": 2190
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
            "name": "unionWithOptionalParameter2",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2240,
                                "end": 2246
                              },
                              "start": 2238,
                              "end": 2246
                            },
                            "start": 2237,
                            "end": 2246
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2252,
                                "end": 2258
                              },
                              "start": 2250,
                              "end": 2258
                            },
                            "start": 2248,
                            "end": 2258
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2261,
                            "end": 2267
                          },
                          "start": 2259,
                          "end": 2267
                        },
                        "start": 2236,
                        "end": 2268
                      }
                    ],
                    "start": 2234,
                    "end": 2270
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2279,
                                "end": 2285
                              },
                              "start": 2277,
                              "end": 2285
                            },
                            "start": 2276,
                            "end": 2285
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2290,
                                "end": 2296
                              },
                              "start": 2288,
                              "end": 2296
                            },
                            "start": 2287,
                            "end": 2296
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2299,
                            "end": 2305
                          },
                          "start": 2297,
                          "end": 2305
                        },
                        "start": 2275,
                        "end": 2305
                      }
                    ],
                    "start": 2273,
                    "end": 2307
                  }
                ],
                "start": 2234,
                "end": 2307
              },
              "start": 2232,
              "end": 2307
            },
            "start": 2205,
            "end": 2307
          },
          "init": null,
          "definite": false,
          "start": 2205,
          "end": 2307
        }
      ],
      "declare": false,
      "start": 2201,
      "end": 2308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2309,
          "end": 2317
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2320,
            "end": 2347
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2348,
              "end": 2355
            }
          ],
          "optional": false,
          "start": 2320,
          "end": 2356
        },
        "start": 2309,
        "end": 2356
      },
      "directive": null,
      "start": 2309,
      "end": 2357
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2385,
          "end": 2393
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2396,
            "end": 2423
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2424,
              "end": 2431
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2433,
              "end": 2435
            }
          ],
          "optional": false,
          "start": 2396,
          "end": 2436
        },
        "start": 2385,
        "end": 2436
      },
      "directive": null,
      "start": 2385,
      "end": 2437
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2465,
          "end": 2473
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2476,
            "end": 2503
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2504,
              "end": 2511
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2513,
              "end": 2520
            }
          ],
          "optional": false,
          "start": 2476,
          "end": 2521
        },
        "start": 2465,
        "end": 2521
      },
      "directive": null,
      "start": 2465,
      "end": 2522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2550,
          "end": 2558
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2561,
            "end": 2588
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2561,
          "end": 2590
        },
        "start": 2550,
        "end": 2590
      },
      "directive": null,
      "start": 2550,
      "end": 2591
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
            "name": "unionWithOptionalParameter3",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2659,
                                "end": 2665
                              },
                              "start": 2657,
                              "end": 2665
                            },
                            "start": 2656,
                            "end": 2665
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2671,
                                "end": 2677
                              },
                              "start": 2669,
                              "end": 2677
                            },
                            "start": 2667,
                            "end": 2677
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2680,
                            "end": 2686
                          },
                          "start": 2678,
                          "end": 2686
                        },
                        "start": 2655,
                        "end": 2687
                      }
                    ],
                    "start": 2653,
                    "end": 2689
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2698,
                                "end": 2704
                              },
                              "start": 2696,
                              "end": 2704
                            },
                            "start": 2695,
                            "end": 2704
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2707,
                            "end": 2713
                          },
                          "start": 2705,
                          "end": 2713
                        },
                        "start": 2694,
                        "end": 2714
                      }
                    ],
                    "start": 2692,
                    "end": 2716
                  }
                ],
                "start": 2653,
                "end": 2716
              },
              "start": 2651,
              "end": 2716
            },
            "start": 2624,
            "end": 2716
          },
          "init": null,
          "definite": false,
          "start": 2624,
          "end": 2716
        }
      ],
      "declare": false,
      "start": 2620,
      "end": 2717
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2718,
          "end": 2726
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2729,
            "end": 2756
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2757,
              "end": 2764
            }
          ],
          "optional": false,
          "start": 2729,
          "end": 2765
        },
        "start": 2718,
        "end": 2765
      },
      "directive": null,
      "start": 2718,
      "end": 2766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2767,
          "end": 2775
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2778,
            "end": 2805
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2806,
              "end": 2813
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2815,
              "end": 2817
            }
          ],
          "optional": false,
          "start": 2778,
          "end": 2818
        },
        "start": 2767,
        "end": 2818
      },
      "directive": null,
      "start": 2767,
      "end": 2819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2826,
          "end": 2834
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2837,
            "end": 2864
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2865,
              "end": 2872
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2874,
              "end": 2881
            }
          ],
          "optional": false,
          "start": 2837,
          "end": 2882
        },
        "start": 2826,
        "end": 2882
      },
      "directive": null,
      "start": 2826,
      "end": 2883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 2907,
          "end": 2915
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2918,
            "end": 2945
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2918,
          "end": 2947
        },
        "start": 2907,
        "end": 2947
      },
      "directive": null,
      "start": 2907,
      "end": 2948
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
            "name": "unionWithRestParameter1",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3004,
                                "end": 3010
                              },
                              "start": 3002,
                              "end": 3010
                            },
                            "start": 3001,
                            "end": 3010
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3015,
                              "end": 3016
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3018,
                                  "end": 3024
                                },
                                "start": 3018,
                                "end": 3026
                              },
                              "start": 3016,
                              "end": 3026
                            },
                            "value": null,
                            "start": 3012,
                            "end": 3026
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3029,
                            "end": 3035
                          },
                          "start": 3027,
                          "end": 3035
                        },
                        "start": 3000,
                        "end": 3036
                      }
                    ],
                    "start": 2998,
                    "end": 3038
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3047,
                                "end": 3053
                              },
                              "start": 3045,
                              "end": 3053
                            },
                            "start": 3044,
                            "end": 3053
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3058,
                              "end": 3059
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3061,
                                  "end": 3067
                                },
                                "start": 3061,
                                "end": 3069
                              },
                              "start": 3059,
                              "end": 3069
                            },
                            "value": null,
                            "start": 3055,
                            "end": 3069
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3072,
                            "end": 3078
                          },
                          "start": 3070,
                          "end": 3078
                        },
                        "start": 3043,
                        "end": 3078
                      }
                    ],
                    "start": 3041,
                    "end": 3080
                  }
                ],
                "start": 2998,
                "end": 3080
              },
              "start": 2996,
              "end": 3080
            },
            "start": 2973,
            "end": 3080
          },
          "init": null,
          "definite": false,
          "start": 2973,
          "end": 3080
        }
      ],
      "declare": false,
      "start": 2969,
      "end": 3081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3082,
          "end": 3090
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3093,
            "end": 3116
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3117,
              "end": 3124
            }
          ],
          "optional": false,
          "start": 3093,
          "end": 3125
        },
        "start": 3082,
        "end": 3125
      },
      "directive": null,
      "start": 3082,
      "end": 3126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3127,
          "end": 3135
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3138,
            "end": 3161
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3162,
              "end": 3169
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3171,
              "end": 3173
            }
          ],
          "optional": false,
          "start": 3138,
          "end": 3174
        },
        "start": 3127,
        "end": 3174
      },
      "directive": null,
      "start": 3127,
      "end": 3175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3176,
          "end": 3184
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3187,
            "end": 3210
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3211,
              "end": 3218
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3220,
              "end": 3222
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3224,
              "end": 3226
            }
          ],
          "optional": false,
          "start": 3187,
          "end": 3227
        },
        "start": 3176,
        "end": 3227
      },
      "directive": null,
      "start": 3176,
      "end": 3228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3229,
          "end": 3237
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3240,
            "end": 3263
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3264,
              "end": 3271
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3273,
              "end": 3280
            }
          ],
          "optional": false,
          "start": 3240,
          "end": 3281
        },
        "start": 3229,
        "end": 3281
      },
      "directive": null,
      "start": 3229,
      "end": 3282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3310,
          "end": 3318
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3321,
            "end": 3344
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 3321,
          "end": 3346
        },
        "start": 3310,
        "end": 3346
      },
      "directive": null,
      "start": 3310,
      "end": 3347
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
            "name": "unionWithRestParameter2",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3393,
                                "end": 3399
                              },
                              "start": 3391,
                              "end": 3399
                            },
                            "start": 3390,
                            "end": 3399
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3404,
                              "end": 3405
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3407,
                                  "end": 3413
                                },
                                "start": 3407,
                                "end": 3415
                              },
                              "start": 3405,
                              "end": 3415
                            },
                            "value": null,
                            "start": 3401,
                            "end": 3415
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3418,
                            "end": 3424
                          },
                          "start": 3416,
                          "end": 3424
                        },
                        "start": 3389,
                        "end": 3425
                      }
                    ],
                    "start": 3387,
                    "end": 3427
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3436,
                                "end": 3442
                              },
                              "start": 3434,
                              "end": 3442
                            },
                            "start": 3433,
                            "end": 3442
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3447,
                                "end": 3453
                              },
                              "start": 3445,
                              "end": 3453
                            },
                            "start": 3444,
                            "end": 3453
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3456,
                            "end": 3462
                          },
                          "start": 3454,
                          "end": 3462
                        },
                        "start": 3432,
                        "end": 3462
                      }
                    ],
                    "start": 3430,
                    "end": 3464
                  }
                ],
                "start": 3387,
                "end": 3464
              },
              "start": 3385,
              "end": 3464
            },
            "start": 3362,
            "end": 3464
          },
          "init": null,
          "definite": false,
          "start": 3362,
          "end": 3464
        }
      ],
      "declare": false,
      "start": 3358,
      "end": 3465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3466,
          "end": 3474
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3477,
            "end": 3500
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3501,
              "end": 3508
            }
          ],
          "optional": false,
          "start": 3477,
          "end": 3509
        },
        "start": 3466,
        "end": 3509
      },
      "directive": null,
      "start": 3466,
      "end": 3510
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3538,
          "end": 3546
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3549,
            "end": 3572
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3573,
              "end": 3580
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3582,
              "end": 3584
            }
          ],
          "optional": false,
          "start": 3549,
          "end": 3585
        },
        "start": 3538,
        "end": 3585
      },
      "directive": null,
      "start": 3538,
      "end": 3586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3614,
          "end": 3622
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3625,
            "end": 3648
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3649,
              "end": 3656
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3658,
              "end": 3660
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3662,
              "end": 3664
            }
          ],
          "optional": false,
          "start": 3625,
          "end": 3665
        },
        "start": 3614,
        "end": 3665
      },
      "directive": null,
      "start": 3614,
      "end": 3666
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3694,
          "end": 3702
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3705,
            "end": 3728
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3729,
              "end": 3736
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3738,
              "end": 3745
            }
          ],
          "optional": false,
          "start": 3705,
          "end": 3746
        },
        "start": 3694,
        "end": 3746
      },
      "directive": null,
      "start": 3694,
      "end": 3747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3775,
          "end": 3783
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3786,
            "end": 3809
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 3786,
          "end": 3811
        },
        "start": 3775,
        "end": 3811
      },
      "directive": null,
      "start": 3775,
      "end": 3812
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
            "name": "unionWithRestParameter3",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3876,
                                "end": 3882
                              },
                              "start": 3874,
                              "end": 3882
                            },
                            "start": 3873,
                            "end": 3882
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3887,
                              "end": 3888
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3890,
                                  "end": 3896
                                },
                                "start": 3890,
                                "end": 3898
                              },
                              "start": 3888,
                              "end": 3898
                            },
                            "value": null,
                            "start": 3884,
                            "end": 3898
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3901,
                            "end": 3907
                          },
                          "start": 3899,
                          "end": 3907
                        },
                        "start": 3872,
                        "end": 3908
                      }
                    ],
                    "start": 3870,
                    "end": 3910
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3919,
                                "end": 3925
                              },
                              "start": 3917,
                              "end": 3925
                            },
                            "start": 3916,
                            "end": 3925
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3928,
                            "end": 3934
                          },
                          "start": 3926,
                          "end": 3934
                        },
                        "start": 3915,
                        "end": 3934
                      }
                    ],
                    "start": 3913,
                    "end": 3936
                  }
                ],
                "start": 3870,
                "end": 3936
              },
              "start": 3868,
              "end": 3936
            },
            "start": 3845,
            "end": 3936
          },
          "init": null,
          "definite": false,
          "start": 3845,
          "end": 3936
        }
      ],
      "declare": false,
      "start": 3841,
      "end": 3937
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3938,
          "end": 3946
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3949,
            "end": 3972
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3973,
              "end": 3980
            }
          ],
          "optional": false,
          "start": 3949,
          "end": 3981
        },
        "start": 3938,
        "end": 3981
      },
      "directive": null,
      "start": 3938,
      "end": 3982
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 3983,
          "end": 3991
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3994,
            "end": 4017
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4018,
              "end": 4025
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4027,
              "end": 4029
            }
          ],
          "optional": false,
          "start": 3994,
          "end": 4030
        },
        "start": 3983,
        "end": 4030
      },
      "directive": null,
      "start": 3983,
      "end": 4031
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 4059,
          "end": 4067
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4070,
            "end": 4093
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4094,
              "end": 4101
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4103,
              "end": 4105
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 4107,
              "end": 4109
            }
          ],
          "optional": false,
          "start": 4070,
          "end": 4110
        },
        "start": 4059,
        "end": 4110
      },
      "directive": null,
      "start": 4059,
      "end": 4111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 4139,
          "end": 4147
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4150,
            "end": 4173
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4174,
              "end": 4181
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4183,
              "end": 4190
            }
          ],
          "optional": false,
          "start": 4150,
          "end": 4191
        },
        "start": 4139,
        "end": 4191
      },
      "directive": null,
      "start": 4139,
      "end": 4192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 4216,
          "end": 4224
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4227,
            "end": 4250
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 4227,
          "end": 4252
        },
        "start": 4216,
        "end": 4252
      },
      "directive": null,
      "start": 4216,
      "end": 4253
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
            "name": "unionWithRestParameter4",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4317,
                              "end": 4318
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4320,
                                  "end": 4326
                                },
                                "start": 4320,
                                "end": 4328
                              },
                              "start": 4318,
                              "end": 4328
                            },
                            "value": null,
                            "start": 4314,
                            "end": 4328
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4331,
                            "end": 4337
                          },
                          "start": 4329,
                          "end": 4337
                        },
                        "start": 4313,
                        "end": 4338
                      }
                    ],
                    "start": 4311,
                    "end": 4340
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4349,
                                "end": 4355
                              },
                              "start": 4347,
                              "end": 4355
                            },
                            "start": 4346,
                            "end": 4355
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4360,
                                "end": 4366
                              },
                              "start": 4358,
                              "end": 4366
                            },
                            "start": 4357,
                            "end": 4366
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4369,
                            "end": 4375
                          },
                          "start": 4367,
                          "end": 4375
                        },
                        "start": 4345,
                        "end": 4376
                      }
                    ],
                    "start": 4343,
                    "end": 4378
                  }
                ],
                "start": 4311,
                "end": 4378
              },
              "start": 4309,
              "end": 4378
            },
            "start": 4286,
            "end": 4378
          },
          "init": null,
          "definite": false,
          "start": 4286,
          "end": 4378
        }
      ],
      "declare": false,
      "start": 4282,
      "end": 4379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 4380,
          "end": 4388
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": null,
            "start": 4391,
            "end": 4414
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4415,
              "end": 4422
            }
          ],
          "optional": false,
          "start": 4391,
          "end": 4423
        },
        "start": 4380,
        "end": 4423
      },
      "directive": null,
      "start": 4380,
      "end": 4424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 4486,
          "end": 4494
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": null,
            "start": 4497,
            "end": 4520
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4521,
              "end": 4528
            },
            {
              "type": "Literal",
              "value": "world",
              "raw": "\"world\"",
              "start": 4530,
              "end": 4537
            }
          ],
          "optional": false,
          "start": 4497,
          "end": 4538
        },
        "start": 4486,
        "end": 4538
      },
      "directive": null,
      "start": 4486,
      "end": 4539
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4539
}
```
