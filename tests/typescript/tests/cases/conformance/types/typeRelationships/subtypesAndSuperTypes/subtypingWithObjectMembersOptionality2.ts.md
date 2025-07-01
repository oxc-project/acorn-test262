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
        "start": 84,
        "end": 88
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 103
          }
        ],
        "start": 89,
        "end": 105
      },
      "declare": false,
      "start": 74,
      "end": 105
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 123
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 136
          },
          "typeArguments": null,
          "start": 132,
          "end": 136
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              },
              "start": 142,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 139,
            "end": 151
          }
        ],
        "start": 137,
        "end": 153
      },
      "declare": false,
      "start": 106,
      "end": 153
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 166
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 176
            },
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
                  "start": 178,
                  "end": 182
                },
                "typeArguments": null,
                "start": 178,
                "end": 182
              },
              "start": 176,
              "end": 182
            },
            "accessibility": null,
            "static": false,
            "start": 173,
            "end": 183
          }
        ],
        "start": 167,
        "end": 185
      },
      "declare": false,
      "start": 155,
      "end": 185
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 198
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 208
          },
          "typeArguments": null,
          "start": 207,
          "end": 208
        }
      ],
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 218
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 228
                },
                "typeArguments": null,
                "start": 221,
                "end": 228
              },
              "start": 219,
              "end": 228
            },
            "accessibility": null,
            "static": false,
            "start": 215,
            "end": 228
          }
        ],
        "start": 209,
        "end": 239
      },
      "declare": false,
      "start": 187,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 260,
              "end": 261
            },
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
                  "start": 263,
                  "end": 267
                },
                "typeArguments": null,
                "start": 263,
                "end": 267
              },
              "start": 261,
              "end": 267
            },
            "accessibility": null,
            "static": false,
            "start": 260,
            "end": 268
          }
        ],
        "start": 254,
        "end": 270
      },
      "declare": false,
      "start": 241,
      "end": 270
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 284
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 295
          },
          "typeArguments": null,
          "start": 293,
          "end": 295
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 302,
              "end": 303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 313
                },
                "typeArguments": null,
                "start": 306,
                "end": 313
              },
              "start": 304,
              "end": 313
            },
            "accessibility": null,
            "static": false,
            "start": 302,
            "end": 314
          }
        ],
        "start": 296,
        "end": 325
      },
      "declare": false,
      "start": 272,
      "end": 325
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
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
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 346,
              "end": 349
            },
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
                  "start": 351,
                  "end": 355
                },
                "typeArguments": null,
                "start": 351,
                "end": 355
              },
              "start": 349,
              "end": 355
            },
            "accessibility": null,
            "static": false,
            "start": 346,
            "end": 356
          }
        ],
        "start": 340,
        "end": 358
      },
      "declare": false,
      "start": 327,
      "end": 358
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S3",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 372
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 383
          },
          "typeArguments": null,
          "start": 381,
          "end": 383
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 390,
              "end": 393
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 403
                },
                "typeArguments": null,
                "start": 396,
                "end": 403
              },
              "start": 394,
              "end": 403
            },
            "accessibility": null,
            "static": false,
            "start": 390,
            "end": 404
          }
        ],
        "start": 384,
        "end": 415
      },
      "declare": false,
      "start": 360,
      "end": 415
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
            "name": "a",
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 452
                    },
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
                          "start": 454,
                          "end": 458
                        },
                        "typeArguments": null,
                        "start": 454,
                        "end": 458
                      },
                      "start": 452,
                      "end": 458
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 449,
                    "end": 459
                  }
                ],
                "start": 447,
                "end": 461
              },
              "start": 445,
              "end": 461
            },
            "start": 444,
            "end": 461
          },
          "init": null,
          "definite": false,
          "start": 444,
          "end": 461
        }
      ],
      "declare": false,
      "start": 440,
      "end": 461
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
            "name": "b",
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 474
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 484
                        },
                        "typeArguments": null,
                        "start": 477,
                        "end": 484
                      },
                      "start": 475,
                      "end": 484
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 471,
                    "end": 485
                  }
                ],
                "start": 469,
                "end": 487
              },
              "start": 467,
              "end": 487
            },
            "start": 466,
            "end": 487
          },
          "init": null,
          "definite": false,
          "start": 466,
          "end": 487
        }
      ],
      "declare": false,
      "start": 462,
      "end": 487
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 493
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 496,
              "end": 500
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 504
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "start": 496,
            "end": 508
          },
          "definite": false,
          "start": 492,
          "end": 508
        }
      ],
      "declare": false,
      "start": 488,
      "end": 509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 74,
  "end": 515
}
```
