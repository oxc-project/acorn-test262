__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "safeInvoke",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 93
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
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 96
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 94,
              "end": 96
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 98,
              "end": 99
            }
          ],
          "start": 93,
          "end": 100
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 120,
                              "end": 122
                            },
                            "typeArguments": null,
                            "start": 120,
                            "end": 122
                          },
                          "start": 118,
                          "end": 122
                        },
                        "start": 114,
                        "end": 122
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 128
                        },
                        "typeArguments": null,
                        "start": 127,
                        "end": 128
                      },
                      "start": 124,
                      "end": 128
                    },
                    "start": 113,
                    "end": 128
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 132,
                    "end": 136
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 139,
                    "end": 148
                  }
                ],
                "start": 112,
                "end": 148
              },
              "start": 110,
              "end": 148
            },
            "start": 106,
            "end": 148
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 162
                },
                "typeArguments": null,
                "start": 160,
                "end": 162
              },
              "start": 158,
              "end": 162
            },
            "start": 154,
            "end": 162
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 170,
                "end": 179
              }
            ],
            "start": 166,
            "end": 179
          },
          "start": 164,
          "end": 179
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 217
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 222
                        }
                      ],
                      "optional": false,
                      "start": 213,
                      "end": 223
                    },
                    "start": 206,
                    "end": 224
                  }
                ],
                "start": 196,
                "end": 230
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
                      "start": 253,
                      "end": 262
                    },
                    "start": 246,
                    "end": 263
                  }
                ],
                "start": 236,
                "end": 269
              },
              "start": 186,
              "end": 269
            }
          ],
          "start": 180,
          "end": 271
        },
        "expression": false,
        "start": 74,
        "end": 271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 288
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 300
            },
            "computed": false,
            "optional": true,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 309,
                    "end": 315
                  },
                  "start": 307,
                  "end": 315
                },
                "start": 302,
                "end": 315
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 318,
                "end": 325
              },
              "start": 316,
              "end": 325
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 295,
            "end": 326
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 336
            },
            "computed": false,
            "optional": true,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 345,
                    "end": 351
                  },
                  "start": 343,
                  "end": 351
                },
                "start": 338,
                "end": 351
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 354,
                "end": 358
              },
              "start": 352,
              "end": 358
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 331,
            "end": 359
          }
        ],
        "start": 289,
        "end": 361
      },
      "declare": false,
      "start": 273,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 375
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 391
              },
              "typeArguments": null,
              "start": 386,
              "end": 391
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 376,
            "end": 391
          }
        ],
        "start": 375,
        "end": 392
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 408
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 410
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 410
                  }
                ],
                "start": 408,
                "end": 411
              },
              "start": 400,
              "end": 411
            },
            "start": 398,
            "end": 411
          },
          "start": 393,
          "end": 411
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
                "type": "Identifier",
                "decorators": [],
                "name": "safeInvoke",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 429
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 435
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 441
                  },
                  "optional": false,
                  "computed": false,
                  "start": 430,
                  "end": 441
                },
                {
                  "type": "Literal",
                  "value": "blah",
                  "raw": "\"blah\"",
                  "start": 443,
                  "end": 449
                }
              ],
              "optional": false,
              "start": 419,
              "end": 450
            },
            "directive": null,
            "start": 419,
            "end": 451
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "safeInvoke",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 572
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 578
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 584
                  },
                  "optional": false,
                  "computed": false,
                  "start": 573,
                  "end": 584
                },
                {
                  "type": "Literal",
                  "value": "blah",
                  "raw": "\"blah\"",
                  "start": 586,
                  "end": 592
                }
              ],
              "optional": false,
              "start": 562,
              "end": 593
            },
            "directive": null,
            "start": 562,
            "end": 594
          }
        ],
        "start": 413,
        "end": 596
      },
      "expression": false,
      "start": 363,
      "end": 596
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 596
}
```
