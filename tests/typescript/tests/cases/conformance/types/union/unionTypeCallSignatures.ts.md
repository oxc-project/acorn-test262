__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 4,
    "end": 13,
    "range": [
      4,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 24,
    "end": 28,
    "range": [
      24,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 34,
    "end": 46,
    "range": [
      34,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 70,
    "end": 78,
    "range": [
      70,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 368,
    "end": 394,
    "range": [
      368,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 402,
    "end": 408,
    "range": [
      402,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 411,
    "end": 417,
    "range": [
      411,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 429,
    "end": 435,
    "range": [
      429,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 438,
    "end": 442,
    "range": [
      438,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 447,
    "end": 456,
    "range": [
      447,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 459,
    "end": 485,
    "range": [
      459,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 486,
    "end": 488,
    "range": [
      486,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 491,
    "end": 503,
    "range": [
      491,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 506,
    "end": 532,
    "range": [
      506,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 533,
    "end": 540,
    "range": [
      533,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 553,
    "end": 580,
    "range": [
      553,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 619,
    "end": 622,
    "range": [
      619,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 623,
    "end": 650,
    "range": [
      623,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 658,
    "end": 664,
    "range": [
      658,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 688,
    "end": 694,
    "range": [
      688,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 706,
    "end": 712,
    "range": [
      706,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 715,
    "end": 719,
    "range": [
      715,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 725,
    "end": 731,
    "range": [
      725,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 734,
    "end": 741,
    "range": [
      734,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 746,
    "end": 755,
    "range": [
      746,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 758,
    "end": 785,
    "range": [
      758,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 786,
    "end": 788,
    "range": [
      786,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 791,
    "end": 803,
    "range": [
      791,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 806,
    "end": 833,
    "range": [
      806,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 834,
    "end": 841,
    "range": [
      834,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 844,
    "end": 871,
    "range": [
      844,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 909,
    "end": 936,
    "range": [
      909,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 968,
    "end": 971,
    "range": [
      968,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 972,
    "end": 1002,
    "range": [
      972,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1010,
    "end": 1016,
    "range": [
      1010,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1019,
    "end": 1025,
    "range": [
      1019,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1037,
    "end": 1043,
    "range": [
      1037,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1046,
    "end": 1050,
    "range": [
      1046,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1055,
    "end": 1085,
    "range": [
      1055,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1086,
    "end": 1088,
    "range": [
      1086,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1120,
    "end": 1150,
    "range": [
      1120,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1151,
    "end": 1158,
    "range": [
      1151,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1190,
    "end": 1220,
    "range": [
      1190,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1254,
    "end": 1257,
    "range": [
      1254,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1258,
    "end": 1292,
    "range": [
      1258,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1300,
    "end": 1306,
    "range": [
      1300,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1309,
    "end": 1315,
    "range": [
      1309,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1327,
    "end": 1333,
    "range": [
      1327,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1336,
    "end": 1340,
    "range": [
      1336,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1346,
    "end": 1352,
    "range": [
      1346,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1355,
    "end": 1362,
    "range": [
      1355,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1367,
    "end": 1401,
    "range": [
      1367,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1435,
    "end": 1469,
    "range": [
      1435,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1470,
    "end": 1472,
    "range": [
      1470,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1505,
    "end": 1539,
    "range": [
      1505,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1540,
    "end": 1547,
    "range": [
      1540,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1581,
    "end": 1584,
    "range": [
      1581,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1585,
    "end": 1617,
    "range": [
      1585,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1625,
    "end": 1631,
    "range": [
      1625,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1634,
    "end": 1640,
    "range": [
      1634,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1652,
    "end": 1658,
    "range": [
      1652,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1663,
    "end": 1669,
    "range": [
      1663,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1672,
    "end": 1678,
    "range": [
      1672,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1684,
    "end": 1716,
    "range": [
      1684,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1738,
    "end": 1770,
    "range": [
      1738,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1771,
    "end": 1778,
    "range": [
      1771,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1799,
    "end": 1831,
    "range": [
      1799,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1832,
    "end": 1839,
    "range": [
      1832,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1841,
    "end": 1843,
    "range": [
      1841,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1852,
    "end": 1855,
    "range": [
      1852,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 1856,
    "end": 1883,
    "range": [
      1856,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1891,
    "end": 1897,
    "range": [
      1891,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1903,
    "end": 1909,
    "range": [
      1903,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1912,
    "end": 1918,
    "range": [
      1912,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1930,
    "end": 1936,
    "range": [
      1930,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1942,
    "end": 1948,
    "range": [
      1942,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1951,
    "end": 1957,
    "range": [
      1951,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1962,
    "end": 1970,
    "range": [
      1962,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 1973,
    "end": 2000,
    "range": [
      1973,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2001,
    "end": 2008,
    "range": [
      2001,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2011,
    "end": 2019,
    "range": [
      2011,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2022,
    "end": 2049,
    "range": [
      2022,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2050,
    "end": 2057,
    "range": [
      2050,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2059,
    "end": 2061,
    "range": [
      2059,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2064,
    "end": 2072,
    "range": [
      2064,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2075,
    "end": 2102,
    "range": [
      2075,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2103,
    "end": 2110,
    "range": [
      2103,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2112,
    "end": 2119,
    "range": [
      2112,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2149,
    "end": 2157,
    "range": [
      2149,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2160,
    "end": 2187,
    "range": [
      2160,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2201,
    "end": 2204,
    "range": [
      2201,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2205,
    "end": 2232,
    "range": [
      2205,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2240,
    "end": 2246,
    "range": [
      2240,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2252,
    "end": 2258,
    "range": [
      2252,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2261,
    "end": 2267,
    "range": [
      2261,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2279,
    "end": 2285,
    "range": [
      2279,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2290,
    "end": 2296,
    "range": [
      2290,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2299,
    "end": 2305,
    "range": [
      2299,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2309,
    "end": 2317,
    "range": [
      2309,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2320,
    "end": 2347,
    "range": [
      2320,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2348,
    "end": 2355,
    "range": [
      2348,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2385,
    "end": 2393,
    "range": [
      2385,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2396,
    "end": 2423,
    "range": [
      2396,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2424,
    "end": 2431,
    "range": [
      2424,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2433,
    "end": 2435,
    "range": [
      2433,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2465,
    "end": 2473,
    "range": [
      2465,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2476,
    "end": 2503,
    "range": [
      2476,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2504,
    "end": 2511,
    "range": [
      2504,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2513,
    "end": 2520,
    "range": [
      2513,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2550,
    "end": 2558,
    "range": [
      2550,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2561,
    "end": 2588,
    "range": [
      2561,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2620,
    "end": 2623,
    "range": [
      2620,
      2623
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2624,
    "end": 2651,
    "range": [
      2624,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2659,
    "end": 2665,
    "range": [
      2659,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2671,
    "end": 2677,
    "range": [
      2671,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2678,
    "end": 2679,
    "range": [
      2678,
      2679
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2680,
    "end": 2686,
    "range": [
      2680,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2692,
    "end": 2693,
    "range": [
      2692,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2698,
    "end": 2704,
    "range": [
      2698,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2707,
    "end": 2713,
    "range": [
      2707,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2718,
    "end": 2726,
    "range": [
      2718,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2729,
    "end": 2756,
    "range": [
      2729,
      2756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2756,
    "end": 2757,
    "range": [
      2756,
      2757
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2757,
    "end": 2764,
    "range": [
      2757,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2767,
    "end": 2775,
    "range": [
      2767,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2778,
    "end": 2805,
    "range": [
      2778,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2806,
    "end": 2813,
    "range": [
      2806,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2815,
    "end": 2817,
    "range": [
      2815,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2826,
    "end": 2834,
    "range": [
      2826,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2837,
    "end": 2864,
    "range": [
      2837,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2865,
    "end": 2872,
    "range": [
      2865,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2874,
    "end": 2881,
    "range": [
      2874,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2907,
    "end": 2915,
    "range": [
      2907,
      2915
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2918,
    "end": 2945,
    "range": [
      2918,
      2945
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2969,
    "end": 2972,
    "range": [
      2969,
      2972
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 2973,
    "end": 2996,
    "range": [
      2973,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3004,
    "end": 3010,
    "range": [
      3004,
      3010
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3012,
    "end": 3015,
    "range": [
      3012,
      3015
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3016,
    "end": 3017,
    "range": [
      3016,
      3017
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3018,
    "end": 3024,
    "range": [
      3018,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3025,
    "end": 3026,
    "range": [
      3025,
      3026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3029,
    "end": 3035,
    "range": [
      3029,
      3035
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3035,
    "end": 3036,
    "range": [
      3035,
      3036
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3047,
    "end": 3053,
    "range": [
      3047,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3055,
    "end": 3058,
    "range": [
      3055,
      3058
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3061,
    "end": 3067,
    "range": [
      3061,
      3067
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3072,
    "end": 3078,
    "range": [
      3072,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3082,
    "end": 3090,
    "range": [
      3082,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3091,
    "end": 3092,
    "range": [
      3091,
      3092
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3093,
    "end": 3116,
    "range": [
      3093,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3117,
    "end": 3124,
    "range": [
      3117,
      3124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3124,
    "end": 3125,
    "range": [
      3124,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3127,
    "end": 3135,
    "range": [
      3127,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3138,
    "end": 3161,
    "range": [
      3138,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3162,
    "end": 3169,
    "range": [
      3162,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3171,
    "end": 3173,
    "range": [
      3171,
      3173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3173,
    "end": 3174,
    "range": [
      3173,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3176,
    "end": 3184,
    "range": [
      3176,
      3184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3187,
    "end": 3210,
    "range": [
      3187,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3211,
    "end": 3218,
    "range": [
      3211,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3220,
    "end": 3222,
    "range": [
      3220,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3224,
    "end": 3226,
    "range": [
      3224,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3229,
    "end": 3237,
    "range": [
      3229,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3240,
    "end": 3263,
    "range": [
      3240,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3264,
    "end": 3271,
    "range": [
      3264,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3273,
    "end": 3280,
    "range": [
      3273,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3310,
    "end": 3318,
    "range": [
      3310,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3321,
    "end": 3344,
    "range": [
      3321,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3358,
    "end": 3361,
    "range": [
      3358,
      3361
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3362,
    "end": 3385,
    "range": [
      3362,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3389,
    "end": 3390,
    "range": [
      3389,
      3390
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3393,
    "end": 3399,
    "range": [
      3393,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3401,
    "end": 3404,
    "range": [
      3401,
      3404
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3407,
    "end": 3413,
    "range": [
      3407,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3418,
    "end": 3424,
    "range": [
      3418,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3436,
    "end": 3442,
    "range": [
      3436,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3445,
    "end": 3446,
    "range": [
      3445,
      3446
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3447,
    "end": 3453,
    "range": [
      3447,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3454,
    "end": 3455,
    "range": [
      3454,
      3455
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3456,
    "end": 3462,
    "range": [
      3456,
      3462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3466,
    "end": 3474,
    "range": [
      3466,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3477,
    "end": 3500,
    "range": [
      3477,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3500,
    "end": 3501,
    "range": [
      3500,
      3501
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3501,
    "end": 3508,
    "range": [
      3501,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3538,
    "end": 3546,
    "range": [
      3538,
      3546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3547,
    "end": 3548,
    "range": [
      3547,
      3548
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3549,
    "end": 3572,
    "range": [
      3549,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3573,
    "end": 3580,
    "range": [
      3573,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3582,
    "end": 3584,
    "range": [
      3582,
      3584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3614,
    "end": 3622,
    "range": [
      3614,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3625,
    "end": 3648,
    "range": [
      3625,
      3648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3648,
    "end": 3649,
    "range": [
      3648,
      3649
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3649,
    "end": 3656,
    "range": [
      3649,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3658,
    "end": 3660,
    "range": [
      3658,
      3660
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3662,
    "end": 3664,
    "range": [
      3662,
      3664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3665,
    "end": 3666,
    "range": [
      3665,
      3666
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3694,
    "end": 3702,
    "range": [
      3694,
      3702
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3703,
    "end": 3704,
    "range": [
      3703,
      3704
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3705,
    "end": 3728,
    "range": [
      3705,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3729,
    "end": 3736,
    "range": [
      3729,
      3736
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3736,
    "end": 3737,
    "range": [
      3736,
      3737
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3738,
    "end": 3745,
    "range": [
      3738,
      3745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3745,
    "end": 3746,
    "range": [
      3745,
      3746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3746,
    "end": 3747,
    "range": [
      3746,
      3747
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3775,
    "end": 3783,
    "range": [
      3775,
      3783
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3786,
    "end": 3809,
    "range": [
      3786,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3841,
    "end": 3844,
    "range": [
      3841,
      3844
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 3845,
    "end": 3868,
    "range": [
      3845,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3870,
    "end": 3871,
    "range": [
      3870,
      3871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3872,
    "end": 3873,
    "range": [
      3872,
      3873
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3874,
    "end": 3875,
    "range": [
      3874,
      3875
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3876,
    "end": 3882,
    "range": [
      3876,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3884,
    "end": 3887,
    "range": [
      3884,
      3887
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3888,
    "end": 3889,
    "range": [
      3888,
      3889
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3890,
    "end": 3896,
    "range": [
      3890,
      3896
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3896,
    "end": 3897,
    "range": [
      3896,
      3897
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3899,
    "end": 3900,
    "range": [
      3899,
      3900
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3901,
    "end": 3907,
    "range": [
      3901,
      3907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3911,
    "end": 3912,
    "range": [
      3911,
      3912
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3915,
    "end": 3916,
    "range": [
      3915,
      3916
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3916,
    "end": 3917,
    "range": [
      3916,
      3917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3917,
    "end": 3918,
    "range": [
      3917,
      3918
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3919,
    "end": 3925,
    "range": [
      3919,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3928,
    "end": 3934,
    "range": [
      3928,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3936,
    "end": 3937,
    "range": [
      3936,
      3937
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3938,
    "end": 3946,
    "range": [
      3938,
      3946
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3947,
    "end": 3948,
    "range": [
      3947,
      3948
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 3949,
    "end": 3972,
    "range": [
      3949,
      3972
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3973,
    "end": 3980,
    "range": [
      3973,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3983,
    "end": 3991,
    "range": [
      3983,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 3994,
    "end": 4017,
    "range": [
      3994,
      4017
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4017,
    "end": 4018,
    "range": [
      4017,
      4018
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4018,
    "end": 4025,
    "range": [
      4018,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4025,
    "end": 4026,
    "range": [
      4025,
      4026
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4027,
    "end": 4029,
    "range": [
      4027,
      4029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4029,
    "end": 4030,
    "range": [
      4029,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4059,
    "end": 4067,
    "range": [
      4059,
      4067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4068,
    "end": 4069,
    "range": [
      4068,
      4069
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4070,
    "end": 4093,
    "range": [
      4070,
      4093
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4094,
    "end": 4101,
    "range": [
      4094,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4103,
    "end": 4105,
    "range": [
      4103,
      4105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4107,
    "end": 4109,
    "range": [
      4107,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4139,
    "end": 4147,
    "range": [
      4139,
      4147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4150,
    "end": 4173,
    "range": [
      4150,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4173,
    "end": 4174,
    "range": [
      4173,
      4174
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4174,
    "end": 4181,
    "range": [
      4174,
      4181
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4181,
    "end": 4182,
    "range": [
      4181,
      4182
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4183,
    "end": 4190,
    "range": [
      4183,
      4190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4190,
    "end": 4191,
    "range": [
      4190,
      4191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4191,
    "end": 4192,
    "range": [
      4191,
      4192
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4216,
    "end": 4224,
    "range": [
      4216,
      4224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4225,
    "end": 4226,
    "range": [
      4225,
      4226
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4227,
    "end": 4250,
    "range": [
      4227,
      4250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4251,
    "end": 4252,
    "range": [
      4251,
      4252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4252,
    "end": 4253,
    "range": [
      4252,
      4253
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4282,
    "end": 4285,
    "range": [
      4282,
      4285
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter4",
    "start": 4286,
    "end": 4309,
    "range": [
      4286,
      4309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4311,
    "end": 4312,
    "range": [
      4311,
      4312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4314,
    "end": 4317,
    "range": [
      4314,
      4317
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4317,
    "end": 4318,
    "range": [
      4317,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4320,
    "end": 4326,
    "range": [
      4320,
      4326
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4326,
    "end": 4327,
    "range": [
      4326,
      4327
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4327,
    "end": 4328,
    "range": [
      4327,
      4328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4329,
    "end": 4330,
    "range": [
      4329,
      4330
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4331,
    "end": 4337,
    "range": [
      4331,
      4337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4337,
    "end": 4338,
    "range": [
      4337,
      4338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4339,
    "end": 4340,
    "range": [
      4339,
      4340
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4343,
    "end": 4344,
    "range": [
      4343,
      4344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4345,
    "end": 4346,
    "range": [
      4345,
      4346
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4346,
    "end": 4347,
    "range": [
      4346,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4349,
    "end": 4355,
    "range": [
      4349,
      4355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4355,
    "end": 4356,
    "range": [
      4355,
      4356
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4358,
    "end": 4359,
    "range": [
      4358,
      4359
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4360,
    "end": 4366,
    "range": [
      4360,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4369,
    "end": 4375,
    "range": [
      4369,
      4375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4375,
    "end": 4376,
    "range": [
      4375,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4380,
    "end": 4388,
    "range": [
      4380,
      4388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4389,
    "end": 4390,
    "range": [
      4389,
      4390
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter4",
    "start": 4391,
    "end": 4414,
    "range": [
      4391,
      4414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4414,
    "end": 4415,
    "range": [
      4414,
      4415
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4415,
    "end": 4422,
    "range": [
      4415,
      4422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4422,
    "end": 4423,
    "range": [
      4422,
      4423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4423,
    "end": 4424,
    "range": [
      4423,
      4424
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4486,
    "end": 4494,
    "range": [
      4486,
      4494
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter4",
    "start": 4497,
    "end": 4520,
    "range": [
      4497,
      4520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4520,
    "end": 4521,
    "range": [
      4520,
      4521
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4521,
    "end": 4528,
    "range": [
      4521,
      4528
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 4530,
    "end": 4537,
    "range": [
      4530,
      4537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4537,
    "end": 4538,
    "range": [
      4537,
      4538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4538,
    "end": 4539,
    "range": [
      4538,
      4539
    ]
  }
]
```
