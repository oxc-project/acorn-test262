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
        "name": "ModuleWithState",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 42
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TState",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 49
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 49
          }
        ],
        "start": 42,
        "end": 50
      },
      "typeAnnotation": {
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
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 72
                },
                "typeArguments": null,
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 73
          }
        ],
        "start": 53,
        "end": 75
      },
      "declare": false,
      "start": 22,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 88
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 107
          }
        ],
        "start": 91,
        "end": 109
      },
      "declare": false,
      "start": 78,
      "end": 110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoreState",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 126
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 145
          }
        ],
        "start": 129,
        "end": 147
      },
      "declare": false,
      "start": 112,
      "end": 148
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 179
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TState",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 180,
            "end": 186
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActions",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 196
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 188,
            "end": 196
          }
        ],
        "start": 179,
        "end": 197
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TState",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 211
              },
              "typeArguments": null,
              "start": 205,
              "end": 211
            },
            "start": 203,
            "end": 211
          },
          "start": 198,
          "end": 211
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "actions",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TActions",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 230
              },
              "typeArguments": null,
              "start": 222,
              "end": 230
            },
            "start": 220,
            "end": 230
          },
          "start": 213,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ModuleWithState",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 248
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TState",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 249,
                    "end": 255
                  }
                ],
                "start": 248,
                "end": 256
              },
              "start": 233,
              "end": 256
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TActions",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 267
              },
              "typeArguments": null,
              "start": 259,
              "end": 267
            }
          ],
          "start": 233,
          "end": 267
        },
        "start": 231,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 150,
      "end": 268
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "convert",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 294
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TState",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 301
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 295,
            "end": 301
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActions",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 303,
            "end": 311
          }
        ],
        "start": 294,
        "end": 312
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ModuleWithState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 331
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 338
                        },
                        "typeArguments": null,
                        "start": 332,
                        "end": 338
                      }
                    ],
                    "start": 331,
                    "end": 339
                  },
                  "start": 316,
                  "end": 339
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TActions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 342,
                  "end": 350
                }
              ],
              "start": 316,
              "end": 350
            },
            "start": 314,
            "end": 350
          },
          "start": 313,
          "end": 350
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ModuleWithState",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 368
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 375
                        },
                        "typeArguments": null,
                        "start": 369,
                        "end": 375
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MoreState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 387
                        },
                        "typeArguments": null,
                        "start": 378,
                        "end": 387
                      }
                    ],
                    "start": 369,
                    "end": 387
                  }
                ],
                "start": 368,
                "end": 388
              },
              "start": 353,
              "end": 388
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TActions",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 399
              },
              "typeArguments": null,
              "start": 391,
              "end": 399
            }
          ],
          "start": 353,
          "end": 399
        },
        "start": 351,
        "end": 399
      },
      "body": null,
      "expression": false,
      "start": 270,
      "end": 400
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 414
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "convert",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 424
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 442
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "value": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 448,
                          "end": 450
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 445,
                        "end": 450
                      }
                    ],
                    "start": 443,
                    "end": 452
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 456,
                          "end": 459
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 471,
                                  "end": 475
                                },
                                "start": 464,
                                "end": 475
                              }
                            ],
                            "start": 462,
                            "end": 477
                          },
                          "expression": false,
                          "start": 459,
                          "end": 477
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 456,
                        "end": 477
                      }
                    ],
                    "start": 454,
                    "end": 479
                  }
                ],
                "optional": false,
                "start": 430,
                "end": 480
              }
            ],
            "optional": false,
            "start": 417,
            "end": 482
          },
          "definite": false,
          "start": 408,
          "end": 482
        }
      ],
      "declare": false,
      "start": 402,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 491
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 497
          },
          "optional": false,
          "computed": false,
          "start": 485,
          "end": 497
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 499
        },
        "optional": false,
        "computed": false,
        "start": 485,
        "end": 499
      },
      "directive": null,
      "start": 485,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 506
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 512
          },
          "optional": false,
          "computed": false,
          "start": 500,
          "end": 512
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "optional": false,
        "computed": false,
        "start": 500,
        "end": 514
      },
      "directive": null,
      "start": 500,
      "end": 514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "breaks",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 521
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 525
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 515,
        "end": 527
      },
      "directive": null,
      "start": 515,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 527
}
```
