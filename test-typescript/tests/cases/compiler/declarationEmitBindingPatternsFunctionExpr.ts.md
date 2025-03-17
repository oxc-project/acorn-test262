__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 659,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Named",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 86,
            "name": "notReferenced",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 89,
            "end": 120,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 90,
                "end": 112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 92,
                    "end": 103,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 96,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 103,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 107,
                    "end": 112,
                    "typeName": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 112,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 117,
              "end": 120,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 281,
            "name": "duplicateIndetifiers",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 284,
            "end": 329,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 285,
                "end": 321,
                "properties": [
                  {
                    "type": "Property",
                    "start": 287,
                    "end": 298,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 291,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 298,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 300,
                    "end": 312,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 304,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 312,
                      "name": "alias2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 314,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 316,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 321,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 326,
              "end": 329,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 357,
            "name": "duplicateIndetifiers2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 360,
            "end": 405,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 361,
                "end": 373,
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 365,
                  "end": 373,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 367,
                    "end": 373
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectPattern",
                "start": 375,
                "end": 397,
                "properties": [
                  {
                    "type": "Property",
                    "start": 377,
                    "end": 388,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 381,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 388,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 390,
                  "end": 397,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 392,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 397,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 402,
              "end": 405,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 406,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 433,
            "name": "duplicateIndetifiers3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 436,
            "end": 492,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 437,
                "end": 459,
                "properties": [
                  {
                    "type": "Property",
                    "start": 439,
                    "end": 450,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 443,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 450,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 452,
                  "end": 459,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 454,
                    "end": 459,
                    "typeName": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 459,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 461,
                "end": 484,
                "properties": [
                  {
                    "type": "Property",
                    "start": 463,
                    "end": 475,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 467,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 475,
                      "name": "alias2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 477,
                  "end": 484,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 479,
                    "end": 484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 484,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 489,
              "end": 492,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 503,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 506,
            "end": 508,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 573,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 658,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 595,
            "name": "shadowedVariable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 598,
            "end": 658,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 599,
                "end": 634,
                "properties": [
                  {
                    "type": "Property",
                    "start": 601,
                    "end": 613,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 601,
                      "end": 606,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 608,
                      "end": 613,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 615,
                  "end": 634,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 617,
                    "end": 634,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 619,
                        "end": 632,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 624,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 624,
                          "end": 632,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 626,
                            "end": 632
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 653,
              "end": 658,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 649,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 637,
                "end": 649,
                "exprName": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 649,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
