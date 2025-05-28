__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 2451,
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
      "end": 204,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 203,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 188,
                "end": 203,
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
      "type": "ClassDeclaration",
      "start": 205,
      "end": 2451,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 2451,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 635,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 231,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 635,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 254,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 239,
                      "end": 254,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 239,
                          "end": 245
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 248,
                          "end": 254
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 256,
                "end": 635,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 313,
                    "end": 359,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 313,
                      "end": 358,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 316,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 319,
                        "end": 358,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 319,
                          "end": 343,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 319,
                            "end": 330,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 330,
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
                            "start": 335,
                            "end": 343,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 347,
                          "end": 358,
                          "object": {
                            "type": "Identifier",
                            "start": 347,
                            "end": 351,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 358,
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
                    "start": 424,
                    "end": 450,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 428,
                        "end": 449,
                        "id": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 449,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 432,
                            "end": 449,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 434,
                              "end": 449,
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
                    "start": 459,
                    "end": 505,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 459,
                      "end": 504,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 462,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 465,
                        "end": 504,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 465,
                          "end": 489,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 465,
                            "end": 476,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 472,
                              "end": 476,
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
                            "start": 481,
                            "end": 489,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 493,
                          "end": 504,
                          "object": {
                            "type": "Identifier",
                            "start": 493,
                            "end": 497,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 504,
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
                    "start": 571,
                    "end": 619,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 571,
                      "end": 618,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 574,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 577,
                        "end": 618,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 577,
                          "end": 602,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 577,
                            "end": 589,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 584,
                              "end": 589,
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
                            "start": 594,
                            "end": 602,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 606,
                          "end": 618,
                          "object": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 611,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 612,
                            "end": 618,
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
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 675,
            "end": 1089,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 683,
              "end": 685,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 685,
              "end": 1089,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 686,
                  "end": 708,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 691,
                    "end": 708,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 693,
                      "end": 708,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 693,
                          "end": 699
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 702,
                          "end": 708
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 1089,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 767,
                    "end": 813,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 767,
                      "end": 812,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 767,
                        "end": 770,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 773,
                        "end": 812,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 773,
                          "end": 797,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 773,
                            "end": 784,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 780,
                              "end": 784,
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
                            "start": 789,
                            "end": 797,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 801,
                          "end": 812,
                          "object": {
                            "type": "Identifier",
                            "start": 801,
                            "end": 805,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 806,
                            "end": 812,
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
                    "start": 878,
                    "end": 904,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 882,
                        "end": 903,
                        "id": {
                          "type": "Identifier",
                          "start": 882,
                          "end": 903,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 886,
                            "end": 903,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 888,
                              "end": 903,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 888,
                                  "end": 894
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 897,
                                  "end": 903
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
                    "start": 913,
                    "end": 959,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 913,
                      "end": 958,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 916,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 919,
                        "end": 958,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 919,
                          "end": 943,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 919,
                            "end": 930,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 926,
                              "end": 930,
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
                            "start": 935,
                            "end": 943,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 947,
                          "end": 958,
                          "object": {
                            "type": "Identifier",
                            "start": 947,
                            "end": 951,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 952,
                            "end": 958,
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
                    "start": 1025,
                    "end": 1073,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1025,
                      "end": 1072,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1025,
                        "end": 1028,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1031,
                        "end": 1072,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1031,
                          "end": 1056,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1031,
                            "end": 1043,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1038,
                              "end": 1043,
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
                            "start": 1048,
                            "end": 1056,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1060,
                          "end": 1072,
                          "object": {
                            "type": "Identifier",
                            "start": 1060,
                            "end": 1065,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1066,
                            "end": 1072,
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1129,
            "end": 1535,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1129,
              "end": 1131,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1131,
              "end": 1535,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1154,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1137,
                    "end": 1154,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1139,
                      "end": 1154,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1139,
                          "end": 1145
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1148,
                          "end": 1154
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1156,
                "end": 1535,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1213,
                    "end": 1259,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1213,
                      "end": 1258,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1213,
                        "end": 1216,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1219,
                        "end": 1258,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1219,
                          "end": 1243,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1219,
                            "end": 1230,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1226,
                              "end": 1230,
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
                            "start": 1235,
                            "end": 1243,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1247,
                          "end": 1258,
                          "object": {
                            "type": "Identifier",
                            "start": 1247,
                            "end": 1251,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1252,
                            "end": 1258,
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
                    "start": 1324,
                    "end": 1350,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1328,
                        "end": 1349,
                        "id": {
                          "type": "Identifier",
                          "start": 1328,
                          "end": 1349,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1332,
                            "end": 1349,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1334,
                              "end": 1349,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1334,
                                  "end": 1340
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1343,
                                  "end": 1349
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
                    "start": 1359,
                    "end": 1405,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1359,
                      "end": 1404,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1359,
                        "end": 1362,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1365,
                        "end": 1404,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1365,
                          "end": 1389,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1365,
                            "end": 1376,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1372,
                              "end": 1376,
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
                            "start": 1381,
                            "end": 1389,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1393,
                          "end": 1404,
                          "object": {
                            "type": "Identifier",
                            "start": 1393,
                            "end": 1397,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1398,
                            "end": 1404,
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
                    "start": 1471,
                    "end": 1519,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1471,
                      "end": 1518,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1471,
                        "end": 1474,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1477,
                        "end": 1518,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1477,
                          "end": 1502,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1477,
                            "end": 1489,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1484,
                              "end": 1489,
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
                            "start": 1494,
                            "end": 1502,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1506,
                          "end": 1518,
                          "object": {
                            "type": "Identifier",
                            "start": 1506,
                            "end": 1511,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1512,
                            "end": 1518,
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1575,
            "end": 1996,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1590,
              "end": 1592,
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1592,
              "end": 1996,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1593,
                  "end": 1615,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1598,
                    "end": 1615,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1600,
                      "end": 1615,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1600,
                          "end": 1606
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1609,
                          "end": 1615
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1617,
                "end": 1996,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1674,
                    "end": 1720,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1674,
                      "end": 1719,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1674,
                        "end": 1677,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1680,
                        "end": 1719,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1680,
                          "end": 1704,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1680,
                            "end": 1691,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1687,
                              "end": 1691,
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
                            "start": 1696,
                            "end": 1704,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1708,
                          "end": 1719,
                          "object": {
                            "type": "Identifier",
                            "start": 1708,
                            "end": 1712,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1713,
                            "end": 1719,
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
                    "start": 1785,
                    "end": 1811,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1789,
                        "end": 1810,
                        "id": {
                          "type": "Identifier",
                          "start": 1789,
                          "end": 1810,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1793,
                            "end": 1810,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1795,
                              "end": 1810,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1795,
                                  "end": 1801
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1804,
                                  "end": 1810
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
                    "start": 1820,
                    "end": 1866,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1820,
                      "end": 1865,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1820,
                        "end": 1823,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1826,
                        "end": 1865,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1826,
                          "end": 1850,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1826,
                            "end": 1837,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1833,
                              "end": 1837,
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
                            "start": 1842,
                            "end": 1850,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1854,
                          "end": 1865,
                          "object": {
                            "type": "Identifier",
                            "start": 1854,
                            "end": 1858,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1859,
                            "end": 1865,
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
                    "start": 1932,
                    "end": 1980,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1932,
                      "end": 1979,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1932,
                        "end": 1935,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1938,
                        "end": 1979,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1938,
                          "end": 1963,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1938,
                            "end": 1950,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1945,
                              "end": 1950,
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
                            "start": 1955,
                            "end": 1963,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1967,
                          "end": 1979,
                          "object": {
                            "type": "Identifier",
                            "start": 1967,
                            "end": 1972,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1973,
                            "end": 1979,
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
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2036,
            "end": 2449,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2043,
              "end": 2045,
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2045,
              "end": 2449,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2046,
                  "end": 2068,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2051,
                    "end": 2068,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2053,
                      "end": 2068,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2053,
                          "end": 2059
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2062,
                          "end": 2068
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2070,
                "end": 2449,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2127,
                    "end": 2173,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2127,
                      "end": 2172,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2127,
                        "end": 2130,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2133,
                        "end": 2172,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2133,
                          "end": 2157,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2133,
                            "end": 2144,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2140,
                              "end": 2144,
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
                            "start": 2149,
                            "end": 2157,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2161,
                          "end": 2172,
                          "object": {
                            "type": "Identifier",
                            "start": 2161,
                            "end": 2165,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2166,
                            "end": 2172,
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
                    "start": 2238,
                    "end": 2264,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2242,
                        "end": 2263,
                        "id": {
                          "type": "Identifier",
                          "start": 2242,
                          "end": 2263,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2246,
                            "end": 2263,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2248,
                              "end": 2263,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2248,
                                  "end": 2254
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2257,
                                  "end": 2263
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
                    "start": 2273,
                    "end": 2319,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2273,
                      "end": 2318,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2273,
                        "end": 2276,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2279,
                        "end": 2318,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2279,
                          "end": 2303,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2279,
                            "end": 2290,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2286,
                              "end": 2290,
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
                            "start": 2295,
                            "end": 2303,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2307,
                          "end": 2318,
                          "object": {
                            "type": "Identifier",
                            "start": 2307,
                            "end": 2311,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2312,
                            "end": 2318,
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
                    "start": 2385,
                    "end": 2433,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2385,
                      "end": 2432,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2385,
                        "end": 2388,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2391,
                        "end": 2432,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2391,
                          "end": 2416,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2391,
                            "end": 2403,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2398,
                              "end": 2403,
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
                            "start": 2408,
                            "end": 2416,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2420,
                          "end": 2432,
                          "object": {
                            "type": "Identifier",
                            "start": 2420,
                            "end": 2425,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2426,
                            "end": 2432,
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
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
