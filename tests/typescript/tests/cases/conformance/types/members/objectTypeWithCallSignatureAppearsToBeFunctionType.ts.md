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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 137,
                "end": 141
              },
              "start": 135,
              "end": 141
            },
            "start": 133,
            "end": 142
          }
        ],
        "start": 127,
        "end": 144
      },
      "declare": false,
      "start": 115,
      "end": 144
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "typeArguments": null,
                "start": 153,
                "end": 154
              },
              "start": 151,
              "end": 154
            },
            "start": 150,
            "end": 154
          },
          "init": null,
          "definite": false,
          "start": 150,
          "end": 154
        }
      ],
      "declare": false,
      "start": 146,
      "end": 155
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 164,
                "end": 168
              },
              "start": 162,
              "end": 168
            },
            "start": 160,
            "end": 168
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 171,
            "end": 174
          },
          "definite": false,
          "start": 160,
          "end": 174
        }
      ],
      "declare": false,
      "start": 156,
      "end": 175
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
            "name": "r2b",
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
                        "type": "TSAnyKeyword",
                        "start": 189,
                        "end": 192
                      },
                      "start": 187,
                      "end": 192
                    },
                    "start": 186,
                    "end": 192
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 198,
                        "end": 201
                      },
                      "start": 196,
                      "end": 201
                    },
                    "start": 194,
                    "end": 201
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 206,
                    "end": 209
                  },
                  "start": 203,
                  "end": 209
                },
                "start": 185,
                "end": 209
              },
              "start": 183,
              "end": 209
            },
            "start": 180,
            "end": 209
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 219
            },
            "optional": false,
            "computed": false,
            "start": 212,
            "end": 219
          },
          "definite": false,
          "start": 180,
          "end": 219
        }
      ],
      "declare": false,
      "start": 176,
      "end": 220
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 239,
                        "end": 243
                      },
                      "start": 237,
                      "end": 243
                    },
                    "start": 235,
                    "end": 244
                  }
                ],
                "start": 229,
                "end": 246
              },
              "start": 227,
              "end": 246
            },
            "start": 226,
            "end": 246
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 246
        }
      ],
      "declare": false,
      "start": 222,
      "end": 246
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 256,
                "end": 260
              },
              "start": 254,
              "end": 260
            },
            "start": 252,
            "end": 260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 263,
            "end": 266
          },
          "definite": false,
          "start": 252,
          "end": 266
        }
      ],
      "declare": false,
      "start": 248,
      "end": 267
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
            "name": "rb4",
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
                        "type": "TSAnyKeyword",
                        "start": 281,
                        "end": 284
                      },
                      "start": 279,
                      "end": 284
                    },
                    "start": 278,
                    "end": 284
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 290,
                        "end": 293
                      },
                      "start": 288,
                      "end": 293
                    },
                    "start": 286,
                    "end": 293
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 298,
                    "end": 301
                  },
                  "start": 295,
                  "end": 301
                },
                "start": 277,
                "end": 301
              },
              "start": 275,
              "end": 301
            },
            "start": 272,
            "end": 301
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 311
            },
            "optional": false,
            "computed": false,
            "start": 304,
            "end": 311
          },
          "definite": false,
          "start": 272,
          "end": 311
        }
      ],
      "declare": false,
      "start": 268,
      "end": 312
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 115,
  "end": 312
}
```
