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
        "name": "Chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 21,
              "end": 32
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
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
                          "start": 47,
                          "end": 48
                        },
                        "typeArguments": null,
                        "start": 47,
                        "end": 48
                      },
                      "start": 45,
                      "end": 48
                    },
                    "start": 40,
                    "end": 48
                  },
                  "readonly": false,
                  "static": false,
                  "start": 33,
                  "end": 48
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 50,
                "end": 53
              },
              "expression": false,
              "start": 32,
              "end": 53
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 21,
            "end": 53
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 63,
                    "end": 64
                  }
                ],
                "start": 62,
                "end": 65
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "start": 74,
                                "end": 75
                              },
                              "typeArguments": null,
                              "start": 74,
                              "end": 75
                            },
                            "start": 72,
                            "end": 75
                          },
                          "start": 71,
                          "end": 75
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 80,
                            "end": 81
                          },
                          "typeArguments": null,
                          "start": 80,
                          "end": 81
                        },
                        "start": 77,
                        "end": 81
                      },
                      "start": 70,
                      "end": 81
                    },
                    "start": 68,
                    "end": 81
                  },
                  "start": 66,
                  "end": 81
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 89
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 91
                        },
                        "typeArguments": null,
                        "start": 90,
                        "end": 91
                      }
                    ],
                    "start": 89,
                    "end": 92
                  },
                  "start": 84,
                  "end": 92
                },
                "start": 82,
                "end": 92
              },
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 113
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 118
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 119,
                                "end": 123
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 124,
                                "end": 129
                              },
                              "optional": false,
                              "computed": false,
                              "start": 119,
                              "end": 129
                            }
                          ],
                          "optional": false,
                          "start": 116,
                          "end": 130
                        },
                        "definite": false,
                        "start": 107,
                        "end": 130
                      }
                    ],
                    "declare": false,
                    "start": 103,
                    "end": 131
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 211
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 214,
                                      "end": 218
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 219,
                                      "end": 223
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 214,
                                    "end": 223
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 224,
                                          "end": 225
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 229,
                                        "end": 235
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 224,
                                      "end": 235
                                    }
                                  ],
                                  "optional": false,
                                  "start": 214,
                                  "end": 236
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 242,
                                  "end": 246
                                },
                                "optional": false,
                                "computed": false,
                                "start": 214,
                                "end": 246
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 247,
                                      "end": 248
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 252,
                                    "end": 257
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 247,
                                  "end": 257
                                }
                              ],
                              "optional": false,
                              "start": 214,
                              "end": 258
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 273
                            },
                            "optional": false,
                            "computed": false,
                            "start": 214,
                            "end": 273
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 274,
                                  "end": 275
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 279,
                                  "end": 280
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 281,
                                  "end": 287
                                },
                                "optional": false,
                                "computed": false,
                                "start": 279,
                                "end": 287
                              },
                              "id": null,
                              "generator": false,
                              "start": 274,
                              "end": 287
                            }
                          ],
                          "optional": false,
                          "start": 214,
                          "end": 288
                        },
                        "definite": false,
                        "start": 210,
                        "end": 288
                      }
                    ],
                    "declare": false,
                    "start": 206,
                    "end": 299
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Chain",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 331,
                        "end": 336
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 343
                        }
                      ],
                      "start": 327,
                      "end": 344
                    },
                    "start": 320,
                    "end": 345
                  }
                ],
                "start": 93,
                "end": 351
              },
              "expression": false,
              "start": 62,
              "end": 351
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 351
          }
        ],
        "start": 15,
        "end": 353
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 353
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 354
}
```
