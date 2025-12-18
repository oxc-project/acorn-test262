__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "missing",
        "raw": "\"missing\"",
        "start": 26,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 60
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  ],
                  "start": 60,
                  "end": 68
                },
                "start": 53,
                "end": 68
              },
              "start": 51,
              "end": 68
            },
            "start": 50,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 68
        }
      ],
      "declare": true,
      "start": 38,
      "end": 69
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
            "name": "mp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 95
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    }
                  ],
                  "start": 95,
                  "end": 103
                },
                "start": 86,
                "end": 103
              },
              "start": 84,
              "end": 103
            },
            "start": 82,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 103
        }
      ],
      "declare": true,
      "start": 70,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 123
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 126,
        "end": 129
      },
      "expression": false,
      "start": 106,
      "end": 129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 147
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 158
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 159,
                "end": 163
              }
            ],
            "start": 158,
            "end": 164
          },
          "start": 151,
          "end": 164
        },
        "start": 149,
        "end": 164
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 165,
        "end": 168
      },
      "expression": false,
      "start": 130,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 186
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 199
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 200,
                "end": 204
              }
            ],
            "start": 199,
            "end": 205
          },
          "start": 190,
          "end": 205
        },
        "start": 188,
        "end": 205
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 206,
        "end": 209
      },
      "expression": false,
      "start": 169,
      "end": 209
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 217
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 237,
              "end": 240
            },
            "expression": false,
            "start": 220,
            "end": 240
          },
          "definite": false,
          "start": 215,
          "end": 240
        }
      ],
      "declare": false,
      "start": 211,
      "end": 240
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 247
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 275
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 276,
                      "end": 280
                    }
                  ],
                  "start": 275,
                  "end": 281
                },
                "start": 268,
                "end": 281
              },
              "start": 266,
              "end": 281
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 282,
              "end": 285
            },
            "expression": false,
            "start": 250,
            "end": 285
          },
          "definite": false,
          "start": 245,
          "end": 285
        }
      ],
      "declare": false,
      "start": 241,
      "end": 285
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
            "name": "f6",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 292
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 323,
                      "end": 327
                    }
                  ],
                  "start": 322,
                  "end": 328
                },
                "start": 313,
                "end": 328
              },
              "start": 311,
              "end": 328
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 329,
              "end": 332
            },
            "expression": false,
            "start": 295,
            "end": 332
          },
          "definite": false,
          "start": 290,
          "end": 332
        }
      ],
      "declare": false,
      "start": 286,
      "end": 332
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 355,
              "end": 358
            },
            "id": null,
            "generator": false,
            "start": 343,
            "end": 358
          },
          "definite": false,
          "start": 338,
          "end": 358
        }
      ],
      "declare": false,
      "start": 334,
      "end": 359
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 366
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 386
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 387,
                      "end": 391
                    }
                  ],
                  "start": 386,
                  "end": 392
                },
                "start": 379,
                "end": 392
              },
              "start": 377,
              "end": 392
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 396,
              "end": 399
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 399
          },
          "definite": false,
          "start": 364,
          "end": 399
        }
      ],
      "declare": false,
      "start": 360,
      "end": 400
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 407
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 429
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 430,
                      "end": 434
                    }
                  ],
                  "start": 429,
                  "end": 435
                },
                "start": 420,
                "end": 435
              },
              "start": 418,
              "end": 435
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 439,
              "end": 442
            },
            "id": null,
            "generator": false,
            "start": 410,
            "end": 442
          },
          "definite": false,
          "start": 405,
          "end": 442
        }
      ],
      "declare": false,
      "start": 401,
      "end": 443
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 451
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
            },
            "id": null,
            "generator": false,
            "start": 454,
            "end": 467
          },
          "definite": false,
          "start": 448,
          "end": 467
        }
      ],
      "declare": false,
      "start": 444,
      "end": 468
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 476
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 493
            },
            "id": null,
            "generator": false,
            "start": 479,
            "end": 493
          },
          "definite": false,
          "start": 473,
          "end": 493
        }
      ],
      "declare": false,
      "start": 469,
      "end": 494
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 502
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 522
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 523,
                      "end": 529
                    }
                  ],
                  "start": 522,
                  "end": 530
                },
                "start": 515,
                "end": 530
              },
              "start": 513,
              "end": 530
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 536
            },
            "id": null,
            "generator": false,
            "start": 505,
            "end": 536
          },
          "definite": false,
          "start": 499,
          "end": 536
        }
      ],
      "declare": false,
      "start": 495,
      "end": 537
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 567
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 568,
                      "end": 574
                    }
                  ],
                  "start": 567,
                  "end": 575
                },
                "start": 558,
                "end": 575
              },
              "start": 556,
              "end": 575
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 580
            },
            "id": null,
            "generator": false,
            "start": 548,
            "end": 580
          },
          "definite": false,
          "start": 542,
          "end": 580
        }
      ],
      "declare": false,
      "start": 538,
      "end": 581
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 588
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
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 600,
                  "end": 602
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 605,
                    "end": 608
                  },
                  "expression": false,
                  "start": 602,
                  "end": 608
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 594,
                "end": 608
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 619
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 630
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 631,
                            "end": 635
                          }
                        ],
                        "start": 630,
                        "end": 636
                      },
                      "start": 623,
                      "end": 636
                    },
                    "start": 621,
                    "end": 636
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 637,
                    "end": 640
                  },
                  "expression": false,
                  "start": 619,
                  "end": 640
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 611,
                "end": 640
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 651
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 655,
                        "end": 664
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 665,
                            "end": 669
                          }
                        ],
                        "start": 664,
                        "end": 670
                      },
                      "start": 655,
                      "end": 670
                    },
                    "start": 653,
                    "end": 670
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 671,
                    "end": 674
                  },
                  "expression": false,
                  "start": 651,
                  "end": 674
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 643,
                "end": 674
              }
            ],
            "start": 591,
            "end": 676
          },
          "definite": false,
          "start": 587,
          "end": 676
        }
      ],
      "declare": false,
      "start": 583,
      "end": 677
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
        "start": 685,
        "end": 686
      },
      "typeParameters": null,
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 698
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 701,
                "end": 704
              },
              "expression": false,
              "start": 698,
              "end": 704
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 690,
            "end": 704
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 714
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 725
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 726,
                        "end": 730
                      }
                    ],
                    "start": 725,
                    "end": 731
                  },
                  "start": 718,
                  "end": 731
                },
                "start": 716,
                "end": 731
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 732,
                "end": 735
              },
              "expression": false,
              "start": 714,
              "end": 735
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 706,
            "end": 735
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 745
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 758
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 759,
                        "end": 763
                      }
                    ],
                    "start": 758,
                    "end": 764
                  },
                  "start": 749,
                  "end": 764
                },
                "start": 747,
                "end": 764
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 765,
                "end": 768
              },
              "expression": false,
              "start": 745,
              "end": 768
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 737,
            "end": 768
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 785
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 788,
                "end": 791
              },
              "expression": false,
              "start": 785,
              "end": 791
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 770,
            "end": 791
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 808
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 819
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 820,
                        "end": 824
                      }
                    ],
                    "start": 819,
                    "end": 825
                  },
                  "start": 812,
                  "end": 825
                },
                "start": 810,
                "end": 825
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 826,
                "end": 829
              },
              "expression": false,
              "start": 808,
              "end": 829
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 793,
            "end": 829
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 846
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 850,
                    "end": 859
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 860,
                        "end": 864
                      }
                    ],
                    "start": 859,
                    "end": 865
                  },
                  "start": 850,
                  "end": 865
                },
                "start": 848,
                "end": 865
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 866,
                "end": 869
              },
              "expression": false,
              "start": 846,
              "end": 869
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 831,
            "end": 869
          }
        ],
        "start": 687,
        "end": 871
      },
      "abstract": false,
      "declare": false,
      "start": 679,
      "end": 871
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 883,
        "end": 884
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 912
              },
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 915,
                "end": 918
              },
              "expression": false,
              "start": 895,
              "end": 918
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 888,
            "end": 918
          }
        ],
        "start": 885,
        "end": 920
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 873,
      "end": 920
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 920
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 9,
    "end": 18,
    "range": [
      9,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "String",
    "value": "\"missing\"",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 38,
    "end": 45,
    "range": [
      38,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 53,
    "end": 60,
    "range": [
      53,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 78,
    "end": 81,
    "range": [
      78,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "mp",
    "start": 82,
    "end": 84,
    "range": [
      82,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 106,
    "end": 111,
    "range": [
      106,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120,
    "range": [
      112,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "f0",
    "start": 121,
    "end": 123,
    "range": [
      121,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 130,
    "end": 135,
    "range": [
      130,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144,
    "range": [
      136,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 145,
    "end": 147,
    "range": [
      145,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 151,
    "end": 158,
    "range": [
      151,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 159,
    "end": 163,
    "range": [
      159,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 175,
    "end": 183,
    "range": [
      175,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 190,
    "end": 199,
    "range": [
      190,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 200,
    "end": 204,
    "range": [
      200,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 215,
    "end": 217,
    "range": [
      215,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 220,
    "end": 225,
    "range": [
      220,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234,
    "range": [
      226,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 245,
    "end": 247,
    "range": [
      245,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 250,
    "end": 255,
    "range": [
      250,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 256,
    "end": 264,
    "range": [
      256,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 268,
    "end": 275,
    "range": [
      268,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 286,
    "end": 289,
    "range": [
      286,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 290,
    "end": 292,
    "range": [
      290,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 301,
    "end": 309,
    "range": [
      301,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 313,
    "end": 322,
    "range": [
      313,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 323,
    "end": 327,
    "range": [
      323,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 334,
    "end": 337,
    "range": [
      334,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 343,
    "end": 348,
    "range": [
      343,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 352,
    "end": 354,
    "range": [
      352,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 360,
    "end": 363,
    "range": [
      360,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 364,
    "end": 366,
    "range": [
      364,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 369,
    "end": 374,
    "range": [
      369,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 379,
    "end": 386,
    "range": [
      379,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 387,
    "end": 391,
    "range": [
      387,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 393,
    "end": 395,
    "range": [
      393,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 401,
    "end": 404,
    "range": [
      401,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 405,
    "end": 407,
    "range": [
      405,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 420,
    "end": 429,
    "range": [
      420,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 430,
    "end": 434,
    "range": [
      430,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438,
    "range": [
      436,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 448,
    "end": 451,
    "range": [
      448,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 454,
    "end": 459,
    "range": [
      454,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 463,
    "end": 465,
    "range": [
      463,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 469,
    "end": 472,
    "range": [
      469,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 488,
    "end": 490,
    "range": [
      488,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "mp",
    "start": 491,
    "end": 493,
    "range": [
      491,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 495,
    "end": 498,
    "range": [
      495,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 505,
    "end": 510,
    "range": [
      505,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 515,
    "end": 522,
    "range": [
      515,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 523,
    "end": 529,
    "range": [
      523,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "mp",
    "start": 534,
    "end": 536,
    "range": [
      534,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 538,
    "end": 541,
    "range": [
      538,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 542,
    "end": 545,
    "range": [
      542,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 548,
    "end": 553,
    "range": [
      548,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 558,
    "end": 567,
    "range": [
      558,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 583,
    "end": 586,
    "range": [
      583,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 594,
    "end": 599,
    "range": [
      594,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 600,
    "end": 602,
    "range": [
      600,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 611,
    "end": 616,
    "range": [
      611,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 617,
    "end": 619,
    "range": [
      617,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 623,
    "end": 630,
    "range": [
      623,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 631,
    "end": 635,
    "range": [
      631,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 643,
    "end": 648,
    "range": [
      643,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 649,
    "end": 651,
    "range": [
      649,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 655,
    "end": 664,
    "range": [
      655,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 665,
    "end": 669,
    "range": [
      665,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 679,
    "end": 684,
    "range": [
      679,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 690,
    "end": 695,
    "range": [
      690,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 696,
    "end": 698,
    "range": [
      696,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 706,
    "end": 711,
    "range": [
      706,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 712,
    "end": 714,
    "range": [
      712,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 718,
    "end": 725,
    "range": [
      718,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 726,
    "end": 730,
    "range": [
      726,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 737,
    "end": 742,
    "range": [
      737,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 743,
    "end": 745,
    "range": [
      743,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 749,
    "end": 758,
    "range": [
      749,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 759,
    "end": 763,
    "range": [
      759,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 777,
    "end": 782,
    "range": [
      777,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 783,
    "end": 785,
    "range": [
      783,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 793,
    "end": 799,
    "range": [
      793,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 800,
    "end": 805,
    "range": [
      800,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 806,
    "end": 808,
    "range": [
      806,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 812,
    "end": 819,
    "range": [
      812,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 820,
    "end": 824,
    "range": [
      820,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 831,
    "end": 837,
    "range": [
      831,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 838,
    "end": 843,
    "range": [
      838,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 844,
    "end": 846,
    "range": [
      844,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 850,
    "end": 859,
    "range": [
      850,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 860,
    "end": 864,
    "range": [
      860,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 873,
    "end": 882,
    "range": [
      873,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 888,
    "end": 894,
    "range": [
      888,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 895,
    "end": 900,
    "range": [
      895,
      900
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 901,
    "end": 909,
    "range": [
      901,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 910,
    "end": 912,
    "range": [
      910,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  }
]
```
