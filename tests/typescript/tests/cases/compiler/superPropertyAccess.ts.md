__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1562,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 213,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 31,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 25,
                      "end": 31
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 46,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 44,
                    "argument": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            "start": 51,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
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
            "type": "PropertyDefinition",
            "start": 72,
            "end": 104,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 86,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 86,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 82,
                    "end": 86
                  }
                }
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 104,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "expression": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              }
            },
            "value": {
              "type": "Literal",
              "start": 122,
              "end": 124,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 154,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 140,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            },
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 153,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 182,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 182,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 172,
                    "end": 180,
                    "argument": {
                      "type": "Literal",
                      "start": 179,
                      "end": 180,
                      "value": 0,
                      "raw": "0"
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
            "start": 187,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 211,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 216,
      "end": 1562,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 231,
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 246,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 1562,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 1560,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 1560,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 1560,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 270,
                    "end": 285,
                    "expression": {
                      "type": "CallExpression",
                      "start": 270,
                      "end": 284,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 270,
                        "end": 278,
                        "object": {
                          "type": "Super",
                          "start": 270,
                          "end": 275
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 278,
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 279,
                          "end": 283,
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 378,
                    "end": 407,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 382,
                        "end": 406,
                        "id": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 384,
                          "decorators": [],
                          "name": "l2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 387,
                          "end": 406,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 387,
                            "end": 400,
                            "object": {
                              "type": "MemberExpression",
                              "start": 387,
                              "end": 395,
                              "object": {
                                "type": "Super",
                                "start": 387,
                                "end": 392
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 393,
                                "end": 395,
                                "decorators": [],
                                "name": "m1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 396,
                              "end": 400,
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 401,
                              "end": 405
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 501,
                    "end": 541,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 505,
                        "end": 540,
                        "id": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 529,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 506,
                            "end": 529,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 508,
                              "end": 529,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 509,
                                  "end": 518,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 510,
                                    "end": 518,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 512,
                                      "end": 518
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 520,
                                "end": 529,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 523,
                                  "end": 529
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 532,
                          "end": 540,
                          "object": {
                            "type": "Super",
                            "start": 532,
                            "end": 537
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 538,
                            "end": 540,
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 628,
                    "end": 648,
                    "expression": {
                      "type": "CallExpression",
                      "start": 628,
                      "end": 647,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 628,
                        "end": 641,
                        "object": {
                          "type": "MemberExpression",
                          "start": 628,
                          "end": 636,
                          "object": {
                            "type": "Super",
                            "start": 628,
                            "end": 633
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 634,
                            "end": 636,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 641,
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 763,
                    "end": 774,
                    "expression": {
                      "type": "CallExpression",
                      "start": 763,
                      "end": 773,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 763,
                        "end": 771,
                        "object": {
                          "type": "Super",
                          "start": 763,
                          "end": 768
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 769,
                          "end": 771,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 885,
                    "end": 903,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 889,
                        "end": 902,
                        "id": {
                          "type": "Identifier",
                          "start": 889,
                          "end": 891,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 894,
                          "end": 902,
                          "object": {
                            "type": "Super",
                            "start": 894,
                            "end": 899
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 900,
                            "end": 902,
                            "decorators": [],
                            "name": "d1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1024,
                    "end": 1042,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1028,
                        "end": 1041,
                        "id": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1030,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1033,
                          "end": 1041,
                          "object": {
                            "type": "Super",
                            "start": 1033,
                            "end": 1038
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1039,
                            "end": 1041,
                            "decorators": [],
                            "name": "d2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1163,
                    "end": 1210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1163,
                      "end": 1209,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1163,
                        "end": 1171,
                        "object": {
                          "type": "Super",
                          "start": 1163,
                          "end": 1168
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1169,
                          "end": 1171,
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 1174,
                        "end": 1209,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1184,
                            "end": 1193,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1185,
                              "end": 1193,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1187,
                                "end": 1193
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1195,
                          "end": 1209,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1197,
                              "end": 1207,
                              "argument": {
                                "type": "Literal",
                                "start": 1204,
                                "end": 1206,
                                "value": "",
                                "raw": "\"\""
                              }
                            }
                          ]
                        },
                        "expression": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1278,
                    "end": 1294,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1278,
                      "end": 1293,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1278,
                        "end": 1289,
                        "object": {
                          "type": "Super",
                          "start": 1278,
                          "end": 1283
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1284,
                          "end": 1289,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1292,
                        "end": 1293,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1425,
                    "end": 1445,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1429,
                        "end": 1444,
                        "id": {
                          "type": "Identifier",
                          "start": 1429,
                          "end": 1430,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1433,
                          "end": 1444,
                          "object": {
                            "type": "Super",
                            "start": 1433,
                            "end": 1438
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1439,
                            "end": 1444,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
