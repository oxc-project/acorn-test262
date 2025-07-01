__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
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
                  "name": "__hash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 29
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 31,
                      "end": 35
                    },
                    "start": 31,
                    "end": 35
                  },
                  "start": 29,
                  "end": 35
                },
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 35
              }
            ],
            "start": 21,
            "end": 37
          }
        ],
        "start": 12,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getHashLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Hash",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 73
              },
              "typeArguments": null,
              "start": 69,
              "end": 73
            },
            "start": 67,
            "end": 73
          },
          "start": 63,
          "end": 73
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 76,
          "end": 82
        },
        "start": 74,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 104
                },
                "prefix": true,
                "start": 93,
                "end": 104
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 109,
                "end": 117
              },
              "start": 93,
              "end": 117
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 144
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "This doesn't look like a hash",
                        "raw": "\"This doesn't look like a hash\"",
                        "start": 145,
                        "end": 176
                      }
                    ],
                    "start": 135,
                    "end": 177
                  },
                  "start": 129,
                  "end": 178
                }
              ],
              "start": 119,
              "end": 184
            },
            "alternate": null,
            "start": 89,
            "end": 184
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 200
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 207
              },
              "optional": false,
              "computed": false,
              "start": 196,
              "end": 207
            },
            "start": 189,
            "end": 208
          }
        ],
        "start": 83,
        "end": 210
      },
      "expression": false,
      "start": 40,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getHashLength2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 235
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
              "start": 236,
              "end": 237
            },
            "constraint": {
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
                    "name": "__tag__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 255
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 257,
                      "end": 264
                    },
                    "start": 255,
                    "end": 264
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 248,
                  "end": 264
                }
              ],
              "start": 246,
              "end": 265
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 265
          }
        ],
        "start": 235,
        "end": 266
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 273,
                  "end": 279
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 283
                  },
                  "typeArguments": null,
                  "start": 282,
                  "end": 283
                }
              ],
              "start": 273,
              "end": 283
            },
            "start": 271,
            "end": 283
          },
          "start": 267,
          "end": 283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 286,
          "end": 292
        },
        "start": 284,
        "end": 292
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 314
                },
                "prefix": true,
                "start": 303,
                "end": 314
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 319,
                "end": 327
              },
              "start": 303,
              "end": 327
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 354
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "This doesn't look like a hash",
                        "raw": "\"This doesn't look like a hash\"",
                        "start": 355,
                        "end": 386
                      }
                    ],
                    "start": 345,
                    "end": 387
                  },
                  "start": 339,
                  "end": 388
                }
              ],
              "start": 329,
              "end": 394
            },
            "alternate": null,
            "start": 299,
            "end": 394
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hash",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 410
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 417
              },
              "optional": false,
              "computed": false,
              "start": 406,
              "end": 417
            },
            "start": 399,
            "end": 418
          }
        ],
        "start": 293,
        "end": 420
      },
      "expression": false,
      "start": 212,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 420
}
```
