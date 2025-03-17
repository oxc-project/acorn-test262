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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 25,
                  "end": 38,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 34,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 35,
                    "end": 37,
                    "raw": "12",
                    "value": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 64,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 44,
              "end": 63,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 45,
                "end": 60,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 60,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 87,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 69,
          "end": 84,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 75,
            "end": 84,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 90,
      "end": 318,
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 318,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 108,
            "end": 145,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 114,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 137,
                "decorators": [],
                "name": "args",
                "optional": false,
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
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 187,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 152,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 186,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 154,
                "end": 186,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 155,
                    "end": 177,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
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
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 192,
            "end": 223,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 215,
                "decorators": [],
                "name": "args",
                "optional": false,
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
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 228,
            "end": 263,
            "params": [
              {
                "type": "Identifier",
                "start": 233,
                "end": 255,
                "decorators": [],
                "name": "args",
                "optional": false,
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
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 277,
              "decorators": [],
              "name": "construct",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 315,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 279,
                "end": 315,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 284,
                    "end": 306,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
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
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
