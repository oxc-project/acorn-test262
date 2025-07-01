__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 21
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Modifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 36
            },
            "initializer": null,
            "computed": false,
            "start": 28,
            "end": 36
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Decorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 51
            },
            "initializer": null,
            "computed": false,
            "start": 42,
            "end": 51
          }
        ],
        "start": 22,
        "end": 54
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 70
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 93
                },
                "typeArguments": null,
                "start": 83,
                "end": 93
              },
              "start": 81,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 94
          }
        ],
        "start": 71,
        "end": 96
      },
      "declare": false,
      "start": 56,
      "end": 96
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Modifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 116
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 129
          },
          "typeArguments": null,
          "start": 125,
          "end": 129
        }
      ],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 148
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 157
                  },
                  "start": 138,
                  "end": 157
                },
                "typeArguments": null,
                "start": 138,
                "end": 157
              },
              "start": 136,
              "end": 157
            },
            "accessibility": null,
            "static": false,
            "start": 132,
            "end": 158
          }
        ],
        "start": 130,
        "end": 160
      },
      "declare": false,
      "start": 98,
      "end": 160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Decorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 180
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 193
          },
          "typeArguments": null,
          "start": 189,
          "end": 193
        }
      ],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 212
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decorator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 222
                  },
                  "start": 202,
                  "end": 222
                },
                "typeArguments": null,
                "start": 202,
                "end": 222
              },
              "start": 200,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 196,
            "end": 223
          }
        ],
        "start": 194,
        "end": 225
      },
      "declare": false,
      "start": 161,
      "end": 225
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isModifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 254
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 265
              },
              "typeArguments": null,
              "start": 261,
              "end": 265
            },
            "start": 259,
            "end": 265
          },
          "start": 255,
          "end": 265
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 272
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 284
              },
              "typeArguments": null,
              "start": 276,
              "end": 284
            },
            "start": 276,
            "end": 284
          },
          "start": 268,
          "end": 284
        },
        "start": 266,
        "end": 284
      },
      "body": null,
      "expression": false,
      "start": 227,
      "end": 285
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 314
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 325
              },
              "typeArguments": null,
              "start": 321,
              "end": 325
            },
            "start": 319,
            "end": 325
          },
          "start": 315,
          "end": 325
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 332
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Decorator",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 345
              },
              "typeArguments": null,
              "start": 336,
              "end": 345
            },
            "start": 336,
            "end": 345
          },
          "start": 328,
          "end": 345
        },
        "start": 326,
        "end": 345
      },
      "body": null,
      "expression": false,
      "start": 286,
      "end": 346
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 370
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
              "start": 371,
              "end": 372
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 371,
            "end": 372
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": {
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
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 385
          }
        ],
        "start": 370,
        "end": 386
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 404
                  },
                  "typeArguments": null,
                  "start": 403,
                  "end": 404
                },
                "start": 403,
                "end": 406
              },
              "start": 394,
              "end": 406
            },
            "start": 392,
            "end": 406
          },
          "start": 387,
          "end": 406
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "element",
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
                        "start": 428,
                        "end": 429
                      },
                      "typeArguments": null,
                      "start": 428,
                      "end": 429
                    },
                    "start": 426,
                    "end": 429
                  },
                  "start": 419,
                  "end": 429
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 441
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "typeArguments": null,
                      "start": 445,
                      "end": 446
                    },
                    "start": 445,
                    "end": 446
                  },
                  "start": 434,
                  "end": 446
                },
                "start": 431,
                "end": 446
              },
              "start": 418,
              "end": 446
            },
            "start": 416,
            "end": 446
          },
          "start": 408,
          "end": 446
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 454
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "typeArguments": null,
                  "start": 467,
                  "end": 468
                },
                "start": 467,
                "end": 470
              },
              "start": 458,
              "end": 470
            },
            "start": 458,
            "end": 470
          },
          "start": 449,
          "end": 470
        },
        "start": 447,
        "end": 470
      },
      "body": null,
      "expression": false,
      "start": 348,
      "end": 471
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
            "name": "modifiers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Decorator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 516
                        },
                        "typeArguments": null,
                        "start": 507,
                        "end": 516
                      },
                      "start": 507,
                      "end": 518
                    },
                    "start": 498,
                    "end": 518
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Modifier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 530,
                          "end": 538
                        },
                        "typeArguments": null,
                        "start": 530,
                        "end": 538
                      },
                      "start": 530,
                      "end": 540
                    },
                    "start": 521,
                    "end": 540
                  }
                ],
                "start": 498,
                "end": 540
              },
              "start": 496,
              "end": 540
            },
            "start": 487,
            "end": 540
          },
          "init": null,
          "definite": false,
          "start": 487,
          "end": 540
        }
      ],
      "declare": true,
      "start": 473,
      "end": 541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 555
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 569
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 579
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isModifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 591
                }
              ],
              "optional": false,
              "start": 564,
              "end": 592
            },
            "directive": null,
            "start": 564,
            "end": 593
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 603
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 613
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 626
                }
              ],
              "optional": false,
              "start": 598,
              "end": 627
            },
            "directive": null,
            "start": 598,
            "end": 628
          }
        ],
        "start": 558,
        "end": 630
      },
      "expression": false,
      "start": 543,
      "end": 630
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 630
}
```
