__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 312,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 115,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 144,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 133,
            "end": 142,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 141,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 137,
                "end": 141
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 154,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 175,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 168,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 168,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 164,
                "end": 168
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 171,
            "end": 174,
            "callee": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 220,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 209,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 209,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 185,
                "end": 209,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 186,
                    "end": 192,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 187,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 189,
                        "end": 192
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 194,
                    "end": 201,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 198,
                        "end": 201
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 203,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 206,
                    "end": 209
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 212,
            "end": 219,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 246,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 229,
                "end": 246,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 235,
                    "end": 244,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 237,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 239,
                        "end": 243
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 260,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 260,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 256,
                "end": 260
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 263,
            "end": 266,
            "callee": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 312,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 301,
            "decorators": [],
            "name": "rb4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 301,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 277,
                "end": 301,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 278,
                    "end": 284,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 279,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 281,
                        "end": 284
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 286,
                    "end": 293,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 288,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 290,
                        "end": 293
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 295,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 298,
                    "end": 301
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 304,
            "end": 311,
            "object": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 306,
              "end": 311,
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
