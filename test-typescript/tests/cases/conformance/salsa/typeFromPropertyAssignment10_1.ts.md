__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 12,
            "end": 23,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 12,
              "end": 17,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 21,
              "end": 23,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 52,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 34,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 30,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 37,
          "end": 52,
          "operator": "??",
          "left": {
            "type": "MemberExpression",
            "start": 37,
            "end": 46,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 50,
            "end": 52,
            "properties": []
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 123,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 122,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 18,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 9,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 5,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 6,
              "end": 9,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 10,
            "end": 18,
            "decorators": [],
            "name": "SomeView",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 21,
          "end": 122,
          "arguments": [],
          "callee": {
            "type": "FunctionExpression",
            "start": 22,
            "end": 119,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 34,
              "end": 119,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 40,
                  "end": 96,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 44,
                      "end": 96,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 52,
                        "decorators": [],
                        "name": "SomeView",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 55,
                        "end": 96,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 66,
                          "end": 96,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 76,
                              "end": 90,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 80,
                                  "end": 89,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 80,
                                    "end": 82,
                                    "decorators": [],
                                    "name": "me",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "ThisExpression",
                                    "start": 85,
                                    "end": 89
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
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
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 101,
                  "end": 117,
                  "argument": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 116,
                    "decorators": [],
                    "name": "SomeView",
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
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 124,
        "end": 228,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 124,
          "end": 139,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 124,
            "end": 133,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 124,
              "end": 129,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 142,
          "end": 228,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 148,
            "end": 228,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 154,
                "end": 226,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 165,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 165,
                  "end": 226,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 168,
                    "end": 226,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 208,
                        "end": 220,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 208,
                          "end": 219,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 208,
                            "end": 214,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 208,
                              "end": 212
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 217,
                            "end": 219,
                            "raw": "12",
                            "value": 12
                          }
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
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 240,
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 243,
            "end": 264,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 247,
              "end": 262,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 247,
                "end": 256,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 252,
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 256,
                  "decorators": [],
                  "name": "app",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 262,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 276,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 266,
        "end": 275,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 266,
          "end": 273,
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 274,
          "end": 275,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 359,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 302,
        "end": 359,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 302,
          "end": 321,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 302,
            "end": 311,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 302,
              "end": 307,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 308,
              "end": 311,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 312,
            "end": 321,
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 324,
          "end": 359,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 337,
            "end": 359,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 343,
                "end": 357,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 350,
                  "end": 356,
                  "operator": "**",
                  "left": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 280,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 21,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 9,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 5,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 6,
              "end": 9,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 10,
            "end": 21,
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 24,
          "end": 280,
          "arguments": [],
          "callee": {
            "type": "FunctionExpression",
            "start": 25,
            "end": 277,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 37,
              "end": 277,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 146,
                  "end": 251,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 150,
                      "end": 250,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 161,
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 164,
                        "end": 250,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 176,
                          "end": 250,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 186,
                              "end": 200,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 190,
                                  "end": 199,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 190,
                                    "end": 192,
                                    "decorators": [],
                                    "name": "me",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "ThisExpression",
                                    "start": 195,
                                    "end": 199
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 209,
                              "end": 244,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 209,
                                "end": 243,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 209,
                                  "end": 216,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 209,
                                    "end": 211,
                                    "decorators": [],
                                    "name": "me",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 212,
                                    "end": 216,
                                    "decorators": [],
                                    "name": "view",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "start": 219,
                                  "end": 243,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 223,
                                    "end": 241,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 223,
                                      "end": 232,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 223,
                                        "end": 228,
                                        "decorators": [],
                                        "name": "Outer",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 229,
                                        "end": 232,
                                        "decorators": [],
                                        "name": "app",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 233,
                                      "end": 241,
                                      "decorators": [],
                                      "name": "SomeView",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
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
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 256,
                  "end": 275,
                  "argument": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 274,
                    "decorators": [],
                    "name": "Application",
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
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 37,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 14,
              "end": 35,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 14,
                "end": 23,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 19,
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 23,
                  "decorators": [],
                  "name": "app",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "decorators": [],
                "name": "Application",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 48,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 51,
            "end": 72,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 55,
              "end": 70,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 55,
                "end": 64,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 60,
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 64,
                  "decorators": [],
                  "name": "app",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 70,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 74,
        "end": 81,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 74,
          "end": 79,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 121,
        "end": 124,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 150,
        "arguments": [
          {
            "type": "Literal",
            "start": 146,
            "end": 149,
            "raw": "101",
            "value": 101
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 145,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 126,
            "end": 135,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 145,
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
