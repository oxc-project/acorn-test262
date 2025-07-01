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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 192,
                    "end": 198
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 201,
                    "end": 207
                  }
                ],
                "start": 192,
                "end": 207
              },
              "start": 190,
              "end": 207
            },
            "start": 182,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 207
        }
      ],
      "declare": false,
      "start": 178,
      "end": 208
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
                    "start": 219,
                    "end": 225
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 228,
                    "end": 234
                  }
                ],
                "start": 219,
                "end": 234
              },
              "start": 217,
              "end": 234
            },
            "start": 213,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 234
        }
      ],
      "declare": false,
      "start": 209,
      "end": 235
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 262
      },
      "body": {
        "type": "TSModuleBlock",
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
                "start": 312,
                "end": 315
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
                      "start": 325,
                      "end": 329
                    },
                    "prefix": true,
                    "start": 318,
                    "end": 329
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 334,
                    "end": 342
                  },
                  "start": 318,
                  "end": 342
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
                    "start": 346,
                    "end": 350
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 357
                  },
                  "optional": false,
                  "computed": false,
                  "start": 346,
                  "end": 357
                },
                "start": 318,
                "end": 357
              },
              "start": 312,
              "end": 357
            },
            "directive": null,
            "start": 312,
            "end": 358
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
                          "start": 423,
                          "end": 429
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 432,
                          "end": 438
                        }
                      ],
                      "start": 423,
                      "end": 438
                    },
                    "start": 421,
                    "end": 438
                  },
                  "start": 417,
                  "end": 438
                },
                "init": null,
                "definite": false,
                "start": 417,
                "end": 438
              }
            ],
            "declare": false,
            "start": 413,
            "end": 439
          },
          {
            "type": "IfStatement",
            "test": {
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
                  "start": 455,
                  "end": 459
                },
                "prefix": true,
                "start": 448,
                "end": 459
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 464,
                "end": 472
              },
              "start": 448,
              "end": 472
            },
            "consequent": {
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
                      "start": 484,
                      "end": 487
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 494
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 490,
                      "end": 501
                    },
                    "start": 484,
                    "end": 501
                  },
                  "directive": null,
                  "start": 484,
                  "end": 502
                }
              ],
              "start": 474,
              "end": 518
            },
            "alternate": {
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
                      "start": 538,
                      "end": 541
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 548
                    },
                    "start": 538,
                    "end": 548
                  },
                  "directive": null,
                  "start": 538,
                  "end": 549
                }
              ],
              "start": 528,
              "end": 565
            },
            "start": 444,
            "end": 565
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                            "start": 627,
                            "end": 633
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 636,
                            "end": 642
                          }
                        ],
                        "start": 627,
                        "end": 642
                      },
                      "start": 625,
                      "end": 642
                    },
                    "start": 621,
                    "end": 642
                  },
                  "init": null,
                  "definite": false,
                  "start": 621,
                  "end": 642
                }
              ],
              "declare": false,
              "start": 617,
              "end": 643
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 610,
            "end": 643
          },
          {
            "type": "IfStatement",
            "test": {
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
                  "start": 659,
                  "end": 663
                },
                "prefix": true,
                "start": 652,
                "end": 663
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 668,
                "end": 676
              },
              "start": 652,
              "end": 676
            },
            "consequent": {
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 688,
                      "end": 696
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 703
                    },
                    "start": 688,
                    "end": 703
                  },
                  "directive": null,
                  "start": 688,
                  "end": 704
                }
              ],
              "start": 678,
              "end": 729
            },
            "alternate": {
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 757
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 760,
                      "end": 764
                    },
                    "start": 749,
                    "end": 764
                  },
                  "directive": null,
                  "start": 749,
                  "end": 765
                }
              ],
              "start": 739,
              "end": 790
            },
            "start": 648,
            "end": 790
          }
        ],
        "start": 263,
        "end": 792
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 253,
      "end": 792
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 816,
        "end": 818
      },
      "body": {
        "type": "TSModuleBlock",
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
                          "start": 835,
                          "end": 841
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 844,
                          "end": 850
                        }
                      ],
                      "start": 835,
                      "end": 850
                    },
                    "start": 833,
                    "end": 850
                  },
                  "start": 829,
                  "end": 850
                },
                "init": null,
                "definite": false,
                "start": 829,
                "end": 850
              }
            ],
            "declare": false,
            "start": 825,
            "end": 851
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                            "start": 873,
                            "end": 879
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 882,
                            "end": 888
                          }
                        ],
                        "start": 873,
                        "end": 888
                      },
                      "start": 871,
                      "end": 888
                    },
                    "start": 867,
                    "end": 888
                  },
                  "init": null,
                  "definite": false,
                  "start": 867,
                  "end": 888
                }
              ],
              "declare": false,
              "start": 863,
              "end": 889
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 856,
            "end": 889
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 903
            },
            "body": {
              "type": "TSModuleBlock",
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
                      "start": 961,
                      "end": 964
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
                            "start": 974,
                            "end": 978
                          },
                          "prefix": true,
                          "start": 967,
                          "end": 978
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 983,
                          "end": 991
                        },
                        "start": 967,
                        "end": 991
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
                          "start": 995,
                          "end": 999
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1000,
                          "end": 1006
                        },
                        "optional": false,
                        "computed": false,
                        "start": 995,
                        "end": 1006
                      },
                      "start": 967,
                      "end": 1006
                    },
                    "start": 961,
                    "end": 1006
                  },
                  "directive": null,
                  "start": 961,
                  "end": 1007
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
                      "start": 1084,
                      "end": 1087
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
                            "start": 1097,
                            "end": 1101
                          },
                          "prefix": true,
                          "start": 1090,
                          "end": 1101
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1106,
                          "end": 1114
                        },
                        "start": 1090,
                        "end": 1114
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
                          "start": 1118,
                          "end": 1122
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1123,
                          "end": 1129
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1118,
                        "end": 1129
                      },
                      "start": 1090,
                      "end": 1129
                    },
                    "start": 1084,
                    "end": 1129
                  },
                  "directive": null,
                  "start": 1084,
                  "end": 1130
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
                      "start": 1201,
                      "end": 1209
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
                            "start": 1219,
                            "end": 1223
                          },
                          "prefix": true,
                          "start": 1212,
                          "end": 1223
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1228,
                          "end": 1236
                        },
                        "start": 1212,
                        "end": 1236
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1240,
                        "end": 1244
                      },
                      "start": 1212,
                      "end": 1244
                    },
                    "start": 1201,
                    "end": 1244
                  },
                  "directive": null,
                  "start": 1201,
                  "end": 1245
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
                        "name": "var4",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1327,
                                "end": 1333
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1336,
                                "end": 1342
                              }
                            ],
                            "start": 1327,
                            "end": 1342
                          },
                          "start": 1325,
                          "end": 1342
                        },
                        "start": 1321,
                        "end": 1342
                      },
                      "init": null,
                      "definite": false,
                      "start": 1321,
                      "end": 1342
                    }
                  ],
                  "declare": false,
                  "start": 1317,
                  "end": 1343
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1363,
                        "end": 1367
                      },
                      "prefix": true,
                      "start": 1356,
                      "end": 1367
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1372,
                      "end": 1380
                    },
                    "start": 1356,
                    "end": 1380
                  },
                  "consequent": {
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
                            "start": 1396,
                            "end": 1399
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1406
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1407,
                              "end": 1413
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1402,
                            "end": 1413
                          },
                          "start": 1396,
                          "end": 1413
                        },
                        "directive": null,
                        "start": 1396,
                        "end": 1414
                      }
                    ],
                    "start": 1382,
                    "end": 1434
                  },
                  "alternate": {
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
                            "start": 1462,
                            "end": 1465
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1468,
                            "end": 1472
                          },
                          "start": 1462,
                          "end": 1472
                        },
                        "directive": null,
                        "start": 1462,
                        "end": 1473
                      }
                    ],
                    "start": 1448,
                    "end": 1493
                  },
                  "start": 1352,
                  "end": 1493
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var5",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1563,
                                  "end": 1569
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1572,
                                  "end": 1578
                                }
                              ],
                              "start": 1563,
                              "end": 1578
                            },
                            "start": 1561,
                            "end": 1578
                          },
                          "start": 1557,
                          "end": 1578
                        },
                        "init": null,
                        "definite": false,
                        "start": 1557,
                        "end": 1578
                      }
                    ],
                    "declare": false,
                    "start": 1553,
                    "end": 1579
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1546,
                  "end": 1579
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1599,
                        "end": 1603
                      },
                      "prefix": true,
                      "start": 1592,
                      "end": 1603
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1608,
                      "end": 1616
                    },
                    "start": 1592,
                    "end": 1616
                  },
                  "consequent": {
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
                            "name": "strOrNum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1632,
                            "end": 1640
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1643,
                            "end": 1647
                          },
                          "start": 1632,
                          "end": 1647
                        },
                        "directive": null,
                        "start": 1632,
                        "end": 1648
                      }
                    ],
                    "start": 1618,
                    "end": 1677
                  },
                  "alternate": {
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
                            "name": "strOrNum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1705,
                            "end": 1713
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1716,
                            "end": 1720
                          },
                          "start": 1705,
                          "end": 1720
                        },
                        "directive": null,
                        "start": 1705,
                        "end": 1721
                      }
                    ],
                    "start": 1691,
                    "end": 1750
                  },
                  "start": 1588,
                  "end": 1750
                }
              ],
              "start": 904,
              "end": 1756
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 894,
            "end": 1756
          }
        ],
        "start": 819,
        "end": 1758
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 809,
      "end": 1758
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1783,
          "end": 1785
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1786,
          "end": 1788
        },
        "start": 1783,
        "end": 1788
      },
      "body": {
        "type": "TSModuleBlock",
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
                "start": 1838,
                "end": 1841
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
                      "start": 1851,
                      "end": 1855
                    },
                    "prefix": true,
                    "start": 1844,
                    "end": 1855
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1860,
                    "end": 1868
                  },
                  "start": 1844,
                  "end": 1868
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
                    "start": 1872,
                    "end": 1876
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1877,
                    "end": 1883
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1872,
                  "end": 1883
                },
                "start": 1844,
                "end": 1883
              },
              "start": 1838,
              "end": 1883
            },
            "directive": null,
            "start": 1838,
            "end": 1884
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
                          "start": 1949,
                          "end": 1955
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1958,
                          "end": 1964
                        }
                      ],
                      "start": 1949,
                      "end": 1964
                    },
                    "start": 1947,
                    "end": 1964
                  },
                  "start": 1943,
                  "end": 1964
                },
                "init": null,
                "definite": false,
                "start": 1943,
                "end": 1964
              }
            ],
            "declare": false,
            "start": 1939,
            "end": 1965
          },
          {
            "type": "IfStatement",
            "test": {
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
                  "start": 1981,
                  "end": 1985
                },
                "prefix": true,
                "start": 1974,
                "end": 1985
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1990,
                "end": 1998
              },
              "start": 1974,
              "end": 1998
            },
            "consequent": {
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
                      "start": 2010,
                      "end": 2013
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2016,
                        "end": 2020
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2021,
                        "end": 2027
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2016,
                      "end": 2027
                    },
                    "start": 2010,
                    "end": 2027
                  },
                  "directive": null,
                  "start": 2010,
                  "end": 2028
                }
              ],
              "start": 2000,
              "end": 2044
            },
            "alternate": {
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
                      "start": 2064,
                      "end": 2067
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2070,
                      "end": 2074
                    },
                    "start": 2064,
                    "end": 2074
                  },
                  "directive": null,
                  "start": 2064,
                  "end": 2075
                }
              ],
              "start": 2054,
              "end": 2091
            },
            "start": 1970,
            "end": 2091
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                            "start": 2153,
                            "end": 2159
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2162,
                            "end": 2168
                          }
                        ],
                        "start": 2153,
                        "end": 2168
                      },
                      "start": 2151,
                      "end": 2168
                    },
                    "start": 2147,
                    "end": 2168
                  },
                  "init": null,
                  "definite": false,
                  "start": 2147,
                  "end": 2168
                }
              ],
              "declare": false,
              "start": 2143,
              "end": 2169
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2136,
            "end": 2169
          },
          {
            "type": "IfStatement",
            "test": {
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
                  "start": 2185,
                  "end": 2189
                },
                "prefix": true,
                "start": 2178,
                "end": 2189
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2194,
                "end": 2202
              },
              "start": 2178,
              "end": 2202
            },
            "consequent": {
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2214,
                      "end": 2222
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2225,
                      "end": 2229
                    },
                    "start": 2214,
                    "end": 2229
                  },
                  "directive": null,
                  "start": 2214,
                  "end": 2230
                }
              ],
              "start": 2204,
              "end": 2255
            },
            "alternate": {
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2275,
                      "end": 2283
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2286,
                      "end": 2290
                    },
                    "start": 2275,
                    "end": 2290
                  },
                  "directive": null,
                  "start": 2275,
                  "end": 2291
                }
              ],
              "start": 2265,
              "end": 2316
            },
            "start": 2174,
            "end": 2316
          }
        ],
        "start": 1789,
        "end": 2318
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1776,
      "end": 2318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 2318
}
```
