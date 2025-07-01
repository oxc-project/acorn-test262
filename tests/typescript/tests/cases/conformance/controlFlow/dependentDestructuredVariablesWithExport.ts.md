__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mutuallyEnabledPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 116
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 118,
                        "end": 122
                      },
                      "start": 118,
                      "end": 122
                    },
                    "start": 116,
                    "end": 122
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 103,
                  "end": 123
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 133
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    },
                    "start": 133,
                    "end": 141
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 128,
                  "end": 142
                }
              ],
              "start": 97,
              "end": 146
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 170,
                        "end": 175
                      },
                      "start": 170,
                      "end": 175
                    },
                    "start": 168,
                    "end": 175
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 155,
                  "end": 176
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 186
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 188,
                      "end": 204
                    },
                    "start": 186,
                    "end": 204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 181,
                  "end": 205
                }
              ],
              "start": 149,
              "end": 209
            }
          ],
          "start": 97,
          "end": 209
        },
        "start": 95,
        "end": 209
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 209
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "discriminator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 232
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "discriminator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 219,
                "end": 248
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 255
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 263
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 265
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutuallyEnabledPair",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 268,
            "end": 289
          },
          "definite": false,
          "start": 217,
          "end": 289
        }
      ],
      "declare": false,
      "start": 211,
      "end": 289
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "discriminator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 309
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 321
            },
            "directive": null,
            "start": 315,
            "end": 322
          }
        ],
        "start": 311,
        "end": 324
      },
      "alternate": null,
      "start": 291,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 354
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "discriminator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 370
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 341,
                  "end": 370
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 377
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 385
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 372,
                  "end": 385
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 387
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "mutuallyEnabledPair",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 409
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 390,
              "end": 411
            },
            "definite": false,
            "start": 339,
            "end": 411
          }
        ],
        "declare": false,
        "start": 333,
        "end": 411
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 326,
      "end": 411
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "discriminator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 431
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 443
            },
            "directive": null,
            "start": 437,
            "end": 444
          }
        ],
        "start": 433,
        "end": 446
      },
      "alternate": null,
      "start": 413,
      "end": 446
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 446
}
```
