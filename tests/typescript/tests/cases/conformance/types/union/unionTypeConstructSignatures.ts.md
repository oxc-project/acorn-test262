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
