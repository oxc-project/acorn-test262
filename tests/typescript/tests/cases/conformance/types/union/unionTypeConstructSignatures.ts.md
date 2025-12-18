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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 425,
                                "end": 431
                              },
                              "start": 423,
                              "end": 431
                            },
                            "start": 422,
                            "end": 431
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 434,
                            "end": 440
                          },
                          "start": 432,
                          "end": 440
                        },
                        "start": 417,
                        "end": 441
                      }
                    ],
                    "start": 415,
                    "end": 443
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 456,
                                "end": 462
                              },
                              "start": 454,
                              "end": 462
                            },
                            "start": 453,
                            "end": 462
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
                              "start": 465,
                              "end": 469
                            },
                            "typeArguments": null,
                            "start": 465,
                            "end": 469
                          },
                          "start": 463,
                          "end": 469
                        },
                        "start": 448,
                        "end": 470
                      }
                    ],
                    "start": 446,
                    "end": 472
                  }
                ],
                "start": 415,
                "end": 472
              },
              "start": 413,
              "end": 472
            },
            "start": 387,
            "end": 472
          },
          "init": null,
          "definite": false,
          "start": 387,
          "end": 472
        }
      ],
      "declare": false,
      "start": 383,
      "end": 473
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
          "start": 474,
          "end": 483
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 516
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 517,
              "end": 519
            }
          ],
          "start": 486,
          "end": 520
        },
        "start": 474,
        "end": 520
      },
      "directive": null,
      "start": 474,
      "end": 521
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
          "start": 522,
          "end": 534
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 567
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 568,
              "end": 575
            }
          ],
          "start": 537,
          "end": 576
        },
        "start": 522,
        "end": 576
      },
      "directive": null,
      "start": 522,
      "end": 577
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 618
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 619,
            "end": 623
          }
        ],
        "start": 587,
        "end": 624
      },
      "directive": null,
      "start": 587,
      "end": 625
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 700,
                                "end": 706
                              },
                              "start": 698,
                              "end": 706
                            },
                            "start": 697,
                            "end": 706
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 709,
                            "end": 715
                          },
                          "start": 707,
                          "end": 715
                        },
                        "start": 692,
                        "end": 716
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSStringKeyword",
                            "start": 734,
                            "end": 740
                          },
                          "start": 732,
                          "end": 740
                        },
                        "start": 717,
                        "end": 741
                      }
                    ],
                    "start": 690,
                    "end": 743
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 756,
                                "end": 762
                              },
                              "start": 754,
                              "end": 762
                            },
                            "start": 753,
                            "end": 762
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
                              "start": 765,
                              "end": 769
                            },
                            "typeArguments": null,
                            "start": 765,
                            "end": 769
                          },
                          "start": 763,
                          "end": 769
                        },
                        "start": 748,
                        "end": 770
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 779,
                                "end": 785
                              },
                              "start": 777,
                              "end": 785
                            },
                            "start": 776,
                            "end": 785
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 788,
                            "end": 795
                          },
                          "start": 786,
                          "end": 795
                        },
                        "start": 771,
                        "end": 796
                      }
                    ],
                    "start": 746,
                    "end": 798
                  }
                ],
                "start": 690,
                "end": 798
              },
              "start": 688,
              "end": 798
            },
            "start": 661,
            "end": 798
          },
          "init": null,
          "definite": false,
          "start": 661,
          "end": 798
        }
      ],
      "declare": false,
      "start": 657,
      "end": 799
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
          "start": 800,
          "end": 809
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 816,
            "end": 843
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 844,
              "end": 846
            }
          ],
          "start": 812,
          "end": 847
        },
        "start": 800,
        "end": 847
      },
      "directive": null,
      "start": 800,
      "end": 848
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
          "start": 849,
          "end": 861
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 895
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 896,
              "end": 903
            }
          ],
          "start": 864,
          "end": 904
        },
        "start": 849,
        "end": 904
      },
      "directive": null,
      "start": 849,
      "end": 905
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 937
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 938,
            "end": 942
          }
        ],
        "start": 906,
        "end": 943
      },
      "directive": null,
      "start": 906,
      "end": 944
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 979,
          "end": 1006
        },
        "typeArguments": null,
        "arguments": [],
        "start": 975,
        "end": 1008
      },
      "directive": null,
      "start": 975,
      "end": 1009
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1084,
                                "end": 1090
                              },
                              "start": 1082,
                              "end": 1090
                            },
                            "start": 1081,
                            "end": 1090
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1093,
                            "end": 1099
                          },
                          "start": 1091,
                          "end": 1099
                        },
                        "start": 1076,
                        "end": 1100
                      }
                    ],
                    "start": 1074,
                    "end": 1102
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1115,
                                "end": 1121
                              },
                              "start": 1113,
                              "end": 1121
                            },
                            "start": 1112,
                            "end": 1121
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
                              "start": 1124,
                              "end": 1128
                            },
                            "typeArguments": null,
                            "start": 1124,
                            "end": 1128
                          },
                          "start": 1122,
                          "end": 1128
                        },
                        "start": 1107,
                        "end": 1129
                      }
                    ],
                    "start": 1105,
                    "end": 1131
                  }
                ],
                "start": 1074,
                "end": 1131
              },
              "start": 1072,
              "end": 1131
            },
            "start": 1042,
            "end": 1131
          },
          "init": null,
          "definite": false,
          "start": 1042,
          "end": 1131
        }
      ],
      "declare": false,
      "start": 1038,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1137,
          "end": 1167
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1168,
            "end": 1170
          }
        ],
        "start": 1133,
        "end": 1171
      },
      "directive": null,
      "start": 1133,
      "end": 1172
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1206,
          "end": 1236
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1237,
            "end": 1244
          }
        ],
        "start": 1202,
        "end": 1245
      },
      "directive": null,
      "start": 1202,
      "end": 1246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1280,
          "end": 1310
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1276,
        "end": 1312
      },
      "directive": null,
      "start": 1276,
      "end": 1313
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1394,
                                "end": 1400
                              },
                              "start": 1392,
                              "end": 1400
                            },
                            "start": 1391,
                            "end": 1400
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1403,
                            "end": 1409
                          },
                          "start": 1401,
                          "end": 1409
                        },
                        "start": 1386,
                        "end": 1410
                      }
                    ],
                    "start": 1384,
                    "end": 1412
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1425,
                                "end": 1431
                              },
                              "start": 1423,
                              "end": 1431
                            },
                            "start": 1422,
                            "end": 1431
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
                              "start": 1434,
                              "end": 1438
                            },
                            "typeArguments": null,
                            "start": 1434,
                            "end": 1438
                          },
                          "start": 1432,
                          "end": 1438
                        },
                        "start": 1417,
                        "end": 1439
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1448,
                                "end": 1454
                              },
                              "start": 1446,
                              "end": 1454
                            },
                            "start": 1445,
                            "end": 1454
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1457,
                            "end": 1464
                          },
                          "start": 1455,
                          "end": 1464
                        },
                        "start": 1440,
                        "end": 1465
                      }
                    ],
                    "start": 1415,
                    "end": 1467
                  }
                ],
                "start": 1384,
                "end": 1467
              },
              "start": 1382,
              "end": 1467
            },
            "start": 1348,
            "end": 1467
          },
          "init": null,
          "definite": false,
          "start": 1348,
          "end": 1467
        }
      ],
      "declare": false,
      "start": 1344,
      "end": 1468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1473,
          "end": 1507
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1469,
        "end": 1509
      },
      "directive": null,
      "start": 1469,
      "end": 1510
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1545,
          "end": 1579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1580,
            "end": 1582
          }
        ],
        "start": 1541,
        "end": 1583
      },
      "directive": null,
      "start": 1541,
      "end": 1584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1619,
          "end": 1653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1654,
            "end": 1661
          }
        ],
        "start": 1615,
        "end": 1662
      },
      "directive": null,
      "start": 1615,
      "end": 1663
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1743,
                                "end": 1749
                              },
                              "start": 1741,
                              "end": 1749
                            },
                            "start": 1740,
                            "end": 1749
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1752,
                            "end": 1758
                          },
                          "start": 1750,
                          "end": 1758
                        },
                        "start": 1735,
                        "end": 1759
                      }
                    ],
                    "start": 1733,
                    "end": 1761
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1774,
                                "end": 1780
                              },
                              "start": 1772,
                              "end": 1780
                            },
                            "start": 1771,
                            "end": 1780
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
                                "start": 1785,
                                "end": 1791
                              },
                              "start": 1783,
                              "end": 1791
                            },
                            "start": 1782,
                            "end": 1791
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1794,
                            "end": 1800
                          },
                          "start": 1792,
                          "end": 1800
                        },
                        "start": 1766,
                        "end": 1801
                      }
                    ],
                    "start": 1764,
                    "end": 1803
                  }
                ],
                "start": 1733,
                "end": 1803
              },
              "start": 1731,
              "end": 1803
            },
            "start": 1699,
            "end": 1803
          },
          "init": null,
          "definite": false,
          "start": 1699,
          "end": 1803
        }
      ],
      "declare": false,
      "start": 1695,
      "end": 1804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1809,
          "end": 1841
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1805,
        "end": 1843
      },
      "directive": null,
      "start": 1805,
      "end": 1844
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1867,
          "end": 1899
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1900,
            "end": 1907
          }
        ],
        "start": 1863,
        "end": 1908
      },
      "directive": null,
      "start": 1863,
      "end": 1909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1932,
          "end": 1964
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1965,
            "end": 1972
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1974,
            "end": 1976
          }
        ],
        "start": 1928,
        "end": 1977
      },
      "directive": null,
      "start": 1928,
      "end": 1978
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2028,
                                "end": 2034
                              },
                              "start": 2026,
                              "end": 2034
                            },
                            "start": 2025,
                            "end": 2034
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
                                "start": 2040,
                                "end": 2046
                              },
                              "start": 2038,
                              "end": 2046
                            },
                            "start": 2036,
                            "end": 2046
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2049,
                            "end": 2055
                          },
                          "start": 2047,
                          "end": 2055
                        },
                        "start": 2020,
                        "end": 2056
                      }
                    ],
                    "start": 2018,
                    "end": 2058
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2071,
                                "end": 2077
                              },
                              "start": 2069,
                              "end": 2077
                            },
                            "start": 2068,
                            "end": 2077
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
                                "start": 2083,
                                "end": 2089
                              },
                              "start": 2081,
                              "end": 2089
                            },
                            "start": 2079,
                            "end": 2089
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2092,
                            "end": 2098
                          },
                          "start": 2090,
                          "end": 2098
                        },
                        "start": 2063,
                        "end": 2099
                      }
                    ],
                    "start": 2061,
                    "end": 2101
                  }
                ],
                "start": 2018,
                "end": 2101
              },
              "start": 2016,
              "end": 2101
            },
            "start": 1989,
            "end": 2101
          },
          "init": null,
          "definite": false,
          "start": 1989,
          "end": 2101
        }
      ],
      "declare": false,
      "start": 1985,
      "end": 2102
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
          "start": 2103,
          "end": 2111
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2118,
            "end": 2145
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2146,
              "end": 2153
            }
          ],
          "start": 2114,
          "end": 2154
        },
        "start": 2103,
        "end": 2154
      },
      "directive": null,
      "start": 2103,
      "end": 2155
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
          "start": 2156,
          "end": 2164
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2171,
            "end": 2198
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2199,
              "end": 2206
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2208,
              "end": 2210
            }
          ],
          "start": 2167,
          "end": 2211
        },
        "start": 2156,
        "end": 2211
      },
      "directive": null,
      "start": 2156,
      "end": 2212
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
          "start": 2213,
          "end": 2221
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2228,
            "end": 2255
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2256,
              "end": 2263
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2265,
              "end": 2272
            }
          ],
          "start": 2224,
          "end": 2273
        },
        "start": 2213,
        "end": 2273
      },
      "directive": null,
      "start": 2213,
      "end": 2274
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
          "start": 2302,
          "end": 2310
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2317,
            "end": 2344
          },
          "typeArguments": null,
          "arguments": [],
          "start": 2313,
          "end": 2346
        },
        "start": 2302,
        "end": 2346
      },
      "directive": null,
      "start": 2302,
      "end": 2347
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2401,
                                "end": 2407
                              },
                              "start": 2399,
                              "end": 2407
                            },
                            "start": 2398,
                            "end": 2407
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
                                "start": 2413,
                                "end": 2419
                              },
                              "start": 2411,
                              "end": 2419
                            },
                            "start": 2409,
                            "end": 2419
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2422,
                            "end": 2428
                          },
                          "start": 2420,
                          "end": 2428
                        },
                        "start": 2393,
                        "end": 2429
                      }
                    ],
                    "start": 2391,
                    "end": 2431
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2444,
                                "end": 2450
                              },
                              "start": 2442,
                              "end": 2450
                            },
                            "start": 2441,
                            "end": 2450
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
                                "start": 2455,
                                "end": 2461
                              },
                              "start": 2453,
                              "end": 2461
                            },
                            "start": 2452,
                            "end": 2461
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2464,
                            "end": 2470
                          },
                          "start": 2462,
                          "end": 2470
                        },
                        "start": 2436,
                        "end": 2470
                      }
                    ],
                    "start": 2434,
                    "end": 2472
                  }
                ],
                "start": 2391,
                "end": 2472
              },
              "start": 2389,
              "end": 2472
            },
            "start": 2362,
            "end": 2472
          },
          "init": null,
          "definite": false,
          "start": 2362,
          "end": 2472
        }
      ],
      "declare": false,
      "start": 2358,
      "end": 2473
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
          "start": 2474,
          "end": 2482
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2489,
            "end": 2516
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2517,
              "end": 2524
            }
          ],
          "start": 2485,
          "end": 2525
        },
        "start": 2474,
        "end": 2525
      },
      "directive": null,
      "start": 2474,
      "end": 2526
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
          "start": 2554,
          "end": 2562
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2569,
            "end": 2596
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2597,
              "end": 2604
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2606,
              "end": 2608
            }
          ],
          "start": 2565,
          "end": 2609
        },
        "start": 2554,
        "end": 2609
      },
      "directive": null,
      "start": 2554,
      "end": 2610
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
          "start": 2638,
          "end": 2646
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2653,
            "end": 2680
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2681,
              "end": 2688
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2690,
              "end": 2697
            }
          ],
          "start": 2649,
          "end": 2698
        },
        "start": 2638,
        "end": 2698
      },
      "directive": null,
      "start": 2638,
      "end": 2699
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
          "start": 2727,
          "end": 2735
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2742,
            "end": 2769
          },
          "typeArguments": null,
          "arguments": [],
          "start": 2738,
          "end": 2771
        },
        "start": 2727,
        "end": 2771
      },
      "directive": null,
      "start": 2727,
      "end": 2772
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2844,
                                "end": 2850
                              },
                              "start": 2842,
                              "end": 2850
                            },
                            "start": 2841,
                            "end": 2850
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
                                "start": 2856,
                                "end": 2862
                              },
                              "start": 2854,
                              "end": 2862
                            },
                            "start": 2852,
                            "end": 2862
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2865,
                            "end": 2871
                          },
                          "start": 2863,
                          "end": 2871
                        },
                        "start": 2836,
                        "end": 2872
                      }
                    ],
                    "start": 2834,
                    "end": 2874
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2887,
                                "end": 2893
                              },
                              "start": 2885,
                              "end": 2893
                            },
                            "start": 2884,
                            "end": 2893
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2896,
                            "end": 2902
                          },
                          "start": 2894,
                          "end": 2902
                        },
                        "start": 2879,
                        "end": 2903
                      }
                    ],
                    "start": 2877,
                    "end": 2905
                  }
                ],
                "start": 2834,
                "end": 2905
              },
              "start": 2832,
              "end": 2905
            },
            "start": 2805,
            "end": 2905
          },
          "init": null,
          "definite": false,
          "start": 2805,
          "end": 2905
        }
      ],
      "declare": false,
      "start": 2801,
      "end": 2906
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
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2922,
            "end": 2949
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2950,
              "end": 2957
            }
          ],
          "start": 2918,
          "end": 2958
        },
        "start": 2907,
        "end": 2958
      },
      "directive": null,
      "start": 2907,
      "end": 2959
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
          "start": 2987,
          "end": 2995
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3002,
            "end": 3029
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3030,
              "end": 3037
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3039,
              "end": 3041
            }
          ],
          "start": 2998,
          "end": 3042
        },
        "start": 2987,
        "end": 3042
      },
      "directive": null,
      "start": 2987,
      "end": 3043
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
          "start": 3050,
          "end": 3058
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3065,
            "end": 3092
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3093,
              "end": 3100
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3102,
              "end": 3109
            }
          ],
          "start": 3061,
          "end": 3110
        },
        "start": 3050,
        "end": 3110
      },
      "directive": null,
      "start": 3050,
      "end": 3111
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
          "start": 3126,
          "end": 3134
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3141,
            "end": 3168
          },
          "typeArguments": null,
          "arguments": [],
          "start": 3137,
          "end": 3170
        },
        "start": 3126,
        "end": 3170
      },
      "directive": null,
      "start": 3126,
      "end": 3171
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3239,
                                "end": 3245
                              },
                              "start": 3237,
                              "end": 3245
                            },
                            "start": 3236,
                            "end": 3245
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
                              "start": 3250,
                              "end": 3251
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3253,
                                  "end": 3259
                                },
                                "start": 3253,
                                "end": 3261
                              },
                              "start": 3251,
                              "end": 3261
                            },
                            "value": null,
                            "start": 3247,
                            "end": 3261
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3264,
                            "end": 3270
                          },
                          "start": 3262,
                          "end": 3270
                        },
                        "start": 3231,
                        "end": 3271
                      }
                    ],
                    "start": 3229,
                    "end": 3273
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3286,
                                "end": 3292
                              },
                              "start": 3284,
                              "end": 3292
                            },
                            "start": 3283,
                            "end": 3292
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
                              "start": 3297,
                              "end": 3298
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3300,
                                  "end": 3306
                                },
                                "start": 3300,
                                "end": 3308
                              },
                              "start": 3298,
                              "end": 3308
                            },
                            "value": null,
                            "start": 3294,
                            "end": 3308
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3311,
                            "end": 3317
                          },
                          "start": 3309,
                          "end": 3317
                        },
                        "start": 3278,
                        "end": 3317
                      }
                    ],
                    "start": 3276,
                    "end": 3319
                  }
                ],
                "start": 3229,
                "end": 3319
              },
              "start": 3227,
              "end": 3319
            },
            "start": 3204,
            "end": 3319
          },
          "init": null,
          "definite": false,
          "start": 3204,
          "end": 3319
        }
      ],
      "declare": false,
      "start": 3200,
      "end": 3320
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
          "start": 3321,
          "end": 3329
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3336,
            "end": 3359
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3360,
              "end": 3367
            }
          ],
          "start": 3332,
          "end": 3368
        },
        "start": 3321,
        "end": 3368
      },
      "directive": null,
      "start": 3321,
      "end": 3369
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
          "start": 3370,
          "end": 3378
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3385,
            "end": 3408
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3409,
              "end": 3416
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3418,
              "end": 3420
            }
          ],
          "start": 3381,
          "end": 3421
        },
        "start": 3370,
        "end": 3421
      },
      "directive": null,
      "start": 3370,
      "end": 3422
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
          "start": 3423,
          "end": 3431
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3438,
            "end": 3461
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3462,
              "end": 3469
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3471,
              "end": 3473
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3475,
              "end": 3477
            }
          ],
          "start": 3434,
          "end": 3478
        },
        "start": 3423,
        "end": 3478
      },
      "directive": null,
      "start": 3423,
      "end": 3479
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
          "start": 3480,
          "end": 3488
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3495,
            "end": 3518
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3519,
              "end": 3526
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3528,
              "end": 3535
            }
          ],
          "start": 3491,
          "end": 3536
        },
        "start": 3480,
        "end": 3536
      },
      "directive": null,
      "start": 3480,
      "end": 3537
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
          "start": 3565,
          "end": 3573
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3580,
            "end": 3603
          },
          "typeArguments": null,
          "arguments": [],
          "start": 3576,
          "end": 3605
        },
        "start": 3565,
        "end": 3605
      },
      "directive": null,
      "start": 3565,
      "end": 3606
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3656,
                                "end": 3662
                              },
                              "start": 3654,
                              "end": 3662
                            },
                            "start": 3653,
                            "end": 3662
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
                              "start": 3667,
                              "end": 3668
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3670,
                                  "end": 3676
                                },
                                "start": 3670,
                                "end": 3678
                              },
                              "start": 3668,
                              "end": 3678
                            },
                            "value": null,
                            "start": 3664,
                            "end": 3678
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3681,
                            "end": 3687
                          },
                          "start": 3679,
                          "end": 3687
                        },
                        "start": 3648,
                        "end": 3688
                      }
                    ],
                    "start": 3646,
                    "end": 3690
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3703,
                                "end": 3709
                              },
                              "start": 3701,
                              "end": 3709
                            },
                            "start": 3700,
                            "end": 3709
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
                                "start": 3714,
                                "end": 3720
                              },
                              "start": 3712,
                              "end": 3720
                            },
                            "start": 3711,
                            "end": 3720
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3723,
                            "end": 3729
                          },
                          "start": 3721,
                          "end": 3729
                        },
                        "start": 3695,
                        "end": 3729
                      }
                    ],
                    "start": 3693,
                    "end": 3731
                  }
                ],
                "start": 3646,
                "end": 3731
              },
              "start": 3644,
              "end": 3731
            },
            "start": 3621,
            "end": 3731
          },
          "init": null,
          "definite": false,
          "start": 3621,
          "end": 3731
        }
      ],
      "declare": false,
      "start": 3617,
      "end": 3732
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
          "start": 3733,
          "end": 3741
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3748,
            "end": 3771
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3772,
              "end": 3779
            }
          ],
          "start": 3744,
          "end": 3780
        },
        "start": 3733,
        "end": 3780
      },
      "directive": null,
      "start": 3733,
      "end": 3781
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
          "start": 3809,
          "end": 3817
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3824,
            "end": 3847
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3848,
              "end": 3855
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3857,
              "end": 3859
            }
          ],
          "start": 3820,
          "end": 3860
        },
        "start": 3809,
        "end": 3860
      },
      "directive": null,
      "start": 3809,
      "end": 3861
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
          "start": 3889,
          "end": 3897
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3904,
            "end": 3927
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3928,
              "end": 3935
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3937,
              "end": 3939
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3941,
              "end": 3943
            }
          ],
          "start": 3900,
          "end": 3944
        },
        "start": 3889,
        "end": 3944
      },
      "directive": null,
      "start": 3889,
      "end": 3945
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
          "start": 3973,
          "end": 3981
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3988,
            "end": 4011
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4012,
              "end": 4019
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4021,
              "end": 4028
            }
          ],
          "start": 3984,
          "end": 4029
        },
        "start": 3973,
        "end": 4029
      },
      "directive": null,
      "start": 3973,
      "end": 4030
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
          "start": 4058,
          "end": 4066
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4073,
            "end": 4096
          },
          "typeArguments": null,
          "arguments": [],
          "start": 4069,
          "end": 4098
        },
        "start": 4058,
        "end": 4098
      },
      "directive": null,
      "start": 4058,
      "end": 4099
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
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 4167,
                                "end": 4173
                              },
                              "start": 4165,
                              "end": 4173
                            },
                            "start": 4164,
                            "end": 4173
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
                              "start": 4178,
                              "end": 4179
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4181,
                                  "end": 4187
                                },
                                "start": 4181,
                                "end": 4189
                              },
                              "start": 4179,
                              "end": 4189
                            },
                            "value": null,
                            "start": 4175,
                            "end": 4189
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4192,
                            "end": 4198
                          },
                          "start": 4190,
                          "end": 4198
                        },
                        "start": 4159,
                        "end": 4199
                      }
                    ],
                    "start": 4157,
                    "end": 4201
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 4214,
                                "end": 4220
                              },
                              "start": 4212,
                              "end": 4220
                            },
                            "start": 4211,
                            "end": 4220
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4223,
                            "end": 4229
                          },
                          "start": 4221,
                          "end": 4229
                        },
                        "start": 4206,
                        "end": 4229
                      }
                    ],
                    "start": 4204,
                    "end": 4231
                  }
                ],
                "start": 4157,
                "end": 4231
              },
              "start": 4155,
              "end": 4231
            },
            "start": 4132,
            "end": 4231
          },
          "init": null,
          "definite": false,
          "start": 4132,
          "end": 4231
        }
      ],
      "declare": false,
      "start": 4128,
      "end": 4232
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
          "start": 4233,
          "end": 4241
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4248,
            "end": 4271
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4272,
              "end": 4279
            }
          ],
          "start": 4244,
          "end": 4280
        },
        "start": 4233,
        "end": 4280
      },
      "directive": null,
      "start": 4233,
      "end": 4281
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
          "start": 4309,
          "end": 4317
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4324,
            "end": 4347
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4348,
              "end": 4355
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4357,
              "end": 4359
            }
          ],
          "start": 4320,
          "end": 4360
        },
        "start": 4309,
        "end": 4360
      },
      "directive": null,
      "start": 4309,
      "end": 4361
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
          "start": 4368,
          "end": 4376
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4383,
            "end": 4406
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4407,
              "end": 4414
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4416,
              "end": 4418
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 4420,
              "end": 4422
            }
          ],
          "start": 4379,
          "end": 4423
        },
        "start": 4368,
        "end": 4423
      },
      "directive": null,
      "start": 4368,
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
          "start": 4431,
          "end": 4439
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4446,
            "end": 4469
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4470,
              "end": 4477
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4479,
              "end": 4486
            }
          ],
          "start": 4442,
          "end": 4487
        },
        "start": 4431,
        "end": 4487
      },
      "directive": null,
      "start": 4431,
      "end": 4488
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
          "start": 4503,
          "end": 4511
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4518,
            "end": 4541
          },
          "typeArguments": null,
          "arguments": [],
          "start": 4514,
          "end": 4543
        },
        "start": 4503,
        "end": 4543
      },
      "directive": null,
      "start": 4503,
      "end": 4544
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
            "name": "unionWithAbstractSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSConstructorType",
                    "abstract": true,
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
                            "start": 4623,
                            "end": 4629
                          },
                          "start": 4621,
                          "end": 4629
                        },
                        "start": 4620,
                        "end": 4629
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4634,
                        "end": 4640
                      },
                      "start": 4631,
                      "end": 4640
                    },
                    "start": 4606,
                    "end": 4640
                  },
                  {
                    "type": "TSConstructorType",
                    "abstract": false,
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
                            "start": 4653,
                            "end": 4659
                          },
                          "start": 4651,
                          "end": 4659
                        },
                        "start": 4650,
                        "end": 4659
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4664,
                        "end": 4670
                      },
                      "start": 4661,
                      "end": 4670
                    },
                    "start": 4645,
                    "end": 4670
                  }
                ],
                "start": 4605,
                "end": 4671
              },
              "start": 4603,
              "end": 4671
            },
            "start": 4577,
            "end": 4671
          },
          "init": null,
          "definite": false,
          "start": 4577,
          "end": 4671
        }
      ],
      "declare": false,
      "start": 4573,
      "end": 4672
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithAbstractSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 4677,
          "end": 4703
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 4704,
            "end": 4711
          }
        ],
        "start": 4673,
        "end": 4712
      },
      "directive": null,
      "start": 4673,
      "end": 4713
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4713
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
    "start": 383,
    "end": 386,
    "range": [
      383,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 387,
    "end": 413,
    "range": [
      387,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 425,
    "end": 431,
    "range": [
      425,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 448,
    "end": 451,
    "range": [
      448,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 465,
    "end": 469,
    "range": [
      465,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 474,
    "end": 483,
    "range": [
      474,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 486,
    "end": 489,
    "range": [
      486,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 490,
    "end": 516,
    "range": [
      490,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 517,
    "end": 519,
    "range": [
      517,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 522,
    "end": 534,
    "range": [
      522,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 541,
    "end": 567,
    "range": [
      541,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 568,
    "end": 575,
    "range": [
      568,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 587,
    "end": 590,
    "range": [
      587,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 591,
    "end": 618,
    "range": [
      591,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 619,
    "end": 623,
    "range": [
      619,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 661,
    "end": 688,
    "range": [
      661,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 692,
    "end": 695,
    "range": [
      692,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 700,
    "end": 706,
    "range": [
      700,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 709,
    "end": 715,
    "range": [
      709,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 717,
    "end": 720,
    "range": [
      717,
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
    "value": "string",
    "start": 734,
    "end": 740,
    "range": [
      734,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 748,
    "end": 751,
    "range": [
      748,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 756,
    "end": 762,
    "range": [
      756,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 765,
    "end": 769,
    "range": [
      765,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785,
    "range": [
      779,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 788,
    "end": 795,
    "range": [
      788,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 800,
    "end": 809,
    "range": [
      800,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 812,
    "end": 815,
    "range": [
      812,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 816,
    "end": 843,
    "range": [
      816,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 844,
    "end": 846,
    "range": [
      844,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 849,
    "end": 861,
    "range": [
      849,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 868,
    "end": 895,
    "range": [
      868,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 896,
    "end": 903,
    "range": [
      896,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 906,
    "end": 909,
    "range": [
      906,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 910,
    "end": 937,
    "range": [
      910,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 938,
    "end": 942,
    "range": [
      938,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 975,
    "end": 978,
    "range": [
      975,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 979,
    "end": 1006,
    "range": [
      979,
      1006
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
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1038,
    "end": 1041,
    "range": [
      1038,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1042,
    "end": 1072,
    "range": [
      1042,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1076,
    "end": 1079,
    "range": [
      1076,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1084,
    "end": 1090,
    "range": [
      1084,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1093,
    "end": 1099,
    "range": [
      1093,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1115,
    "end": 1121,
    "range": [
      1115,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1124,
    "end": 1128,
    "range": [
      1124,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1133,
    "end": 1136,
    "range": [
      1133,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1137,
    "end": 1167,
    "range": [
      1137,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1168,
    "end": 1170,
    "range": [
      1168,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1202,
    "end": 1205,
    "range": [
      1202,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1206,
    "end": 1236,
    "range": [
      1206,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1237,
    "end": 1244,
    "range": [
      1237,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1276,
    "end": 1279,
    "range": [
      1276,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1280,
    "end": 1310,
    "range": [
      1280,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1344,
    "end": 1347,
    "range": [
      1344,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1348,
    "end": 1382,
    "range": [
      1348,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1394,
    "end": 1400,
    "range": [
      1394,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1403,
    "end": 1409,
    "range": [
      1403,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1417,
    "end": 1420,
    "range": [
      1417,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1425,
    "end": 1431,
    "range": [
      1425,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1434,
    "end": 1438,
    "range": [
      1434,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1440,
    "end": 1443,
    "range": [
      1440,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1448,
    "end": 1454,
    "range": [
      1448,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1457,
    "end": 1464,
    "range": [
      1457,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1469,
    "end": 1472,
    "range": [
      1469,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1473,
    "end": 1507,
    "range": [
      1473,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1541,
    "end": 1544,
    "range": [
      1541,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1545,
    "end": 1579,
    "range": [
      1545,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1580,
    "end": 1582,
    "range": [
      1580,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1615,
    "end": 1618,
    "range": [
      1615,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1619,
    "end": 1653,
    "range": [
      1619,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1654,
    "end": 1661,
    "range": [
      1654,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1695,
    "end": 1698,
    "range": [
      1695,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1699,
    "end": 1731,
    "range": [
      1699,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1735,
    "end": 1738,
    "range": [
      1735,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1743,
    "end": 1749,
    "range": [
      1743,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1752,
    "end": 1758,
    "range": [
      1752,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1766,
    "end": 1769,
    "range": [
      1766,
      1769
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
    "type": "Identifier",
    "value": "a",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1774,
    "end": 1780,
    "range": [
      1774,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800,
    "range": [
      1794,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1805,
    "end": 1808,
    "range": [
      1805,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1809,
    "end": 1841,
    "range": [
      1809,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1863,
    "end": 1866,
    "range": [
      1863,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1867,
    "end": 1899,
    "range": [
      1867,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1900,
    "end": 1907,
    "range": [
      1900,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1928,
    "end": 1931,
    "range": [
      1928,
      1931
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1932,
    "end": 1964,
    "range": [
      1932,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1965,
    "end": 1972,
    "range": [
      1965,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1974,
    "end": 1976,
    "range": [
      1974,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1985,
    "end": 1988,
    "range": [
      1985,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 1989,
    "end": 2016,
    "range": [
      1989,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2020,
    "end": 2023,
    "range": [
      2020,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2028,
    "end": 2034,
    "range": [
      2028,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2040,
    "end": 2046,
    "range": [
      2040,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2049,
    "end": 2055,
    "range": [
      2049,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2063,
    "end": 2066,
    "range": [
      2063,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2071,
    "end": 2077,
    "range": [
      2071,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2083,
    "end": 2089,
    "range": [
      2083,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2092,
    "end": 2098,
    "range": [
      2092,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2103,
    "end": 2111,
    "range": [
      2103,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2114,
    "end": 2117,
    "range": [
      2114,
      2117
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2118,
    "end": 2145,
    "range": [
      2118,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2146,
    "end": 2153,
    "range": [
      2146,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2156,
    "end": 2164,
    "range": [
      2156,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2167,
    "end": 2170,
    "range": [
      2167,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2171,
    "end": 2198,
    "range": [
      2171,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2199,
    "end": 2206,
    "range": [
      2199,
      2206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2208,
    "end": 2210,
    "range": [
      2208,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2213,
    "end": 2221,
    "range": [
      2213,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2224,
    "end": 2227,
    "range": [
      2224,
      2227
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2228,
    "end": 2255,
    "range": [
      2228,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2256,
    "end": 2263,
    "range": [
      2256,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2265,
    "end": 2272,
    "range": [
      2265,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2302,
    "end": 2310,
    "range": [
      2302,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2313,
    "end": 2316,
    "range": [
      2313,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2317,
    "end": 2344,
    "range": [
      2317,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2358,
    "end": 2361,
    "range": [
      2358,
      2361
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2362,
    "end": 2389,
    "range": [
      2362,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2393,
    "end": 2396,
    "range": [
      2393,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2401,
    "end": 2407,
    "range": [
      2401,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2413,
    "end": 2419,
    "range": [
      2413,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2422,
    "end": 2428,
    "range": [
      2422,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2436,
    "end": 2439,
    "range": [
      2436,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2444,
    "end": 2450,
    "range": [
      2444,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2455,
    "end": 2461,
    "range": [
      2455,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2464,
    "end": 2470,
    "range": [
      2464,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2474,
    "end": 2482,
    "range": [
      2474,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2485,
    "end": 2488,
    "range": [
      2485,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2489,
    "end": 2516,
    "range": [
      2489,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2517,
    "end": 2524,
    "range": [
      2517,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2554,
    "end": 2562,
    "range": [
      2554,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2565,
    "end": 2568,
    "range": [
      2565,
      2568
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2569,
    "end": 2596,
    "range": [
      2569,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2597,
    "end": 2604,
    "range": [
      2597,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2606,
    "end": 2608,
    "range": [
      2606,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2638,
    "end": 2646,
    "range": [
      2638,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2649,
    "end": 2652,
    "range": [
      2649,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2653,
    "end": 2680,
    "range": [
      2653,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2681,
    "end": 2688,
    "range": [
      2681,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2690,
    "end": 2697,
    "range": [
      2690,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2727,
    "end": 2735,
    "range": [
      2727,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2738,
    "end": 2741,
    "range": [
      2738,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2742,
    "end": 2769,
    "range": [
      2742,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2801,
    "end": 2804,
    "range": [
      2801,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2805,
    "end": 2832,
    "range": [
      2805,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2836,
    "end": 2839,
    "range": [
      2836,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2844,
    "end": 2850,
    "range": [
      2844,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2856,
    "end": 2862,
    "range": [
      2856,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2865,
    "end": 2871,
    "range": [
      2865,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2879,
    "end": 2882,
    "range": [
      2879,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2887,
    "end": 2893,
    "range": [
      2887,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2896,
    "end": 2902,
    "range": [
      2896,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
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
    "type": "Keyword",
    "value": "new",
    "start": 2918,
    "end": 2921,
    "range": [
      2918,
      2921
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2922,
    "end": 2949,
    "range": [
      2922,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2950,
    "end": 2957,
    "range": [
      2950,
      2957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2987,
    "end": 2995,
    "range": [
      2987,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2998,
    "end": 3001,
    "range": [
      2998,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3002,
    "end": 3029,
    "range": [
      3002,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3030,
    "end": 3037,
    "range": [
      3030,
      3037
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3039,
    "end": 3041,
    "range": [
      3039,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3050,
    "end": 3058,
    "range": [
      3050,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3061,
    "end": 3064,
    "range": [
      3061,
      3064
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3065,
    "end": 3092,
    "range": [
      3065,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3093,
    "end": 3100,
    "range": [
      3093,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3102,
    "end": 3109,
    "range": [
      3102,
      3109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3109,
    "end": 3110,
    "range": [
      3109,
      3110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3110,
    "end": 3111,
    "range": [
      3110,
      3111
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3126,
    "end": 3134,
    "range": [
      3126,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3135,
    "end": 3136,
    "range": [
      3135,
      3136
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3137,
    "end": 3140,
    "range": [
      3137,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3141,
    "end": 3168,
    "range": [
      3141,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3200,
    "end": 3203,
    "range": [
      3200,
      3203
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3204,
    "end": 3227,
    "range": [
      3204,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3231,
    "end": 3234,
    "range": [
      3231,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3239,
    "end": 3245,
    "range": [
      3239,
      3245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3247,
    "end": 3250,
    "range": [
      3247,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3253,
    "end": 3259,
    "range": [
      3253,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3262,
    "end": 3263,
    "range": [
      3262,
      3263
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3264,
    "end": 3270,
    "range": [
      3264,
      3270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3270,
    "end": 3271,
    "range": [
      3270,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3278,
    "end": 3281,
    "range": [
      3278,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3286,
    "end": 3292,
    "range": [
      3286,
      3292
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3294,
    "end": 3297,
    "range": [
      3294,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3300,
    "end": 3306,
    "range": [
      3300,
      3306
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3311,
    "end": 3317,
    "range": [
      3311,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3321,
    "end": 3329,
    "range": [
      3321,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3332,
    "end": 3335,
    "range": [
      3332,
      3335
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3336,
    "end": 3359,
    "range": [
      3336,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3360,
    "end": 3367,
    "range": [
      3360,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3370,
    "end": 3378,
    "range": [
      3370,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3381,
    "end": 3384,
    "range": [
      3381,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3385,
    "end": 3408,
    "range": [
      3385,
      3408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3408,
    "end": 3409,
    "range": [
      3408,
      3409
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3409,
    "end": 3416,
    "range": [
      3409,
      3416
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3418,
    "end": 3420,
    "range": [
      3418,
      3420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3420,
    "end": 3421,
    "range": [
      3420,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3423,
    "end": 3431,
    "range": [
      3423,
      3431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3434,
    "end": 3437,
    "range": [
      3434,
      3437
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3438,
    "end": 3461,
    "range": [
      3438,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3462,
    "end": 3469,
    "range": [
      3462,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3471,
    "end": 3473,
    "range": [
      3471,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3475,
    "end": 3477,
    "range": [
      3475,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3477,
    "end": 3478,
    "range": [
      3477,
      3478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3480,
    "end": 3488,
    "range": [
      3480,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3491,
    "end": 3494,
    "range": [
      3491,
      3494
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3495,
    "end": 3518,
    "range": [
      3495,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3519,
    "end": 3526,
    "range": [
      3519,
      3526
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3526,
    "end": 3527,
    "range": [
      3526,
      3527
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3528,
    "end": 3535,
    "range": [
      3528,
      3535
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537,
    "range": [
      3536,
      3537
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3565,
    "end": 3573,
    "range": [
      3565,
      3573
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3576,
    "end": 3579,
    "range": [
      3576,
      3579
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3580,
    "end": 3603,
    "range": [
      3580,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3617,
    "end": 3620,
    "range": [
      3617,
      3620
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3621,
    "end": 3644,
    "range": [
      3621,
      3644
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3644,
    "end": 3645,
    "range": [
      3644,
      3645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3648,
    "end": 3651,
    "range": [
      3648,
      3651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653,
    "range": [
      3652,
      3653
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3653,
    "end": 3654,
    "range": [
      3653,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3656,
    "end": 3662,
    "range": [
      3656,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3662,
    "end": 3663,
    "range": [
      3662,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3664,
    "end": 3667,
    "range": [
      3664,
      3667
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3670,
    "end": 3676,
    "range": [
      3670,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3681,
    "end": 3687,
    "range": [
      3681,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3691,
    "end": 3692,
    "range": [
      3691,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3695,
    "end": 3698,
    "range": [
      3695,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3699,
    "end": 3700,
    "range": [
      3699,
      3700
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3703,
    "end": 3709,
    "range": [
      3703,
      3709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3709,
    "end": 3710,
    "range": [
      3709,
      3710
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3711,
    "end": 3712,
    "range": [
      3711,
      3712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3714,
    "end": 3720,
    "range": [
      3714,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3723,
    "end": 3729,
    "range": [
      3723,
      3729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3733,
    "end": 3741,
    "range": [
      3733,
      3741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3744,
    "end": 3747,
    "range": [
      3744,
      3747
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3748,
    "end": 3771,
    "range": [
      3748,
      3771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3772,
    "end": 3779,
    "range": [
      3772,
      3779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3779,
    "end": 3780,
    "range": [
      3779,
      3780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3780,
    "end": 3781,
    "range": [
      3780,
      3781
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3809,
    "end": 3817,
    "range": [
      3809,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3818,
    "end": 3819,
    "range": [
      3818,
      3819
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3820,
    "end": 3823,
    "range": [
      3820,
      3823
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3824,
    "end": 3847,
    "range": [
      3824,
      3847
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3847,
    "end": 3848,
    "range": [
      3847,
      3848
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3848,
    "end": 3855,
    "range": [
      3848,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3855,
    "end": 3856,
    "range": [
      3855,
      3856
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3857,
    "end": 3859,
    "range": [
      3857,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3889,
    "end": 3897,
    "range": [
      3889,
      3897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3900,
    "end": 3903,
    "range": [
      3900,
      3903
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3904,
    "end": 3927,
    "range": [
      3904,
      3927
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3928,
    "end": 3935,
    "range": [
      3928,
      3935
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3937,
    "end": 3939,
    "range": [
      3937,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3939,
    "end": 3940,
    "range": [
      3939,
      3940
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3941,
    "end": 3943,
    "range": [
      3941,
      3943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3943,
    "end": 3944,
    "range": [
      3943,
      3944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3973,
    "end": 3981,
    "range": [
      3973,
      3981
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3984,
    "end": 3987,
    "range": [
      3984,
      3987
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3988,
    "end": 4011,
    "range": [
      3988,
      4011
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4011,
    "end": 4012,
    "range": [
      4011,
      4012
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4012,
    "end": 4019,
    "range": [
      4012,
      4019
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4019,
    "end": 4020,
    "range": [
      4019,
      4020
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4021,
    "end": 4028,
    "range": [
      4021,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4029,
    "end": 4030,
    "range": [
      4029,
      4030
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4058,
    "end": 4066,
    "range": [
      4058,
      4066
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4067,
    "end": 4068,
    "range": [
      4067,
      4068
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4069,
    "end": 4072,
    "range": [
      4069,
      4072
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 4073,
    "end": 4096,
    "range": [
      4073,
      4096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4098,
    "end": 4099,
    "range": [
      4098,
      4099
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4128,
    "end": 4131,
    "range": [
      4128,
      4131
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4132,
    "end": 4155,
    "range": [
      4132,
      4155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4155,
    "end": 4156,
    "range": [
      4155,
      4156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4157,
    "end": 4158,
    "range": [
      4157,
      4158
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4159,
    "end": 4162,
    "range": [
      4159,
      4162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4163,
    "end": 4164,
    "range": [
      4163,
      4164
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4164,
    "end": 4165,
    "range": [
      4164,
      4165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4165,
    "end": 4166,
    "range": [
      4165,
      4166
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4167,
    "end": 4173,
    "range": [
      4167,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4173,
    "end": 4174,
    "range": [
      4173,
      4174
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4175,
    "end": 4178,
    "range": [
      4175,
      4178
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4179,
    "end": 4180,
    "range": [
      4179,
      4180
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4181,
    "end": 4187,
    "range": [
      4181,
      4187
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4187,
    "end": 4188,
    "range": [
      4187,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4190,
    "end": 4191,
    "range": [
      4190,
      4191
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4192,
    "end": 4198,
    "range": [
      4192,
      4198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4198,
    "end": 4199,
    "range": [
      4198,
      4199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4200,
    "end": 4201,
    "range": [
      4200,
      4201
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4202,
    "end": 4203,
    "range": [
      4202,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4206,
    "end": 4209,
    "range": [
      4206,
      4209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4210,
    "end": 4211,
    "range": [
      4210,
      4211
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4211,
    "end": 4212,
    "range": [
      4211,
      4212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4212,
    "end": 4213,
    "range": [
      4212,
      4213
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4214,
    "end": 4220,
    "range": [
      4214,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4221,
    "end": 4222,
    "range": [
      4221,
      4222
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4223,
    "end": 4229,
    "range": [
      4223,
      4229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4231,
    "end": 4232,
    "range": [
      4231,
      4232
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4233,
    "end": 4241,
    "range": [
      4233,
      4241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4242,
    "end": 4243,
    "range": [
      4242,
      4243
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4244,
    "end": 4247,
    "range": [
      4244,
      4247
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4248,
    "end": 4271,
    "range": [
      4248,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4271,
    "end": 4272,
    "range": [
      4271,
      4272
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4272,
    "end": 4279,
    "range": [
      4272,
      4279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4279,
    "end": 4280,
    "range": [
      4279,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4280,
    "end": 4281,
    "range": [
      4280,
      4281
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4309,
    "end": 4317,
    "range": [
      4309,
      4317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4320,
    "end": 4323,
    "range": [
      4320,
      4323
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4324,
    "end": 4347,
    "range": [
      4324,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4348,
    "end": 4355,
    "range": [
      4348,
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
    "type": "Numeric",
    "value": "10",
    "start": 4357,
    "end": 4359,
    "range": [
      4357,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4359,
    "end": 4360,
    "range": [
      4359,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4360,
    "end": 4361,
    "range": [
      4360,
      4361
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4368,
    "end": 4376,
    "range": [
      4368,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4379,
    "end": 4382,
    "range": [
      4379,
      4382
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4383,
    "end": 4406,
    "range": [
      4383,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4406,
    "end": 4407,
    "range": [
      4406,
      4407
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4407,
    "end": 4414,
    "range": [
      4407,
      4414
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4414,
    "end": 4415,
    "range": [
      4414,
      4415
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4416,
    "end": 4418,
    "range": [
      4416,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4418,
    "end": 4419,
    "range": [
      4418,
      4419
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4420,
    "end": 4422,
    "range": [
      4420,
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
    "start": 4431,
    "end": 4439,
    "range": [
      4431,
      4439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4440,
    "end": 4441,
    "range": [
      4440,
      4441
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4442,
    "end": 4445,
    "range": [
      4442,
      4445
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4446,
    "end": 4469,
    "range": [
      4446,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4469,
    "end": 4470,
    "range": [
      4469,
      4470
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4470,
    "end": 4477,
    "range": [
      4470,
      4477
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4477,
    "end": 4478,
    "range": [
      4477,
      4478
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4479,
    "end": 4486,
    "range": [
      4479,
      4486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4486,
    "end": 4487,
    "range": [
      4486,
      4487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4487,
    "end": 4488,
    "range": [
      4487,
      4488
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4503,
    "end": 4511,
    "range": [
      4503,
      4511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4512,
    "end": 4513,
    "range": [
      4512,
      4513
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4514,
    "end": 4517,
    "range": [
      4514,
      4517
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4518,
    "end": 4541,
    "range": [
      4518,
      4541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4542,
    "end": 4543,
    "range": [
      4542,
      4543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4573,
    "end": 4576,
    "range": [
      4573,
      4576
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithAbstractSignature",
    "start": 4577,
    "end": 4603,
    "range": [
      4577,
      4603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 4606,
    "end": 4614,
    "range": [
      4606,
      4614
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4615,
    "end": 4618,
    "range": [
      4615,
      4618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4619,
    "end": 4620,
    "range": [
      4619,
      4620
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4621,
    "end": 4622,
    "range": [
      4621,
      4622
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4623,
    "end": 4629,
    "range": [
      4623,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4629,
    "end": 4630,
    "range": [
      4629,
      4630
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4631,
    "end": 4633,
    "range": [
      4631,
      4633
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4634,
    "end": 4640,
    "range": [
      4634,
      4640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4640,
    "end": 4641,
    "range": [
      4640,
      4641
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4642,
    "end": 4643,
    "range": [
      4642,
      4643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4644,
    "end": 4645,
    "range": [
      4644,
      4645
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4645,
    "end": 4648,
    "range": [
      4645,
      4648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4649,
    "end": 4650,
    "range": [
      4649,
      4650
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4650,
    "end": 4651,
    "range": [
      4650,
      4651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4651,
    "end": 4652,
    "range": [
      4651,
      4652
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4653,
    "end": 4659,
    "range": [
      4653,
      4659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4661,
    "end": 4663,
    "range": [
      4661,
      4663
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4664,
    "end": 4670,
    "range": [
      4664,
      4670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4670,
    "end": 4671,
    "range": [
      4670,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4671,
    "end": 4672,
    "range": [
      4671,
      4672
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4673,
    "end": 4676,
    "range": [
      4673,
      4676
    ]
  },
  {
    "type": "Identifier",
    "value": "unionWithAbstractSignature",
    "start": 4677,
    "end": 4703,
    "range": [
      4677,
      4703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4703,
    "end": 4704,
    "range": [
      4703,
      4704
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4704,
    "end": 4711,
    "range": [
      4704,
      4711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  }
]
```
