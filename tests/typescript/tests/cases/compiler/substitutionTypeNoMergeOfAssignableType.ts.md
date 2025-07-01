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
        "name": "Entry",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "comment",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 39
          }
        ],
        "start": 16,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 62
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
              "name": "fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          },
                          "start": 83,
                          "end": 91
                        },
                        "start": 80,
                        "end": 91
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 94,
                        "end": 99
                      },
                      "start": 92,
                      "end": 99
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 79,
                    "end": 99
                  }
                ],
                "start": 78,
                "end": 100
              },
              "start": 76,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 101
          }
        ],
        "start": 63,
        "end": 104
      },
      "declare": false,
      "start": 46,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fields",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 136
              },
              "typeArguments": null,
              "start": 130,
              "end": 136
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 136
          }
        ],
        "start": 119,
        "end": 137
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 149
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 160
              },
              "typeArguments": null,
              "start": 159,
              "end": 160
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "fields",
                "raw": "\"fields\"",
                "start": 161,
                "end": 169
              },
              "start": 161,
              "end": 169
            },
            "start": 159,
            "end": 170
          },
          "start": 153,
          "end": 170
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 174
              },
              "typeArguments": null,
              "start": 173,
              "end": 174
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "fields",
                "raw": "\"fields\"",
                "start": 175,
                "end": 183
              },
              "start": 175,
              "end": 183
            },
            "start": 173,
            "end": 184
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeArguments": null,
            "start": 185,
            "end": 186
          },
          "start": 173,
          "end": 187
        },
        "optional": false,
        "readonly": null,
        "start": 140,
        "end": 190
      },
      "declare": false,
      "start": 108,
      "end": 191
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nodes",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 205
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
              "start": 206,
              "end": 207
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 210,
              "end": 213
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 213
          }
        ],
        "start": 205,
        "end": 214
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 226
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
              "start": 236,
              "end": 237
            },
            "typeArguments": null,
            "start": 236,
            "end": 237
          },
          "start": 230,
          "end": 237
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "typeArguments": null,
              "start": 240,
              "end": 241
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 244
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Entity",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 259
            },
            "typeArguments": null,
            "start": 253,
            "end": 259
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 277
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 279
                    },
                    "typeArguments": null,
                    "start": 278,
                    "end": 279
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 281
                    },
                    "typeArguments": null,
                    "start": 280,
                    "end": 281
                  },
                  "start": 278,
                  "end": 282
                }
              ],
              "start": 277,
              "end": 283
            },
            "start": 271,
            "end": 283
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 296
              },
              "typeArguments": null,
              "start": 295,
              "end": 296
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 298
              },
              "typeArguments": null,
              "start": 297,
              "end": 298
            },
            "start": 295,
            "end": 299
          },
          "start": 240,
          "end": 299
        },
        "optional": false,
        "readonly": null,
        "start": 217,
        "end": 302
      },
      "declare": false,
      "start": 195,
      "end": 303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeEntityStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 331
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
              "start": 332,
              "end": 333
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 348
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 349,
                    "end": 355
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Entity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 363
                    },
                    "typeArguments": null,
                    "start": 357,
                    "end": 363
                  }
                ],
                "start": 348,
                "end": 364
              },
              "start": 342,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 364
          }
        ],
        "start": 331,
        "end": 365
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "typeArguments": null,
              "start": 374,
              "end": 375
            },
            "start": 372,
            "end": 375
          },
          "start": 366,
          "end": 375
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Nodes",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 383
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
                  "start": 384,
                  "end": 385
                },
                "typeArguments": null,
                "start": 384,
                "end": 385
              }
            ],
            "start": 383,
            "end": 386
          },
          "start": 378,
          "end": 386
        },
        "start": 376,
        "end": 386
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 401,
                "end": 403
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Nodes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 412
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
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    }
                  ],
                  "start": 412,
                  "end": 415
                },
                "start": 407,
                "end": 415
              },
              "start": 401,
              "end": 415
            },
            "start": 394,
            "end": 415
          }
        ],
        "start": 387,
        "end": 418
      },
      "expression": false,
      "start": 307,
      "end": 418
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
            "name": "myTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 434
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeEntityStore",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 452
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
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 459
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fields",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 469
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "id",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 473,
                                  "end": 475
                                },
                                "value": {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "start": 477,
                                  "end": 479
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 473,
                                "end": 479
                              }
                            ],
                            "start": 471,
                            "end": 481
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 463,
                          "end": 481
                        }
                      ],
                      "start": 461,
                      "end": 483
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 455,
                    "end": 483
                  }
                ],
                "start": 453,
                "end": 485
              }
            ],
            "optional": false,
            "start": 437,
            "end": 486
          },
          "definite": false,
          "start": 428,
          "end": 486
        }
      ],
      "declare": false,
      "start": 422,
      "end": 487
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "myTest",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 495
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 496,
          "end": 500
        },
        "optional": false,
        "computed": false,
        "start": 489,
        "end": 500
      },
      "directive": null,
      "start": 489,
      "end": 500
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 502
}
```
