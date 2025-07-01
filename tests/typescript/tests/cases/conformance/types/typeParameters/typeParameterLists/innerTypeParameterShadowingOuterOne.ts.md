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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 93
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
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 108
              },
              "typeArguments": null,
              "start": 104,
              "end": 108
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 108
          }
        ],
        "start": 93,
        "end": 109
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
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
                    "start": 129,
                    "end": 130
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 145
                    },
                    "typeArguments": null,
                    "start": 139,
                    "end": 145
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 129,
                  "end": 145
                }
              ],
              "start": 128,
              "end": 146
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
                              "start": 166,
                              "end": 167
                            },
                            "typeArguments": null,
                            "start": 166,
                            "end": 167
                          },
                          "start": 164,
                          "end": 167
                        },
                        "start": 163,
                        "end": 167
                      },
                      "init": null,
                      "definite": false,
                      "start": 163,
                      "end": 167
                    }
                  ],
                  "declare": false,
                  "start": 159,
                  "end": 168
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
                        "start": 177,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 186
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 186
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 177,
                    "end": 188
                  },
                  "directive": null,
                  "start": 177,
                  "end": 189
                }
              ],
              "start": 149,
              "end": 195
            },
            "expression": false,
            "start": 118,
            "end": 195
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 208
                      },
                      "typeArguments": null,
                      "start": 207,
                      "end": 208
                    },
                    "start": 205,
                    "end": 208
                  },
                  "start": 204,
                  "end": 208
                },
                "init": null,
                "definite": false,
                "start": 204,
                "end": 208
              }
            ],
            "declare": false,
            "start": 200,
            "end": 209
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
                  "start": 214,
                  "end": 215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 223
                },
                "optional": false,
                "computed": false,
                "start": 214,
                "end": 223
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 214,
              "end": 225
            },
            "directive": null,
            "start": 214,
            "end": 226
          }
        ],
        "start": 112,
        "end": 228
      },
      "expression": false,
      "start": 83,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
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
              "start": 242,
              "end": 243
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 256
              },
              "typeArguments": null,
              "start": 252,
              "end": 256
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 256
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 272
              },
              "typeArguments": null,
              "start": 268,
              "end": 272
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 258,
            "end": 272
          }
        ],
        "start": 241,
        "end": 273
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
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
                    "start": 293,
                    "end": 294
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 309
                    },
                    "typeArguments": null,
                    "start": 303,
                    "end": 309
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 293,
                  "end": 309
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 321,
                    "end": 327
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 311,
                  "end": 327
                }
              ],
              "start": 292,
              "end": 328
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
                              "start": 348,
                              "end": 349
                            },
                            "typeArguments": null,
                            "start": 348,
                            "end": 349
                          },
                          "start": 346,
                          "end": 349
                        },
                        "start": 345,
                        "end": 349
                      },
                      "init": null,
                      "definite": false,
                      "start": 345,
                      "end": 349
                    }
                  ],
                  "declare": false,
                  "start": 341,
                  "end": 350
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
                        "start": 359,
                        "end": 360
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 368
                      },
                      "optional": false,
                      "computed": false,
                      "start": 359,
                      "end": 368
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 359,
                    "end": 370
                  },
                  "directive": null,
                  "start": 359,
                  "end": 371
                }
              ],
              "start": 331,
              "end": 377
            },
            "expression": false,
            "start": 282,
            "end": 377
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "typeArguments": null,
                      "start": 389,
                      "end": 390
                    },
                    "start": 387,
                    "end": 390
                  },
                  "start": 386,
                  "end": 390
                },
                "init": null,
                "definite": false,
                "start": 386,
                "end": 390
              }
            ],
            "declare": false,
            "start": 382,
            "end": 391
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
                  "start": 396,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 396,
                "end": 405
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 396,
              "end": 407
            },
            "directive": null,
            "start": 396,
            "end": 408
          }
        ],
        "start": 276,
        "end": 410
      },
      "expression": false,
      "start": 230,
      "end": 410
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 599
}
```
