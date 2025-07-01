__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 33
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 42,
                  "end": 45
                },
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 34,
        "end": 48
      },
      "declare": false,
      "start": 22,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 69,
                  "end": 72
                },
                "start": 69,
                "end": 72
              },
              "start": 67,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 73
          }
        ],
        "start": 61,
        "end": 75
      },
      "declare": false,
      "start": 49,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
      },
      "typeParameters": null,
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
              "start": 86,
              "end": 87
            },
            "typeArguments": null,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeArguments": null,
            "start": 90,
            "end": 91
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 94,
            "end": 103
          }
        ],
        "start": 86,
        "end": 103
      },
      "declare": false,
      "start": 77,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "never",
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
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 132,
          "end": 137
        },
        "start": 130,
        "end": 137
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 159
              },
              "typeArguments": null,
              "arguments": [],
              "start": 150,
              "end": 161
            },
            "start": 144,
            "end": 162
          }
        ],
        "start": 138,
        "end": 164
      },
      "expression": false,
      "start": 106,
      "end": 164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useA",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
            "start": 181,
            "end": 184
          },
          "start": 180,
          "end": 184
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 187,
          "end": 191
        },
        "start": 185,
        "end": 191
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 192,
        "end": 195
      },
      "expression": false,
      "start": 166,
      "end": 195
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useB",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 209
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
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
                "start": 213,
                "end": 214
              },
              "typeArguments": null,
              "start": 213,
              "end": 214
            },
            "start": 211,
            "end": 214
          },
          "start": 210,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        },
        "start": 215,
        "end": 221
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 222,
        "end": 225
      },
      "expression": false,
      "start": 196,
      "end": 225
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 243
                },
                "typeArguments": null,
                "start": 242,
                "end": 243
              },
              "start": 240,
              "end": 243
            },
            "start": 239,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 243
        }
      ],
      "declare": true,
      "start": 227,
      "end": 244
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 251
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 265
        },
        "start": 250,
        "end": 265
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 282
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 287
              },
              "optional": false,
              "computed": false,
              "start": 281,
              "end": 287
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 304,
                  "end": 307
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "useA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 313
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 315
                        }
                      ],
                      "optional": false,
                      "start": 309,
                      "end": 316
                    },
                    "directive": null,
                    "start": 309,
                    "end": 317
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 318,
                    "end": 324
                  }
                ],
                "start": 299,
                "end": 324
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 338,
                  "end": 341
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "useB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 347
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 348,
                          "end": 349
                        }
                      ],
                      "optional": false,
                      "start": 343,
                      "end": 350
                    },
                    "directive": null,
                    "start": 343,
                    "end": 351
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 352,
                    "end": 358
                  }
                ],
                "start": 333,
                "end": 358
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "never",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 381
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 383
                        }
                      ],
                      "optional": false,
                      "start": 376,
                      "end": 384
                    },
                    "directive": null,
                    "start": 376,
                    "end": 385
                  }
                ],
                "start": 367,
                "end": 385
              }
            ],
            "start": 273,
            "end": 391
          }
        ],
        "start": 267,
        "end": 393
      },
      "alternate": null,
      "start": 246,
      "end": 393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 393
}
```
