__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 90
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 93,
            "end": 105
          }
        ],
        "start": 91,
        "end": 107
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 107
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 121
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 137,
            "end": 149
          }
        ],
        "start": 135,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 108,
      "end": 151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 166
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 182
      },
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              },
              "start": 188,
              "end": 196
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 185,
            "end": 197
          }
        ],
        "start": 183,
        "end": 199
      },
      "abstract": false,
      "declare": false,
      "start": 152,
      "end": 199
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 211
                },
                "typeArguments": null,
                "start": 207,
                "end": 211
              },
              "start": 205,
              "end": 211
            },
            "start": 204,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 204,
          "end": 211
        }
      ],
      "declare": false,
      "start": 200,
      "end": 212
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
            "name": "d1",
            "optional": false,
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
            "start": 217,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 228
        }
      ],
      "declare": false,
      "start": 213,
      "end": 229
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 246
                },
                "typeArguments": null,
                "start": 238,
                "end": 246
              },
              "start": 236,
              "end": 246
            },
            "start": 234,
            "end": 246
          },
          "init": null,
          "definite": false,
          "start": 234,
          "end": 246
        }
      ],
      "declare": false,
      "start": 230,
      "end": 247
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 261
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
              "start": 262,
              "end": 263
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 276
              },
              "typeArguments": null,
              "start": 272,
              "end": 276
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 276
          }
        ],
        "start": 261,
        "end": 277
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 281,
                "end": 282
              },
              "typeArguments": null,
              "start": 281,
              "end": 282
            },
            "start": 279,
            "end": 282
          },
          "start": 278,
          "end": 282
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "start": 290,
            "end": 299
          }
        ],
        "start": 284,
        "end": 301
      },
      "expression": false,
      "start": 249,
      "end": 301
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
            "start": 307,
            "end": 308
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 314
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              }
            ],
            "optional": false,
            "start": 311,
            "end": 317
          },
          "definite": false,
          "start": 307,
          "end": 317
        }
      ],
      "declare": false,
      "start": 303,
      "end": 318
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 333
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 339
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 342
              }
            ],
            "optional": false,
            "start": 336,
            "end": 343
          },
          "definite": false,
          "start": 331,
          "end": 343
        }
      ],
      "declare": false,
      "start": 327,
      "end": 344
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 370
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
              "start": 371,
              "end": 372
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 381,
                "end": 385
              },
              "typeArguments": null,
              "start": 381,
              "end": 385
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 371,
            "end": 385
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 388
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 404
              },
              "typeArguments": null,
              "start": 397,
              "end": 404
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 404
          }
        ],
        "start": 370,
        "end": 405
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 409,
                "end": 410
              },
              "typeArguments": null,
              "start": 409,
              "end": 410
            },
            "start": 407,
            "end": 410
          },
          "start": 406,
          "end": 410
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "start": 415,
                "end": 416
              },
              "typeArguments": null,
              "start": 415,
              "end": 416
            },
            "start": 413,
            "end": 416
          },
          "start": 412,
          "end": 416
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "start": 424,
            "end": 433
          }
        ],
        "start": 418,
        "end": 435
      },
      "expression": false,
      "start": 357,
      "end": 435
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 451
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
              "start": 452,
              "end": 453
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 466
              },
              "typeArguments": null,
              "start": 462,
              "end": 466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 452,
            "end": 466
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 485
              },
              "typeArguments": null,
              "start": 478,
              "end": 485
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 485
          }
        ],
        "start": 451,
        "end": 486
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "start": 490,
                "end": 491
              },
              "typeArguments": null,
              "start": 490,
              "end": 491
            },
            "start": 488,
            "end": 491
          },
          "start": 487,
          "end": 491
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 507
                      },
                      "typeArguments": null,
                      "start": 506,
                      "end": 507
                    },
                    "start": 504,
                    "end": 507
                  },
                  "start": 503,
                  "end": 507
                },
                "init": null,
                "definite": false,
                "start": 503,
                "end": 507
              }
            ],
            "declare": false,
            "start": 499,
            "end": 508
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 521
            },
            "start": 513,
            "end": 522
          }
        ],
        "start": 493,
        "end": 524
      },
      "expression": false,
      "start": 437,
      "end": 524
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2c",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 540
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
              "start": 541,
              "end": 542
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 555
              },
              "typeArguments": null,
              "start": 551,
              "end": 555
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 541,
            "end": 555
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 558
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 574
              },
              "typeArguments": null,
              "start": 567,
              "end": 574
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 557,
            "end": 574
          }
        ],
        "start": 540,
        "end": 575
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 592
                      },
                      "typeArguments": null,
                      "start": 591,
                      "end": 592
                    },
                    "start": 589,
                    "end": 592
                  },
                  "start": 588,
                  "end": 592
                },
                "init": null,
                "definite": false,
                "start": 588,
                "end": 592
              }
            ],
            "declare": false,
            "start": 584,
            "end": 593
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 606
            },
            "start": 598,
            "end": 607
          }
        ],
        "start": 578,
        "end": 609
      },
      "expression": false,
      "start": 526,
      "end": 609
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 617
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2b",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 625
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 628
              }
            ],
            "optional": false,
            "start": 620,
            "end": 629
          },
          "definite": false,
          "start": 615,
          "end": 629
        }
      ],
      "declare": false,
      "start": 611,
      "end": 630
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 643,
            "end": 646
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 654
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 649,
            "end": 656
          },
          "definite": false,
          "start": 643,
          "end": 656
        }
      ],
      "declare": false,
      "start": 639,
      "end": 657
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 674
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
              "start": 675,
              "end": 676
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 689
              },
              "typeArguments": null,
              "start": 685,
              "end": 689
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 675,
            "end": 689
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 692
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 708
              },
              "typeArguments": null,
              "start": 701,
              "end": 708
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 691,
            "end": 708
          }
        ],
        "start": 674,
        "end": 709
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 727
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
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
                          "start": 738,
                          "end": 739
                        },
                        "typeArguments": null,
                        "start": 738,
                        "end": 739
                      },
                      "start": 736,
                      "end": 739
                    },
                    "start": 735,
                    "end": 739
                  },
                  "readonly": false,
                  "static": false,
                  "start": 728,
                  "end": 739
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
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
                          "start": 751,
                          "end": 752
                        },
                        "typeArguments": null,
                        "start": 751,
                        "end": 752
                      },
                      "start": 749,
                      "end": 752
                    },
                    "start": 748,
                    "end": 752
                  },
                  "readonly": false,
                  "static": false,
                  "start": 741,
                  "end": 752
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 754,
                "end": 761
              },
              "expression": false,
              "start": 727,
              "end": 761
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 716,
            "end": 761
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 770
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 774,
                        "end": 775
                      },
                      "typeArguments": null,
                      "start": 774,
                      "end": 775
                    },
                    "start": 772,
                    "end": 775
                  },
                  "start": 771,
                  "end": 775
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
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
                        "start": 780,
                        "end": 781
                      },
                      "typeArguments": null,
                      "start": 780,
                      "end": 781
                    },
                    "start": 778,
                    "end": 781
                  },
                  "start": 777,
                  "end": 781
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 800,
                      "end": 801
                    },
                    "start": 793,
                    "end": 802
                  }
                ],
                "start": 783,
                "end": 808
              },
              "expression": false,
              "start": 770,
              "end": 808
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 767,
            "end": 808
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 818
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 822,
                        "end": 823
                      },
                      "typeArguments": null,
                      "start": 822,
                      "end": 823
                    },
                    "start": 820,
                    "end": 823
                  },
                  "start": 819,
                  "end": 823
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
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
                        "start": 828,
                        "end": 829
                      },
                      "typeArguments": null,
                      "start": 828,
                      "end": 829
                    },
                    "start": 826,
                    "end": 829
                  },
                  "start": 825,
                  "end": 829
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 849
                    },
                    "start": 841,
                    "end": 850
                  }
                ],
                "start": 831,
                "end": 856
              },
              "expression": false,
              "start": 818,
              "end": 856
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 814,
            "end": 856
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 866
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 867,
                      "end": 868
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 884
                      },
                      "typeArguments": null,
                      "start": 877,
                      "end": 884
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 867,
                    "end": 884
                  }
                ],
                "start": 866,
                "end": 885
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 889,
                        "end": 890
                      },
                      "typeArguments": null,
                      "start": 889,
                      "end": 890
                    },
                    "start": 887,
                    "end": 890
                  },
                  "start": 886,
                  "end": 890
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
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
                        "start": 895,
                        "end": 896
                      },
                      "typeArguments": null,
                      "start": 895,
                      "end": 896
                    },
                    "start": 893,
                    "end": 896
                  },
                  "start": 892,
                  "end": 896
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 915,
                      "end": 916
                    },
                    "start": 908,
                    "end": 917
                  }
                ],
                "start": 898,
                "end": 923
              },
              "expression": false,
              "start": 866,
              "end": 923
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 862,
            "end": 923
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 933
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 935
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 952
                      },
                      "typeArguments": null,
                      "start": 944,
                      "end": 952
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 934,
                    "end": 952
                  }
                ],
                "start": 933,
                "end": 953
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 957,
                        "end": 958
                      },
                      "typeArguments": null,
                      "start": 957,
                      "end": 958
                    },
                    "start": 955,
                    "end": 958
                  },
                  "start": 954,
                  "end": 958
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
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
                        "start": 963,
                        "end": 964
                      },
                      "typeArguments": null,
                      "start": 963,
                      "end": 964
                    },
                    "start": 961,
                    "end": 964
                  },
                  "start": 960,
                  "end": 964
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 983,
                      "end": 984
                    },
                    "start": 976,
                    "end": 985
                  }
                ],
                "start": 966,
                "end": 991
              },
              "expression": false,
              "start": 933,
              "end": 991
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 929,
            "end": 991
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1001
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1002,
                      "end": 1003
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1012,
                        "end": 1019
                      },
                      "typeArguments": null,
                      "start": 1012,
                      "end": 1019
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1002,
                    "end": 1019
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1021,
                      "end": 1022
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1039
                      },
                      "typeArguments": null,
                      "start": 1031,
                      "end": 1039
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1021,
                    "end": 1039
                  }
                ],
                "start": 1001,
                "end": 1040
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 1044,
                        "end": 1045
                      },
                      "typeArguments": null,
                      "start": 1044,
                      "end": 1045
                    },
                    "start": 1042,
                    "end": 1045
                  },
                  "start": 1041,
                  "end": 1045
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
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
                        "start": 1050,
                        "end": 1051
                      },
                      "typeArguments": null,
                      "start": 1050,
                      "end": 1051
                    },
                    "start": 1048,
                    "end": 1051
                  },
                  "start": 1047,
                  "end": 1051
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1070,
                      "end": 1071
                    },
                    "start": 1063,
                    "end": 1072
                  }
                ],
                "start": 1053,
                "end": 1078
              },
              "expression": false,
              "start": 1001,
              "end": 1078
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 997,
            "end": 1078
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1088
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1089,
                      "end": 1090
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1099,
                        "end": 1106
                      },
                      "typeArguments": null,
                      "start": 1099,
                      "end": 1106
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1089,
                    "end": 1106
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1108,
                      "end": 1109
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1118,
                        "end": 1126
                      },
                      "typeArguments": null,
                      "start": 1118,
                      "end": 1126
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1108,
                    "end": 1126
                  }
                ],
                "start": 1088,
                "end": 1127
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1147,
                                "end": 1148
                              },
                              "typeArguments": null,
                              "start": 1147,
                              "end": 1148
                            },
                            "start": 1145,
                            "end": 1148
                          },
                          "start": 1144,
                          "end": 1148
                        },
                        "init": null,
                        "definite": false,
                        "start": 1144,
                        "end": 1148
                      }
                    ],
                    "declare": false,
                    "start": 1140,
                    "end": 1149
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1165,
                      "end": 1166
                    },
                    "start": 1158,
                    "end": 1167
                  }
                ],
                "start": 1130,
                "end": 1173
              },
              "expression": false,
              "start": 1088,
              "end": 1173
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1084,
            "end": 1173
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1183
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1184,
                      "end": 1185
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1194,
                        "end": 1198
                      },
                      "typeArguments": null,
                      "start": 1194,
                      "end": 1198
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1184,
                    "end": 1198
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1200,
                      "end": 1201
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1210,
                        "end": 1217
                      },
                      "typeArguments": null,
                      "start": 1210,
                      "end": 1217
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1200,
                    "end": 1217
                  }
                ],
                "start": 1183,
                "end": 1218
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
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
                        "start": 1222,
                        "end": 1223
                      },
                      "typeArguments": null,
                      "start": 1222,
                      "end": 1223
                    },
                    "start": 1220,
                    "end": 1223
                  },
                  "start": 1219,
                  "end": 1223
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1242,
                                "end": 1243
                              },
                              "typeArguments": null,
                              "start": 1242,
                              "end": 1243
                            },
                            "start": 1240,
                            "end": 1243
                          },
                          "start": 1239,
                          "end": 1243
                        },
                        "init": null,
                        "definite": false,
                        "start": 1239,
                        "end": 1243
                      }
                    ],
                    "declare": false,
                    "start": 1235,
                    "end": 1244
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1260,
                      "end": 1261
                    },
                    "start": 1253,
                    "end": 1262
                  }
                ],
                "start": 1225,
                "end": 1268
              },
              "expression": false,
              "start": 1183,
              "end": 1268
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1179,
            "end": 1268
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1274,
              "end": 1278
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1279,
                      "end": 1280
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1289,
                        "end": 1293
                      },
                      "typeArguments": null,
                      "start": 1289,
                      "end": 1293
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1279,
                    "end": 1293
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1296
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1305,
                        "end": 1312
                      },
                      "typeArguments": null,
                      "start": 1305,
                      "end": 1312
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1295,
                    "end": 1312
                  }
                ],
                "start": 1278,
                "end": 1313
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1333,
                                "end": 1334
                              },
                              "typeArguments": null,
                              "start": 1333,
                              "end": 1334
                            },
                            "start": 1331,
                            "end": 1334
                          },
                          "start": 1330,
                          "end": 1334
                        },
                        "init": null,
                        "definite": false,
                        "start": 1330,
                        "end": 1334
                      }
                    ],
                    "declare": false,
                    "start": 1326,
                    "end": 1335
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1351,
                      "end": 1352
                    },
                    "start": 1344,
                    "end": 1353
                  }
                ],
                "start": 1316,
                "end": 1359
              },
              "expression": false,
              "start": 1278,
              "end": 1359
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1274,
            "end": 1359
          }
        ],
        "start": 710,
        "end": 1361
      },
      "abstract": false,
      "declare": false,
      "start": 667,
      "end": 1361
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1367,
            "end": 1368
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1375,
              "end": 1376
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1378
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1382
              }
            ],
            "start": 1371,
            "end": 1383
          },
          "definite": false,
          "start": 1367,
          "end": 1383
        }
      ],
      "declare": false,
      "start": 1363,
      "end": 1384
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1389,
            "end": 1391
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1395
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1399
              },
              "optional": false,
              "computed": false,
              "start": 1394,
              "end": 1399
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1400,
                "end": 1402
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1404,
                "end": 1406
              }
            ],
            "optional": false,
            "start": 1394,
            "end": 1407
          },
          "definite": false,
          "start": 1389,
          "end": 1407
        }
      ],
      "declare": false,
      "start": 1385,
      "end": 1408
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1421,
            "end": 1423
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1426,
                "end": 1427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1432
              },
              "optional": false,
              "computed": false,
              "start": 1426,
              "end": 1432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1433,
                "end": 1434
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1438
              }
            ],
            "optional": false,
            "start": 1426,
            "end": 1439
          },
          "definite": false,
          "start": 1421,
          "end": 1439
        }
      ],
      "declare": false,
      "start": 1417,
      "end": 1440
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1456,
            "end": 1458
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1461,
                "end": 1462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1463,
                "end": 1467
              },
              "optional": false,
              "computed": false,
              "start": 1461,
              "end": 1467
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1468,
                "end": 1470
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1474
              }
            ],
            "optional": false,
            "start": 1461,
            "end": 1475
          },
          "definite": false,
          "start": 1456,
          "end": 1475
        }
      ],
      "declare": false,
      "start": 1452,
      "end": 1476
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1492,
            "end": 1494
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1497,
                "end": 1498
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1503
              },
              "optional": false,
              "computed": false,
              "start": 1497,
              "end": 1503
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1504,
                "end": 1506
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1508,
                "end": 1510
              }
            ],
            "optional": false,
            "start": 1497,
            "end": 1511
          },
          "definite": false,
          "start": 1492,
          "end": 1511
        }
      ],
      "declare": false,
      "start": 1488,
      "end": 1512
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1525,
            "end": 1527
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1530,
                "end": 1531
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1532,
                "end": 1536
              },
              "optional": false,
              "computed": false,
              "start": 1530,
              "end": 1536
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1537,
                "end": 1539
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1543
              }
            ],
            "optional": false,
            "start": 1530,
            "end": 1544
          },
          "definite": false,
          "start": 1525,
          "end": 1544
        }
      ],
      "declare": false,
      "start": 1521,
      "end": 1545
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
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1564
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1568
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1569,
                "end": 1573
              },
              "optional": false,
              "computed": false,
              "start": 1567,
              "end": 1573
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1576
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1578,
                "end": 1580
              }
            ],
            "optional": false,
            "start": 1567,
            "end": 1581
          },
          "definite": false,
          "start": 1561,
          "end": 1581
        }
      ],
      "declare": false,
      "start": 1557,
      "end": 1582
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1599,
            "end": 1601
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1604,
                "end": 1605
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1610
              },
              "optional": false,
              "computed": false,
              "start": 1604,
              "end": 1610
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1604,
            "end": 1612
          },
          "definite": false,
          "start": 1599,
          "end": 1612
        }
      ],
      "declare": false,
      "start": 1595,
      "end": 1613
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1629,
            "end": 1632
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1636
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1641
              },
              "optional": false,
              "computed": false,
              "start": 1635,
              "end": 1641
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1642,
                "end": 1644
              }
            ],
            "optional": false,
            "start": 1635,
            "end": 1645
          },
          "definite": false,
          "start": 1629,
          "end": 1645
        }
      ],
      "declare": false,
      "start": 1625,
      "end": 1646
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1659,
            "end": 1662
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1665,
                "end": 1666
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1667,
                "end": 1671
              },
              "optional": false,
              "computed": false,
              "start": 1665,
              "end": 1671
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1665,
            "end": 1673
          },
          "definite": false,
          "start": 1659,
          "end": 1673
        }
      ],
      "declare": false,
      "start": 1655,
      "end": 1674
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1694,
        "end": 1695
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
              "start": 1696,
              "end": 1697
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 1706,
                "end": 1710
              },
              "typeArguments": null,
              "start": 1706,
              "end": 1710
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1696,
            "end": 1710
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1713
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 1722,
                "end": 1729
              },
              "typeArguments": null,
              "start": 1722,
              "end": 1729
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1712,
            "end": 1729
          }
        ],
        "start": 1695,
        "end": 1730
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1745,
                      "end": 1746
                    },
                    "typeArguments": null,
                    "start": 1745,
                    "end": 1746
                  },
                  "start": 1743,
                  "end": 1746
                },
                "start": 1742,
                "end": 1746
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1751,
                      "end": 1752
                    },
                    "typeArguments": null,
                    "start": 1751,
                    "end": 1752
                  },
                  "start": 1749,
                  "end": 1752
                },
                "start": 1748,
                "end": 1752
              }
            ],
            "returnType": null,
            "start": 1737,
            "end": 1754
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1759,
              "end": 1762
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1766,
                      "end": 1767
                    },
                    "typeArguments": null,
                    "start": 1766,
                    "end": 1767
                  },
                  "start": 1764,
                  "end": 1767
                },
                "start": 1763,
                "end": 1767
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1772,
                      "end": 1773
                    },
                    "typeArguments": null,
                    "start": 1772,
                    "end": 1773
                  },
                  "start": 1770,
                  "end": 1773
                },
                "start": 1769,
                "end": 1773
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
                  "start": 1776,
                  "end": 1777
                },
                "typeArguments": null,
                "start": 1776,
                "end": 1777
              },
              "start": 1774,
              "end": 1777
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1759,
            "end": 1778
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1783,
              "end": 1787
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1791,
                      "end": 1792
                    },
                    "typeArguments": null,
                    "start": 1791,
                    "end": 1792
                  },
                  "start": 1789,
                  "end": 1792
                },
                "start": 1788,
                "end": 1792
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1797,
                      "end": 1798
                    },
                    "typeArguments": null,
                    "start": 1797,
                    "end": 1798
                  },
                  "start": 1795,
                  "end": 1798
                },
                "start": 1794,
                "end": 1798
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1801,
                  "end": 1802
                },
                "typeArguments": null,
                "start": 1801,
                "end": 1802
              },
              "start": 1799,
              "end": 1802
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1783,
            "end": 1803
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1812
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1813,
                    "end": 1814
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1823,
                      "end": 1830
                    },
                    "typeArguments": null,
                    "start": 1823,
                    "end": 1830
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1813,
                  "end": 1830
                }
              ],
              "start": 1812,
              "end": 1831
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1835,
                      "end": 1836
                    },
                    "typeArguments": null,
                    "start": 1835,
                    "end": 1836
                  },
                  "start": 1833,
                  "end": 1836
                },
                "start": 1832,
                "end": 1836
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1841,
                      "end": 1842
                    },
                    "typeArguments": null,
                    "start": 1841,
                    "end": 1842
                  },
                  "start": 1839,
                  "end": 1842
                },
                "start": 1838,
                "end": 1842
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
                  "start": 1845,
                  "end": 1846
                },
                "typeArguments": null,
                "start": 1845,
                "end": 1846
              },
              "start": 1843,
              "end": 1846
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1808,
            "end": 1847
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1852,
              "end": 1856
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1857,
                    "end": 1858
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1867,
                      "end": 1875
                    },
                    "typeArguments": null,
                    "start": 1867,
                    "end": 1875
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1857,
                  "end": 1875
                }
              ],
              "start": 1856,
              "end": 1876
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1880,
                      "end": 1881
                    },
                    "typeArguments": null,
                    "start": 1880,
                    "end": 1881
                  },
                  "start": 1878,
                  "end": 1881
                },
                "start": 1877,
                "end": 1881
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1886,
                      "end": 1887
                    },
                    "typeArguments": null,
                    "start": 1886,
                    "end": 1887
                  },
                  "start": 1884,
                  "end": 1887
                },
                "start": 1883,
                "end": 1887
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
                  "start": 1890,
                  "end": 1891
                },
                "typeArguments": null,
                "start": 1890,
                "end": 1891
              },
              "start": 1888,
              "end": 1891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1852,
            "end": 1892
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1901
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1902,
                    "end": 1903
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1912,
                      "end": 1919
                    },
                    "typeArguments": null,
                    "start": 1912,
                    "end": 1919
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1902,
                  "end": 1919
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1921,
                    "end": 1922
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1939
                    },
                    "typeArguments": null,
                    "start": 1931,
                    "end": 1939
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1921,
                  "end": 1939
                }
              ],
              "start": 1901,
              "end": 1940
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1944,
                      "end": 1945
                    },
                    "typeArguments": null,
                    "start": 1944,
                    "end": 1945
                  },
                  "start": 1942,
                  "end": 1945
                },
                "start": 1941,
                "end": 1945
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 1950,
                      "end": 1951
                    },
                    "typeArguments": null,
                    "start": 1950,
                    "end": 1951
                  },
                  "start": 1948,
                  "end": 1951
                },
                "start": 1947,
                "end": 1951
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
                  "start": 1954,
                  "end": 1955
                },
                "typeArguments": null,
                "start": 1954,
                "end": 1955
              },
              "start": 1952,
              "end": 1955
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1897,
            "end": 1956
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1965
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1966,
                    "end": 1967
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1976,
                      "end": 1983
                    },
                    "typeArguments": null,
                    "start": 1976,
                    "end": 1983
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1966,
                  "end": 1983
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1985,
                    "end": 1986
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1995,
                      "end": 2003
                    },
                    "typeArguments": null,
                    "start": 1995,
                    "end": 2003
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1985,
                  "end": 2003
                }
              ],
              "start": 1965,
              "end": 2004
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
                  "start": 2008,
                  "end": 2009
                },
                "typeArguments": null,
                "start": 2008,
                "end": 2009
              },
              "start": 2006,
              "end": 2009
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1961,
            "end": 2010
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2015,
              "end": 2019
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2020,
                    "end": 2021
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2030,
                      "end": 2034
                    },
                    "typeArguments": null,
                    "start": 2030,
                    "end": 2034
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2020,
                  "end": 2034
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2036,
                    "end": 2037
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2046,
                      "end": 2053
                    },
                    "typeArguments": null,
                    "start": 2046,
                    "end": 2053
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2036,
                  "end": 2053
                }
              ],
              "start": 2019,
              "end": 2054
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
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
                      "start": 2058,
                      "end": 2059
                    },
                    "typeArguments": null,
                    "start": 2058,
                    "end": 2059
                  },
                  "start": 2056,
                  "end": 2059
                },
                "start": 2055,
                "end": 2059
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
                  "start": 2062,
                  "end": 2063
                },
                "typeArguments": null,
                "start": 2062,
                "end": 2063
              },
              "start": 2060,
              "end": 2063
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2015,
            "end": 2064
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2073
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2074,
                    "end": 2075
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2084,
                      "end": 2088
                    },
                    "typeArguments": null,
                    "start": 2084,
                    "end": 2088
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2074,
                  "end": 2088
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2090,
                    "end": 2091
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2100,
                      "end": 2107
                    },
                    "typeArguments": null,
                    "start": 2100,
                    "end": 2107
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2090,
                  "end": 2107
                }
              ],
              "start": 2073,
              "end": 2108
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
                  "start": 2112,
                  "end": 2113
                },
                "typeArguments": null,
                "start": 2112,
                "end": 2113
              },
              "start": 2110,
              "end": 2113
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2069,
            "end": 2114
          }
        ],
        "start": 1731,
        "end": 2116
      },
      "declare": false,
      "start": 1684,
      "end": 2116
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2125,
                  "end": 2126
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2127,
                        "end": 2131
                      },
                      "typeArguments": null,
                      "start": 2127,
                      "end": 2131
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2133,
                        "end": 2140
                      },
                      "typeArguments": null,
                      "start": 2133,
                      "end": 2140
                    }
                  ],
                  "start": 2126,
                  "end": 2141
                },
                "start": 2125,
                "end": 2141
              },
              "start": 2123,
              "end": 2141
            },
            "start": 2122,
            "end": 2141
          },
          "init": null,
          "definite": false,
          "start": 2122,
          "end": 2141
        }
      ],
      "declare": false,
      "start": 2118,
      "end": 2142
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2147,
            "end": 2149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2152,
                "end": 2153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2154,
                "end": 2157
              },
              "optional": false,
              "computed": false,
              "start": 2152,
              "end": 2157
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2158,
                "end": 2160
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2164
              }
            ],
            "optional": false,
            "start": 2152,
            "end": 2165
          },
          "definite": false,
          "start": 2147,
          "end": 2165
        }
      ],
      "declare": false,
      "start": 2143,
      "end": 2166
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2179,
            "end": 2181
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2184,
                "end": 2185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2186,
                "end": 2190
              },
              "optional": false,
              "computed": false,
              "start": 2184,
              "end": 2190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2191,
                "end": 2192
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2194,
                "end": 2196
              }
            ],
            "optional": false,
            "start": 2184,
            "end": 2197
          },
          "definite": false,
          "start": 2179,
          "end": 2197
        }
      ],
      "declare": false,
      "start": 2175,
      "end": 2198
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2214,
            "end": 2216
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2219,
                "end": 2220
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2225
              },
              "optional": false,
              "computed": false,
              "start": 2219,
              "end": 2225
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2226,
                "end": 2228
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2230,
                "end": 2232
              }
            ],
            "optional": false,
            "start": 2219,
            "end": 2233
          },
          "definite": false,
          "start": 2214,
          "end": 2233
        }
      ],
      "declare": false,
      "start": 2210,
      "end": 2234
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2250,
            "end": 2252
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2255,
                "end": 2256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2257,
                "end": 2261
              },
              "optional": false,
              "computed": false,
              "start": 2255,
              "end": 2261
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2262,
                "end": 2264
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2266,
                "end": 2268
              }
            ],
            "optional": false,
            "start": 2255,
            "end": 2269
          },
          "definite": false,
          "start": 2250,
          "end": 2269
        }
      ],
      "declare": false,
      "start": 2246,
      "end": 2270
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2283,
            "end": 2285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2288,
                "end": 2289
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 2290,
                "end": 2294
              },
              "optional": false,
              "computed": false,
              "start": 2288,
              "end": 2294
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2295,
                "end": 2297
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2299,
                "end": 2301
              }
            ],
            "optional": false,
            "start": 2288,
            "end": 2302
          },
          "definite": false,
          "start": 2283,
          "end": 2302
        }
      ],
      "declare": false,
      "start": 2279,
      "end": 2303
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
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2319,
            "end": 2322
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2325,
                "end": 2326
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 2327,
                "end": 2331
              },
              "optional": false,
              "computed": false,
              "start": 2325,
              "end": 2331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2332,
                "end": 2334
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2336,
                "end": 2338
              }
            ],
            "optional": false,
            "start": 2325,
            "end": 2339
          },
          "definite": false,
          "start": 2319,
          "end": 2339
        }
      ],
      "declare": false,
      "start": 2315,
      "end": 2340
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2357,
            "end": 2359
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2362,
                "end": 2363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null,
                "start": 2364,
                "end": 2368
              },
              "optional": false,
              "computed": false,
              "start": 2362,
              "end": 2368
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2362,
            "end": 2370
          },
          "definite": false,
          "start": 2357,
          "end": 2370
        }
      ],
      "declare": false,
      "start": 2353,
      "end": 2371
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2387,
            "end": 2390
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2393,
                "end": 2394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null,
                "start": 2395,
                "end": 2399
              },
              "optional": false,
              "computed": false,
              "start": 2393,
              "end": 2399
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2400,
                "end": 2402
              }
            ],
            "optional": false,
            "start": 2393,
            "end": 2403
          },
          "definite": false,
          "start": 2387,
          "end": 2403
        }
      ],
      "declare": false,
      "start": 2383,
      "end": 2404
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2417,
            "end": 2420
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2423,
                "end": 2424
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null,
                "start": 2425,
                "end": 2429
              },
              "optional": false,
              "computed": false,
              "start": 2423,
              "end": 2429
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2423,
            "end": 2431
          },
          "definite": false,
          "start": 2417,
          "end": 2431
        }
      ],
      "declare": false,
      "start": 2413,
      "end": 2432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 80,
  "end": 2440
}
```
