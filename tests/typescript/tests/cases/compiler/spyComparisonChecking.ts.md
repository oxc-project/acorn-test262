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
        "name": "Spy",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 30
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 32,
                      "end": 35
                    },
                    "start": 32,
                    "end": 37
                  },
                  "start": 30,
                  "end": 37
                },
                "value": null,
                "start": 21,
                "end": 37
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "start": 20,
            "end": 44
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 67
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "and",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 85
                },
                "typeArguments": null,
                "start": 77,
                "end": 85
              },
              "start": 75,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mostRecentCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 113
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 115,
                          "end": 118
                        },
                        "start": 115,
                        "end": 120
                      },
                      "start": 113,
                      "end": 120
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 109,
                    "end": 121
                  }
                ],
                "start": 107,
                "end": 123
              },
              "start": 105,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "argsForCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 142,
                  "end": 145
                },
                "start": 142,
                "end": 147
              },
              "start": 140,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 148
          }
        ],
        "start": 14,
        "end": 150
      },
      "declare": false,
      "start": 0,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SpyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 163
      },
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
              "start": 164,
              "end": 165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 164,
            "end": 165
          }
        ],
        "start": 163,
        "end": 166
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeArguments": null,
            "start": 169,
            "end": 170
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "typeArguments": null,
                "start": 191,
                "end": 192
              },
              "start": 185,
              "end": 192
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spy",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 198
              },
              "typeArguments": null,
              "start": 195,
              "end": 198
            },
            "optional": false,
            "readonly": null,
            "start": 173,
            "end": 201
          }
        ],
        "start": 169,
        "end": 201
      },
      "declare": false,
      "start": 152,
      "end": 201
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createSpyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 232
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 233,
            "end": 234
          }
        ],
        "start": 232,
        "end": 235
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            },
            "start": 245,
            "end": 253
          },
          "start": 241,
          "end": 253
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 267
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "typeArguments": null,
                      "start": 274,
                      "end": 275
                    },
                    "start": 268,
                    "end": 275
                  }
                ],
                "start": 267,
                "end": 276
              },
              "start": 262,
              "end": 276
            },
            "start": 260,
            "end": 276
          },
          "start": 255,
          "end": 276
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SpyObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 285
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
                "typeArguments": null,
                "start": 286,
                "end": 287
              }
            ],
            "start": 285,
            "end": 288
          },
          "start": 279,
          "end": 288
        },
        "start": 277,
        "end": 288
      },
      "body": null,
      "expression": false,
      "start": 203,
      "end": 289
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mock",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 304
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
              "start": 305,
              "end": 306
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 305,
            "end": 306
          }
        ],
        "start": 304,
        "end": 307
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "spyName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 317,
              "end": 323
            },
            "start": 315,
            "end": 323
          },
          "start": 308,
          "end": 323
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "methodNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 343
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 351
                      },
                      "typeArguments": null,
                      "start": 350,
                      "end": 351
                    },
                    "start": 344,
                    "end": 351
                  }
                ],
                "start": 343,
                "end": 352
              },
              "start": 338,
              "end": 352
            },
            "start": 336,
            "end": 352
          },
          "start": 325,
          "end": 352
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SpyObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 361
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "typeArguments": null,
                "start": 362,
                "end": 363
              }
            ],
            "start": 361,
            "end": 364
          },
          "start": 355,
          "end": 364
        },
        "start": 353,
        "end": 364
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spyObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 383
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createSpyObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 398
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 399,
                          "end": 400
                        },
                        "typeArguments": null,
                        "start": 399,
                        "end": 400
                      }
                    ],
                    "start": 398,
                    "end": 401
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "spyName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 409
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methodNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 422
                    }
                  ],
                  "optional": false,
                  "start": 386,
                  "end": 423
                },
                "definite": false,
                "start": 377,
                "end": 423
              }
            ],
            "declare": false,
            "start": 371,
            "end": 424
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "methodName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 450
                  },
                  "init": null,
                  "definite": false,
                  "start": 440,
                  "end": 450
                }
              ],
              "declare": false,
              "start": 434,
              "end": 450
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodNames",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 465
            },
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "spyObj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 483
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "methodName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 484,
                            "end": 494
                          },
                          "optional": false,
                          "computed": true,
                          "start": 477,
                          "end": 495
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "and",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 496,
                          "end": 499
                        },
                        "optional": false,
                        "computed": false,
                        "start": 477,
                        "end": 499
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "returnValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 500,
                        "end": 511
                      },
                      "optional": false,
                      "computed": false,
                      "start": 477,
                      "end": 511
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 512,
                        "end": 513
                      }
                    ],
                    "optional": false,
                    "start": 477,
                    "end": 514
                  },
                  "directive": null,
                  "start": 477,
                  "end": 515
                }
              ],
              "start": 467,
              "end": 521
            },
            "start": 429,
            "end": 521
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "spyObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 539
            },
            "start": 526,
            "end": 540
          }
        ],
        "start": 365,
        "end": 542
      },
      "expression": false,
      "start": 291,
      "end": 542
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 542
}
```
