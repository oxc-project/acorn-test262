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
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 103,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 101,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "each",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 55,
                "decorators": [],
                "name": "collection",
                "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 57,
                "end": 89,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 67,
                    "end": 89,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 75,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 77,
                        "end": 83,
                        "decorators": [],
                        "name": "dit",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 27,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 28,
                  "end": 29,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "JQuery",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 118,
            "decorators": [],
            "name": "$",
            "optional": false,
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
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 139,
            "decorators": [],
            "name": "lines",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 217,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 216,
        "arguments": [
          {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "lines",
            "optional": false
          },
          {
            "type": "FunctionExpression",
            "start": 155,
            "end": 215,
            "async": false,
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
                    "operator": "+",
                    "left": {
                      "type": "CallExpression",
                      "start": 182,
                      "end": 195,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 193,
                          "end": 194,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 192,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 185,
                          "decorators": [],
                          "name": "dit",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 192,
                          "decorators": [],
                          "name": "charAt",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 198,
                      "end": 212,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 210,
                          "end": 211,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 198,
                        "end": 209,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 198,
                          "end": 202
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 209,
                          "decorators": [],
                          "name": "charAt",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "decorators": [],
                "name": "dit",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 141,
          "end": 147,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "$",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "each",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
