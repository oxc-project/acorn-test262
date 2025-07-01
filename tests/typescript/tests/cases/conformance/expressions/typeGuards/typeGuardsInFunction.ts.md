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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 165,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 176
        }
      ],
      "declare": false,
      "start": 161,
      "end": 177
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
                  }
                ],
                "start": 188,
                "end": 203
              },
              "start": 186,
              "end": 203
            },
            "start": 182,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 203
        }
      ],
      "declare": false,
      "start": 178,
      "end": 204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 246
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 263,
                  "end": 269
                }
              ],
              "start": 254,
              "end": 269
            },
            "start": 252,
            "end": 269
          },
          "start": 247,
          "end": 269
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 323
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 338
                    },
                    "prefix": true,
                    "start": 327,
                    "end": 338
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 343,
                    "end": 351
                  },
                  "start": 327,
                  "end": 351
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 359
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 355,
                  "end": 366
                },
                "start": 327,
                "end": 366
              },
              "start": 320,
              "end": 366
            },
            "directive": null,
            "start": 320,
            "end": 367
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 434,
                          "end": 440
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 443,
                          "end": 449
                        }
                      ],
                      "start": 434,
                      "end": 449
                    },
                    "start": 432,
                    "end": 449
                  },
                  "start": 428,
                  "end": 449
                },
                "init": null,
                "definite": false,
                "start": 428,
                "end": 449
              }
            ],
            "declare": false,
            "start": 424,
            "end": 450
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 458
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 472
                    },
                    "prefix": true,
                    "start": 461,
                    "end": 472
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 477,
                    "end": 485
                  },
                  "start": 461,
                  "end": 485
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 493
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 500
                },
                "start": 461,
                "end": 500
              },
              "start": 455,
              "end": 500
            },
            "directive": null,
            "start": 455,
            "end": 501
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 562
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 577
                    },
                    "prefix": true,
                    "start": 565,
                    "end": 577
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 582,
                    "end": 590
                  },
                  "start": 565,
                  "end": 590
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 599
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 606
                  },
                  "optional": false,
                  "computed": false,
                  "start": 594,
                  "end": 606
                },
                "start": 565,
                "end": 606
              },
              "start": 559,
              "end": 606
            },
            "directive": null,
            "start": 559,
            "end": 607
          }
        ],
        "start": 271,
        "end": 619
      },
      "expression": false,
      "start": 236,
      "end": 619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 669,
                  "end": 675
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 678,
                  "end": 684
                }
              ],
              "start": 669,
              "end": 684
            },
            "start": 667,
            "end": 684
          },
          "start": 662,
          "end": 684
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 702,
                          "end": 708
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 711,
                          "end": 717
                        }
                      ],
                      "start": 702,
                      "end": 717
                    },
                    "start": 700,
                    "end": 717
                  },
                  "start": 696,
                  "end": 717
                },
                "init": null,
                "definite": false,
                "start": 696,
                "end": 717
              }
            ],
            "declare": false,
            "start": 692,
            "end": 718
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 734
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 743,
                        "end": 749
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 752,
                        "end": 758
                      }
                    ],
                    "start": 743,
                    "end": 758
                  },
                  "start": 741,
                  "end": 758
                },
                "start": 735,
                "end": 758
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 820
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 830,
                            "end": 834
                          },
                          "prefix": true,
                          "start": 823,
                          "end": 834
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 839,
                          "end": 847
                        },
                        "start": 823,
                        "end": 847
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 855
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 856,
                          "end": 862
                        },
                        "optional": false,
                        "computed": false,
                        "start": 851,
                        "end": 862
                      },
                      "start": 823,
                      "end": 862
                    },
                    "start": 817,
                    "end": 862
                  },
                  "directive": null,
                  "start": 817,
                  "end": 863
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 936,
                      "end": 939
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 949,
                            "end": 953
                          },
                          "prefix": true,
                          "start": 942,
                          "end": 953
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 958,
                          "end": 966
                        },
                        "start": 942,
                        "end": 966
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 970,
                          "end": 974
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 975,
                          "end": 981
                        },
                        "optional": false,
                        "computed": false,
                        "start": 970,
                        "end": 981
                      },
                      "start": 942,
                      "end": 981
                    },
                    "start": 936,
                    "end": 981
                  },
                  "directive": null,
                  "start": 936,
                  "end": 982
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1045,
                      "end": 1048
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1058,
                            "end": 1063
                          },
                          "prefix": true,
                          "start": 1051,
                          "end": 1063
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1068,
                          "end": 1076
                        },
                        "start": 1051,
                        "end": 1076
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1080,
                          "end": 1085
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1086,
                          "end": 1092
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1080,
                        "end": 1092
                      },
                      "start": 1051,
                      "end": 1092
                    },
                    "start": 1045,
                    "end": 1092
                  },
                  "directive": null,
                  "start": 1045,
                  "end": 1093
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
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1140,
                                "end": 1146
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1149,
                                "end": 1155
                              }
                            ],
                            "start": 1140,
                            "end": 1155
                          },
                          "start": 1138,
                          "end": 1155
                        },
                        "start": 1134,
                        "end": 1155
                      },
                      "init": null,
                      "definite": false,
                      "start": 1134,
                      "end": 1155
                    }
                  ],
                  "declare": false,
                  "start": 1130,
                  "end": 1156
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1165,
                      "end": 1168
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1178,
                            "end": 1182
                          },
                          "prefix": true,
                          "start": 1171,
                          "end": 1182
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1187,
                          "end": 1195
                        },
                        "start": 1171,
                        "end": 1195
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1199,
                          "end": 1203
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1204,
                          "end": 1210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1199,
                        "end": 1210
                      },
                      "start": 1171,
                      "end": 1210
                    },
                    "start": 1165,
                    "end": 1210
                  },
                  "directive": null,
                  "start": 1165,
                  "end": 1211
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1230,
                      "end": 1233
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1243,
                            "end": 1249
                          },
                          "prefix": true,
                          "start": 1236,
                          "end": 1249
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1254,
                          "end": 1262
                        },
                        "start": 1236,
                        "end": 1262
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1266,
                          "end": 1272
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1273,
                          "end": 1279
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1266,
                        "end": 1279
                      },
                      "start": 1236,
                      "end": 1279
                    },
                    "start": 1230,
                    "end": 1279
                  },
                  "directive": null,
                  "start": 1230,
                  "end": 1280
                }
              ],
              "start": 760,
              "end": 1296
            },
            "expression": false,
            "start": 723,
            "end": 1296
          }
        ],
        "start": 686,
        "end": 1298
      },
      "expression": false,
      "start": 650,
      "end": 1298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1333
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1341,
                  "end": 1347
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1350,
                  "end": 1356
                }
              ],
              "start": 1341,
              "end": 1356
            },
            "start": 1339,
            "end": 1356
          },
          "start": 1334,
          "end": 1356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1415,
                          "end": 1421
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1424,
                          "end": 1430
                        }
                      ],
                      "start": 1415,
                      "end": 1430
                    },
                    "start": 1413,
                    "end": 1430
                  },
                  "start": 1409,
                  "end": 1430
                },
                "init": null,
                "definite": false,
                "start": 1409,
                "end": 1430
              }
            ],
            "declare": false,
            "start": 1405,
            "end": 1431
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1481,
                  "end": 1482
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1503,
                                "end": 1509
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1512,
                                "end": 1518
                              }
                            ],
                            "start": 1503,
                            "end": 1518
                          },
                          "start": 1501,
                          "end": 1518
                        },
                        "start": 1495,
                        "end": 1518
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1577,
                              "end": 1580
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1590,
                                    "end": 1594
                                  },
                                  "prefix": true,
                                  "start": 1583,
                                  "end": 1594
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1599,
                                  "end": 1607
                                },
                                "start": 1583,
                                "end": 1607
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1611,
                                  "end": 1615
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1616,
                                  "end": 1622
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1611,
                                "end": 1622
                              },
                              "start": 1583,
                              "end": 1622
                            },
                            "start": 1577,
                            "end": 1622
                          },
                          "directive": null,
                          "start": 1577,
                          "end": 1623
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1696,
                              "end": 1699
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1709,
                                    "end": 1713
                                  },
                                  "prefix": true,
                                  "start": 1702,
                                  "end": 1713
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1718,
                                  "end": 1726
                                },
                                "start": 1702,
                                "end": 1726
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1730,
                                  "end": 1734
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1735,
                                  "end": 1741
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1730,
                                "end": 1741
                              },
                              "start": 1702,
                              "end": 1741
                            },
                            "start": 1696,
                            "end": 1741
                          },
                          "directive": null,
                          "start": 1696,
                          "end": 1742
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1805,
                              "end": 1808
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1818,
                                    "end": 1823
                                  },
                                  "prefix": true,
                                  "start": 1811,
                                  "end": 1823
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1828,
                                  "end": 1836
                                },
                                "start": 1811,
                                "end": 1836
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1840,
                                  "end": 1845
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1846,
                                  "end": 1852
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1840,
                                "end": 1852
                              },
                              "start": 1811,
                              "end": 1852
                            },
                            "start": 1805,
                            "end": 1852
                          },
                          "directive": null,
                          "start": 1805,
                          "end": 1853
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
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 1900,
                                        "end": 1906
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 1909,
                                        "end": 1915
                                      }
                                    ],
                                    "start": 1900,
                                    "end": 1915
                                  },
                                  "start": 1898,
                                  "end": 1915
                                },
                                "start": 1894,
                                "end": 1915
                              },
                              "init": null,
                              "definite": false,
                              "start": 1894,
                              "end": 1915
                            }
                          ],
                          "declare": false,
                          "start": 1890,
                          "end": 1916
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1925,
                              "end": 1928
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1938,
                                    "end": 1942
                                  },
                                  "prefix": true,
                                  "start": 1931,
                                  "end": 1942
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 1947,
                                  "end": 1955
                                },
                                "start": 1931,
                                "end": 1955
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1959,
                                  "end": 1963
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1964,
                                  "end": 1970
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1959,
                                "end": 1970
                              },
                              "start": 1931,
                              "end": 1970
                            },
                            "start": 1925,
                            "end": 1970
                          },
                          "directive": null,
                          "start": 1925,
                          "end": 1971
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1990,
                              "end": 1993
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2003,
                                    "end": 2009
                                  },
                                  "prefix": true,
                                  "start": 1996,
                                  "end": 2009
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2014,
                                  "end": 2022
                                },
                                "start": 1996,
                                "end": 2022
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2026,
                                  "end": 2032
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2033,
                                  "end": 2039
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2026,
                                "end": 2039
                              },
                              "start": 1996,
                              "end": 2039
                            },
                            "start": 1990,
                            "end": 2039
                          },
                          "directive": null,
                          "start": 1990,
                          "end": 2040
                        }
                      ],
                      "start": 1520,
                      "end": 2056
                    },
                    "expression": false,
                    "start": 1485,
                    "end": 2056
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2058,
                      "end": 2063
                    }
                  ],
                  "optional": false,
                  "start": 1485,
                  "end": 2064
                },
                "definite": false,
                "start": 1481,
                "end": 2064
              }
            ],
            "declare": false,
            "start": 1477,
            "end": 2065
          }
        ],
        "start": 1358,
        "end": 2067
      },
      "expression": false,
      "start": 1322,
      "end": 2067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2097,
        "end": 2099
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2107,
                  "end": 2113
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2116,
                  "end": 2122
                }
              ],
              "start": 2107,
              "end": 2122
            },
            "start": 2105,
            "end": 2122
          },
          "start": 2100,
          "end": 2122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2181,
                          "end": 2187
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2190,
                          "end": 2196
                        }
                      ],
                      "start": 2181,
                      "end": 2196
                    },
                    "start": 2179,
                    "end": 2196
                  },
                  "start": 2175,
                  "end": 2196
                },
                "init": null,
                "definite": false,
                "start": 2175,
                "end": 2196
              }
            ],
            "declare": false,
            "start": 2171,
            "end": 2197
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2247,
                  "end": 2248
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "param1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 2261,
                                "end": 2267
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 2270,
                                "end": 2276
                              }
                            ],
                            "start": 2261,
                            "end": 2276
                          },
                          "start": 2259,
                          "end": 2276
                        },
                        "start": 2253,
                        "end": 2276
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2338,
                              "end": 2341
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2351,
                                    "end": 2355
                                  },
                                  "prefix": true,
                                  "start": 2344,
                                  "end": 2355
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2360,
                                  "end": 2368
                                },
                                "start": 2344,
                                "end": 2368
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2372,
                                  "end": 2376
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2377,
                                  "end": 2383
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2372,
                                "end": 2383
                              },
                              "start": 2344,
                              "end": 2383
                            },
                            "start": 2338,
                            "end": 2383
                          },
                          "directive": null,
                          "start": 2338,
                          "end": 2384
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2457,
                              "end": 2460
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2470,
                                    "end": 2474
                                  },
                                  "prefix": true,
                                  "start": 2463,
                                  "end": 2474
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2479,
                                  "end": 2487
                                },
                                "start": 2463,
                                "end": 2487
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2491,
                                  "end": 2495
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2496,
                                  "end": 2502
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2491,
                                "end": 2502
                              },
                              "start": 2463,
                              "end": 2502
                            },
                            "start": 2457,
                            "end": 2502
                          },
                          "directive": null,
                          "start": 2457,
                          "end": 2503
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2566,
                              "end": 2569
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2579,
                                    "end": 2584
                                  },
                                  "prefix": true,
                                  "start": 2572,
                                  "end": 2584
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2589,
                                  "end": 2597
                                },
                                "start": 2572,
                                "end": 2597
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2601,
                                  "end": 2606
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2607,
                                  "end": 2613
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2601,
                                "end": 2613
                              },
                              "start": 2572,
                              "end": 2613
                            },
                            "start": 2566,
                            "end": 2613
                          },
                          "directive": null,
                          "start": 2566,
                          "end": 2614
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
                                "name": "var3",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 2661,
                                        "end": 2667
                                      },
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 2670,
                                        "end": 2676
                                      }
                                    ],
                                    "start": 2661,
                                    "end": 2676
                                  },
                                  "start": 2659,
                                  "end": 2676
                                },
                                "start": 2655,
                                "end": 2676
                              },
                              "init": null,
                              "definite": false,
                              "start": 2655,
                              "end": 2676
                            }
                          ],
                          "declare": false,
                          "start": 2651,
                          "end": 2677
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2686,
                              "end": 2689
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "var3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2699,
                                    "end": 2703
                                  },
                                  "prefix": true,
                                  "start": 2692,
                                  "end": 2703
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2708,
                                  "end": 2716
                                },
                                "start": 2692,
                                "end": 2716
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2720,
                                  "end": 2724
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2725,
                                  "end": 2731
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2720,
                                "end": 2731
                              },
                              "start": 2692,
                              "end": 2731
                            },
                            "start": 2686,
                            "end": 2731
                          },
                          "directive": null,
                          "start": 2686,
                          "end": 2732
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2751,
                              "end": 2754
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "typeof",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "param1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2764,
                                    "end": 2770
                                  },
                                  "prefix": true,
                                  "start": 2757,
                                  "end": 2770
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "\"string\"",
                                  "start": 2775,
                                  "end": 2783
                                },
                                "start": 2757,
                                "end": 2783
                              },
                              "operator": "&&",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2787,
                                  "end": 2793
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2794,
                                  "end": 2800
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2787,
                                "end": 2800
                              },
                              "start": 2757,
                              "end": 2800
                            },
                            "start": 2751,
                            "end": 2800
                          },
                          "directive": null,
                          "start": 2751,
                          "end": 2801
                        }
                      ],
                      "start": 2281,
                      "end": 2817
                    },
                    "id": null,
                    "generator": false,
                    "start": 2252,
                    "end": 2817
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2819,
                      "end": 2824
                    }
                  ],
                  "optional": false,
                  "start": 2251,
                  "end": 2825
                },
                "definite": false,
                "start": 2247,
                "end": 2825
              }
            ],
            "declare": false,
            "start": 2243,
            "end": 2826
          }
        ],
        "start": 2124,
        "end": 2828
      },
      "expression": false,
      "start": 2088,
      "end": 2828
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
                    "start": 2901,
                    "end": 2907
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2910,
                    "end": 2916
                  }
                ],
                "start": 2901,
                "end": 2916
              },
              "start": 2899,
              "end": 2916
            },
            "start": 2891,
            "end": 2916
          },
          "init": null,
          "definite": false,
          "start": 2891,
          "end": 2916
        }
      ],
      "declare": false,
      "start": 2887,
      "end": 2917
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2927,
        "end": 2929
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2948,
                          "end": 2954
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2957,
                          "end": 2963
                        }
                      ],
                      "start": 2948,
                      "end": 2963
                    },
                    "start": 2946,
                    "end": 2963
                  },
                  "start": 2942,
                  "end": 2963
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2966,
                  "end": 2974
                },
                "definite": false,
                "start": 2942,
                "end": 2974
              }
            ],
            "declare": false,
            "start": 2938,
            "end": 2975
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2987,
              "end": 2991
            },
            "start": 2980,
            "end": 2992
          }
        ],
        "start": 2932,
        "end": 2994
      },
      "expression": false,
      "start": 2918,
      "end": 2994
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
          "start": 2995,
          "end": 3003
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3013,
                  "end": 3015
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3013,
                "end": 3017
              },
              "prefix": true,
              "start": 3006,
              "end": 3017
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 3022,
              "end": 3030
            },
            "start": 3006,
            "end": 3030
          },
          "operator": "&&",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3034,
              "end": 3036
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3034,
            "end": 3038
          },
          "start": 3006,
          "end": 3038
        },
        "start": 2995,
        "end": 3038
      },
      "directive": null,
      "start": 2995,
      "end": 3039
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 3059
}
```
