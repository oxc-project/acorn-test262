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
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 4,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 34,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 70,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 383,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 387,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 474,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 490,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 522,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 541,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 568,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 591,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 657,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 661,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 700,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 756,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 788,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 800,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 816,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 849,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 864,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 868,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 896,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 910,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 975,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 979,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1042,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1093,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1124,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1137,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1168,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1206,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1237,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1280,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1348,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1394,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1425,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1434,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1457,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1473,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1545,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1580,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1619,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1699,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1735,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1752,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1805,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1809,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1867,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1900,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1928,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1932,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1965,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1974,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 1989,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2028,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2040,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2049,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2063,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2071,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2083,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2092,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2103,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2114,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2118,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2146,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2156,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2167,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2171,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2199,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2208,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2213,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2224,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2228,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2256,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2265,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2302,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2313,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2317,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2362,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2393,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2401,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2413,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2422,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2436,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2444,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2455,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2464,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2474,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2485,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2489,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2517,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2554,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2565,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2569,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2606,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2638,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2649,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2653,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2681,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2690,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2727,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2738,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2742,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2801,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2805,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2836,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2844,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2856,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2865,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2879,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2887,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2896,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2907,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2918,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2922,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2950,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2987,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2998,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3002,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3030,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3039,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3050,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3061,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3065,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3093,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3102,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3126,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3137,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3141,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3200,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3204,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3231,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3239,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3247,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3253,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3264,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3278,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3286,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3294,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3300,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3311,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3321,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3332,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3336,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3360,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3370,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3381,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3385,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3409,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3418,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3423,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3434,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3438,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3462,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3471,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3475,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3480,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3491,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3495,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3519,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3528,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3565,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3576,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3580,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3617,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3621,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3648,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3656,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3664,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3670,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3681,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3695,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3703,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3714,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3723,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3733,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3744,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3748,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3772,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3809,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3820,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3824,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3848,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3857,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3889,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3900,
    "end": 3903
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3904,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3928,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3937,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3941,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3973,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3984,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3988,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4012,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4021,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4058,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4069,
    "end": 4072
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 4073,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4128,
    "end": 4131
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4132,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4159,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4167,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4175,
    "end": 4178
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4181,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4192,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4206,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4214,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4223,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4233,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4244,
    "end": 4247
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4248,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4272,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4309,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4320,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4324,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4348,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4357,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4368,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4379,
    "end": 4382
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4383,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4406,
    "end": 4407
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4407,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4416,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4420,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4431,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4442,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4446,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4470,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4479,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4503,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4514,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4518,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4573,
    "end": 4576
  },
  {
    "type": "Identifier",
    "value": "unionWithAbstractSignature",
    "start": 4577,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 4606,
    "end": 4614
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4615,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4623,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4631,
    "end": 4633
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4634,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4645,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4653,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4661,
    "end": 4663
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4664,
    "end": 4670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4670,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4671,
    "end": 4672
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4673,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "unionWithAbstractSignature",
    "start": 4677,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4704,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4712,
    "end": 4713
  }
]
```
