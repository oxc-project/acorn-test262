__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
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
                        "type": "TSNumberKeyword",
                        "start": 42,
                        "end": 48
                      },
                      "start": 40,
                      "end": 48
                    },
                    "start": 39,
                    "end": 48
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  },
                  "start": 50,
                  "end": 59
                },
                "start": 38,
                "end": 59
              },
              "start": 36,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 59
          }
        ],
        "start": 31,
        "end": 61
      },
      "declare": false,
      "start": 22,
      "end": 62
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
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
                        "type": "TSBooleanKeyword",
                        "start": 83,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    },
                    "start": 80,
                    "end": 90
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  "start": 92,
                  "end": 101
                },
                "start": 79,
                "end": 101
              },
              "start": 77,
              "end": 101
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 101
          }
        ],
        "start": 72,
        "end": 103
      },
      "declare": false,
      "start": 63,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call0",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 125
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "typeArguments": null,
                  "start": 128,
                  "end": 129
                }
              ],
              "start": 124,
              "end": 129
            },
            "start": 122,
            "end": 129
          },
          "start": 121,
          "end": 129
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "optional": false,
                "computed": false,
                "start": 136,
                "end": 139
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 140,
                  "end": 143
                }
              ],
              "optional": false,
              "start": 136,
              "end": 144
            },
            "directive": null,
            "start": 136,
            "end": 145
          }
        ],
        "start": 131,
        "end": 156
      },
      "expression": false,
      "start": 106,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callN",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 172
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
              "start": 173,
              "end": 174
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "typeArguments": null,
                  "start": 183,
                  "end": 184
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 188
                  },
                  "typeArguments": null,
                  "start": 187,
                  "end": 188
                }
              ],
              "start": 183,
              "end": 188
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 173,
            "end": 188
          }
        ],
        "start": 172,
        "end": 189
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
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
                "start": 193,
                "end": 194
              },
              "typeArguments": null,
              "start": 193,
              "end": 194
            },
            "start": 191,
            "end": 194
          },
          "start": 190,
          "end": 194
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 201
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "optional": false,
                "computed": false,
                "start": 200,
                "end": 203
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 204,
                  "end": 207
                }
              ],
              "optional": false,
              "start": 200,
              "end": 208
            },
            "directive": null,
            "start": 200,
            "end": 209
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "typeArguments": null,
                        "start": 231,
                        "end": 232
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 233,
                          "end": 236
                        },
                        "start": 233,
                        "end": 236
                      },
                      "start": 231,
                      "end": 237
                    },
                    "start": 229,
                    "end": 237
                  },
                  "start": 228,
                  "end": 237
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 241
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 240,
                  "end": 243
                },
                "definite": false,
                "start": 228,
                "end": 243
              }
            ],
            "declare": false,
            "start": 224,
            "end": 244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 249,
                  "end": 251
                }
              ],
              "optional": false,
              "start": 247,
              "end": 252
            },
            "directive": null,
            "start": 247,
            "end": 253
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 266
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 267,
                  "end": 269
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 271,
                  "end": 273
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 275,
                  "end": 277
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 279,
                  "end": 281
                }
              ],
              "optional": false,
              "start": 265,
              "end": 282
            },
            "directive": null,
            "start": 265,
            "end": 283
          }
        ],
        "start": 196,
        "end": 294
      },
      "expression": false,
      "start": 158,
      "end": 294
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 294
}
```
