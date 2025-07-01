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
          "name": "o",
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
                "start": 18,
                "end": 19
              },
              "typeArguments": null,
              "start": 18,
              "end": 19
            },
            "start": 16,
            "end": 19
          },
          "start": 15,
          "end": 19
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 35
                },
                "optional": false,
                "computed": false,
                "start": 25,
                "end": 35
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 25,
              "end": 37
            },
            "directive": null,
            "start": 25,
            "end": 38
          }
        ],
        "start": 21,
        "end": 49
      },
      "expression": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
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
              "start": 63,
              "end": 64
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 73,
              "end": 75
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 63,
            "end": 75
          }
        ],
        "start": 62,
        "end": 76
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                "start": 80,
                "end": 81
              },
              "typeArguments": null,
              "start": 80,
              "end": 81
            },
            "start": 78,
            "end": 81
          },
          "start": 77,
          "end": 81
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 97
                },
                "optional": false,
                "computed": false,
                "start": 87,
                "end": 97
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 87,
              "end": 99
            },
            "directive": null,
            "start": 87,
            "end": 100
          }
        ],
        "start": 83,
        "end": 114
      },
      "expression": false,
      "start": 51,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 127
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
              "start": 128,
              "end": 129
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 144
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 145,
                    "end": 151
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 153,
                    "end": 156
                  }
                ],
                "start": 144,
                "end": 157
              },
              "start": 138,
              "end": 157
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 157
          }
        ],
        "start": 127,
        "end": 158
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 159,
          "end": 163
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 179
                },
                "optional": false,
                "computed": false,
                "start": 169,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 169,
              "end": 181
            },
            "directive": null,
            "start": 169,
            "end": 182
          }
        ],
        "start": 165,
        "end": 196
      },
      "expression": false,
      "start": 116,
      "end": 196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "user",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 211
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
              "start": 212,
              "end": 213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 212,
            "end": 213
          }
        ],
        "start": 211,
        "end": 214
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 218,
                "end": 219
              },
              "typeArguments": null,
              "start": 218,
              "end": 219
            },
            "start": 216,
            "end": 219
          },
          "start": 215,
          "end": 219
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 227
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 229
                }
              ],
              "optional": false,
              "start": 225,
              "end": 230
            },
            "directive": null,
            "start": 225,
            "end": 231
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 236
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                }
              ],
              "optional": false,
              "start": 234,
              "end": 239
            },
            "directive": null,
            "start": 234,
            "end": 240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 308
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                }
              ],
              "optional": false,
              "start": 306,
              "end": 311
            },
            "directive": null,
            "start": 306,
            "end": 312
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 388
                },
                "optional": false,
                "computed": false,
                "start": 378,
                "end": 388
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 378,
              "end": 390
            },
            "directive": null,
            "start": 378,
            "end": 391
          }
        ],
        "start": 221,
        "end": 432
      },
      "expression": false,
      "start": 198,
      "end": 432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 432
}
```
