__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 2318,
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
      "type": "TSModuleDeclaration",
      "start": 253,
      "end": 792,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 262,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 263,
        "end": 792,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 312,
            "end": 358,
            "expression": {
              "type": "AssignmentExpression",
              "start": 312,
              "end": 357,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 312,
                "end": 315,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 318,
                "end": 357,
                "left": {
                  "type": "BinaryExpression",
                  "start": 318,
                  "end": 342,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 318,
                    "end": 329,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 329,
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
                    "start": 334,
                    "end": 342,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 346,
                  "end": 357,
                  "object": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 350,
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 357,
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
            "start": 413,
            "end": 439,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 417,
                "end": 438,
                "id": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 438,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 421,
                    "end": 438,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 423,
                      "end": 438,
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
            "type": "IfStatement",
            "start": 444,
            "end": 565,
            "test": {
              "type": "BinaryExpression",
              "start": 448,
              "end": 472,
              "left": {
                "type": "UnaryExpression",
                "start": 448,
                "end": 459,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 459,
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
                "start": 464,
                "end": 472,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 474,
              "end": 518,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 484,
                  "end": 502,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 484,
                    "end": 501,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 487,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 490,
                      "end": 501,
                      "object": {
                        "type": "Identifier",
                        "start": 490,
                        "end": 494,
                        "decorators": [],
                        "name": "var2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 501,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 528,
              "end": 565,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 538,
                  "end": 549,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 538,
                    "end": 548,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 541,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 548,
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 610,
            "end": 643,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 617,
              "end": 643,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 621,
                  "end": 642,
                  "id": {
                    "type": "Identifier",
                    "start": 621,
                    "end": 642,
                    "decorators": [],
                    "name": "var3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 625,
                      "end": 642,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 627,
                        "end": 642,
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "IfStatement",
            "start": 648,
            "end": 790,
            "test": {
              "type": "BinaryExpression",
              "start": 652,
              "end": 676,
              "left": {
                "type": "UnaryExpression",
                "start": 652,
                "end": 663,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 663,
                  "decorators": [],
                  "name": "var3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 668,
                "end": 676,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 678,
              "end": 729,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 688,
                  "end": 704,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 688,
                    "end": 703,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 688,
                      "end": 696,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 703,
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 739,
              "end": 790,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 749,
                  "end": 765,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 749,
                    "end": 764,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 757,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 760,
                      "end": 764,
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 809,
      "end": 1758,
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 818,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 819,
        "end": 1758,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 825,
            "end": 851,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 829,
                "end": 850,
                "id": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 850,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 833,
                    "end": 850,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 835,
                      "end": 850,
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
            "type": "ExportNamedDeclaration",
            "start": 856,
            "end": 889,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 863,
              "end": 889,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 867,
                  "end": 888,
                  "id": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 888,
                    "decorators": [],
                    "name": "var3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 871,
                      "end": 888,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 873,
                        "end": 888,
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 894,
            "end": 1756,
            "id": {
              "type": "Identifier",
              "start": 901,
              "end": 903,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 904,
              "end": 1756,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 961,
                  "end": 1007,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 961,
                    "end": 1006,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 961,
                      "end": 964,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 967,
                      "end": 1006,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 967,
                        "end": 991,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 967,
                          "end": 978,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 974,
                            "end": 978,
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
                          "start": 983,
                          "end": 991,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 995,
                        "end": 1006,
                        "object": {
                          "type": "Identifier",
                          "start": 995,
                          "end": 999,
                          "decorators": [],
                          "name": "var1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1000,
                          "end": 1006,
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
                  "start": 1084,
                  "end": 1130,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1084,
                    "end": 1129,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1084,
                      "end": 1087,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1090,
                      "end": 1129,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1090,
                        "end": 1114,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1090,
                          "end": 1101,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 1097,
                            "end": 1101,
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
                          "start": 1106,
                          "end": 1114,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1118,
                        "end": 1129,
                        "object": {
                          "type": "Identifier",
                          "start": 1118,
                          "end": 1122,
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1123,
                          "end": 1129,
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
                  "start": 1201,
                  "end": 1245,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1201,
                    "end": 1244,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1201,
                      "end": 1209,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1212,
                      "end": 1244,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1212,
                        "end": 1236,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 1212,
                          "end": 1223,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 1219,
                            "end": 1223,
                            "decorators": [],
                            "name": "var3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1228,
                          "end": 1236,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "start": 1240,
                        "end": 1244,
                        "decorators": [],
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1317,
                  "end": 1343,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1321,
                      "end": 1342,
                      "id": {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1342,
                        "decorators": [],
                        "name": "var4",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1325,
                          "end": 1342,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 1327,
                            "end": 1342,
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
                  "type": "IfStatement",
                  "start": 1352,
                  "end": 1493,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1356,
                    "end": 1380,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1356,
                      "end": 1367,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1367,
                        "decorators": [],
                        "name": "var4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1372,
                      "end": 1380,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1382,
                    "end": 1434,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1396,
                        "end": 1414,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1396,
                          "end": 1413,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1396,
                            "end": 1399,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 1402,
                            "end": 1413,
                            "object": {
                              "type": "Identifier",
                              "start": 1402,
                              "end": 1406,
                              "decorators": [],
                              "name": "var4",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1407,
                              "end": 1413,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1448,
                    "end": 1493,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1462,
                        "end": 1473,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1462,
                          "end": 1472,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1462,
                            "end": 1465,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1468,
                            "end": 1472,
                            "decorators": [],
                            "name": "var4",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1546,
                  "end": 1579,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1553,
                    "end": 1579,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1557,
                        "end": 1578,
                        "id": {
                          "type": "Identifier",
                          "start": 1557,
                          "end": 1578,
                          "decorators": [],
                          "name": "var5",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1561,
                            "end": 1578,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1563,
                              "end": 1578,
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
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "IfStatement",
                  "start": 1588,
                  "end": 1750,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1592,
                    "end": 1616,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1592,
                      "end": 1603,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 1599,
                        "end": 1603,
                        "decorators": [],
                        "name": "var5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1608,
                      "end": 1616,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1618,
                    "end": 1677,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1632,
                        "end": 1648,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1632,
                          "end": 1647,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1632,
                            "end": 1640,
                            "decorators": [],
                            "name": "strOrNum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1643,
                            "end": 1647,
                            "decorators": [],
                            "name": "var5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1691,
                    "end": 1750,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1705,
                        "end": 1721,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1705,
                          "end": 1720,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1705,
                            "end": 1713,
                            "decorators": [],
                            "name": "strOrNum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1716,
                            "end": 1720,
                            "decorators": [],
                            "name": "var5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1776,
      "end": 2318,
      "id": {
        "type": "TSQualifiedName",
        "start": 1783,
        "end": 1788,
        "left": {
          "type": "Identifier",
          "start": 1783,
          "end": 1785,
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1786,
          "end": 1788,
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1789,
        "end": 2318,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1838,
            "end": 1884,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1838,
              "end": 1883,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1838,
                "end": 1841,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1844,
                "end": 1883,
                "left": {
                  "type": "BinaryExpression",
                  "start": 1844,
                  "end": 1868,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1844,
                    "end": 1855,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 1851,
                      "end": 1855,
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
                    "start": 1860,
                    "end": 1868,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 1872,
                  "end": 1883,
                  "object": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1876,
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1877,
                    "end": 1883,
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
            "start": 1939,
            "end": 1965,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1943,
                "end": 1964,
                "id": {
                  "type": "Identifier",
                  "start": 1943,
                  "end": 1964,
                  "decorators": [],
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1947,
                    "end": 1964,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1949,
                      "end": 1964,
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
            "type": "IfStatement",
            "start": 1970,
            "end": 2091,
            "test": {
              "type": "BinaryExpression",
              "start": 1974,
              "end": 1998,
              "left": {
                "type": "UnaryExpression",
                "start": 1974,
                "end": 1985,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 1981,
                  "end": 1985,
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
                "start": 1990,
                "end": 1998,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2000,
              "end": 2044,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2010,
                  "end": 2028,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2010,
                    "end": 2027,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2010,
                      "end": 2013,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2016,
                      "end": 2027,
                      "object": {
                        "type": "Identifier",
                        "start": 2016,
                        "end": 2020,
                        "decorators": [],
                        "name": "var2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2021,
                        "end": 2027,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2054,
              "end": 2091,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2064,
                  "end": 2075,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2064,
                    "end": 2074,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2064,
                      "end": 2067,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2070,
                      "end": 2074,
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2136,
            "end": 2169,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2143,
              "end": 2169,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2147,
                  "end": 2168,
                  "id": {
                    "type": "Identifier",
                    "start": 2147,
                    "end": 2168,
                    "decorators": [],
                    "name": "var3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2151,
                      "end": 2168,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2153,
                        "end": 2168,
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "IfStatement",
            "start": 2174,
            "end": 2316,
            "test": {
              "type": "BinaryExpression",
              "start": 2178,
              "end": 2202,
              "left": {
                "type": "UnaryExpression",
                "start": 2178,
                "end": 2189,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 2185,
                  "end": 2189,
                  "decorators": [],
                  "name": "var3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2194,
                "end": 2202,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2204,
              "end": 2255,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2214,
                  "end": 2230,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2214,
                    "end": 2229,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2214,
                      "end": 2222,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2225,
                      "end": 2229,
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2265,
              "end": 2316,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2275,
                  "end": 2291,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2275,
                    "end": 2290,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2275,
                      "end": 2283,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2286,
                      "end": 2290,
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
