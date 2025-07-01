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
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "breed",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Breed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 34
                },
                "typeArguments": null,
                "start": 29,
                "end": 34
              },
              "start": 27,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 35
          }
        ],
        "start": 17,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Breed",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 53
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              },
              "start": 63,
              "end": 71
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 72
          }
        ],
        "start": 54,
        "end": 74
      },
      "declare": false,
      "start": 38,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNil",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 106,
              "end": 113
            },
            "start": 104,
            "end": 113
          },
          "start": 99,
          "end": 113
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 125,
                  "end": 134
                },
                {
                  "type": "TSNullKeyword",
                  "start": 137,
                  "end": 141
                }
              ],
              "start": 125,
              "end": 141
            },
            "start": 125,
            "end": 141
          },
          "start": 116,
          "end": 141
        },
        "start": 114,
        "end": 141
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getBreedSizeWithoutFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 195
              },
              "typeArguments": null,
              "start": 189,
              "end": 195
            },
            "start": 187,
            "end": 195
          },
          "start": 181,
          "end": 195
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 198,
              "end": 204
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 207,
              "end": 216
            }
          ],
          "start": 198,
          "end": 216
        },
        "start": 196,
        "end": 216
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "animal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 231
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "breed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 238
                    },
                    "optional": true,
                    "computed": false,
                    "start": 225,
                    "end": 238
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "size",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 244
                  },
                  "optional": true,
                  "computed": false,
                  "start": 225,
                  "end": 244
                },
                "start": 225,
                "end": 244
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 248,
                "end": 252
              },
              "start": 225,
              "end": 252
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 273
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "breed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 279
                      },
                      "optional": false,
                      "computed": false,
                      "start": 267,
                      "end": 279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 284
                    },
                    "optional": false,
                    "computed": false,
                    "start": 267,
                    "end": 284
                  },
                  "start": 260,
                  "end": 285
                }
              ],
              "start": 254,
              "end": 289
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 317
                  },
                  "start": 301,
                  "end": 318
                }
              ],
              "start": 295,
              "end": 322
            },
            "start": 221,
            "end": 322
          }
        ],
        "start": 217,
        "end": 324
      },
      "expression": false,
      "start": 144,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getBreedSizeWithFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 374
              },
              "typeArguments": null,
              "start": 368,
              "end": 374
            },
            "start": 366,
            "end": 374
          },
          "start": 360,
          "end": 374
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 377,
              "end": 383
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 386,
              "end": 395
            }
          ],
          "start": 377,
          "end": 395
        },
        "start": 375,
        "end": 395
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNil",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 410
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 417
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "breed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 424
                        },
                        "optional": true,
                        "computed": false,
                        "start": 411,
                        "end": 424
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 430
                      },
                      "optional": true,
                      "computed": false,
                      "start": 411,
                      "end": 430
                    },
                    "start": 411,
                    "end": 430
                  }
                ],
                "optional": false,
                "start": 405,
                "end": 431
              },
              "prefix": true,
              "start": 404,
              "end": 431
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 452
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "breed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 446,
                      "end": 458
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 463
                    },
                    "optional": false,
                    "computed": false,
                    "start": 446,
                    "end": 463
                  },
                  "start": 439,
                  "end": 464
                }
              ],
              "start": 433,
              "end": 468
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 496
                  },
                  "start": 480,
                  "end": 497
                }
              ],
              "start": 474,
              "end": 501
            },
            "start": 400,
            "end": 501
          }
        ],
        "start": 396,
        "end": 503
      },
      "expression": false,
      "start": 326,
      "end": 503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 503
}
```
