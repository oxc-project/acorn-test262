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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 79
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 93,
                "end": 94
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
                    "start": 104,
                    "end": 105
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 105
                },
                "start": 98,
                "end": 105
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 109
                  },
                  "typeArguments": null,
                  "start": 108,
                  "end": 109
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "typeArguments": null,
                  "start": 110,
                  "end": 111
                },
                "start": 108,
                "end": 112
              },
              "optional": false,
              "readonly": null,
              "start": 88,
              "end": 115
            },
            "start": 86,
            "end": 115
          },
          "start": 83,
          "end": 115
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "typeArguments": null,
          "start": 118,
          "end": 119
        },
        "start": 116,
        "end": 119
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 120
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 142
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 144,
                    "end": 149
                  },
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 151,
                    "end": 153
                  }
                ],
                "start": 143,
                "end": 154
              }
            ],
            "optional": false,
            "start": 137,
            "end": 155
          },
          "definite": false,
          "start": 127,
          "end": 155
        }
      ],
      "declare": false,
      "start": 121,
      "end": 156
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 200,
                  "end": 207
                },
                "start": 200,
                "end": 209
              },
              "start": 191,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 209
          }
        ],
        "start": 180,
        "end": 210
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 221,
                "end": 222
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
                    "start": 232,
                    "end": 233
                  },
                  "typeArguments": null,
                  "start": 232,
                  "end": 233
                },
                "start": 226,
                "end": 233
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
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
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  },
                  "typeArguments": null,
                  "start": 238,
                  "end": 239
                },
                "start": 236,
                "end": 240
              },
              "optional": false,
              "readonly": null,
              "start": 216,
              "end": 243
            },
            "start": 214,
            "end": 243
          },
          "start": 211,
          "end": 243
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "typeArguments": null,
          "start": 246,
          "end": 247
        },
        "start": 244,
        "end": 247
      },
      "body": null,
      "expression": false,
      "start": 158,
      "end": 248
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 270
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 272,
                    "end": 277
                  },
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 279,
                    "end": 281
                  }
                ],
                "start": 271,
                "end": 282
              }
            ],
            "optional": false,
            "start": 265,
            "end": 283
          },
          "definite": false,
          "start": 255,
          "end": 283
        }
      ],
      "declare": false,
      "start": 249,
      "end": 284
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 297
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 306
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 307,
                  "end": 313
                },
                {
                  "type": "TSUnknownKeyword",
                  "start": 315,
                  "end": 322
                }
              ],
              "start": 306,
              "end": 323
            },
            "start": 300,
            "end": 323
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 335,
                "end": 342
              },
              "start": 335,
              "end": 344
            },
            "start": 326,
            "end": 344
          }
        ],
        "start": 300,
        "end": 344
      },
      "declare": false,
      "start": 286,
      "end": 345
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Definition",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 361
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
              "start": 362,
              "end": 363
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 362,
            "end": 363
          }
        ],
        "start": 361,
        "end": 364
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 373
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
              "start": 383,
              "end": 384
            },
            "typeArguments": null,
            "start": 383,
            "end": 384
          },
          "start": 377,
          "end": 384
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 395
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 395
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 397
                    },
                    "typeArguments": null,
                    "start": 396,
                    "end": 397
                  },
                  "start": 394,
                  "end": 398
                },
                "start": 391,
                "end": 398
              },
              "start": 388,
              "end": 398
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 412
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
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "typeArguments": null,
                      "start": 415,
                      "end": 416
                    },
                    "start": 413,
                    "end": 417
                  }
                ],
                "start": 412,
                "end": 418
              },
              "start": 402,
              "end": 418
            }
          ],
          "start": 387,
          "end": 418
        },
        "optional": false,
        "readonly": null,
        "start": 367,
        "end": 421
      },
      "declare": false,
      "start": 346,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 446
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
              "start": 447,
              "end": 448
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 463
              },
              "typeArguments": null,
              "start": 457,
              "end": 463
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 447,
            "end": 463
          }
        ],
        "start": 446,
        "end": 464
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definition",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 487
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
                      "start": 488,
                      "end": 489
                    },
                    "typeArguments": null,
                    "start": 488,
                    "end": 489
                  }
                ],
                "start": 487,
                "end": 490
              },
              "start": 477,
              "end": 490
            },
            "start": 475,
            "end": 490
          },
          "start": 465,
          "end": 490
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "typeArguments": null,
          "start": 493,
          "end": 494
        },
        "start": 491,
        "end": 494
      },
      "body": null,
      "expression": false,
      "start": 423,
      "end": 495
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
            "name": "created1",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 510
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 519
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 527,
                      "end": 528
                    },
                    "id": null,
                    "generator": false,
                    "start": 521,
                    "end": 528
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 537,
                          "end": 539
                        },
                        "id": null,
                        "generator": false,
                        "start": 531,
                        "end": 539
                      }
                    ],
                    "start": 530,
                    "end": 540
                  }
                ],
                "start": 520,
                "end": 541
              }
            ],
            "optional": false,
            "start": 513,
            "end": 542
          },
          "definite": false,
          "start": 502,
          "end": 542
        }
      ],
      "declare": false,
      "start": 496,
      "end": 543
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
            "name": "created2",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 558
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 567
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
                      "start": 572,
                      "end": 573
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 581,
                        "end": 582
                      },
                      "id": null,
                      "generator": false,
                      "start": 575,
                      "end": 582
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 572,
                    "end": 582
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 587
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 596,
                            "end": 598
                          },
                          "id": null,
                          "generator": false,
                          "start": 590,
                          "end": 598
                        }
                      ],
                      "start": 589,
                      "end": 599
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 586,
                    "end": 599
                  }
                ],
                "start": 568,
                "end": 602
              }
            ],
            "optional": false,
            "start": 561,
            "end": 603
          },
          "definite": false,
          "start": 550,
          "end": 603
        }
      ],
      "declare": false,
      "start": 544,
      "end": 604
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CompilerOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 616,
        "end": 631
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
              "name": "allowUnreachableCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 656
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 659,
                "end": 666
              },
              "start": 657,
              "end": 666
            },
            "accessibility": null,
            "static": false,
            "start": 636,
            "end": 667
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "allowUnusedLabels",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 687
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 690,
                "end": 697
              },
              "start": 688,
              "end": 697
            },
            "accessibility": null,
            "static": false,
            "start": 670,
            "end": 698
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alwaysStrict",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 713
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 716,
                "end": 723
              },
              "start": 714,
              "end": 723
            },
            "accessibility": null,
            "static": false,
            "start": 701,
            "end": 724
          }
        ],
        "start": 632,
        "end": 726
      },
      "declare": false,
      "start": 606,
      "end": 726
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeepLiteralStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 750
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
              "start": 751,
              "end": 752
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              },
              "start": 761,
              "end": 769
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 751,
            "end": 769
          }
        ],
        "start": 750,
        "end": 770
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 778,
          "end": 779
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
              "start": 789,
              "end": 790
            },
            "typeArguments": null,
            "start": 789,
            "end": 790
          },
          "start": 783,
          "end": 790
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 794
            },
            "typeArguments": null,
            "start": 793,
            "end": 794
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "typeArguments": null,
            "start": 795,
            "end": 796
          },
          "start": 793,
          "end": 797
        },
        "optional": false,
        "readonly": null,
        "start": 773,
        "end": 800
      },
      "declare": false,
      "start": 727,
      "end": 801
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 824
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
              "start": 825,
              "end": 826
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 841
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 842,
                    "end": 848
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 850,
                      "end": 856
                    },
                    "start": 850,
                    "end": 858
                  }
                ],
                "start": 841,
                "end": 859
              },
              "start": 835,
              "end": 859
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 825,
            "end": 859
          }
        ],
        "start": 824,
        "end": 860
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 871,
                "end": 872
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
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
                        "start": 882,
                        "end": 883
                      },
                      "typeArguments": null,
                      "start": 882,
                      "end": 883
                    },
                    "start": 876,
                    "end": 883
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CompilerOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 892,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 892,
                      "end": 907
                    },
                    "start": 886,
                    "end": 907
                  }
                ],
                "start": 876,
                "end": 907
              },
              "nameType": null,
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
                      "name": "dependencies",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 916,
                      "end": 928
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KeepLiteralStrings",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 930,
                          "end": 948
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
                                  "start": 949,
                                  "end": 950
                                },
                                "typeArguments": null,
                                "start": 949,
                                "end": 950
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 951,
                                  "end": 952
                                },
                                "typeArguments": null,
                                "start": 951,
                                "end": 952
                              },
                              "start": 949,
                              "end": 953
                            }
                          ],
                          "start": 948,
                          "end": 954
                        },
                        "start": 930,
                        "end": 954
                      },
                      "start": 928,
                      "end": 954
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 916,
                    "end": 955
                  }
                ],
                "start": 910,
                "end": 959
              },
              "optional": false,
              "readonly": null,
              "start": 866,
              "end": 962
            },
            "start": 864,
            "end": 962
          },
          "start": 861,
          "end": 962
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 966
          },
          "typeArguments": null,
          "start": 965,
          "end": 966
        },
        "start": 963,
        "end": 966
      },
      "body": null,
      "expression": false,
      "start": 802,
      "end": 967
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 981
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test4",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 989
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
                      "name": "alwaysStrict",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 994,
                      "end": 1006
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
                            "name": "dependencies",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1014,
                            "end": 1026
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 1029,
                                "end": 1034
                              },
                              {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 1036,
                                "end": 1041
                              }
                            ],
                            "start": 1028,
                            "end": 1042
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1014,
                          "end": 1042
                        }
                      ],
                      "start": 1008,
                      "end": 1047
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 994,
                    "end": 1047
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allowUnusedLabels",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1068
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
                            "name": "dependencies",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1088
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "baz",
                                "raw": "\"baz\"",
                                "start": 1091,
                                "end": 1096
                              },
                              {
                                "type": "Literal",
                                "value": "qwe",
                                "raw": "\"qwe\"",
                                "start": 1098,
                                "end": 1103
                              }
                            ],
                            "start": 1090,
                            "end": 1104
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1076,
                          "end": 1104
                        }
                      ],
                      "start": 1070,
                      "end": 1109
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1051,
                    "end": 1109
                  }
                ],
                "start": 990,
                "end": 1112
              }
            ],
            "optional": false,
            "start": 984,
            "end": 1113
          },
          "definite": false,
          "start": 974,
          "end": 1113
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1114
}
```
