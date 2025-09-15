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
            "start": 449,
            "end": 452
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
              "start": 467,
              "end": 468
            },
            "id": null,
            "generator": false,
            "start": 455,
            "end": 468
          },
          "definite": false,
          "start": 449,
          "end": 468
        }
      ],
      "declare": false,
      "start": 445,
      "end": 469
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
            "start": 474,
            "end": 477
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
              "start": 492,
              "end": 494
            },
            "id": null,
            "generator": false,
            "start": 480,
            "end": 494
          },
          "definite": false,
          "start": 474,
          "end": 494
        }
      ],
      "declare": false,
      "start": 470,
      "end": 495
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
            "start": 500,
            "end": 503
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
                  "start": 516,
                  "end": 523
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 524,
                      "end": 530
                    }
                  ],
                  "start": 523,
                  "end": 531
                },
                "start": 516,
                "end": 531
              },
              "start": 514,
              "end": 531
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 537
            },
            "id": null,
            "generator": false,
            "start": 506,
            "end": 537
          },
          "definite": false,
          "start": 500,
          "end": 537
        }
      ],
      "declare": false,
      "start": 496,
      "end": 538
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
            "start": 543,
            "end": 546
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
                  "start": 559,
                  "end": 568
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 569,
                      "end": 575
                    }
                  ],
                  "start": 568,
                  "end": 576
                },
                "start": 559,
                "end": 576
              },
              "start": 557,
              "end": 576
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 581
            },
            "id": null,
            "generator": false,
            "start": 549,
            "end": 581
          },
          "definite": false,
          "start": 543,
          "end": 581
        }
      ],
      "declare": false,
      "start": 539,
      "end": 582
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
            "start": 588,
            "end": 589
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
                  "start": 601,
                  "end": 603
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
                    "start": 606,
                    "end": 609
                  },
                  "expression": false,
                  "start": 603,
                  "end": 609
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 595,
                "end": 609
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
                  "start": 618,
                  "end": 620
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
                        "start": 624,
                        "end": 631
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 632,
                            "end": 636
                          }
                        ],
                        "start": 631,
                        "end": 637
                      },
                      "start": 624,
                      "end": 637
                    },
                    "start": 622,
                    "end": 637
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 638,
                    "end": 641
                  },
                  "expression": false,
                  "start": 620,
                  "end": 641
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 612,
                "end": 641
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
                  "start": 650,
                  "end": 652
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
                        "start": 656,
                        "end": 665
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 666,
                            "end": 670
                          }
                        ],
                        "start": 665,
                        "end": 671
                      },
                      "start": 656,
                      "end": 671
                    },
                    "start": 654,
                    "end": 671
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 672,
                    "end": 675
                  },
                  "expression": false,
                  "start": 652,
                  "end": 675
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 644,
                "end": 675
              }
            ],
            "start": 592,
            "end": 677
          },
          "definite": false,
          "start": 588,
          "end": 677
        }
      ],
      "declare": false,
      "start": 584,
      "end": 678
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
        "start": 686,
        "end": 687
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
              "start": 697,
              "end": 699
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
                "start": 702,
                "end": 705
              },
              "expression": false,
              "start": 699,
              "end": 705
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 691,
            "end": 705
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
              "start": 713,
              "end": 715
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
                    "start": 719,
                    "end": 726
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 727,
                        "end": 731
                      }
                    ],
                    "start": 726,
                    "end": 732
                  },
                  "start": 719,
                  "end": 732
                },
                "start": 717,
                "end": 732
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 733,
                "end": 736
              },
              "expression": false,
              "start": 715,
              "end": 736
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 707,
            "end": 736
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
              "start": 744,
              "end": 746
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
                    "start": 750,
                    "end": 759
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 760,
                        "end": 764
                      }
                    ],
                    "start": 759,
                    "end": 765
                  },
                  "start": 750,
                  "end": 765
                },
                "start": 748,
                "end": 765
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 766,
                "end": 769
              },
              "expression": false,
              "start": 746,
              "end": 769
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 738,
            "end": 769
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
              "start": 784,
              "end": 786
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
                "start": 789,
                "end": 792
              },
              "expression": false,
              "start": 786,
              "end": 792
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 771,
            "end": 792
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
              "start": 807,
              "end": 809
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
                    "start": 813,
                    "end": 820
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 821,
                        "end": 825
                      }
                    ],
                    "start": 820,
                    "end": 826
                  },
                  "start": 813,
                  "end": 826
                },
                "start": 811,
                "end": 826
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 827,
                "end": 830
              },
              "expression": false,
              "start": 809,
              "end": 830
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 794,
            "end": 830
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
              "start": 845,
              "end": 847
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
                    "start": 851,
                    "end": 860
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 861,
                        "end": 865
                      }
                    ],
                    "start": 860,
                    "end": 866
                  },
                  "start": 851,
                  "end": 866
                },
                "start": 849,
                "end": 866
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 867,
                "end": 870
              },
              "expression": false,
              "start": 847,
              "end": 870
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 832,
            "end": 870
          }
        ],
        "start": 688,
        "end": 872
      },
      "abstract": false,
      "declare": false,
      "start": 680,
      "end": 872
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 885
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
                "start": 911,
                "end": 913
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
                "start": 916,
                "end": 919
              },
              "expression": false,
              "start": 896,
              "end": 919
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 889,
            "end": 919
          }
        ],
        "start": 886,
        "end": 921
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 874,
      "end": 921
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 921
}
```
