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
        "name": "Contextual",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 33
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 38,
            "end": 49
          }
        ],
        "start": 21,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ellement",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 71
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 84
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
              },
              "start": 90,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 96
          }
        ],
        "start": 72,
        "end": 98
      },
      "declare": false,
      "start": 53,
      "end": 98
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ellement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 115
                },
                "typeArguments": null,
                "start": 107,
                "end": 115
              },
              "start": 105,
              "end": 115
            },
            "start": 104,
            "end": 115
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 115
        }
      ],
      "declare": false,
      "start": 100,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contextual",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 346
                  },
                  "typeArguments": null,
                  "start": 336,
                  "end": 346
                },
                "start": 336,
                "end": 348
              },
              "start": 334,
              "end": 348
            },
            "start": 331,
            "end": 348
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 353
              }
            ],
            "start": 351,
            "end": 354
          },
          "definite": false,
          "start": 331,
          "end": 354
        }
      ],
      "declare": false,
      "start": 327,
      "end": 355
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 385,
                            "end": 391
                          },
                          "start": 383,
                          "end": 391
                        },
                        "start": 382,
                        "end": 391
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Contextual",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 404
                        },
                        "typeArguments": null,
                        "start": 394,
                        "end": 404
                      },
                      "start": 392,
                      "end": 404
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 381,
                    "end": 404
                  }
                ],
                "start": 379,
                "end": 406
              },
              "start": 377,
              "end": 406
            },
            "start": 374,
            "end": 406
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 415
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 411,
                "end": 415
              }
            ],
            "start": 409,
            "end": 417
          },
          "definite": false,
          "start": 374,
          "end": 417
        }
      ],
      "declare": false,
      "start": 370,
      "end": 418
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "conditional",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Contextual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 489
                },
                "typeArguments": null,
                "start": 479,
                "end": 489
              },
              "start": 477,
              "end": 489
            },
            "start": 466,
            "end": 489
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 492,
              "end": 496
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 500
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 504
            },
            "start": 492,
            "end": 504
          },
          "definite": false,
          "start": 466,
          "end": 504
        }
      ],
      "declare": false,
      "start": 462,
      "end": 505
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "contextualOr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Contextual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 546
                },
                "typeArguments": null,
                "start": 536,
                "end": 546
              },
              "start": 534,
              "end": 546
            },
            "start": 522,
            "end": 546
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 550
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "start": 549,
            "end": 555
          },
          "definite": false,
          "start": 522,
          "end": 555
        }
      ],
      "declare": false,
      "start": 518,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 568
}
```
