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
      "type": "ClassDeclaration",
      "start": 236,
      "end": 3518,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 261,
        "end": 3518,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 304,
            "end": 604,
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
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 604,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 604,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 370,
                    "end": 416,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 376,
                          "end": 400,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 376,
                            "end": 387,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 383,
                              "end": 387,
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
                            "start": 392,
                            "end": 400,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 404,
                          "end": 415,
                          "object": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 408,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 415,
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
                    "start": 481,
                    "end": 507,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 485,
                        "end": 506,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 516,
                    "end": 562,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 522,
                          "end": 546,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 522,
                            "end": 533,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 529,
                              "end": 533,
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
                            "start": 538,
                            "end": 546,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 550,
                          "end": 561,
                          "object": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 554,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 555,
                            "end": 561,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 646,
            "end": 1055,
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
            "value": {
              "type": "FunctionExpression",
              "start": 652,
              "end": 1055,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 677,
                "end": 1055,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 734,
                    "end": 780,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 740,
                          "end": 764,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 740,
                            "end": 751,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 747,
                              "end": 751,
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
                            "start": 756,
                            "end": 764,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 768,
                          "end": 779,
                          "object": {
                            "type": "Identifier",
                            "start": 768,
                            "end": 772,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 779,
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
                    "start": 845,
                    "end": 893,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 851,
                          "end": 876,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 851,
                            "end": 863,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 858,
                              "end": 863,
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
                            "start": 868,
                            "end": 876,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 880,
                          "end": 892,
                          "object": {
                            "type": "Identifier",
                            "start": 880,
                            "end": 885,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 886,
                            "end": 892,
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
                    "start": 958,
                    "end": 984,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 962,
                        "end": 983,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 993,
                    "end": 1039,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 999,
                          "end": 1023,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 999,
                            "end": 1010,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1006,
                              "end": 1010,
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
                            "start": 1015,
                            "end": 1023,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1027,
                          "end": 1038,
                          "object": {
                            "type": "Identifier",
                            "start": 1027,
                            "end": 1031,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1038,
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
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1098,
            "end": 1407,
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
            "value": {
              "type": "FunctionExpression",
              "start": 1113,
              "end": 1407,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1116,
                "end": 1407,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1173,
                    "end": 1219,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1179,
                          "end": 1203,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1179,
                            "end": 1190,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1186,
                              "end": 1190,
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
                            "start": 1195,
                            "end": 1203,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1207,
                          "end": 1218,
                          "object": {
                            "type": "Identifier",
                            "start": 1207,
                            "end": 1211,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1212,
                            "end": 1218,
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
                    "start": 1284,
                    "end": 1310,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1288,
                        "end": 1309,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1319,
                    "end": 1365,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1325,
                          "end": 1349,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1325,
                            "end": 1336,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1332,
                              "end": 1336,
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
                            "start": 1341,
                            "end": 1349,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1353,
                          "end": 1364,
                          "object": {
                            "type": "Identifier",
                            "start": 1353,
                            "end": 1357,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1358,
                            "end": 1364,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1450,
            "end": 1868,
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
            "value": {
              "type": "FunctionExpression",
              "start": 1465,
              "end": 1868,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 1490,
                "end": 1868,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1547,
                    "end": 1593,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1553,
                          "end": 1577,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1553,
                            "end": 1564,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1560,
                              "end": 1564,
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
                            "start": 1569,
                            "end": 1577,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1581,
                          "end": 1592,
                          "object": {
                            "type": "Identifier",
                            "start": 1581,
                            "end": 1585,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1586,
                            "end": 1592,
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
                    "start": 1658,
                    "end": 1706,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1664,
                          "end": 1689,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1664,
                            "end": 1676,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1671,
                              "end": 1676,
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
                            "start": 1681,
                            "end": 1689,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1693,
                          "end": 1705,
                          "object": {
                            "type": "Identifier",
                            "start": 1693,
                            "end": 1698,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1699,
                            "end": 1705,
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
                    "start": 1771,
                    "end": 1797,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1775,
                        "end": 1796,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1806,
                    "end": 1852,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1812,
                          "end": 1836,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1812,
                            "end": 1823,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1819,
                              "end": 1823,
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
                            "start": 1828,
                            "end": 1836,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1840,
                          "end": 1851,
                          "object": {
                            "type": "Identifier",
                            "start": 1840,
                            "end": 1844,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1845,
                            "end": 1851,
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
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1910,
            "end": 2217,
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
            "value": {
              "type": "FunctionExpression",
              "start": 1923,
              "end": 2217,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1926,
                "end": 2217,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1983,
                    "end": 2029,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1989,
                          "end": 2013,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 1989,
                            "end": 2000,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 1996,
                              "end": 2000,
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
                            "start": 2005,
                            "end": 2013,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2017,
                          "end": 2028,
                          "object": {
                            "type": "Identifier",
                            "start": 2017,
                            "end": 2021,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2022,
                            "end": 2028,
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
                    "start": 2094,
                    "end": 2120,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2098,
                        "end": 2119,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2129,
                    "end": 2175,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2135,
                          "end": 2159,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2135,
                            "end": 2146,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2142,
                              "end": 2146,
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
                            "start": 2151,
                            "end": 2159,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2163,
                          "end": 2174,
                          "object": {
                            "type": "Identifier",
                            "start": 2163,
                            "end": 2167,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2168,
                            "end": 2174,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2259,
            "end": 2675,
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
            "value": {
              "type": "FunctionExpression",
              "start": 2272,
              "end": 2675,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 2297,
                "end": 2675,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2354,
                    "end": 2400,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2360,
                          "end": 2384,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2360,
                            "end": 2371,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2367,
                              "end": 2371,
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
                            "start": 2376,
                            "end": 2384,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2388,
                          "end": 2399,
                          "object": {
                            "type": "Identifier",
                            "start": 2388,
                            "end": 2392,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2393,
                            "end": 2399,
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
                    "start": 2465,
                    "end": 2513,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2471,
                          "end": 2496,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2471,
                            "end": 2483,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2478,
                              "end": 2483,
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
                            "start": 2488,
                            "end": 2496,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2500,
                          "end": 2512,
                          "object": {
                            "type": "Identifier",
                            "start": 2500,
                            "end": 2505,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2506,
                            "end": 2512,
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
                    "start": 2578,
                    "end": 2604,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2582,
                        "end": 2603,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2613,
                    "end": 2659,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2619,
                          "end": 2643,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2619,
                            "end": 2630,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2626,
                              "end": 2630,
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
                            "start": 2635,
                            "end": 2643,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2647,
                          "end": 2658,
                          "object": {
                            "type": "Identifier",
                            "start": 2647,
                            "end": 2651,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2652,
                            "end": 2658,
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
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2725,
            "end": 3041,
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
            "value": {
              "type": "FunctionExpression",
              "start": 2747,
              "end": 3041,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2750,
                "end": 3041,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2807,
                    "end": 2853,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2813,
                          "end": 2837,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2813,
                            "end": 2824,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2820,
                              "end": 2824,
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
                            "start": 2829,
                            "end": 2837,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2841,
                          "end": 2852,
                          "object": {
                            "type": "Identifier",
                            "start": 2841,
                            "end": 2845,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2846,
                            "end": 2852,
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
                    "start": 2918,
                    "end": 2944,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2922,
                        "end": 2943,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2953,
                    "end": 2999,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2959,
                          "end": 2983,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 2959,
                            "end": 2970,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 2966,
                              "end": 2970,
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
                            "start": 2975,
                            "end": 2983,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 2987,
                          "end": 2998,
                          "object": {
                            "type": "Identifier",
                            "start": 2987,
                            "end": 2991,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2992,
                            "end": 2998,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3091,
            "end": 3516,
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
            "value": {
              "type": "FunctionExpression",
              "start": 3113,
              "end": 3516,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 3138,
                "end": 3516,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3195,
                    "end": 3241,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 3201,
                          "end": 3225,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3201,
                            "end": 3212,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 3208,
                              "end": 3212,
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
                            "start": 3217,
                            "end": 3225,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 3229,
                          "end": 3240,
                          "object": {
                            "type": "Identifier",
                            "start": 3229,
                            "end": 3233,
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3234,
                            "end": 3240,
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
                    "start": 3306,
                    "end": 3354,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 3312,
                          "end": 3337,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3312,
                            "end": 3324,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 3319,
                              "end": 3324,
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
                            "start": 3329,
                            "end": 3337,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 3341,
                          "end": 3353,
                          "object": {
                            "type": "Identifier",
                            "start": 3341,
                            "end": 3346,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3347,
                            "end": 3353,
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
                    "start": 3419,
                    "end": 3445,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3423,
                        "end": 3444,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3454,
                    "end": 3500,
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
                        "left": {
                          "type": "BinaryExpression",
                          "start": 3460,
                          "end": 3484,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 3460,
                            "end": 3471,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 3467,
                              "end": 3471,
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
                            "start": 3476,
                            "end": 3484,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 3488,
                          "end": 3499,
                          "object": {
                            "type": "Identifier",
                            "start": 3488,
                            "end": 3492,
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3493,
                            "end": 3499,
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
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private"
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
