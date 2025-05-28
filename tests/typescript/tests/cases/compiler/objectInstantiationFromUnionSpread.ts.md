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
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 28,
        "decorators": [],
        "name": "Success",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 42,
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "Fail",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 89,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 81,
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 93,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 102,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 105,
        "end": 119,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 105,
            "end": 112,
            "typeName": {
              "type": "Identifier",
              "start": 105,
              "end": 112,
              "decorators": [],
              "name": "Success",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 115,
            "end": 119,
            "typeName": {
              "type": "Identifier",
              "start": 115,
              "end": 119,
              "decorators": [],
              "name": "Fail",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 145,
        "end": 200,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 198,
            "expression": {
              "type": "CallExpression",
              "start": 149,
              "end": 197,
              "callee": {
                "type": "MemberExpression",
                "start": 149,
                "end": 184,
                "object": {
                  "type": "CallExpression",
                  "start": 149,
                  "end": 177,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 149,
                    "end": 154,
                    "object": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 154,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 155,
                      "end": 176,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 185,
                  "end": 196,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 194,
                    "end": 196,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 224,
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 283,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 232,
            "end": 281,
            "expression": {
              "type": "CallExpression",
              "start": 232,
              "end": 280,
              "callee": {
                "type": "MemberExpression",
                "start": 232,
                "end": 267,
                "object": {
                  "type": "CallExpression",
                  "start": 232,
                  "end": 260,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 232,
                    "end": 237,
                    "object": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 237,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 238,
                      "end": 259,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 267,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 268,
                  "end": 279,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 277,
                    "end": 279,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
