__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 1640,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 177,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 176,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
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
      "start": 178,
      "end": 208,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 207,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 207,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 192,
                "end": 207,
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
      "start": 209,
      "end": 235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 234,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 234,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 219,
                "end": 234,
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
      "start": 236,
      "end": 1439,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 1438,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 244,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 247,
            "end": 1438,
            "properties": [
              {
                "type": "Property",
                "start": 274,
                "end": 710,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 280,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 280,
                  "end": 710,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 281,
                      "end": 303,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 286,
                        "end": 303,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 288,
                          "end": 303,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 288,
                              "end": 294
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 297,
                              "end": 303
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 305,
                    "end": 710,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 362,
                        "end": 408,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 362,
                          "end": 407,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 362,
                            "end": 365,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 368,
                            "end": 407,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 368,
                              "end": 392,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 368,
                                "end": 379,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 375,
                                  "end": 379,
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 384,
                                "end": 392,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 396,
                              "end": 407,
                              "object": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 400,
                                "decorators": [],
                                "name": "var1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 407,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 473,
                        "end": 499,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 477,
                            "end": 498,
                            "id": {
                              "type": "Identifier",
                              "start": 477,
                              "end": 498,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 481,
                                "end": 498,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 483,
                                  "end": 498,
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 483,
                                      "end": 489
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 492,
                                      "end": 498
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
                        "start": 508,
                        "end": 554,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 508,
                          "end": 553,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 511,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 514,
                            "end": 553,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 514,
                              "end": 538,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 514,
                                "end": 525,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 521,
                                  "end": 525,
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 530,
                                "end": 538,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 542,
                              "end": 553,
                              "object": {
                                "type": "Identifier",
                                "start": 542,
                                "end": 546,
                                "decorators": [],
                                "name": "var2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 547,
                                "end": 553,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 620,
                        "end": 668,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 620,
                          "end": 667,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 620,
                            "end": 623,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 626,
                            "end": 667,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 626,
                              "end": 651,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 626,
                                "end": 638,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 633,
                                  "end": 638,
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 643,
                                "end": 651,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 655,
                              "end": 667,
                              "object": {
                                "type": "Identifier",
                                "start": 655,
                                "end": 660,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 661,
                                "end": 667,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 688,
                        "end": 704,
                        "argument": {
                          "type": "Identifier",
                          "start": 695,
                          "end": 703,
                          "decorators": [],
                          "name": "strOrNum",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 716,
                "end": 1018,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 724,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 724,
                  "end": 1018,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 727,
                    "end": 1018,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 784,
                        "end": 830,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 784,
                          "end": 829,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 784,
                            "end": 787,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 790,
                            "end": 829,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 790,
                              "end": 814,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 790,
                                "end": 801,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 797,
                                  "end": 801,
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 806,
                                "end": 814,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 818,
                              "end": 829,
                              "object": {
                                "type": "Identifier",
                                "start": 818,
                                "end": 822,
                                "decorators": [],
                                "name": "var1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 823,
                                "end": 829,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 895,
                        "end": 921,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 899,
                            "end": 920,
                            "id": {
                              "type": "Identifier",
                              "start": 899,
                              "end": 920,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 903,
                                "end": 920,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 905,
                                  "end": 920,
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 905,
                                      "end": 911
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 914,
                                      "end": 920
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
                        "start": 930,
                        "end": 976,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 930,
                          "end": 975,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 930,
                            "end": 933,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 936,
                            "end": 975,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 936,
                              "end": 960,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 936,
                                "end": 947,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 943,
                                  "end": 947,
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 952,
                                "end": 960,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 964,
                              "end": 975,
                              "object": {
                                "type": "Identifier",
                                "start": 964,
                                "end": 968,
                                "decorators": [],
                                "name": "var2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 969,
                                "end": 975,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 996,
                        "end": 1012,
                        "argument": {
                          "type": "Identifier",
                          "start": 1003,
                          "end": 1011,
                          "decorators": [],
                          "name": "strOrNum",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1024,
                "end": 1436,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1032,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1032,
                  "end": 1436,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1033,
                      "end": 1055,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1038,
                        "end": 1055,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 1040,
                          "end": 1055,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1040,
                              "end": 1046
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 1049,
                              "end": 1055
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1057,
                    "end": 1436,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1114,
                        "end": 1160,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1114,
                          "end": 1159,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1114,
                            "end": 1117,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 1120,
                            "end": 1159,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1120,
                              "end": 1144,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 1120,
                                "end": 1131,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 1127,
                                  "end": 1131,
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 1136,
                                "end": 1144,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 1148,
                              "end": 1159,
                              "object": {
                                "type": "Identifier",
                                "start": 1148,
                                "end": 1152,
                                "decorators": [],
                                "name": "var1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1153,
                                "end": 1159,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 1225,
                        "end": 1251,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1229,
                            "end": 1250,
                            "id": {
                              "type": "Identifier",
                              "start": 1229,
                              "end": 1250,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1233,
                                "end": 1250,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 1235,
                                  "end": 1250,
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 1235,
                                      "end": 1241
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 1244,
                                      "end": 1250
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
                        "start": 1260,
                        "end": 1306,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1260,
                          "end": 1305,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1260,
                            "end": 1263,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 1266,
                            "end": 1305,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1266,
                              "end": 1290,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 1266,
                                "end": 1277,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 1273,
                                  "end": 1277,
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 1282,
                                "end": 1290,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 1294,
                              "end": 1305,
                              "object": {
                                "type": "Identifier",
                                "start": 1294,
                                "end": 1298,
                                "decorators": [],
                                "name": "var2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1299,
                                "end": 1305,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1372,
                        "end": 1420,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1372,
                          "end": 1419,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1372,
                            "end": 1375,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "start": 1378,
                            "end": 1419,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1378,
                              "end": 1403,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 1378,
                                "end": 1390,
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 1385,
                                  "end": 1390,
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 1395,
                                "end": 1403,
                                "value": "string",
                                "raw": "\"string\""
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 1407,
                              "end": 1419,
                              "object": {
                                "type": "Identifier",
                                "start": 1407,
                                "end": 1412,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1413,
                                "end": 1419,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1475,
      "end": 1553,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1475,
        "end": 1552,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1475,
          "end": 1483,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 1486,
          "end": 1552,
          "left": {
            "type": "BinaryExpression",
            "start": 1486,
            "end": 1527,
            "left": {
              "type": "UnaryExpression",
              "start": 1486,
              "end": 1514,
              "operator": "typeof",
              "argument": {
                "type": "CallExpression",
                "start": 1493,
                "end": 1514,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1493,
                  "end": 1504,
                  "object": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1497,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1504,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1505,
                    "end": 1513,
                    "decorators": [],
                    "name": "strOrNum",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1519,
              "end": 1527,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "CallExpression",
            "start": 1531,
            "end": 1552,
            "callee": {
              "type": "MemberExpression",
              "start": 1531,
              "end": 1542,
              "object": {
                "type": "Identifier",
                "start": 1531,
                "end": 1535,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1536,
                "end": 1542,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1543,
                "end": 1551,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1585,
      "end": 1639,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1585,
        "end": 1638,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1585,
          "end": 1593,
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 1596,
          "end": 1638,
          "left": {
            "type": "BinaryExpression",
            "start": 1596,
            "end": 1625,
            "left": {
              "type": "UnaryExpression",
              "start": 1596,
              "end": 1612,
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "start": 1603,
                "end": 1612,
                "object": {
                  "type": "Identifier",
                  "start": 1603,
                  "end": 1607,
                  "decorators": [],
                  "name": "obj1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1608,
                  "end": 1612,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1617,
              "end": 1625,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 1629,
            "end": 1638,
            "object": {
              "type": "Identifier",
              "start": 1629,
              "end": 1633,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1634,
              "end": 1638,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
