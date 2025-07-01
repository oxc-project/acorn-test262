__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "value": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 23,
                        "end": 24
                      },
                      "typeArguments": null,
                      "start": 23,
                      "end": 24
                    },
                    "start": 21,
                    "end": 24
                  },
                  "start": 20,
                  "end": 24
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 28
                  },
                  "typeArguments": null,
                  "start": 27,
                  "end": 28
                },
                "start": 25,
                "end": 28
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 38,
                      "end": 42
                    },
                    "start": 31,
                    "end": 43
                  }
                ],
                "start": 29,
                "end": 45
              },
              "expression": false,
              "start": 19,
              "end": 45
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 45
          }
        ],
        "start": 11,
        "end": 47
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 47
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 58,
                      "end": 64
                    }
                  ],
                  "start": 57,
                  "end": 65
                },
                "start": 56,
                "end": 65
              },
              "start": 54,
              "end": 65
            },
            "start": 53,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 65
        }
      ],
      "declare": false,
      "start": 49,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 67,
          "end": 72
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 73,
            "end": 74
          }
        ],
        "optional": false,
        "start": 67,
        "end": 75
      },
      "directive": null,
      "start": 67,
      "end": 76
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 98,
                  "end": 99
                }
              ],
              "start": 97,
              "end": 100
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 106,
                            "end": 107
                          },
                          "typeArguments": null,
                          "start": 106,
                          "end": 107
                        }
                      ],
                      "start": 105,
                      "end": 108
                    },
                    "start": 104,
                    "end": 108
                  },
                  "start": 102,
                  "end": 108
                },
                "start": 101,
                "end": 108
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 123
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 124,
                        "end": 127
                      },
                      "optional": false,
                      "computed": false,
                      "start": 122,
                      "end": 127
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 128,
                        "end": 129
                      }
                    ],
                    "optional": false,
                    "start": 122,
                    "end": 130
                  },
                  "start": 115,
                  "end": 131
                }
              ],
              "start": 113,
              "end": 133
            },
            "id": null,
            "generator": false,
            "start": 97,
            "end": 133
          },
          "definite": false,
          "start": 93,
          "end": 133
        }
      ],
      "declare": false,
      "start": 89,
      "end": 133
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 149
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 153,
                  "end": 154
                }
              ],
              "start": 152,
              "end": 155
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 161,
                            "end": 162
                          },
                          "typeArguments": null,
                          "start": 161,
                          "end": 162
                        }
                      ],
                      "start": 160,
                      "end": 163
                    },
                    "start": 159,
                    "end": 163
                  },
                  "start": 157,
                  "end": 163
                },
                "start": 156,
                "end": 163
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 182
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 182
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 184
                          },
                          "typeArguments": null,
                          "start": 183,
                          "end": 184
                        }
                      ],
                      "start": 182,
                      "end": 185
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 186,
                        "end": 187
                      }
                    ],
                    "optional": false,
                    "start": 177,
                    "end": 188
                  },
                  "start": 170,
                  "end": 189
                }
              ],
              "start": 168,
              "end": 191
            },
            "id": null,
            "generator": false,
            "start": 152,
            "end": 191
          },
          "definite": false,
          "start": 147,
          "end": 191
        }
      ],
      "declare": false,
      "start": 143,
      "end": 191
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 212
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 211,
                  "end": 212
                }
              ],
              "start": 210,
              "end": 213
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 218
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 220
                          },
                          "typeArguments": null,
                          "start": 219,
                          "end": 220
                        }
                      ],
                      "start": 218,
                      "end": 221
                    },
                    "start": 217,
                    "end": 221
                  },
                  "start": 215,
                  "end": 221
                },
                "start": 214,
                "end": 221
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 236
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 240
                      },
                      "optional": false,
                      "computed": false,
                      "start": 235,
                      "end": 240
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 241,
                          "end": 247
                        }
                      ],
                      "start": 240,
                      "end": 248
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 249,
                        "end": 250
                      }
                    ],
                    "optional": false,
                    "start": 235,
                    "end": 251
                  },
                  "start": 228,
                  "end": 252
                }
              ],
              "start": 226,
              "end": 254
            },
            "id": null,
            "generator": false,
            "start": 210,
            "end": 254
          },
          "definite": false,
          "start": 205,
          "end": 254
        }
      ],
      "declare": false,
      "start": 201,
      "end": 254
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 270
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 279,
                          "end": 285
                        }
                      ],
                      "start": 278,
                      "end": 286
                    },
                    "start": 277,
                    "end": 286
                  },
                  "start": 275,
                  "end": 286
                },
                "start": 274,
                "end": 286
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 301
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 305
                      },
                      "optional": false,
                      "computed": false,
                      "start": 300,
                      "end": 305
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 306,
                        "end": 307
                      }
                    ],
                    "optional": false,
                    "start": 300,
                    "end": 308
                  },
                  "start": 293,
                  "end": 309
                }
              ],
              "start": 291,
              "end": 311
            },
            "id": null,
            "generator": false,
            "start": 273,
            "end": 311
          },
          "definite": false,
          "start": 268,
          "end": 311
        }
      ],
      "declare": false,
      "start": 264,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 323
}
```
