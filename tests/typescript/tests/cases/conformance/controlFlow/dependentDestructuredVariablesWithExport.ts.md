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
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 93,
        "decorators": [],
        "name": "mutuallyEnabledPair",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 116,
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 128,
                  "end": 142,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 133,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    }
                  },
                  "accessibility": null,
                  "static": false
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 168,
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 181,
                  "end": 205,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 186,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 289,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 289,
          "id": {
            "type": "ObjectPattern",
            "start": 217,
            "end": 265,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 248,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 232,
                  "decorators": [],
                  "name": "discriminator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 248,
                  "decorators": [],
                  "name": "discriminator1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 250,
                "end": 263,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 255,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 263,
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 268,
            "end": 289,
            "callee": {
              "type": "Identifier",
              "start": 268,
              "end": 287,
              "decorators": [],
              "name": "mutuallyEnabledPair",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 291,
      "end": 324,
      "test": {
        "type": "Identifier",
        "start": 295,
        "end": 309,
        "decorators": [],
        "name": "discriminator1",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 311,
        "end": 324,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 315,
            "end": 322,
            "expression": {
              "type": "Identifier",
              "start": 315,
              "end": 321,
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 326,
      "end": 411,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 333,
        "end": 411,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 339,
            "end": 411,
            "id": {
              "type": "ObjectPattern",
              "start": 339,
              "end": 387,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 341,
                  "end": 370,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 354,
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 370,
                    "decorators": [],
                    "name": "discriminator2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 372,
                  "end": 385,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 377,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 385,
                    "decorators": [],
                    "name": "value2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 390,
              "end": 411,
              "callee": {
                "type": "Identifier",
                "start": 390,
                "end": 409,
                "decorators": [],
                "name": "mutuallyEnabledPair",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "IfStatement",
      "start": 413,
      "end": 446,
      "test": {
        "type": "Identifier",
        "start": 417,
        "end": 431,
        "decorators": [],
        "name": "discriminator2",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 433,
        "end": 446,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 437,
            "end": 444,
            "expression": {
              "type": "Identifier",
              "start": 437,
              "end": 443,
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
