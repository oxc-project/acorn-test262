__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 66,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 25,
                  "end": 38,
                  "object": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 34,
                    "name": "arguments",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 35,
                    "end": 37,
                    "value": 12,
                    "raw": "12"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 64,
            "expression": {
              "type": "CallExpression",
              "start": 44,
              "end": 63,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 45,
                "end": 60,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 60,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 87,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 69,
          "end": 84,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Identifier",
            "start": 75,
            "end": 84,
            "name": "arguments",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 90,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 318,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 108,
            "end": 145,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 114,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 137,
                "name": "args",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 119,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 121,
                    "end": 137,
                    "exprName": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 137,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 144,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 140,
                "end": 144
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 187,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 152,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 186,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 154,
                "end": 186,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 155,
                    "end": 177,
                    "name": "args",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 159,
                      "end": 177,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 161,
                        "end": 177,
                        "exprName": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 177,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 186,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 182,
                    "end": 186
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 192,
            "end": 223,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 215,
                "name": "args",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 197,
                  "end": 215,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 199,
                    "end": 215,
                    "exprName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 215,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 222,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 218,
                "end": 222
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 228,
            "end": 263,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 233,
                "end": 255,
                "name": "args",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 237,
                  "end": 255,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 239,
                    "end": 255,
                    "exprName": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 255,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 262,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 316,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 277,
              "name": "construct",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 315,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 279,
                "end": 315,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 284,
                    "end": 306,
                    "name": "args",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 288,
                      "end": 306,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 290,
                        "end": 306,
                        "exprName": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 306,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 315,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 311,
                    "end": 315
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
