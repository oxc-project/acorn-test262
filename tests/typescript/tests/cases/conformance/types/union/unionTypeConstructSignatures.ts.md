__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4713,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 28,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 65,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 64,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 95,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 473,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 472,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 472,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 413,
              "end": 472,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 415,
                "end": 472,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 415,
                    "end": 443,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 417,
                        "end": 441,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 422,
                            "end": 431,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 423,
                              "end": 431,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 425,
                                "end": 431
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 432,
                          "end": 440,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 434,
                            "end": 440
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 446,
                    "end": 472,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 448,
                        "end": 470,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 453,
                            "end": 462,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 454,
                              "end": 462,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 456,
                                "end": 462
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 463,
                          "end": 469,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 465,
                            "end": 469,
                            "typeName": {
                              "type": "Identifier",
                              "start": 465,
                              "end": 469,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 474,
      "end": 521,
      "expression": {
        "type": "AssignmentExpression",
        "start": 474,
        "end": 520,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 474,
          "end": 483,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 486,
          "end": 520,
          "callee": {
            "type": "Identifier",
            "start": 490,
            "end": 516,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 517,
              "end": 519,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 577,
      "expression": {
        "type": "AssignmentExpression",
        "start": 522,
        "end": 576,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 522,
          "end": 534,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 537,
          "end": 576,
          "callee": {
            "type": "Identifier",
            "start": 541,
            "end": 567,
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 568,
              "end": 575,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 587,
      "end": 625,
      "expression": {
        "type": "NewExpression",
        "start": 587,
        "end": 624,
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 618,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 619,
            "end": 623,
            "value": true,
            "raw": "true"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 799,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 798,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 798,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 798,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 690,
                "end": 798,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 690,
                    "end": 743,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 692,
                        "end": 716,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 697,
                            "end": 706,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 698,
                              "end": 706,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 700,
                                "end": 706
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 707,
                          "end": 715,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 709,
                            "end": 715
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 717,
                        "end": 741,
                        "typeParameters": null,
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
                          "end": 740,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 734,
                            "end": 740
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 746,
                    "end": 798,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 748,
                        "end": 770,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 753,
                            "end": 762,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 754,
                              "end": 762,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 756,
                                "end": 762
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 763,
                          "end": 769,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 765,
                            "end": 769,
                            "typeName": {
                              "type": "Identifier",
                              "start": 765,
                              "end": 769,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 771,
                        "end": 796,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 776,
                            "end": 785,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 777,
                              "end": 785,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 779,
                                "end": 785
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 786,
                          "end": 795,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 788,
                            "end": 795
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 800,
      "end": 848,
      "expression": {
        "type": "AssignmentExpression",
        "start": 800,
        "end": 847,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 800,
          "end": 809,
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 812,
          "end": 847,
          "callee": {
            "type": "Identifier",
            "start": 816,
            "end": 843,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 844,
              "end": 846,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 849,
      "end": 905,
      "expression": {
        "type": "AssignmentExpression",
        "start": 849,
        "end": 904,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 849,
          "end": 861,
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 864,
          "end": 904,
          "callee": {
            "type": "Identifier",
            "start": 868,
            "end": 895,
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 896,
              "end": 903,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 906,
      "end": 944,
      "expression": {
        "type": "NewExpression",
        "start": 906,
        "end": 943,
        "callee": {
          "type": "Identifier",
          "start": 910,
          "end": 937,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 938,
            "end": 942,
            "value": true,
            "raw": "true"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 975,
      "end": 1009,
      "expression": {
        "type": "NewExpression",
        "start": 975,
        "end": 1008,
        "callee": {
          "type": "Identifier",
          "start": 979,
          "end": 1006,
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1038,
      "end": 1132,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1131,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1131,
            "decorators": [],
            "name": "unionOfDifferentParameterTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1072,
              "end": 1131,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1074,
                "end": 1131,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1074,
                    "end": 1102,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1076,
                        "end": 1100,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1081,
                            "end": 1090,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1082,
                              "end": 1090,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1084,
                                "end": 1090
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1091,
                          "end": 1099,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1093,
                            "end": 1099
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1105,
                    "end": 1131,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1107,
                        "end": 1129,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1112,
                            "end": 1121,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1113,
                              "end": 1121,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1115,
                                "end": 1121
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1122,
                          "end": 1128,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1124,
                            "end": 1128,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1124,
                              "end": 1128,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1172,
      "expression": {
        "type": "NewExpression",
        "start": 1133,
        "end": 1171,
        "callee": {
          "type": "Identifier",
          "start": 1137,
          "end": 1167,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1168,
            "end": 1170,
            "value": 10,
            "raw": "10"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1202,
      "end": 1246,
      "expression": {
        "type": "NewExpression",
        "start": 1202,
        "end": 1245,
        "callee": {
          "type": "Identifier",
          "start": 1206,
          "end": 1236,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1237,
            "end": 1244,
            "value": "hello",
            "raw": "\"hello\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1276,
      "end": 1313,
      "expression": {
        "type": "NewExpression",
        "start": 1276,
        "end": 1312,
        "callee": {
          "type": "Identifier",
          "start": 1280,
          "end": 1310,
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1344,
      "end": 1468,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1348,
          "end": 1467,
          "id": {
            "type": "Identifier",
            "start": 1348,
            "end": 1467,
            "decorators": [],
            "name": "unionOfDifferentNumberOfSignatures",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1382,
              "end": 1467,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1384,
                "end": 1467,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1384,
                    "end": 1412,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1386,
                        "end": 1410,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1391,
                            "end": 1400,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1392,
                              "end": 1400,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1394,
                                "end": 1400
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1401,
                          "end": 1409,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1403,
                            "end": 1409
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1415,
                    "end": 1467,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1417,
                        "end": 1439,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1422,
                            "end": 1431,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1423,
                              "end": 1431,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1425,
                                "end": 1431
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1432,
                          "end": 1438,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1434,
                            "end": 1438,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1434,
                              "end": 1438,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1440,
                        "end": 1465,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1445,
                            "end": 1454,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1446,
                              "end": 1454,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1448,
                                "end": 1454
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1455,
                          "end": 1464,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1457,
                            "end": 1464
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1469,
      "end": 1510,
      "expression": {
        "type": "NewExpression",
        "start": 1469,
        "end": 1509,
        "callee": {
          "type": "Identifier",
          "start": 1473,
          "end": 1507,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1541,
      "end": 1584,
      "expression": {
        "type": "NewExpression",
        "start": 1541,
        "end": 1583,
        "callee": {
          "type": "Identifier",
          "start": 1545,
          "end": 1579,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1580,
            "end": 1582,
            "value": 10,
            "raw": "10"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1615,
      "end": 1663,
      "expression": {
        "type": "NewExpression",
        "start": 1615,
        "end": 1662,
        "callee": {
          "type": "Identifier",
          "start": 1619,
          "end": 1653,
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1654,
            "end": 1661,
            "value": "hello",
            "raw": "\"hello\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1695,
      "end": 1804,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1699,
          "end": 1803,
          "id": {
            "type": "Identifier",
            "start": 1699,
            "end": 1803,
            "decorators": [],
            "name": "unionWithDifferentParameterCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1731,
              "end": 1803,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1733,
                "end": 1803,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1733,
                    "end": 1761,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1735,
                        "end": 1759,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1740,
                            "end": 1749,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1741,
                              "end": 1749,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1743,
                                "end": 1749
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1750,
                          "end": 1758,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1752,
                            "end": 1758
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1764,
                    "end": 1803,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1766,
                        "end": 1801,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1771,
                            "end": 1780,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1772,
                              "end": 1780,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1774,
                                "end": 1780
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1782,
                            "end": 1791,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1783,
                              "end": 1791,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1785,
                                "end": 1791
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1792,
                          "end": 1800,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1794,
                            "end": 1800
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1805,
      "end": 1844,
      "expression": {
        "type": "NewExpression",
        "start": 1805,
        "end": 1843,
        "callee": {
          "type": "Identifier",
          "start": 1809,
          "end": 1841,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1863,
      "end": 1909,
      "expression": {
        "type": "NewExpression",
        "start": 1863,
        "end": 1908,
        "callee": {
          "type": "Identifier",
          "start": 1867,
          "end": 1899,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1900,
            "end": 1907,
            "value": "hello",
            "raw": "\"hello\""
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1928,
      "end": 1978,
      "expression": {
        "type": "NewExpression",
        "start": 1928,
        "end": 1977,
        "callee": {
          "type": "Identifier",
          "start": 1932,
          "end": 1964,
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1965,
            "end": 1972,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1974,
            "end": 1976,
            "value": 10,
            "raw": "10"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1985,
      "end": 2102,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1989,
          "end": 2101,
          "id": {
            "type": "Identifier",
            "start": 1989,
            "end": 2101,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2016,
              "end": 2101,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2018,
                "end": 2101,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2018,
                    "end": 2058,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2020,
                        "end": 2056,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2025,
                            "end": 2034,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2026,
                              "end": 2034,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2028,
                                "end": 2034
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2036,
                            "end": 2046,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2038,
                              "end": 2046,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2040,
                                "end": 2046
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2047,
                          "end": 2055,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2049,
                            "end": 2055
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2061,
                    "end": 2101,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2063,
                        "end": 2099,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2068,
                            "end": 2077,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2069,
                              "end": 2077,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2071,
                                "end": 2077
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2079,
                            "end": 2089,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2081,
                              "end": 2089,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2083,
                                "end": 2089
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2090,
                          "end": 2098,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2092,
                            "end": 2098
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2103,
      "end": 2155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2103,
        "end": 2154,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2103,
          "end": 2111,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2114,
          "end": 2154,
          "callee": {
            "type": "Identifier",
            "start": 2118,
            "end": 2145,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2146,
              "end": 2153,
              "value": "hello",
              "raw": "'hello'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2156,
      "end": 2212,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2156,
        "end": 2211,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2156,
          "end": 2164,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2167,
          "end": 2211,
          "callee": {
            "type": "Identifier",
            "start": 2171,
            "end": 2198,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2199,
              "end": 2206,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 2208,
              "end": 2210,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2213,
      "end": 2274,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2213,
        "end": 2273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2213,
          "end": 2221,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2224,
          "end": 2273,
          "callee": {
            "type": "Identifier",
            "start": 2228,
            "end": 2255,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2256,
              "end": 2263,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 2265,
              "end": 2272,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2302,
      "end": 2347,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2302,
        "end": 2346,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2302,
          "end": 2310,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2313,
          "end": 2346,
          "callee": {
            "type": "Identifier",
            "start": 2317,
            "end": 2344,
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2358,
      "end": 2473,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2362,
          "end": 2472,
          "id": {
            "type": "Identifier",
            "start": 2362,
            "end": 2472,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2389,
              "end": 2472,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2391,
                "end": 2472,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2391,
                    "end": 2431,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2393,
                        "end": 2429,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2398,
                            "end": 2407,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2399,
                              "end": 2407,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2401,
                                "end": 2407
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2409,
                            "end": 2419,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2411,
                              "end": 2419,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2413,
                                "end": 2419
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2420,
                          "end": 2428,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2422,
                            "end": 2428
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2434,
                    "end": 2472,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2436,
                        "end": 2470,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2441,
                            "end": 2450,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2442,
                              "end": 2450,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2444,
                                "end": 2450
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2452,
                            "end": 2461,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2453,
                              "end": 2461,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2455,
                                "end": 2461
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2462,
                          "end": 2470,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2464,
                            "end": 2470
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2474,
      "end": 2526,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2474,
        "end": 2525,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2474,
          "end": 2482,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2485,
          "end": 2525,
          "callee": {
            "type": "Identifier",
            "start": 2489,
            "end": 2516,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2517,
              "end": 2524,
              "value": "hello",
              "raw": "'hello'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2554,
      "end": 2610,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2554,
        "end": 2609,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2554,
          "end": 2562,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2565,
          "end": 2609,
          "callee": {
            "type": "Identifier",
            "start": 2569,
            "end": 2596,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2597,
              "end": 2604,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 2606,
              "end": 2608,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2638,
      "end": 2699,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2638,
        "end": 2698,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2638,
          "end": 2646,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2649,
          "end": 2698,
          "callee": {
            "type": "Identifier",
            "start": 2653,
            "end": 2680,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2681,
              "end": 2688,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 2690,
              "end": 2697,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2727,
      "end": 2772,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2727,
        "end": 2771,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2727,
          "end": 2735,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2738,
          "end": 2771,
          "callee": {
            "type": "Identifier",
            "start": 2742,
            "end": 2769,
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2801,
      "end": 2906,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2805,
          "end": 2905,
          "id": {
            "type": "Identifier",
            "start": 2805,
            "end": 2905,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2832,
              "end": 2905,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2834,
                "end": 2905,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2834,
                    "end": 2874,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2836,
                        "end": 2872,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2841,
                            "end": 2850,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2842,
                              "end": 2850,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2844,
                                "end": 2850
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2852,
                            "end": 2862,
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2854,
                              "end": 2862,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2856,
                                "end": 2862
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2863,
                          "end": 2871,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2865,
                            "end": 2871
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2877,
                    "end": 2905,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 2879,
                        "end": 2903,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2884,
                            "end": 2893,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2885,
                              "end": 2893,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2887,
                                "end": 2893
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2894,
                          "end": 2902,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2896,
                            "end": 2902
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2907,
      "end": 2959,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2907,
        "end": 2958,
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
          "type": "NewExpression",
          "start": 2918,
          "end": 2958,
          "callee": {
            "type": "Identifier",
            "start": 2922,
            "end": 2949,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2950,
              "end": 2957,
              "value": "hello",
              "raw": "'hello'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2987,
      "end": 3043,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2987,
        "end": 3042,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2987,
          "end": 2995,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 2998,
          "end": 3042,
          "callee": {
            "type": "Identifier",
            "start": 3002,
            "end": 3029,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3030,
              "end": 3037,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3039,
              "end": 3041,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3050,
      "end": 3111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3050,
        "end": 3110,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3050,
          "end": 3058,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3061,
          "end": 3110,
          "callee": {
            "type": "Identifier",
            "start": 3065,
            "end": 3092,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3093,
              "end": 3100,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3102,
              "end": 3109,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3126,
      "end": 3171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3126,
        "end": 3170,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3126,
          "end": 3134,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3137,
          "end": 3170,
          "callee": {
            "type": "Identifier",
            "start": 3141,
            "end": 3168,
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3200,
      "end": 3320,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3204,
          "end": 3319,
          "id": {
            "type": "Identifier",
            "start": 3204,
            "end": 3319,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3227,
              "end": 3319,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3229,
                "end": 3319,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3229,
                    "end": 3273,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3231,
                        "end": 3271,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3236,
                            "end": 3245,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3237,
                              "end": 3245,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3239,
                                "end": 3245
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3247,
                            "end": 3261,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 3250,
                              "end": 3251,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3251,
                              "end": 3261,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3253,
                                "end": 3261,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3253,
                                  "end": 3259
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3262,
                          "end": 3270,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3264,
                            "end": 3270
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3276,
                    "end": 3319,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3278,
                        "end": 3317,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3283,
                            "end": 3292,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3284,
                              "end": 3292,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3286,
                                "end": 3292
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3294,
                            "end": 3308,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 3297,
                              "end": 3298,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3298,
                              "end": 3308,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3300,
                                "end": 3308,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3300,
                                  "end": 3306
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3309,
                          "end": 3317,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3311,
                            "end": 3317
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3321,
      "end": 3369,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3321,
        "end": 3368,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3321,
          "end": 3329,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3332,
          "end": 3368,
          "callee": {
            "type": "Identifier",
            "start": 3336,
            "end": 3359,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3360,
              "end": 3367,
              "value": "hello",
              "raw": "'hello'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3370,
      "end": 3422,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3370,
        "end": 3421,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3370,
          "end": 3378,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3381,
          "end": 3421,
          "callee": {
            "type": "Identifier",
            "start": 3385,
            "end": 3408,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3409,
              "end": 3416,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3418,
              "end": 3420,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3423,
      "end": 3479,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3423,
        "end": 3478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3423,
          "end": 3431,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3434,
          "end": 3478,
          "callee": {
            "type": "Identifier",
            "start": 3438,
            "end": 3461,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3462,
              "end": 3469,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3471,
              "end": 3473,
              "value": 10,
              "raw": "10"
            },
            {
              "type": "Literal",
              "start": 3475,
              "end": 3477,
              "value": 11,
              "raw": "11"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3480,
      "end": 3537,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3480,
        "end": 3536,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3480,
          "end": 3488,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3491,
          "end": 3536,
          "callee": {
            "type": "Identifier",
            "start": 3495,
            "end": 3518,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3519,
              "end": 3526,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3528,
              "end": 3535,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3565,
      "end": 3606,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3565,
        "end": 3605,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3565,
          "end": 3573,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3576,
          "end": 3605,
          "callee": {
            "type": "Identifier",
            "start": 3580,
            "end": 3603,
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3617,
      "end": 3732,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3621,
          "end": 3731,
          "id": {
            "type": "Identifier",
            "start": 3621,
            "end": 3731,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3644,
              "end": 3731,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3646,
                "end": 3731,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3646,
                    "end": 3690,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3648,
                        "end": 3688,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3653,
                            "end": 3662,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3654,
                              "end": 3662,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3656,
                                "end": 3662
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 3664,
                            "end": 3678,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 3667,
                              "end": 3668,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3668,
                              "end": 3678,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3670,
                                "end": 3678,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3670,
                                  "end": 3676
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3679,
                          "end": 3687,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3681,
                            "end": 3687
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 3693,
                    "end": 3731,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 3695,
                        "end": 3729,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3700,
                            "end": 3709,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3701,
                              "end": 3709,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3703,
                                "end": 3709
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 3711,
                            "end": 3720,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3712,
                              "end": 3720,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3714,
                                "end": 3720
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3721,
                          "end": 3729,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3723,
                            "end": 3729
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3733,
      "end": 3781,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3733,
        "end": 3780,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3733,
          "end": 3741,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3744,
          "end": 3780,
          "callee": {
            "type": "Identifier",
            "start": 3748,
            "end": 3771,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3772,
              "end": 3779,
              "value": "hello",
              "raw": "'hello'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3809,
      "end": 3861,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3809,
        "end": 3860,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3809,
          "end": 3817,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3820,
          "end": 3860,
          "callee": {
            "type": "Identifier",
            "start": 3824,
            "end": 3847,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3848,
              "end": 3855,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3857,
              "end": 3859,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3889,
      "end": 3945,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3889,
        "end": 3944,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3889,
          "end": 3897,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3900,
          "end": 3944,
          "callee": {
            "type": "Identifier",
            "start": 3904,
            "end": 3927,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 3928,
              "end": 3935,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 3937,
              "end": 3939,
              "value": 10,
              "raw": "10"
            },
            {
              "type": "Literal",
              "start": 3941,
              "end": 3943,
              "value": 11,
              "raw": "11"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3973,
      "end": 4030,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3973,
        "end": 4029,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3973,
          "end": 3981,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 3984,
          "end": 4029,
          "callee": {
            "type": "Identifier",
            "start": 3988,
            "end": 4011,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 4012,
              "end": 4019,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 4021,
              "end": 4028,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4058,
      "end": 4099,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4058,
        "end": 4098,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4058,
          "end": 4066,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 4069,
          "end": 4098,
          "callee": {
            "type": "Identifier",
            "start": 4073,
            "end": 4096,
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4128,
      "end": 4232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4132,
          "end": 4231,
          "id": {
            "type": "Identifier",
            "start": 4132,
            "end": 4231,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4155,
              "end": 4231,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4157,
                "end": 4231,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 4157,
                    "end": 4201,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 4159,
                        "end": 4199,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4164,
                            "end": 4173,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4165,
                              "end": 4173,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4167,
                                "end": 4173
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 4175,
                            "end": 4189,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 4178,
                              "end": 4179,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4179,
                              "end": 4189,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 4181,
                                "end": 4189,
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4181,
                                  "end": 4187
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4190,
                          "end": 4198,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4192,
                            "end": 4198
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 4204,
                    "end": 4231,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 4206,
                        "end": 4229,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 4211,
                            "end": 4220,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4212,
                              "end": 4220,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4214,
                                "end": 4220
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4221,
                          "end": 4229,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4223,
                            "end": 4229
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4233,
      "end": 4281,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4233,
        "end": 4280,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4233,
          "end": 4241,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 4244,
          "end": 4280,
          "callee": {
            "type": "Identifier",
            "start": 4248,
            "end": 4271,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 4272,
              "end": 4279,
              "value": "hello",
              "raw": "'hello'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4309,
      "end": 4361,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4309,
        "end": 4360,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4309,
          "end": 4317,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 4320,
          "end": 4360,
          "callee": {
            "type": "Identifier",
            "start": 4324,
            "end": 4347,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 4348,
              "end": 4355,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 4357,
              "end": 4359,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4368,
      "end": 4424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4368,
        "end": 4423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4368,
          "end": 4376,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 4379,
          "end": 4423,
          "callee": {
            "type": "Identifier",
            "start": 4383,
            "end": 4406,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 4407,
              "end": 4414,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 4416,
              "end": 4418,
              "value": 10,
              "raw": "10"
            },
            {
              "type": "Literal",
              "start": 4420,
              "end": 4422,
              "value": 11,
              "raw": "11"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4431,
      "end": 4488,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4431,
        "end": 4487,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4431,
          "end": 4439,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 4442,
          "end": 4487,
          "callee": {
            "type": "Identifier",
            "start": 4446,
            "end": 4469,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 4470,
              "end": 4477,
              "value": "hello",
              "raw": "'hello'"
            },
            {
              "type": "Literal",
              "start": 4479,
              "end": 4486,
              "value": "hello",
              "raw": "\"hello\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4503,
      "end": 4544,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4503,
        "end": 4543,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4503,
          "end": 4511,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 4514,
          "end": 4543,
          "callee": {
            "type": "Identifier",
            "start": 4518,
            "end": 4541,
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4573,
      "end": 4672,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4577,
          "end": 4671,
          "id": {
            "type": "Identifier",
            "start": 4577,
            "end": 4671,
            "decorators": [],
            "name": "unionWithAbstractSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4603,
              "end": 4671,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4605,
                "end": 4671,
                "types": [
                  {
                    "type": "TSConstructorType",
                    "start": 4606,
                    "end": 4640,
                    "abstract": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4620,
                        "end": 4629,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4621,
                          "end": 4629,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4623,
                            "end": 4629
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4631,
                      "end": 4640,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4634,
                        "end": 4640
                      }
                    }
                  },
                  {
                    "type": "TSConstructorType",
                    "start": 4645,
                    "end": 4670,
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4650,
                        "end": 4659,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4651,
                          "end": 4659,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4653,
                            "end": 4659
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4661,
                      "end": 4670,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4664,
                        "end": 4670
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4673,
      "end": 4713,
      "expression": {
        "type": "NewExpression",
        "start": 4673,
        "end": 4712,
        "callee": {
          "type": "Identifier",
          "start": 4677,
          "end": 4703,
          "decorators": [],
          "name": "unionWithAbstractSignature",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 4704,
            "end": 4711,
            "value": "hello",
            "raw": "'hello'"
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
