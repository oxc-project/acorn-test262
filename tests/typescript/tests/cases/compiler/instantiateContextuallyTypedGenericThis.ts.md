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
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "each",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 28,
                    "end": 29
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 28,
                  "end": 29
                }
              ],
              "start": 27,
              "end": 30
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "collection",
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
                        "start": 52,
                        "end": 53
                      },
                      "typeArguments": null,
                      "start": 52,
                      "end": 53
                    },
                    "start": 52,
                    "end": 55
                  },
                  "start": 50,
                  "end": 55
                },
                "start": 40,
                "end": 55
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                        "name": "this",
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
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 72,
                          "end": 75
                        },
                        "start": 68,
                        "end": 75
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dit",
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
                              "start": 82,
                              "end": 83
                            },
                            "typeArguments": null,
                            "start": 82,
                            "end": 83
                          },
                          "start": 80,
                          "end": 83
                        },
                        "start": 77,
                        "end": 83
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "typeArguments": null,
                        "start": 88,
                        "end": 89
                      },
                      "start": 85,
                      "end": 89
                    },
                    "start": 67,
                    "end": 89
                  },
                  "start": 65,
                  "end": 89
                },
                "start": 57,
                "end": 89
              }
            ],
            "returnType": {
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
                    "start": 97,
                    "end": 98
                  },
                  "typeArguments": null,
                  "start": 97,
                  "end": 98
                },
                "start": 97,
                "end": 100
              },
              "start": 95,
              "end": 100
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 101
          }
        ],
        "start": 17,
        "end": 103
      },
      "declare": false,
      "start": 0,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 118
                },
                "typeArguments": null,
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "start": 109,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 118
        }
      ],
      "declare": false,
      "start": 105,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lines",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
                },
                "start": 131,
                "end": 139
              },
              "start": 129,
              "end": 139
            },
            "start": 124,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 139
        }
      ],
      "declare": false,
      "start": 120,
      "end": 140
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
            "name": "$",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "each",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "lines",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 153
          },
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dit",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 167
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 185
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "charAt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 192
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 193,
                          "end": 194
                        }
                      ],
                      "optional": false,
                      "start": 182,
                      "end": 195
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 198,
                          "end": 202
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "charAt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 209
                        },
                        "optional": false,
                        "computed": false,
                        "start": 198,
                        "end": 209
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 210,
                          "end": 211
                        }
                      ],
                      "optional": false,
                      "start": 198,
                      "end": 212
                    },
                    "start": 182,
                    "end": 212
                  },
                  "start": 175,
                  "end": 213
                }
              ],
              "start": 169,
              "end": 215
            },
            "expression": false,
            "start": 155,
            "end": 215
          }
        ],
        "optional": false,
        "start": 141,
        "end": 216
      },
      "directive": null,
      "start": 141,
      "end": 217
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
