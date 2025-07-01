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
        "name": "Lower",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 206
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
              "start": 207,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 207,
            "end": 208
          }
        ],
        "start": 206,
        "end": 209
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 216
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
              "start": 226,
              "end": 227
            },
            "typeArguments": null,
            "start": 226,
            "end": 227
          },
          "start": 220,
          "end": 227
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
              "start": 230,
              "end": 231
            },
            "typeArguments": null,
            "start": 230,
            "end": 231
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "typeArguments": null,
            "start": 232,
            "end": 233
          },
          "start": 230,
          "end": 234
        },
        "optional": false,
        "readonly": null,
        "start": 212,
        "end": 236
      },
      "declare": false,
      "start": 196,
      "end": 237
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 276
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
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 290,
                    "end": 296
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 299,
                    "end": 305
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 308,
                    "end": 314
                  }
                ],
                "start": 290,
                "end": 314
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 280,
              "end": 314
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 318,
              "end": 319
            }
          ],
          "start": 276,
          "end": 321
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "typeArguments": null,
                  "start": 341,
                  "end": 342
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Lower",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 351
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
                            "start": 352,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 352,
                          "end": 353
                        }
                      ],
                      "start": 351,
                      "end": 354
                    },
                    "start": 346,
                    "end": 354
                  },
                  "start": 346,
                  "end": 356
                },
                "optional": true,
                "readonly": null,
                "start": 333,
                "end": 358
              },
              "start": 331,
              "end": 358
            },
            "start": 325,
            "end": 358
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "typeArguments": null,
                "start": 367,
                "end": 368
              },
              "start": 365,
              "end": 368
            },
            "start": 362,
            "end": 368
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
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
                  "start": 379,
                  "end": 380
                },
                "typeArguments": null,
                "start": 379,
                "end": 380
              },
              "start": 377,
              "end": 380
            },
            "start": 372,
            "end": 380
          }
        ],
        "returnType": null,
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
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 398
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 407
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 411
                    },
                    "optional": false,
                    "computed": true,
                    "start": 401,
                    "end": 412
                  },
                  "definite": false,
                  "start": 393,
                  "end": 412
                }
              ],
              "declare": false,
              "start": 387,
              "end": 413
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 425
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 438
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 443
                        },
                        "optional": false,
                        "computed": false,
                        "start": 433,
                        "end": 443
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 449
                        }
                      ],
                      "optional": false,
                      "start": 433,
                      "end": 450
                    },
                    "directive": null,
                    "start": 433,
                    "end": 451
                  }
                ],
                "start": 427,
                "end": 455
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 473
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 477
                        },
                        "optional": false,
                        "computed": true,
                        "start": 467,
                        "end": 478
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 487
                          }
                        ],
                        "start": 481,
                        "end": 488
                      },
                      "start": 467,
                      "end": 488
                    },
                    "directive": null,
                    "start": 467,
                    "end": 489
                  }
                ],
                "start": 461,
                "end": 493
              },
              "start": 416,
              "end": 493
            }
          ],
          "start": 383,
          "end": 495
        },
        "expression": false,
        "start": 246,
        "end": 495
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 239,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 518
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 521,
                          "end": 527
                        },
                        "start": 521,
                        "end": 529
                      },
                      "start": 519,
                      "end": 529
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 517,
                    "end": 530
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 532
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 535,
                          "end": 541
                        },
                        "start": 535,
                        "end": 543
                      },
                      "start": 533,
                      "end": 543
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 531,
                    "end": 544
                  }
                ],
                "start": 516,
                "end": 546
              },
              "start": 514,
              "end": 546
            },
            "start": 511,
            "end": 546
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 549,
            "end": 551
          },
          "definite": false,
          "start": 511,
          "end": 551
        }
      ],
      "declare": false,
      "start": 505,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 553,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 580,
            "end": 583
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 585,
            "end": 588
          }
        ],
        "optional": false,
        "start": 553,
        "end": 589
      },
      "directive": null,
      "start": 553,
      "end": 590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 599,
          "end": 620
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 624
          },
          {
            "type": "Literal",
            "value": "y",
            "raw": "'y'",
            "start": 626,
            "end": 629
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 631,
            "end": 636
          }
        ],
        "optional": false,
        "start": 599,
        "end": 637
      },
      "directive": null,
      "start": 599,
      "end": 638
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 666
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 667,
            "end": 670
          },
          {
            "type": "Literal",
            "value": "y",
            "raw": "'y'",
            "start": 672,
            "end": 675
          },
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 677,
            "end": 679
          }
        ],
        "optional": false,
        "start": 645,
        "end": 680
      },
      "directive": null,
      "start": 645,
      "end": 681
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "appendToOptionalArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 721
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 725
          },
          {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 727,
            "end": 730
          },
          {
            "type": "Literal",
            "value": "no",
            "raw": "\"no\"",
            "start": 732,
            "end": 736
          }
        ],
        "optional": false,
        "start": 700,
        "end": 737
      },
      "directive": null,
      "start": 700,
      "end": 738
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 196,
  "end": 754
}
```
