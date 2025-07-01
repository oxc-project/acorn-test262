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
        "name": "ConditionalType",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 81
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
              "start": 82,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 83
          }
        ],
        "start": 81,
        "end": 84
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "typeArguments": null,
          "start": 87,
          "end": 88
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 97,
          "end": 103
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 106,
          "end": 112
        },
        "falseType": {
          "type": "TSNumberKeyword",
          "start": 115,
          "end": 121
        },
        "start": 87,
        "end": 121
      },
      "declare": false,
      "start": 61,
      "end": 122
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConditionalOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 155
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
              "start": 156,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 157
          }
        ],
        "start": 155,
        "end": 158
      },
      "params": [],
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
                "name": "ConditionalType",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 177
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
                      "start": 178,
                      "end": 179
                    },
                    "typeArguments": null,
                    "start": 178,
                    "end": 179
                  }
                ],
                "start": 177,
                "end": 180
              },
              "start": 162,
              "end": 180
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 183,
              "end": 192
            }
          ],
          "start": 162,
          "end": 192
        },
        "start": 160,
        "end": 192
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 206,
                "end": 207
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "start": 199,
            "end": 215
          }
        ],
        "start": 193,
        "end": 217
      },
      "expression": false,
      "start": 124,
      "end": 217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 243
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
              "start": 244,
              "end": 245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 244,
            "end": 245
          }
        ],
        "start": 243,
        "end": 246
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ConditionalType",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 265
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
                  "start": 266,
                  "end": 267
                },
                "typeArguments": null,
                "start": 266,
                "end": 267
              }
            ],
            "start": 265,
            "end": 268
          },
          "start": 250,
          "end": 268
        },
        "start": 248,
        "end": 268
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConditionalOrUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 304
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
                        "start": 305,
                        "end": 306
                      },
                      "typeArguments": null,
                      "start": 305,
                      "end": 306
                    }
                  ],
                  "start": 304,
                  "end": 307
                },
                "arguments": [],
                "optional": false,
                "start": 282,
                "end": 309
              },
              "start": 282,
              "end": 310
            },
            "start": 275,
            "end": 311
          }
        ],
        "start": 269,
        "end": 332
      },
      "expression": false,
      "start": 219,
      "end": 332
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 383
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
              "start": 384,
              "end": 385
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 385
          }
        ],
        "start": 383,
        "end": 386
      },
      "params": [],
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 391
              },
              "typeArguments": null,
              "start": 390,
              "end": 391
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 394,
              "end": 403
            }
          ],
          "start": 390,
          "end": 403
        },
        "start": 388,
        "end": 403
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 417,
                "end": 418
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 422,
                "end": 425
              },
              "start": 417,
              "end": 425
            },
            "start": 410,
            "end": 426
          }
        ],
        "start": 404,
        "end": 428
      },
      "expression": false,
      "start": 356,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 450
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
              "start": 451,
              "end": 452
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 451,
            "end": 452
          }
        ],
        "start": 450,
        "end": 453
      },
      "params": [],
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
            "start": 457,
            "end": 458
          },
          "typeArguments": null,
          "start": 457,
          "end": 458
        },
        "start": 455,
        "end": 458
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "genericOrUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 490
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
                        "start": 491,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 491,
                      "end": 492
                    }
                  ],
                  "start": 490,
                  "end": 493
                },
                "arguments": [],
                "optional": false,
                "start": 472,
                "end": 495
              },
              "start": 472,
              "end": 496
            },
            "start": 465,
            "end": 497
          }
        ],
        "start": 459,
        "end": 511
      },
      "expression": false,
      "start": 430,
      "end": 511
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 547
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
              "start": 548,
              "end": 549
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 548,
            "end": 549
          }
        ],
        "start": 547,
        "end": 550
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 567
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 571
                },
                "typeArguments": null,
                "start": 570,
                "end": 571
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 580,
                "end": 586
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 598,
                "end": 604
              },
              "start": 570,
              "end": 604
            },
            "declare": false,
            "start": 559,
            "end": 605
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": null,
                "start": 619,
                "end": 620
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 629,
                "end": 635
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "One",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 641
                },
                "typeArguments": null,
                "start": 638,
                "end": 641
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 644,
                "end": 649
              },
              "start": 619,
              "end": 649
            },
            "declare": false,
            "start": 610,
            "end": 650
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "One",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 667
                      },
                      "typeArguments": null,
                      "start": 664,
                      "end": 667
                    },
                    "start": 662,
                    "end": 667
                  },
                  "start": 661,
                  "end": 667
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 670,
                      "end": 674
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 678,
                      "end": 681
                    },
                    "start": 670,
                    "end": 681
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 685,
                      "end": 686
                    },
                    "typeArguments": null,
                    "start": 685,
                    "end": 686
                  },
                  "start": 670,
                  "end": 686
                },
                "definite": false,
                "start": 661,
                "end": 686
              }
            ],
            "declare": false,
            "start": 655,
            "end": 687
          }
        ],
        "start": 553,
        "end": 689
      },
      "expression": false,
      "start": 537,
      "end": 689
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 689
}
```
