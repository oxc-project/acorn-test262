__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 3518,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 207,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 234,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 236,
      "end": 3518,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 261,
        "end": 3518,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 304,
            "end": 604,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 310,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 604,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 604,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 370,
                    "end": 416,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 370,
                      "end": 415,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 373,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 376,
                        "end": 415,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 376,
                          "end": 400,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 376,
                            "end": 387,
                            "argument": {
                              "type": "Identifier",
                              "start": 383,
                              "end": 387,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 392,
                            "end": 400,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 404,
                          "end": 415,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 408,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 415,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 481,
                    "end": 507,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 485,
                        "end": 506,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 485,
                          "end": 506,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 489,
                            "end": 506,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 491,
                              "end": 506,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 491,
                                  "end": 497
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 500,
                                  "end": 506
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 516,
                    "end": 562,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 516,
                      "end": 561,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 519,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 522,
                        "end": 561,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 522,
                          "end": 546,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 522,
                            "end": 533,
                            "argument": {
                              "type": "Identifier",
                              "start": 529,
                              "end": 533,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 538,
                            "end": 546,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 550,
                          "end": 561,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 554,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 555,
                            "end": 561,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 582,
                    "end": 598,
                    "argument": {
                      "type": "Identifier",
                      "start": 589,
                      "end": 597,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 646,
            "end": 1055,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 650,
              "end": 652,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 652,
              "end": 1055,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 677,
                "end": 1055,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 734,
                    "end": 780,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 734,
                      "end": 779,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 737,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 740,
                        "end": 779,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 740,
                          "end": 764,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 740,
                            "end": 751,
                            "argument": {
                              "type": "Identifier",
                              "start": 747,
                              "end": 751,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 756,
                            "end": 764,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 768,
                          "end": 779,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 768,
                            "end": 772,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 779,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 845,
                    "end": 893,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 845,
                      "end": 892,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 848,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 851,
                        "end": 892,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 851,
                          "end": 876,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 851,
                            "end": 863,
                            "argument": {
                              "type": "Identifier",
                              "start": 858,
                              "end": 863,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 868,
                            "end": 876,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 880,
                          "end": 892,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 880,
                            "end": 885,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 886,
                            "end": 892,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 958,
                    "end": 984,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 962,
                        "end": 983,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 962,
                          "end": 983,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 966,
                            "end": 983,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 968,
                              "end": 983,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 968,
                                  "end": 974
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 977,
                                  "end": 983
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 993,
                    "end": 1039,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 993,
                      "end": 1038,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 993,
                        "end": 996,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 999,
                        "end": 1038,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 999,
                          "end": 1023,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 999,
                            "end": 1010,
                            "argument": {
                              "type": "Identifier",
                              "start": 1006,
                              "end": 1010,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1015,
                            "end": 1023,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 1027,
                          "end": 1038,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1027,
                            "end": 1031,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1038,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 653,
                  "end": 675,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 658,
                    "end": 675,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 660,
                      "end": 675,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 660,
                          "end": 666
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 669,
                          "end": 675
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1098,
            "end": 1407,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1110,
              "end": 1113,
              "decorators": [],
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1113,
              "end": 1407,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1116,
                "end": 1407,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1173,
                    "end": 1219,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1173,
                      "end": 1218,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1173,
                        "end": 1176,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1179,
                        "end": 1218,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1179,
                          "end": 1203,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1179,
                            "end": 1190,
                            "argument": {
                              "type": "Identifier",
                              "start": 1186,
                              "end": 1190,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1195,
                            "end": 1203,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 1207,
                          "end": 1218,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1207,
                            "end": 1211,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1212,
                            "end": 1218,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1284,
                    "end": 1310,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1288,
                        "end": 1309,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1288,
                          "end": 1309,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1292,
                            "end": 1309,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1294,
                              "end": 1309,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1294,
                                  "end": 1300
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1303,
                                  "end": 1309
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1319,
                    "end": 1365,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1319,
                      "end": 1364,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1319,
                        "end": 1322,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1325,
                        "end": 1364,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1325,
                          "end": 1349,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1325,
                            "end": 1336,
                            "argument": {
                              "type": "Identifier",
                              "start": 1332,
                              "end": 1336,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1341,
                            "end": 1349,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 1353,
                          "end": 1364,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1353,
                            "end": 1357,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1358,
                            "end": 1364,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1385,
                    "end": 1401,
                    "argument": {
                      "type": "Identifier",
                      "start": 1392,
                      "end": 1400,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1450,
            "end": 1868,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1462,
              "end": 1465,
              "decorators": [],
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1465,
              "end": 1868,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1490,
                "end": 1868,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1547,
                    "end": 1593,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1547,
                      "end": 1592,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1547,
                        "end": 1550,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1553,
                        "end": 1592,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1553,
                          "end": 1577,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1553,
                            "end": 1564,
                            "argument": {
                              "type": "Identifier",
                              "start": 1560,
                              "end": 1564,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1569,
                            "end": 1577,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 1581,
                          "end": 1592,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1581,
                            "end": 1585,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1586,
                            "end": 1592,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1658,
                    "end": 1706,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1658,
                      "end": 1705,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1658,
                        "end": 1661,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1664,
                        "end": 1705,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1664,
                          "end": 1689,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1664,
                            "end": 1676,
                            "argument": {
                              "type": "Identifier",
                              "start": 1671,
                              "end": 1676,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1681,
                            "end": 1689,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 1693,
                          "end": 1705,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1693,
                            "end": 1698,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1699,
                            "end": 1705,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1771,
                    "end": 1797,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1775,
                        "end": 1796,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1775,
                          "end": 1796,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1779,
                            "end": 1796,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1781,
                              "end": 1796,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1781,
                                  "end": 1787
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1790,
                                  "end": 1796
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1806,
                    "end": 1852,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1806,
                      "end": 1851,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1806,
                        "end": 1809,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1812,
                        "end": 1851,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1812,
                          "end": 1836,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1812,
                            "end": 1823,
                            "argument": {
                              "type": "Identifier",
                              "start": 1819,
                              "end": 1823,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1828,
                            "end": 1836,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 1840,
                          "end": 1851,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1840,
                            "end": 1844,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1845,
                            "end": 1851,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1466,
                  "end": 1488,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1471,
                    "end": 1488,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1473,
                      "end": 1488,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1473,
                          "end": 1479
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1482,
                          "end": 1488
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1910,
            "end": 2217,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1921,
              "end": 1923,
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1923,
              "end": 2217,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1926,
                "end": 2217,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1983,
                    "end": 2029,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1983,
                      "end": 2028,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1983,
                        "end": 1986,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 1989,
                        "end": 2028,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1989,
                          "end": 2013,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1989,
                            "end": 2000,
                            "argument": {
                              "type": "Identifier",
                              "start": 1996,
                              "end": 2000,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2005,
                            "end": 2013,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2017,
                          "end": 2028,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2017,
                            "end": 2021,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2022,
                            "end": 2028,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2094,
                    "end": 2120,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2098,
                        "end": 2119,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2098,
                          "end": 2119,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2102,
                            "end": 2119,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2104,
                              "end": 2119,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2104,
                                  "end": 2110
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2113,
                                  "end": 2119
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2129,
                    "end": 2175,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2129,
                      "end": 2174,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2129,
                        "end": 2132,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2135,
                        "end": 2174,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2135,
                          "end": 2159,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2135,
                            "end": 2146,
                            "argument": {
                              "type": "Identifier",
                              "start": 2142,
                              "end": 2146,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2151,
                            "end": 2159,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2163,
                          "end": 2174,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2163,
                            "end": 2167,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2168,
                            "end": 2174,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2195,
                    "end": 2211,
                    "argument": {
                      "type": "Identifier",
                      "start": 2202,
                      "end": 2210,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2259,
            "end": 2675,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2270,
              "end": 2272,
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2272,
              "end": 2675,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2297,
                "end": 2675,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2354,
                    "end": 2400,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2354,
                      "end": 2399,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2354,
                        "end": 2357,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2360,
                        "end": 2399,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2360,
                          "end": 2384,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2360,
                            "end": 2371,
                            "argument": {
                              "type": "Identifier",
                              "start": 2367,
                              "end": 2371,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2376,
                            "end": 2384,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2388,
                          "end": 2399,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2388,
                            "end": 2392,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2393,
                            "end": 2399,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2465,
                    "end": 2513,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2465,
                      "end": 2512,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2465,
                        "end": 2468,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2471,
                        "end": 2512,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2471,
                          "end": 2496,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2471,
                            "end": 2483,
                            "argument": {
                              "type": "Identifier",
                              "start": 2478,
                              "end": 2483,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2488,
                            "end": 2496,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2500,
                          "end": 2512,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2500,
                            "end": 2505,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2506,
                            "end": 2512,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2578,
                    "end": 2604,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2582,
                        "end": 2603,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2582,
                          "end": 2603,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2586,
                            "end": 2603,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2588,
                              "end": 2603,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2588,
                                  "end": 2594
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2597,
                                  "end": 2603
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2613,
                    "end": 2659,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2613,
                      "end": 2658,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2613,
                        "end": 2616,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2619,
                        "end": 2658,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2619,
                          "end": 2643,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2619,
                            "end": 2630,
                            "argument": {
                              "type": "Identifier",
                              "start": 2626,
                              "end": 2630,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2635,
                            "end": 2643,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2647,
                          "end": 2658,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2647,
                            "end": 2651,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2652,
                            "end": 2658,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2273,
                  "end": 2295,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2278,
                    "end": 2295,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2280,
                      "end": 2295,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2280,
                          "end": 2286
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2289,
                          "end": 2295
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2725,
            "end": 3041,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2744,
              "end": 2747,
              "decorators": [],
              "name": "ss1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2747,
              "end": 3041,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2750,
                "end": 3041,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2807,
                    "end": 2853,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2807,
                      "end": 2852,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2810,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2813,
                        "end": 2852,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2813,
                          "end": 2837,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2813,
                            "end": 2824,
                            "argument": {
                              "type": "Identifier",
                              "start": 2820,
                              "end": 2824,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2829,
                            "end": 2837,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2841,
                          "end": 2852,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2841,
                            "end": 2845,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2846,
                            "end": 2852,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2918,
                    "end": 2944,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2922,
                        "end": 2943,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2922,
                          "end": 2943,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2926,
                            "end": 2943,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2928,
                              "end": 2943,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2928,
                                  "end": 2934
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2937,
                                  "end": 2943
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2953,
                    "end": 2999,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2953,
                      "end": 2998,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2953,
                        "end": 2956,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 2959,
                        "end": 2998,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2959,
                          "end": 2983,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2959,
                            "end": 2970,
                            "argument": {
                              "type": "Identifier",
                              "start": 2966,
                              "end": 2970,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2975,
                            "end": 2983,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 2987,
                          "end": 2998,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2987,
                            "end": 2991,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2992,
                            "end": 2998,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3019,
                    "end": 3035,
                    "argument": {
                      "type": "Identifier",
                      "start": 3026,
                      "end": 3034,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3091,
            "end": 3516,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3110,
              "end": 3113,
              "decorators": [],
              "name": "ss1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3113,
              "end": 3516,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3138,
                "end": 3516,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3195,
                    "end": 3241,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3195,
                      "end": 3240,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3195,
                        "end": 3198,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 3201,
                        "end": 3240,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 3201,
                          "end": 3225,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3201,
                            "end": 3212,
                            "argument": {
                              "type": "Identifier",
                              "start": 3208,
                              "end": 3212,
                              "decorators": [],
                              "name": "var1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 3217,
                            "end": 3225,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 3229,
                          "end": 3240,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 3229,
                            "end": 3233,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3234,
                            "end": 3240,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3306,
                    "end": 3354,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3306,
                      "end": 3353,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3306,
                        "end": 3309,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 3312,
                        "end": 3353,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 3312,
                          "end": 3337,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3312,
                            "end": 3324,
                            "argument": {
                              "type": "Identifier",
                              "start": 3319,
                              "end": 3324,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 3329,
                            "end": 3337,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 3341,
                          "end": 3353,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 3341,
                            "end": 3346,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3347,
                            "end": 3353,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3419,
                    "end": 3445,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3423,
                        "end": 3444,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3423,
                          "end": 3444,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3427,
                            "end": 3444,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 3429,
                              "end": 3444,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 3429,
                                  "end": 3435
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3438,
                                  "end": 3444
                                }
                              ]
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3454,
                    "end": 3500,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3454,
                      "end": 3499,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3454,
                        "end": 3457,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 3460,
                        "end": 3499,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 3460,
                          "end": 3484,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3460,
                            "end": 3471,
                            "argument": {
                              "type": "Identifier",
                              "start": 3467,
                              "end": 3471,
                              "decorators": [],
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 3476,
                            "end": 3484,
                            "raw": "\"string\"",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 3488,
                          "end": 3499,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 3488,
                            "end": 3492,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3493,
                            "end": 3499,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3114,
                  "end": 3136,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3119,
                    "end": 3136,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3121,
                      "end": 3136,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3121,
                          "end": 3127
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3130,
                          "end": 3136
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 260,
        "decorators": [],
        "name": "ClassWithAccessors",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
