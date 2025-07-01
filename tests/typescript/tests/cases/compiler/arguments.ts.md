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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 34
                  },
                  "property": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 35,
                    "end": 37
                  },
                  "optional": false,
                  "computed": true,
                  "start": 25,
                  "end": 38
                },
                "definite": false,
                "start": 23,
                "end": 38
              }
            ],
            "declare": false,
            "start": 19,
            "end": 39
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 60
                },
                "id": null,
                "generator": false,
                "start": 45,
                "end": 60
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 44,
              "end": 63
            },
            "directive": null,
            "start": 44,
            "end": 64
          }
        ],
        "start": 13,
        "end": 66
      },
      "expression": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 84
          },
          "id": null,
          "generator": false,
          "start": 69,
          "end": 84
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 68,
        "end": 87
      },
      "directive": null,
      "start": 68,
      "end": 88
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 101
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 114
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 137
                    },
                    "typeArguments": null,
                    "start": 121,
                    "end": 137
                  },
                  "start": 119,
                  "end": 137
                },
                "start": 115,
                "end": 137
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 140,
                "end": 144
              },
              "start": 138,
              "end": 144
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 108,
            "end": 145
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 152
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
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 177
                        },
                        "typeArguments": null,
                        "start": 161,
                        "end": 177
                      },
                      "start": 159,
                      "end": 177
                    },
                    "start": 155,
                    "end": 177
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 182,
                    "end": 186
                  },
                  "start": 179,
                  "end": 186
                },
                "start": 154,
                "end": 186
              },
              "start": 152,
              "end": 186
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 187
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 215
                    },
                    "typeArguments": null,
                    "start": 199,
                    "end": 215
                  },
                  "start": 197,
                  "end": 215
                },
                "start": 193,
                "end": 215
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 218,
                "end": 222
              },
              "start": 216,
              "end": 222
            },
            "start": 192,
            "end": 223
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 239,
                    "end": 255
                  },
                  "start": 237,
                  "end": 255
                },
                "start": 233,
                "end": 255
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              },
              "start": 256,
              "end": 262
            },
            "start": 228,
            "end": 263
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "construct",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 277
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 306
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 306
                      },
                      "start": 288,
                      "end": 306
                    },
                    "start": 284,
                    "end": 306
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 311,
                    "end": 315
                  },
                  "start": 308,
                  "end": 315
                },
                "start": 279,
                "end": 315
              },
              "start": 277,
              "end": 315
            },
            "accessibility": null,
            "static": false,
            "start": 268,
            "end": 316
          }
        ],
        "start": 102,
        "end": 318
      },
      "declare": false,
      "start": 90,
      "end": 318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
