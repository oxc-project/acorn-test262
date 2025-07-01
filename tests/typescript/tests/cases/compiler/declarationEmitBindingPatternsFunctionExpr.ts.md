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
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 27
          }
        ],
        "start": 13,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notReferenced",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 86
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 96
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 103
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 92,
                    "end": 103
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 112
                    },
                    "typeArguments": null,
                    "start": 107,
                    "end": 112
                  },
                  "start": 105,
                  "end": 112
                },
                "start": 90,
                "end": 112
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 117,
              "end": 120
            },
            "id": null,
            "generator": false,
            "start": 89,
            "end": 120
          },
          "definite": false,
          "start": 73,
          "end": 120
        }
      ],
      "declare": false,
      "start": 69,
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
            "name": "duplicateIndetifiers",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 281
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 291
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 298
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 287,
                    "end": 298
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 304
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 312
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 300,
                    "end": 312
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 316,
                    "end": 321
                  },
                  "start": 314,
                  "end": 321
                },
                "start": 285,
                "end": 321
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 326,
              "end": 329
            },
            "id": null,
            "generator": false,
            "start": 284,
            "end": 329
          },
          "definite": false,
          "start": 261,
          "end": 329
        }
      ],
      "declare": false,
      "start": 255,
      "end": 329
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
            "name": "duplicateIndetifiers2",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 357
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                    "start": 367,
                    "end": 373
                  },
                  "start": 365,
                  "end": 373
                },
                "start": 361,
                "end": 373
              },
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 381
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 388
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 377,
                    "end": 388
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 397
                    },
                    "typeArguments": null,
                    "start": 392,
                    "end": 397
                  },
                  "start": 390,
                  "end": 397
                },
                "start": 375,
                "end": 397
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 402,
              "end": 405
            },
            "id": null,
            "generator": false,
            "start": 360,
            "end": 405
          },
          "definite": false,
          "start": 336,
          "end": 405
        }
      ],
      "declare": false,
      "start": 330,
      "end": 405
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
            "name": "duplicateIndetifiers3",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 433
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 443
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 450
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 439,
                    "end": 450
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 459
                    },
                    "typeArguments": null,
                    "start": 454,
                    "end": 459
                  },
                  "start": 452,
                  "end": 459
                },
                "start": 437,
                "end": 459
              },
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 467
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 475
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 463,
                    "end": 475
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 484
                    },
                    "typeArguments": null,
                    "start": 479,
                    "end": 484
                  },
                  "start": 477,
                  "end": 484
                },
                "start": 461,
                "end": 484
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 489,
              "end": 492
            },
            "id": null,
            "generator": false,
            "start": 436,
            "end": 492
          },
          "definite": false,
          "start": 412,
          "end": 492
        }
      ],
      "declare": false,
      "start": 406,
      "end": 492
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 503
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 506,
            "end": 508
          },
          "definite": false,
          "start": 498,
          "end": 508
        }
      ],
      "declare": false,
      "start": 494,
      "end": 509
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
            "name": "shadowedVariable",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 595
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 601,
                      "end": 606
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 608,
                      "end": 613
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 601,
                    "end": 613
                  }
                ],
                "optional": false,
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 619,
                          "end": 624
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 626,
                            "end": 632
                          },
                          "start": 624,
                          "end": 632
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 619,
                        "end": 632
                      }
                    ],
                    "start": 617,
                    "end": 634
                  },
                  "start": 615,
                  "end": 634
                },
                "start": 599,
                "end": 634
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 649
                },
                "typeArguments": null,
                "start": 637,
                "end": 649
              },
              "start": 635,
              "end": 649
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 658
            },
            "id": null,
            "generator": false,
            "start": 598,
            "end": 658
          },
          "definite": false,
          "start": 579,
          "end": 658
        }
      ],
      "declare": false,
      "start": 573,
      "end": 659
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 659
}
```
