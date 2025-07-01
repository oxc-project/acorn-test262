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
        "name": "sum",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 31
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
              "start": 32,
              "end": 33
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 48
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    "typeArguments": null,
                    "start": 49,
                    "end": 50
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 52,
                    "end": 58
                  }
                ],
                "start": 48,
                "end": 59
              },
              "start": 42,
              "end": 59
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 71,
              "end": 77
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 77
          }
        ],
        "start": 31,
        "end": 78
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 82,
              "end": 88
            },
            "start": 80,
            "end": 88
          },
          "start": 79,
          "end": 88
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
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
          "start": 90,
          "end": 94
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
              },
              "typeArguments": null,
              "start": 99,
              "end": 100
            },
            "start": 97,
            "end": 100
          },
          "start": 96,
          "end": 100
        }
      ],
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
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "optional": false,
                  "computed": true,
                  "start": 116,
                  "end": 120
                },
                "start": 112,
                "end": 120
              },
              "start": 108,
              "end": 120
            },
            "directive": null,
            "start": 108,
            "end": 121
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "optional": false,
                "computed": true,
                "start": 131,
                "end": 135
              },
              "start": 126,
              "end": 135
            },
            "directive": null,
            "start": 126,
            "end": 136
          }
        ],
        "start": 102,
        "end": 169
      },
      "expression": false,
      "start": 19,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "realSum",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 186
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
              "start": 187,
              "end": 188
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 203
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 204,
                    "end": 205
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  }
                ],
                "start": 203,
                "end": 214
              },
              "start": 197,
              "end": 214
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 187,
            "end": 214
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 226,
              "end": 232
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 232
          }
        ],
        "start": 186,
        "end": 233
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 237,
              "end": 243
            },
            "start": 235,
            "end": 243
          },
          "start": 234,
          "end": 243
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "vs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 250
                },
                "typeArguments": null,
                "start": 249,
                "end": 250
              },
              "start": 249,
              "end": 252
            },
            "start": 247,
            "end": 252
          },
          "start": 245,
          "end": 252
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "typeArguments": null,
              "start": 257,
              "end": 258
            },
            "start": 255,
            "end": 258
          },
          "start": 254,
          "end": 258
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 278
                  },
                  "init": null,
                  "definite": false,
                  "start": 277,
                  "end": 278
                }
              ],
              "declare": false,
              "start": 271,
              "end": 278
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "vs",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 284
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 301
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 305
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 307
                        },
                        "optional": false,
                        "computed": true,
                        "start": 304,
                        "end": 308
                      },
                      "start": 300,
                      "end": 308
                    },
                    "start": 296,
                    "end": 308
                  },
                  "directive": null,
                  "start": 296,
                  "end": 309
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 324
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "optional": false,
                      "computed": true,
                      "start": 323,
                      "end": 327
                    },
                    "start": 318,
                    "end": 327
                  },
                  "directive": null,
                  "start": 318,
                  "end": 328
                }
              ],
              "start": 286,
              "end": 334
            },
            "start": 266,
            "end": 334
          }
        ],
        "start": 260,
        "end": 336
      },
      "expression": false,
      "start": 170,
      "end": 336
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 336
}
```
