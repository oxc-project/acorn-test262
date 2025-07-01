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
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 8,
                "end": 14
              },
              "start": 6,
              "end": 14
            },
            "start": 4,
            "end": 14
          },
          "init": {
            "type": "Literal",
            "value": 10000,
            "raw": "10000",
            "start": 17,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
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
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "start": 28,
            "end": 40
          },
          "init": {
            "type": "Literal",
            "value": "my name",
            "raw": "\"my name\"",
            "start": 43,
            "end": 52
          },
          "definite": false,
          "start": 28,
          "end": 52
        }
      ],
      "declare": false,
      "start": 24,
      "end": 53
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
            "name": "person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 70
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 72,
                        "end": 78
                      },
                      "start": 70,
                      "end": 78
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 69,
                    "end": 79
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 82
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 84,
                        "end": 90
                      },
                      "start": 82,
                      "end": 90
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 80,
                    "end": 90
                  }
                ],
                "start": 67,
                "end": 92
              },
              "start": 65,
              "end": 92
            },
            "start": 59,
            "end": 92
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 101
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 101
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 97,
                "end": 101
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 105
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 105
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 103,
                "end": 105
              }
            ],
            "start": 95,
            "end": 107
          },
          "definite": false,
          "start": 59,
          "end": 107
        }
      ],
      "declare": false,
      "start": 55,
      "end": 108
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
            "name": "person1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 138
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 134,
                    "end": 139
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 142
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 140,
                    "end": 142
                  }
                ],
                "start": 132,
                "end": 144
              },
              "start": 130,
              "end": 144
            },
            "start": 123,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 144
        }
      ],
      "declare": false,
      "start": 119,
      "end": 145
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 165
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 172,
              "end": 178
            },
            "start": 170,
            "end": 178
          },
          "start": 166,
          "end": 178
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 184,
              "end": 190
            },
            "start": 182,
            "end": 190
          },
          "start": 180,
          "end": 190
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 197
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 199,
                  "end": 205
                },
                "start": 197,
                "end": 205
              },
              "accessibility": null,
              "static": false,
              "start": 195,
              "end": 206
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 211
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 213,
                  "end": 219
                },
                "start": 211,
                "end": 219
              },
              "accessibility": null,
              "static": false,
              "start": 207,
              "end": 219
            }
          ],
          "start": 193,
          "end": 221
        },
        "start": 191,
        "end": 221
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 237
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 237
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 233,
                  "end": 237
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 241
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 241
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 239,
                  "end": 241
                }
              ],
              "start": 231,
              "end": 243
            },
            "start": 224,
            "end": 244
          }
        ],
        "start": 222,
        "end": 246
      },
      "expression": false,
      "start": 153,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 269
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 281
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 283,
                      "end": 289
                    },
                    "start": 281,
                    "end": 289
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 277,
                  "end": 290
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 293
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 295,
                      "end": 302
                    },
                    "start": 293,
                    "end": 302
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 291,
                  "end": 302
                }
              ],
              "start": 275,
              "end": 304
            },
            "start": 273,
            "end": 304
          },
          "start": 270,
          "end": 304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 306,
        "end": 309
      },
      "expression": false,
      "start": 257,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 313
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 320
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 324
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 324
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 322,
                "end": 324
              }
            ],
            "start": 314,
            "end": 326
          }
        ],
        "optional": false,
        "start": 310,
        "end": 327
      },
      "directive": null,
      "start": 310,
      "end": 328
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 339
}
```
