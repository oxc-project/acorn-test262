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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 90
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
              "start": 91,
              "end": 92
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 105
              },
              "typeArguments": null,
              "start": 101,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 91,
            "end": 105
          }
        ],
        "start": 90,
        "end": 106
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 116
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 131
                      },
                      "typeArguments": null,
                      "start": 125,
                      "end": 131
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 115,
                    "end": 131
                  }
                ],
                "start": 114,
                "end": 132
              },
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
                                "start": 152,
                                "end": 153
                              },
                              "typeArguments": null,
                              "start": 152,
                              "end": 153
                            },
                            "start": 150,
                            "end": 153
                          },
                          "start": 149,
                          "end": 153
                        },
                        "init": null,
                        "definite": false,
                        "start": 149,
                        "end": 153
                      }
                    ],
                    "declare": false,
                    "start": 145,
                    "end": 154
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
                          "start": 163,
                          "end": 164
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 172
                        },
                        "optional": false,
                        "computed": false,
                        "start": 163,
                        "end": 172
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 163,
                      "end": 174
                    },
                    "directive": null,
                    "start": 163,
                    "end": 175
                  }
                ],
                "start": 135,
                "end": 181
              },
              "expression": false,
              "start": 114,
              "end": 181
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 113,
            "end": 181
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 208,
                                "end": 209
                              },
                              "typeArguments": null,
                              "start": 208,
                              "end": 209
                            },
                            "start": 206,
                            "end": 209
                          },
                          "start": 205,
                          "end": 209
                        },
                        "init": null,
                        "definite": false,
                        "start": 205,
                        "end": 209
                      }
                    ],
                    "declare": false,
                    "start": 201,
                    "end": 210
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
                          "start": 219,
                          "end": 220
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDate",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 228
                        },
                        "optional": false,
                        "computed": false,
                        "start": 219,
                        "end": 228
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 219,
                      "end": 230
                    },
                    "directive": null,
                    "start": 219,
                    "end": 231
                  }
                ],
                "start": 191,
                "end": 237
              },
              "expression": false,
              "start": 188,
              "end": 237
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 187,
            "end": 237
          }
        ],
        "start": 107,
        "end": 239
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 239
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 249
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
              "start": 250,
              "end": 251
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 264
              },
              "typeArguments": null,
              "start": 260,
              "end": 264
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 264
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 280
              },
              "typeArguments": null,
              "start": 276,
              "end": 280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 266,
            "end": 280
          }
        ],
        "start": 249,
        "end": 281
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
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 291
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 306
                      },
                      "typeArguments": null,
                      "start": 300,
                      "end": 306
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 290,
                    "end": 306
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 309
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 318,
                        "end": 324
                      },
                      "typeArguments": null,
                      "start": 318,
                      "end": 324
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 308,
                    "end": 324
                  }
                ],
                "start": 289,
                "end": 325
              },
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 345,
                                "end": 346
                              },
                              "typeArguments": null,
                              "start": 345,
                              "end": 346
                            },
                            "start": 343,
                            "end": 346
                          },
                          "start": 342,
                          "end": 346
                        },
                        "init": null,
                        "definite": false,
                        "start": 342,
                        "end": 346
                      }
                    ],
                    "declare": false,
                    "start": 338,
                    "end": 347
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
                          "start": 356,
                          "end": 357
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 356,
                        "end": 365
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 356,
                      "end": 367
                    },
                    "directive": null,
                    "start": 356,
                    "end": 368
                  }
                ],
                "start": 328,
                "end": 374
              },
              "expression": false,
              "start": 289,
              "end": 374
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 288,
            "end": 374
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 381
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 401,
                                "end": 402
                              },
                              "typeArguments": null,
                              "start": 401,
                              "end": 402
                            },
                            "start": 399,
                            "end": 402
                          },
                          "start": 398,
                          "end": 402
                        },
                        "init": null,
                        "definite": false,
                        "start": 398,
                        "end": 402
                      }
                    ],
                    "declare": false,
                    "start": 394,
                    "end": 403
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
                          "start": 412,
                          "end": 413
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDate",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 414,
                          "end": 421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 412,
                        "end": 421
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 412,
                      "end": 423
                    },
                    "directive": null,
                    "start": 412,
                    "end": 424
                  }
                ],
                "start": 384,
                "end": 430
              },
              "expression": false,
              "start": 381,
              "end": 430
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 380,
            "end": 430
          }
        ],
        "start": 282,
        "end": 432
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 636
}
```
