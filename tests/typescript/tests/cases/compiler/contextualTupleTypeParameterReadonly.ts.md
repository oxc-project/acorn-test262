__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "each",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 45
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 46,
                    "end": 49
                  }
                ],
                "start": 45,
                "end": 50
              },
              "start": 32,
              "end": 50
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 50
          }
        ],
        "start": 21,
        "end": 51
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cases",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 72
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
                      "start": 73,
                      "end": 74
                    },
                    "typeArguments": null,
                    "start": 73,
                    "end": 74
                  }
                ],
                "start": 72,
                "end": 75
              },
              "start": 59,
              "end": 75
            },
            "start": 57,
            "end": 75
          },
          "start": 52,
          "end": 75
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 91
                      },
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
                            "start": 93,
                            "end": 94
                          },
                          "typeArguments": null,
                          "start": 93,
                          "end": 94
                        },
                        "start": 91,
                        "end": 94
                      },
                      "value": null,
                      "start": 84,
                      "end": 94
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 99,
                      "end": 102
                    },
                    "start": 96,
                    "end": 102
                  },
                  "start": 83,
                  "end": 102
                },
                "start": 81,
                "end": 102
              },
              "start": 79,
              "end": 102
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 107,
              "end": 111
            },
            "start": 104,
            "end": 111
          },
          "start": 78,
          "end": 111
        },
        "start": 76,
        "end": 111
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cases",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 125
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 135,
                      "end": 136
                    },
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 138,
                      "end": 141
                    }
                  ],
                  "start": 134,
                  "end": 142
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 149,
                      "end": 150
                    },
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 152,
                      "end": 155
                    }
                  ],
                  "start": 148,
                  "end": 156
                }
              ],
              "start": 128,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 168
              },
              "typeArguments": null,
              "start": 163,
              "end": 168
            },
            "start": 128,
            "end": 168
          },
          "definite": false,
          "start": 120,
          "end": 168
        }
      ],
      "declare": false,
      "start": 114,
      "end": 169
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eacher",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 183
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "each",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cases",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 196
              }
            ],
            "optional": false,
            "start": 186,
            "end": 197
          },
          "definite": false,
          "start": 177,
          "end": 197
        }
      ],
      "declare": false,
      "start": 171,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eacher",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 206
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 224
                  },
                  "directive": null,
                  "start": 223,
                  "end": 225
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 231
                  },
                  "directive": null,
                  "start": 230,
                  "end": 232
                }
              ],
              "start": 217,
              "end": 234
            },
            "id": null,
            "generator": false,
            "start": 207,
            "end": 234
          }
        ],
        "optional": false,
        "start": 200,
        "end": 235
      },
      "directive": null,
      "start": 200,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "eacher",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 306
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 315
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 308,
                "end": 315
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 333,
                            "end": 334
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 336,
                            "end": 337
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 338
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 345
                      },
                      "definite": false,
                      "start": 332,
                      "end": 345
                    }
                  ],
                  "declare": false,
                  "start": 326,
                  "end": 346
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 352
                  },
                  "directive": null,
                  "start": 351,
                  "end": 353
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "directive": null,
                  "start": 358,
                  "end": 360
                }
              ],
              "start": 320,
              "end": 362
            },
            "id": null,
            "generator": false,
            "start": 307,
            "end": 362
          }
        ],
        "optional": false,
        "start": 300,
        "end": 363
      },
      "directive": null,
      "start": 300,
      "end": 364
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 364
}
```
