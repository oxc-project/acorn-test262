__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 283,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 11,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 42,
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 48,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 44,
                "end": 48,
                "literal": {
                  "type": "Literal",
                  "start": 44,
                  "end": 48,
                  "raw": "true",
                  "value": true
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 28,
        "decorators": [],
        "name": "Success",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 91,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 89,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 81,
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 88,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 83,
                "end": 88,
                "literal": {
                  "type": "Literal",
                  "start": 83,
                  "end": 88,
                  "raw": "false",
                  "value": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "Fail",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 93,
      "end": 120,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 102,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 105,
        "end": 119,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 105,
            "end": 112,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "Success",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 115,
            "end": 119,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 115,
              "end": 119,
              "decorators": [],
              "name": "Fail",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 145,
        "end": 200,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 198,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 149,
              "end": 197,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 185,
                  "end": 196,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 194,
                    "end": 196,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 185,
                      "end": 190,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 149,
                "end": 184,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 149,
                  "end": 177,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 155,
                      "end": 176,
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "start": 164,
                        "end": 175,
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "start": 166,
                            "end": 173,
                            "argument": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 173,
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 149,
                    "end": 154,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 154,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 131,
        "end": 133,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 134,
          "end": 143,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 135,
            "end": 143,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 137,
              "end": 143,
              "elementType": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 141,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 283,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 283,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 232,
            "end": 281,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 232,
              "end": 280,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 268,
                  "end": 279,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 277,
                    "end": 279,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 268,
                      "end": 273,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 232,
                "end": 267,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 232,
                  "end": 260,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 238,
                      "end": 259,
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "start": 247,
                        "end": 258,
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "start": 249,
                            "end": 256,
                            "argument": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 256,
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 238,
                          "end": 242,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 232,
                    "end": 237,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 237,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 267,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 217,
          "end": 226,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 226,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 220,
              "end": 226,
              "elementType": {
                "type": "TSTypeReference",
                "start": 220,
                "end": 224,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 224,
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 215,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
