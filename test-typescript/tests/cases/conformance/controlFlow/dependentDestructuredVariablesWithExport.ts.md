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
        "name": "mutuallyEnabledPair",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
                    "name": "discriminator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "discriminator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      }
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
          "id": {
            "type": "ObjectPattern",
            "start": 217,
            "end": 265,
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 248,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 232,
                  "name": "discriminator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 248,
                  "name": "discriminator1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 250,
                "end": 263,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 255,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 263,
                  "name": "value1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
              "name": "mutuallyEnabledPair",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "discriminator1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "value1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 339,
            "end": 411,
            "id": {
              "type": "ObjectPattern",
              "start": 339,
              "end": 387,
              "properties": [
                {
                  "type": "Property",
                  "start": 341,
                  "end": 370,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 354,
                    "name": "discriminator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 370,
                    "name": "discriminator2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 372,
                  "end": 385,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 377,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 385,
                    "name": "value2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
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
                "name": "mutuallyEnabledPair",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 413,
      "end": 446,
      "test": {
        "type": "Identifier",
        "start": 417,
        "end": 431,
        "name": "discriminator2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "value2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
