__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 21,
                "end": 22
              },
              "typeArguments": null,
              "start": 21,
              "end": 22
            },
            "start": 19,
            "end": 22
          },
          "start": 15,
          "end": 22
        }
      ],
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 48,
                                  "end": 54
                                },
                                "start": 46,
                                "end": 54
                              },
                              "start": 41,
                              "end": 54
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
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
                                        "start": 67,
                                        "end": 68
                                      },
                                      "typeArguments": null,
                                      "start": 67,
                                      "end": 68
                                    },
                                    "start": 65,
                                    "end": 68
                                  },
                                  "start": 62,
                                  "end": 68
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Date",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 73,
                                    "end": 77
                                  },
                                  "typeArguments": null,
                                  "start": 73,
                                  "end": 77
                                },
                                "start": 70,
                                "end": 77
                              },
                              "start": 57,
                              "end": 77
                            },
                            "start": 55,
                            "end": 77
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 40,
                          "end": 77
                        }
                      ],
                      "start": 38,
                      "end": 79
                    },
                    "start": 36,
                    "end": 79
                  },
                  "start": 34,
                  "end": 79
                },
                "init": null,
                "definite": false,
                "start": 34,
                "end": 79
              }
            ],
            "declare": false,
            "start": 30,
            "end": 80
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 91
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 96
                  },
                  "property": {
                    "type": "Literal",
                    "value": "test",
                    "raw": "'test'",
                    "start": 97,
                    "end": 103
                  },
                  "optional": false,
                  "computed": true,
                  "start": 94,
                  "end": 104
                },
                "definite": false,
                "start": 89,
                "end": 104
              }
            ],
            "declare": false,
            "start": 85,
            "end": 105
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "v2",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 112
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 117
                }
              ],
              "optional": false,
              "start": 110,
              "end": 118
            },
            "directive": null,
            "start": 110,
            "end": 119
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "v2",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 138
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 143
                }
              ],
              "start": 132,
              "end": 144
            },
            "start": 125,
            "end": 145
          }
        ],
        "start": 24,
        "end": 169
      },
      "expression": false,
      "start": 0,
      "end": 169
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
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
              "start": 185,
              "end": 186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 186
          }
        ],
        "start": 184,
        "end": 187
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
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
                      "start": 200,
                      "end": 201
                    },
                    "typeArguments": null,
                    "start": 200,
                    "end": 201
                  },
                  "start": 198,
                  "end": 201
                },
                "start": 195,
                "end": 201
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 208
                },
                "typeArguments": null,
                "start": 204,
                "end": 208
              },
              "start": 202,
              "end": 208
            },
            "start": 190,
            "end": 208
          }
        ],
        "start": 188,
        "end": 210
      },
      "declare": false,
      "start": 172,
      "end": 210
    },
    {
      "type": "EmptyStatement",
      "start": 210,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 223
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 223,
        "end": 226
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 233,
                "end": 234
              },
              "typeArguments": null,
              "start": 233,
              "end": 234
            },
            "start": 231,
            "end": 234
          },
          "start": 227,
          "end": 234
        }
      ],
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 260,
                                  "end": 266
                                },
                                "start": 258,
                                "end": 266
                              },
                              "start": 253,
                              "end": 266
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 269,
                                "end": 271
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
                                      "start": 272,
                                      "end": 273
                                    },
                                    "typeArguments": null,
                                    "start": 272,
                                    "end": 273
                                  }
                                ],
                                "start": 271,
                                "end": 274
                              },
                              "start": 269,
                              "end": 274
                            },
                            "start": 267,
                            "end": 274
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 252,
                          "end": 274
                        }
                      ],
                      "start": 250,
                      "end": 276
                    },
                    "start": 248,
                    "end": 276
                  },
                  "start": 246,
                  "end": 276
                },
                "init": null,
                "definite": false,
                "start": 246,
                "end": 276
              }
            ],
            "declare": false,
            "start": 242,
            "end": 277
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 288
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 293
                  },
                  "property": {
                    "type": "Literal",
                    "value": "test",
                    "raw": "'test'",
                    "start": 294,
                    "end": 300
                  },
                  "optional": false,
                  "computed": true,
                  "start": 291,
                  "end": 301
                },
                "definite": false,
                "start": 286,
                "end": 301
              }
            ],
            "declare": false,
            "start": 282,
            "end": 302
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 317
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 322
                    }
                  ],
                  "optional": false,
                  "start": 315,
                  "end": 323
                },
                "definite": false,
                "start": 311,
                "end": 323
              }
            ],
            "declare": false,
            "start": 307,
            "end": 324
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "v2",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 343
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 348
                }
              ],
              "start": 337,
              "end": 349
            },
            "start": 330,
            "end": 350
          }
        ],
        "start": 236,
        "end": 374
      },
      "expression": false,
      "start": 212,
      "end": 374
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 374
}
```
