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
        "name": "Success",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 28
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 44,
                  "end": 48
                },
                "start": 44,
                "end": 48
              },
              "start": 42,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 49
          }
        ],
        "start": 29,
        "end": 51
      },
      "declare": false,
      "start": 11,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 83,
                  "end": 88
                },
                "start": 83,
                "end": 88
              },
              "start": 81,
              "end": 88
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 89
          }
        ],
        "start": 68,
        "end": 91
      },
      "declare": false,
      "start": 53,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 102
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Success",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 112
            },
            "typeArguments": null,
            "start": 105,
            "end": 112
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fail",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 119
            },
            "typeArguments": null,
            "start": 115,
            "end": 119
          }
        ],
        "start": 105,
        "end": 119
      },
      "declare": false,
      "start": 93,
      "end": 120
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "typeArguments": null,
                "start": 137,
                "end": 141
              },
              "start": 137,
              "end": 143
            },
            "start": 135,
            "end": 143
          },
          "start": 134,
          "end": 143
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 154
                    },
                    "optional": false,
                    "computed": false,
                    "start": 149,
                    "end": 154
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 159
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 173
                            },
                            "start": 166,
                            "end": 173
                          }
                        ],
                        "start": 164,
                        "end": 175
                      },
                      "id": null,
                      "generator": false,
                      "start": 155,
                      "end": 176
                    }
                  ],
                  "optional": false,
                  "start": 149,
                  "end": 177
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "optional": false,
                "computed": false,
                "start": 149,
                "end": 184
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 190
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 194,
                    "end": 196
                  },
                  "id": null,
                  "generator": false,
                  "start": 185,
                  "end": 196
                }
              ],
              "optional": false,
              "start": 149,
              "end": 197
            },
            "directive": null,
            "start": 149,
            "end": 198
          }
        ],
        "start": 145,
        "end": 200
      },
      "expression": false,
      "start": 122,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 214,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 215
          }
        ],
        "start": 213,
        "end": 216
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 224
                },
                "typeArguments": null,
                "start": 220,
                "end": 224
              },
              "start": 220,
              "end": 226
            },
            "start": 218,
            "end": 226
          },
          "start": 217,
          "end": 226
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 233
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 237
                    },
                    "optional": false,
                    "computed": false,
                    "start": 232,
                    "end": 237
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 242
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 252,
                              "end": 256
                            },
                            "start": 249,
                            "end": 256
                          }
                        ],
                        "start": 247,
                        "end": 258
                      },
                      "id": null,
                      "generator": false,
                      "start": 238,
                      "end": 259
                    }
                  ],
                  "optional": false,
                  "start": 232,
                  "end": 260
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 267
                },
                "optional": false,
                "computed": false,
                "start": 232,
                "end": 267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 273
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 277,
                    "end": 279
                  },
                  "id": null,
                  "generator": false,
                  "start": 268,
                  "end": 279
                }
              ],
              "optional": false,
              "start": 232,
              "end": 280
            },
            "directive": null,
            "start": 232,
            "end": 281
          }
        ],
        "start": 228,
        "end": 283
      },
      "expression": false,
      "start": 202,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 283
}
```
