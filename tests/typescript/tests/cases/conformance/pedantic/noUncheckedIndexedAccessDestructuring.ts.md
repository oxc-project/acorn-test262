__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 24,
                  "end": 30
                },
                "start": 24,
                "end": 32
              },
              "start": 22,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 32
        }
      ],
      "declare": true,
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  }
                ],
                "start": 61,
                "end": 77
              },
              "start": 59,
              "end": 77
            },
            "start": 48,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 77
        }
      ],
      "declare": true,
      "start": 34,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 193
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 205
          },
          "definite": false,
          "start": 190,
          "end": 205
        }
      ],
      "declare": false,
      "start": 184,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 207,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 207,
        "end": 220
      },
      "directive": null,
      "start": 207,
      "end": 221
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 334
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 329,
                "end": 334
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 335
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 346
          },
          "definite": false,
          "start": 328,
          "end": 346
        }
      ],
      "declare": false,
      "start": 322,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 348,
          "end": 355
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 365
          }
        ],
        "optional": false,
        "start": 348,
        "end": 366
      },
      "directive": null,
      "start": 348,
      "end": 367
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              null,
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 504
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 499,
                "end": 504
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 505
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 516
          },
          "definite": false,
          "start": 494,
          "end": 516
        }
      ],
      "declare": false,
      "start": 488,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 520
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 525
          },
          "optional": false,
          "computed": false,
          "start": 518,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 535
          }
        ],
        "optional": false,
        "start": 518,
        "end": 536
      },
      "directive": null,
      "start": 518,
      "end": 537
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 673,
                            "end": 679
                          },
                          "start": 671,
                          "end": 679
                        },
                        "start": 670,
                        "end": 679
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 682,
                        "end": 688
                      },
                      "start": 680,
                      "end": 688
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 669,
                    "end": 688
                  }
                ],
                "start": 667,
                "end": 690
              },
              "start": 665,
              "end": 690
            },
            "start": 659,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 659,
          "end": 690
        }
      ],
      "declare": true,
      "start": 645,
      "end": 691
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 703
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 703
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 701,
                "end": 703
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 705
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 714
          },
          "definite": false,
          "start": 699,
          "end": 714
        }
      ],
      "declare": false,
      "start": 693,
      "end": 715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 718
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 716,
          "end": 727
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 716,
        "end": 729
      },
      "directive": null,
      "start": 716,
      "end": 730
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 784
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 779,
                "end": 784
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 786
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 795
          },
          "definite": false,
          "start": 777,
          "end": 795
        }
      ],
      "declare": false,
      "start": 771,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 799
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "optional": false,
            "computed": false,
            "start": 797,
            "end": 801
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 797,
          "end": 810
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 797,
        "end": 812
      },
      "directive": null,
      "start": 797,
      "end": 813
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numMapPoint",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 907,
                          "end": 908
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 910,
                            "end": 916
                          },
                          "start": 908,
                          "end": 916
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 907,
                        "end": 917
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 919
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 921,
                            "end": 927
                          },
                          "start": 919,
                          "end": 927
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 918,
                        "end": 927
                      }
                    ],
                    "start": 905,
                    "end": 928
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 937,
                                "end": 943
                              },
                              "start": 935,
                              "end": 943
                            },
                            "start": 934,
                            "end": 943
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 946,
                            "end": 952
                          },
                          "start": 944,
                          "end": 952
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 933,
                        "end": 952
                      }
                    ],
                    "start": 931,
                    "end": 954
                  }
                ],
                "start": 905,
                "end": 954
              },
              "start": 903,
              "end": 954
            },
            "start": 892,
            "end": 954
          },
          "init": null,
          "definite": false,
          "start": 892,
          "end": 954
        }
      ],
      "declare": true,
      "start": 878,
      "end": 955
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 971
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 971
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 970,
                    "end": 971
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 973,
                    "end": 974
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 976,
                    "end": 977
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 979
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 993
              },
              "definite": false,
              "start": 968,
              "end": 993
            }
          ],
          "declare": false,
          "start": 962,
          "end": 994
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 999,
                "end": 1000
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1008
              },
              "optional": false,
              "computed": false,
              "start": 999,
              "end": 1008
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 999,
            "end": 1010
          },
          "directive": null,
          "start": 999,
          "end": 1011
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1030
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1038
              },
              "optional": false,
              "computed": false,
              "start": 1029,
              "end": 1038
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1029,
            "end": 1040
          },
          "directive": null,
          "start": 1029,
          "end": 1041
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1060
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1061,
                "end": 1068
              },
              "optional": false,
              "computed": false,
              "start": 1059,
              "end": 1068
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1059,
            "end": 1070
          },
          "directive": null,
          "start": 1059,
          "end": 1071
        }
      ],
      "start": 956,
      "end": 1089
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1105,
                      "end": 1106
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1105,
                      "end": 1106
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1105,
                    "end": 1106
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1112
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1108,
                    "end": 1112
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1114
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 1117,
                "end": 1128
              },
              "definite": false,
              "start": 1103,
              "end": 1128
            }
          ],
          "declare": false,
          "start": 1097,
          "end": 1129
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1143
              },
              "optional": false,
              "computed": false,
              "start": 1134,
              "end": 1143
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1134,
            "end": 1145
          },
          "directive": null,
          "start": 1134,
          "end": 1146
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1165
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1167
                },
                "optional": false,
                "computed": false,
                "start": 1164,
                "end": 1167
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1175
              },
              "optional": false,
              "computed": false,
              "start": 1164,
              "end": 1175
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1164,
            "end": 1177
          },
          "directive": null,
          "start": 1164,
          "end": 1178
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1199
                },
                "optional": false,
                "computed": false,
                "start": 1196,
                "end": 1199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1207
              },
              "optional": false,
              "computed": false,
              "start": 1196,
              "end": 1207
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1196,
            "end": 1209
          },
          "directive": null,
          "start": 1196,
          "end": 1210
        }
      ],
      "start": 1091,
      "end": 1228
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1244,
                      "end": 1245
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1244,
                      "end": 1245
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1244,
                    "end": 1245
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1247,
                    "end": 1251
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1253
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1267
              },
              "definite": false,
              "start": 1242,
              "end": 1267
            }
          ],
          "declare": false,
          "start": 1236,
          "end": 1268
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1287
              },
              "optional": false,
              "computed": false,
              "start": 1273,
              "end": 1287
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1273,
            "end": 1289
          },
          "directive": null,
          "start": 1273,
          "end": 1290
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1309,
                  "end": 1310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1317
                },
                "optional": false,
                "computed": false,
                "start": 1309,
                "end": 1317
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1318,
                "end": 1325
              },
              "optional": false,
              "computed": false,
              "start": 1309,
              "end": 1325
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1309,
            "end": 1327
          },
          "directive": null,
          "start": 1309,
          "end": 1328
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1348
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1355
                },
                "optional": false,
                "computed": false,
                "start": 1347,
                "end": 1355
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1363
              },
              "optional": false,
              "computed": false,
              "start": 1347,
              "end": 1363
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1347,
            "end": 1365
          },
          "directive": null,
          "start": 1347,
          "end": 1366
        }
      ],
      "start": 1230,
      "end": 1384
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target_string",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1414,
                "end": 1420
              },
              "start": 1412,
              "end": 1420
            },
            "start": 1399,
            "end": 1420
          },
          "init": null,
          "definite": false,
          "start": 1399,
          "end": 1420
        }
      ],
      "declare": true,
      "start": 1387,
      "end": 1421
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target_string_undef",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1455,
                    "end": 1461
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1464,
                    "end": 1473
                  }
                ],
                "start": 1455,
                "end": 1473
              },
              "start": 1453,
              "end": 1473
            },
            "start": 1434,
            "end": 1473
          },
          "init": null,
          "definite": false,
          "start": 1434,
          "end": 1473
        }
      ],
      "declare": true,
      "start": 1422,
      "end": 1474
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target_string_arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1506,
                  "end": 1512
                },
                "start": 1506,
                "end": 1514
              },
              "start": 1504,
              "end": 1514
            },
            "start": 1487,
            "end": 1514
          },
          "init": null,
          "definite": false,
          "start": 1487,
          "end": 1514
        }
      ],
      "declare": true,
      "start": 1475,
      "end": 1515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target_string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1551
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1552
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1555,
          "end": 1563
        },
        "start": 1537,
        "end": 1563
      },
      "directive": null,
      "start": 1537,
      "end": 1564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target_string_undef",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1601
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1581,
          "end": 1602
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1605,
          "end": 1613
        },
        "start": 1581,
        "end": 1613
      },
      "directive": null,
      "start": 1581,
      "end": 1614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            null,
            null,
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "target_string_arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1654
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1634,
              "end": 1654
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1655
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1658,
          "end": 1666
        },
        "start": 1629,
        "end": 1666
      },
      "directive": null,
      "start": 1629,
      "end": 1667
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1695,
                    "end": 1701
                  },
                  "start": 1693,
                  "end": 1701
                },
                "start": 1692,
                "end": 1701
              },
              "init": null,
              "definite": false,
              "start": 1692,
              "end": 1701
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1706,
                    "end": 1712
                  },
                  "start": 1704,
                  "end": 1712
                },
                "start": 1703,
                "end": 1712
              },
              "init": null,
              "definite": false,
              "start": 1703,
              "end": 1712
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1717,
                        "end": 1723
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1726,
                        "end": 1735
                      }
                    ],
                    "start": 1717,
                    "end": 1735
                  },
                  "start": 1715,
                  "end": 1735
                },
                "start": 1714,
                "end": 1735
              },
              "init": null,
              "definite": false,
              "start": 1714,
              "end": 1735
            }
          ],
          "declare": false,
          "start": 1688,
          "end": 1736
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1745
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1745
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1744,
                  "end": 1745
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1747,
                  "end": 1748
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1751
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1751
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1750,
                  "end": 1751
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1742,
              "end": 1753
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMapPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1767
            },
            "start": 1742,
            "end": 1767
          },
          "directive": null,
          "start": 1741,
          "end": 1769
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1795,
                    "end": 1801
                  },
                  "start": 1793,
                  "end": 1801
                },
                "start": 1792,
                "end": 1801
              },
              "init": null,
              "definite": false,
              "start": 1792,
              "end": 1801
            }
          ],
          "declare": false,
          "start": 1788,
          "end": 1802
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1811
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1811
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1810,
                  "end": 1811
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1813
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMapPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1827
            },
            "start": 1808,
            "end": 1827
          },
          "directive": null,
          "start": 1807,
          "end": 1829
        }
      ],
      "start": 1682,
      "end": 1847
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1847
}
```
