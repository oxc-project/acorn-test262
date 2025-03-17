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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 46,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 31,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 25,
                      "end": 31
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 104,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 122,
              "end": 124,
              "value": 42,
              "raw": "42"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 140,
              "name": "d2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 153,
              "value": 42,
              "raw": "42"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 211,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 211,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 216,
      "end": 1562,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 231,
        "name": "MyDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 246,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 1562,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 1560,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 1560,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "m1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 279,
                          "end": 283,
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 378,
                    "end": 407,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 382,
                        "end": 406,
                        "id": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 384,
                          "name": "l2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "m1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 396,
                              "end": 400,
                              "name": "bind",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 401,
                              "end": 405
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 501,
                    "end": 541,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 505,
                        "end": 540,
                        "id": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 529,
                          "name": "x",
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
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 510,
                                    "end": 518,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 512,
                                      "end": 518
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
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
                          },
                          "decorators": [],
                          "optional": false
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
                            "name": "m1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                            "name": "m2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 641,
                          "name": "bind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 885,
                    "end": 903,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 889,
                        "end": 902,
                        "id": {
                          "type": "Identifier",
                          "start": 889,
                          "end": 891,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "d1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1024,
                    "end": 1042,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1028,
                        "end": 1041,
                        "id": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1030,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "d2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                          "name": "m1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 1174,
                        "end": 1209,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1184,
                            "end": 1193,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1185,
                              "end": 1193,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1187,
                                "end": 1193
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
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
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1429,
                        "end": 1444,
                        "id": {
                          "type": "Identifier",
                          "start": 1429,
                          "end": 1430,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
