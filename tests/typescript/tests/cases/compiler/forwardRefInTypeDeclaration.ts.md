__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 59
                },
                "typeArguments": null,
                "start": 50,
                "end": 59
              },
              "start": 48,
              "end": 59
            },
            "start": 47,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 59
        }
      ],
      "declare": true,
      "start": 35,
      "end": 60
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 69
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 72,
            "end": 75
          },
          "definite": false,
          "start": 67,
          "end": 75
        }
      ],
      "declare": false,
      "start": 61,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 137
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 153
          }
        ],
        "start": 138,
        "end": 155
      },
      "declare": false,
      "start": 123,
      "end": 155
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 164
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 167,
            "end": 170
          },
          "definite": false,
          "start": 162,
          "end": 170
        }
      ],
      "declare": false,
      "start": 156,
      "end": 171
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "accessibility": null,
            "static": false,
            "start": 214,
            "end": 227
          }
        ],
        "start": 212,
        "end": 229
      },
      "declare": false,
      "start": 200,
      "end": 229
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 238
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 241,
            "end": 244
          },
          "definite": false,
          "start": 236,
          "end": 244
        }
      ],
      "declare": false,
      "start": 230,
      "end": 245
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
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 296
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      },
                      "start": 297,
                      "end": 305
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 293,
                    "end": 306
                  }
                ],
                "start": 291,
                "end": 308
              },
              "start": 289,
              "end": 308
            },
            "start": 285,
            "end": 308
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 308
        }
      ],
      "declare": true,
      "start": 271,
      "end": 308
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
            "name": "s4",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 317
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 320,
            "end": 323
          },
          "definite": false,
          "start": 315,
          "end": 323
        }
      ],
      "declare": false,
      "start": 309,
      "end": 324
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 370
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s5",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 379,
                "end": 385
              },
              "start": 377,
              "end": 385
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 386
          }
        ],
        "start": 371,
        "end": 388
      },
      "abstract": false,
      "declare": true,
      "start": 352,
      "end": 388
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
            "name": "s5",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 397
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 400,
            "end": 403
          },
          "definite": false,
          "start": 395,
          "end": 403
        }
      ],
      "declare": false,
      "start": 389,
      "end": 404
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 447
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls1",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 455
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 457
              },
              "optional": false,
              "computed": false,
              "start": 451,
              "end": 457
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 460,
                "end": 466
              },
              "start": 458,
              "end": 466
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 467
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls2",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 473
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "optional": false,
              "computed": false,
              "start": 469,
              "end": 475
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 478,
                "end": 484
              },
              "start": 476,
              "end": 484
            },
            "accessibility": null,
            "static": false,
            "start": 468,
            "end": 485
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 491
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "optional": false,
              "computed": false,
              "start": 487,
              "end": 493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 496,
                "end": 502
              },
              "start": 494,
              "end": 502
            },
            "accessibility": null,
            "static": false,
            "start": 486,
            "end": 503
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 509
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 511
              },
              "optional": false,
              "computed": false,
              "start": 505,
              "end": 511
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 520
          }
        ],
        "start": 448,
        "end": 522
      },
      "declare": false,
      "start": 433,
      "end": 522
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 541
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 552
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 554,
                  "end": 557
                },
                "start": 554,
                "end": 557
              },
              "start": 552,
              "end": 557
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 544,
            "end": 558
          }
        ],
        "start": 542,
        "end": 560
      },
      "abstract": false,
      "declare": true,
      "start": 523,
      "end": 560
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 571
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 582
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 585,
                "end": 588
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 597
                },
                "typeArguments": null,
                "start": 592,
                "end": 597
              },
              "start": 585,
              "end": 597
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 574,
            "end": 598
          }
        ],
        "start": 572,
        "end": 600
      },
      "abstract": false,
      "declare": false,
      "start": 561,
      "end": 600
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
            "name": "obj1",
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 626,
                          "end": 629
                        },
                        "start": 626,
                        "end": 629
                      },
                      "start": 624,
                      "end": 629
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 623,
                    "end": 629
                  }
                ],
                "start": 621,
                "end": 631
              },
              "start": 619,
              "end": 631
            },
            "start": 615,
            "end": 631
          },
          "init": null,
          "definite": false,
          "start": 615,
          "end": 631
        }
      ],
      "declare": true,
      "start": 601,
      "end": 631
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 642
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "value": {
                    "type": "Literal",
                    "value": "d",
                    "raw": "'d'",
                    "start": 650,
                    "end": 653
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 647,
                  "end": 653
                }
              ],
              "start": 645,
              "end": 655
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 664
              },
              "typeArguments": null,
              "start": 659,
              "end": 664
            },
            "start": 645,
            "end": 664
          },
          "definite": false,
          "start": 638,
          "end": 664
        }
      ],
      "declare": false,
      "start": 632,
      "end": 664
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 664
}
```
