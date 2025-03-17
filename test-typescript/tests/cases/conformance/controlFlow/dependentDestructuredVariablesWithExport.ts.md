__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 446,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 209,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 93,
        "decorators": [],
        "name": "mutuallyEnabledPair",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 95,
        "end": 209,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 97,
          "end": 209,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 97,
              "end": 146,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 103,
                  "end": 123,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 116,
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 118,
                      "end": 122,
                      "literal": {
                        "type": "Literal",
                        "start": 118,
                        "end": 122,
                        "raw": "true",
                        "value": true
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 128,
                  "end": 142,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 133,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 149,
              "end": 209,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 155,
                  "end": 176,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 168,
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 170,
                      "end": 175,
                      "literal": {
                        "type": "Literal",
                        "start": 170,
                        "end": 175,
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 181,
                  "end": 205,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 186,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 188,
                      "end": 204,
                      "types": [
                        {
                          "type": "TSNullKeyword",
                          "start": 188,
                          "end": 192
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 195,
                          "end": 204
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 289,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 217,
            "end": 265,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 248,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 232,
                  "decorators": [],
                  "name": "discriminator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 248,
                  "decorators": [],
                  "name": "discriminator1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 250,
                "end": 263,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 255,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 263,
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 268,
            "end": 289,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 268,
              "end": 287,
              "decorators": [],
              "name": "mutuallyEnabledPair",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 291,
      "end": 324,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 311,
        "end": 324,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 315,
            "end": 322,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 315,
              "end": 321,
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 295,
        "end": 309,
        "decorators": [],
        "name": "discriminator1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 326,
      "end": 411,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 333,
        "end": 411,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 339,
            "end": 411,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 339,
              "end": 387,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 341,
                  "end": 370,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 354,
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 370,
                    "decorators": [],
                    "name": "discriminator2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 372,
                  "end": 385,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 377,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 385,
                    "decorators": [],
                    "name": "value2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 390,
              "end": 411,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 390,
                "end": 409,
                "decorators": [],
                "name": "mutuallyEnabledPair",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "IfStatement",
      "start": 413,
      "end": 446,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 433,
        "end": 446,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 437,
            "end": 444,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 437,
              "end": 443,
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 417,
        "end": 431,
        "decorators": [],
        "name": "discriminator2",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
