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
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 82
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
              "name": "when",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 103,
                        "end": 109
                      },
                      "start": 101,
                      "end": 109
                    },
                    "start": 96,
                    "end": 109
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 114,
                    "end": 121
                  },
                  "start": 111,
                  "end": 121
                },
                "start": 95,
                "end": 121
              },
              "start": 93,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 122
          }
        ],
        "start": 83,
        "end": 124
      },
      "declare": false,
      "start": 67,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 138
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
              "start": 139,
              "end": 140
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 154
              },
              "typeArguments": null,
              "start": 149,
              "end": 154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 139,
            "end": 154
          }
        ],
        "start": 138,
        "end": 155
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "typeArguments": null,
                  "start": 189,
                  "end": 190
                },
                "start": 183,
                "end": 190
              },
              "trueType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 208
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 208
                  },
                  "start": 201,
                  "end": 208
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 212
                    },
                    "typeArguments": null,
                    "start": 211,
                    "end": 212
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  },
                  "start": 211,
                  "end": 215
                },
                "optional": false,
                "readonly": null,
                "start": 193,
                "end": 217
              },
              "falseType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "typeArguments": null,
                    "start": 234,
                    "end": 235
                  },
                  "start": 228,
                  "end": 235
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 239
                    },
                    "typeArguments": null,
                    "start": 238,
                    "end": 239
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "typeArguments": null,
                    "start": 240,
                    "end": 241
                  },
                  "start": 238,
                  "end": 242
                },
                "optional": false,
                "readonly": null,
                "start": 220,
                "end": 244
              },
              "start": 168,
              "end": 244
            },
            "start": 166,
            "end": 244
          },
          "start": 161,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 246,
        "end": 249
      },
      "expression": false,
      "start": 126,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good1",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 264
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
              "start": 265,
              "end": 266
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 280
              },
              "typeArguments": null,
              "start": 275,
              "end": 280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 280
          }
        ],
        "start": 264,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "start": 294,
                "end": 300
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 316
                  },
                  "typeArguments": null,
                  "start": 315,
                  "end": 316
                },
                "start": 309,
                "end": 316
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 320
                },
                "typeArguments": null,
                "start": 319,
                "end": 320
              },
              "falseType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "typeArguments": null,
                    "start": 337,
                    "end": 338
                  },
                  "start": 331,
                  "end": 338
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 341,
                    "end": 342
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    },
                    "typeArguments": null,
                    "start": 343,
                    "end": 344
                  },
                  "start": 341,
                  "end": 345
                },
                "optional": false,
                "readonly": null,
                "start": 323,
                "end": 347
              },
              "start": 294,
              "end": 347
            },
            "start": 292,
            "end": 347
          },
          "start": 287,
          "end": 347
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 349,
        "end": 352
      },
      "expression": false,
      "start": 250,
      "end": 352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good2",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 367
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
              "start": 368,
              "end": 369
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 383
              },
              "typeArguments": null,
              "start": 378,
              "end": 383
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 383
          }
        ],
        "start": 367,
        "end": 384
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 412
                  },
                  "typeArguments": null,
                  "start": 411,
                  "end": 412
                },
                "start": 405,
                "end": 412
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "typeArguments": null,
                  "start": 417,
                  "end": 418
                },
                "start": 415,
                "end": 419
              },
              "optional": false,
              "readonly": null,
              "start": 397,
              "end": 421
            },
            "start": 395,
            "end": 421
          },
          "start": 390,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 423,
        "end": 426
      },
      "expression": false,
      "start": 353,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 431
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
                  "name": "when",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 438
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 445
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 449,
                    "end": 454
                  },
                  "id": null,
                  "generator": false,
                  "start": 440,
                  "end": 454
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 434,
                "end": 454
              }
            ],
            "start": 432,
            "end": 456
          }
        ],
        "optional": false,
        "start": 428,
        "end": 457
      },
      "directive": null,
      "start": 428,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good1",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 464
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
                  "name": "when",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 471
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 478
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 482,
                    "end": 487
                  },
                  "id": null,
                  "generator": false,
                  "start": 473,
                  "end": 487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 467,
                "end": 487
              }
            ],
            "start": 465,
            "end": 489
          }
        ],
        "optional": false,
        "start": 459,
        "end": 490
      },
      "directive": null,
      "start": 459,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good2",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 497
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
                  "name": "when",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 504
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 511
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 515,
                    "end": 520
                  },
                  "id": null,
                  "generator": false,
                  "start": 506,
                  "end": 520
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 500,
                "end": 520
              }
            ],
            "start": 498,
            "end": 522
          }
        ],
        "optional": false,
        "start": 492,
        "end": 523
      },
      "directive": null,
      "start": 492,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 524
}
```
