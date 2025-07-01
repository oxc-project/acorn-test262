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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 44
          }
        ],
        "start": 15,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identical",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 96
          }
        ],
        "start": 67,
        "end": 98
      },
      "declare": false,
      "start": 47,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mutable",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 116
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 137
          }
        ],
        "start": 117,
        "end": 139
      },
      "declare": false,
      "start": 99,
      "end": 139
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              },
              "start": 184,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 193
          }
        ],
        "start": 164,
        "end": 195
      },
      "declare": false,
      "start": 140,
      "end": 195
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentName",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 219
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 226,
            "end": 249
          }
        ],
        "start": 220,
        "end": 251
      },
      "declare": false,
      "start": 196,
      "end": 251
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
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 266
                },
                "typeArguments": null,
                "start": 262,
                "end": 266
              },
              "start": 260,
              "end": 266
            },
            "start": 256,
            "end": 266
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 266
        }
      ],
      "declare": false,
      "start": 252,
      "end": 267
    },
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
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 272
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "optional": false,
          "computed": false,
          "start": 268,
          "end": 278
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 281,
          "end": 283
        },
        "start": 268,
        "end": 283
      },
      "directive": null,
      "start": 268,
      "end": 283
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
            "name": "identical",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 346
                    },
                    "typeArguments": null,
                    "start": 342,
                    "end": 346
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Identical",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 358
                  }
                ],
                "start": 342,
                "end": 358
              },
              "start": 340,
              "end": 358
            },
            "start": 331,
            "end": 358
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 358
        }
      ],
      "declare": false,
      "start": 327,
      "end": 359
    },
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
            "name": "identical",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 369
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 375
          },
          "optional": false,
          "computed": false,
          "start": 360,
          "end": 375
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 378,
          "end": 380
        },
        "start": 360,
        "end": 380
      },
      "directive": null,
      "start": 360,
      "end": 381
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
            "name": "mutable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 442
                    },
                    "typeArguments": null,
                    "start": 438,
                    "end": 442
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Mutable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 445,
                    "end": 452
                  }
                ],
                "start": 438,
                "end": 452
              },
              "start": 436,
              "end": 452
            },
            "start": 429,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 429,
          "end": 452
        }
      ],
      "declare": false,
      "start": 425,
      "end": 453
    },
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
            "name": "mutable",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 461
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 467
          },
          "optional": false,
          "computed": false,
          "start": 454,
          "end": 467
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 470,
          "end": 472
        },
        "start": 454,
        "end": 472
      },
      "directive": null,
      "start": 454,
      "end": 473
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
            "name": "differentType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 536,
                    "end": 540
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 543,
                      "end": 556
                    },
                    "typeArguments": null,
                    "start": 543,
                    "end": 556
                  }
                ],
                "start": 536,
                "end": 556
              },
              "start": 534,
              "end": 556
            },
            "start": 521,
            "end": 556
          },
          "init": null,
          "definite": false,
          "start": 521,
          "end": 556
        }
      ],
      "declare": false,
      "start": 517,
      "end": 557
    },
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
            "name": "differentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 571
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 577
          },
          "optional": false,
          "computed": false,
          "start": 558,
          "end": 577
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 580,
          "end": 582
        },
        "start": 558,
        "end": 582
      },
      "directive": null,
      "start": 558,
      "end": 583
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
            "name": "differentName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 646,
                      "end": 650
                    },
                    "typeArguments": null,
                    "start": 646,
                    "end": 650
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 653,
                    "end": 666
                  }
                ],
                "start": 646,
                "end": 666
              },
              "start": 644,
              "end": 666
            },
            "start": 631,
            "end": 666
          },
          "init": null,
          "definite": false,
          "start": 631,
          "end": 666
        }
      ],
      "declare": false,
      "start": 627,
      "end": 667
    },
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
            "name": "differentName",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 681
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 687
          },
          "optional": false,
          "computed": false,
          "start": 668,
          "end": 687
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 690,
          "end": 692
        },
        "start": 668,
        "end": 692
      },
      "directive": null,
      "start": 668,
      "end": 693
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 735
}
```
