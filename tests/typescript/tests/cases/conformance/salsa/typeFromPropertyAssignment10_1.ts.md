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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 17
            },
            "operator": "??",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 21,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "definite": false,
          "start": 4,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 34
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
            },
            "optional": false,
            "computed": false,
            "start": 37,
            "end": 46
          },
          "operator": "??",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 50,
            "end": 52
          },
          "start": 37,
          "end": 52
        },
        "start": 25,
        "end": 52
      },
      "directive": null,
      "start": 25,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 5
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 6,
              "end": 9
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 9
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeView",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 18
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 18
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "FunctionExpression",
            "id": null,
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
                        "name": "SomeView",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 52
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                    "name": "me",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 80,
                                    "end": 82
                                  },
                                  "init": {
                                    "type": "ThisExpression",
                                    "start": 85,
                                    "end": 89
                                  },
                                  "definite": false,
                                  "start": 80,
                                  "end": 89
                                }
                              ],
                              "declare": false,
                              "start": 76,
                              "end": 90
                            }
                          ],
                          "start": 66,
                          "end": 96
                        },
                        "expression": false,
                        "start": 55,
                        "end": 96
                      },
                      "definite": false,
                      "start": 44,
                      "end": 96
                    }
                  ],
                  "declare": false,
                  "start": 40,
                  "end": 96
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomeView",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 116
                  },
                  "start": 101,
                  "end": 117
                }
              ],
              "start": 34,
              "end": 119
            },
            "expression": false,
            "start": 22,
            "end": 119
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 21,
          "end": 122
        },
        "start": 0,
        "end": 122
      },
      "directive": null,
      "start": 0,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 129
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "optional": false,
            "computed": false,
            "start": 124,
            "end": 133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 124,
          "end": 139
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 165
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 208,
                              "end": 212
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 214
                            },
                            "optional": false,
                            "computed": false,
                            "start": 208,
                            "end": 214
                          },
                          "right": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 217,
                            "end": 219
                          },
                          "start": 208,
                          "end": 219
                        },
                        "directive": null,
                        "start": 208,
                        "end": 220
                      }
                    ],
                    "start": 168,
                    "end": 226
                  },
                  "expression": false,
                  "start": 165,
                  "end": 226
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 154,
                "end": 226
              }
            ],
            "start": 148,
            "end": 228
          },
          "abstract": false,
          "declare": false,
          "start": 142,
          "end": 228
        },
        "start": 124,
        "end": 228
      },
      "directive": null,
      "start": 124,
      "end": 228
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
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 240
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 252
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "app",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 247,
                "end": 256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 262
              },
              "optional": false,
              "computed": false,
              "start": 247,
              "end": 262
            },
            "typeArguments": null,
            "arguments": [],
            "start": 243,
            "end": 264
          },
          "definite": false,
          "start": 233,
          "end": 264
        }
      ],
      "declare": false,
      "start": 229,
      "end": 265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 273
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 275
        },
        "optional": false,
        "computed": false,
        "start": 266,
        "end": 275
      },
      "directive": null,
      "start": 266,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 307
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 311
            },
            "optional": false,
            "computed": false,
            "start": 302,
            "end": 311
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 321
          },
          "optional": false,
          "computed": false,
          "start": 302,
          "end": 321
        },
        "right": {
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
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 351
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 356
                  },
                  "start": 350,
                  "end": 356
                },
                "start": 343,
                "end": 357
              }
            ],
            "start": 337,
            "end": 359
          },
          "expression": false,
          "start": 324,
          "end": 359
        },
        "start": 302,
        "end": 359
      },
      "directive": null,
      "start": 302,
      "end": 359
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 359
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 5
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 6,
              "end": 9
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 9
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 21
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "FunctionExpression",
            "id": null,
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
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 161
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                    "name": "me",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 190,
                                    "end": 192
                                  },
                                  "init": {
                                    "type": "ThisExpression",
                                    "start": 195,
                                    "end": 199
                                  },
                                  "definite": false,
                                  "start": 190,
                                  "end": 199
                                }
                              ],
                              "declare": false,
                              "start": 186,
                              "end": 200
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "me",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 209,
                                    "end": 211
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "view",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 212,
                                    "end": 216
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 209,
                                  "end": 216
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Outer",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 223,
                                        "end": 228
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "app",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 229,
                                        "end": 232
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 223,
                                      "end": 232
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SomeView",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 233,
                                      "end": 241
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 223,
                                    "end": 241
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 219,
                                  "end": 243
                                },
                                "start": 209,
                                "end": 243
                              },
                              "directive": null,
                              "start": 209,
                              "end": 244
                            }
                          ],
                          "start": 176,
                          "end": 250
                        },
                        "expression": false,
                        "start": 164,
                        "end": 250
                      },
                      "definite": false,
                      "start": 150,
                      "end": 250
                    }
                  ],
                  "declare": false,
                  "start": 146,
                  "end": 251
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 274
                  },
                  "start": 256,
                  "end": 275
                }
              ],
              "start": 37,
              "end": 277
            },
            "expression": false,
            "start": 25,
            "end": 277
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 24,
          "end": 280
        },
        "start": 0,
        "end": 280
      },
      "directive": null,
      "start": 0,
      "end": 281
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 281
}
```
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
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 19
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "app",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 23
                },
                "optional": false,
                "computed": false,
                "start": 14,
                "end": 23
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Application",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 35
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [],
            "start": 10,
            "end": 37
          },
          "definite": false,
          "start": 4,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 48
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 60
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "app",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 64
                },
                "optional": false,
                "computed": false,
                "start": 55,
                "end": 64
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 70
              },
              "optional": false,
              "computed": false,
              "start": 55,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [],
            "start": 51,
            "end": 72
          },
          "definite": false,
          "start": 43,
          "end": 72
        }
      ],
      "declare": false,
      "start": 39,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 79
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 81
        },
        "optional": false,
        "computed": false,
        "start": 74,
        "end": 81
      },
      "directive": null,
      "start": 74,
      "end": 82
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 118,
          "end": 119
        }
      ],
      "declare": false,
      "start": 114,
      "end": 120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 122
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "optional": false,
        "computed": false,
        "start": 121,
        "end": 124
      },
      "directive": null,
      "start": 121,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 131
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 135
            },
            "optional": false,
            "computed": false,
            "start": 126,
            "end": 135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 145
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 145
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 101,
            "raw": "101",
            "start": 146,
            "end": 149
          }
        ],
        "optional": false,
        "start": 126,
        "end": 150
      },
      "directive": null,
      "start": 126,
      "end": 151
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
