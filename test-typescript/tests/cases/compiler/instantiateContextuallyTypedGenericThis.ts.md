__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "JQuery",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 103,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 101,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "name": "each",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 27,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 28,
                  "end": 29,
                  "name": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 55,
                "name": "collection",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 52,
                    "end": 55,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 53,
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 57,
                "end": 89,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 67,
                    "end": 89,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 75,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 72,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 77,
                        "end": 83,
                        "name": "dit",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 80,
                          "end": 83,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 82,
                            "end": 83,
                            "typeName": {
                              "type": "Identifier",
                              "start": 82,
                              "end": 83,
                              "name": "T",
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
                      "start": 85,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 88,
                        "end": 89,
                        "typeName": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 100,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 97,
                "end": 100,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 97,
                  "end": 98,
                  "typeName": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 118,
            "name": "$",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 118,
                  "name": "JQuery",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 139,
            "name": "lines",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 139,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 131,
                "end": 139,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 217,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 216,
        "callee": {
          "type": "MemberExpression",
          "start": 141,
          "end": 147,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "name": "$",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "name": "each",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "name": "lines",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "FunctionExpression",
            "start": 155,
            "end": 215,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "name": "dit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 169,
              "end": 215,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 175,
                  "end": 213,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 182,
                    "end": 212,
                    "left": {
                      "type": "CallExpression",
                      "start": 182,
                      "end": 195,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 192,
                        "object": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 185,
                          "name": "dit",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 192,
                          "name": "charAt",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 193,
                          "end": 194,
                          "value": 0,
                          "raw": "0"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "start": 198,
                      "end": 212,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 198,
                        "end": 209,
                        "object": {
                          "type": "ThisExpression",
                          "start": 198,
                          "end": 202
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 209,
                          "name": "charAt",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 210,
                          "end": 211,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
