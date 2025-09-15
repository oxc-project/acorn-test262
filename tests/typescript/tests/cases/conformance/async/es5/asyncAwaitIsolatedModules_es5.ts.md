__ESTREE_TEST__:PASS:
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
