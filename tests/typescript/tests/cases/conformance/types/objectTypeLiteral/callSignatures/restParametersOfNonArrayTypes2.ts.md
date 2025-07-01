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
        "name": "MyThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 178
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 179,
                "end": 182
              }
            ],
            "start": 178,
            "end": 183
          },
          "start": 173,
          "end": 183
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 184,
        "end": 187
      },
      "declare": false,
      "start": 147,
      "end": 187
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThing2",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 206
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
              "start": 207,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 207,
            "end": 208
          }
        ],
        "start": 206,
        "end": 209
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "typeArguments": null,
                "start": 224,
                "end": 225
              }
            ],
            "start": 223,
            "end": 226
          },
          "start": 218,
          "end": 226
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 227,
        "end": 230
      },
      "declare": false,
      "start": 188,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 258
              },
              "typeArguments": null,
              "start": 251,
              "end": 258
            },
            "start": 249,
            "end": 258
          },
          "value": null,
          "start": 245,
          "end": 258
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 260,
        "end": 263
      },
      "expression": false,
      "start": 232,
      "end": 263
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 284
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 289
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 298
                    },
                    "typeArguments": null,
                    "start": 291,
                    "end": 298
                  },
                  "start": 289,
                  "end": 298
                },
                "value": null,
                "start": 285,
                "end": 298
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 300,
              "end": 303
            },
            "expression": false,
            "start": 272,
            "end": 303
          },
          "definite": false,
          "start": 268,
          "end": 303
        }
      ],
      "declare": false,
      "start": 264,
      "end": 303
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 310
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 327
                  },
                  "start": 318,
                  "end": 327
                },
                "value": null,
                "start": 314,
                "end": 327
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 333
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 335,
                    "end": 342
                  },
                  "start": 333,
                  "end": 342
                },
                "value": null,
                "start": 329,
                "end": 342
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 347,
              "end": 350
            },
            "id": null,
            "generator": false,
            "start": 313,
            "end": 350
          },
          "definite": false,
          "start": 308,
          "end": 350
        }
      ],
      "declare": false,
      "start": 304,
      "end": 350
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
        "start": 358,
        "end": 359
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 369
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyThing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 383
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 383
                    },
                    "start": 374,
                    "end": 383
                  },
                  "value": null,
                  "start": 370,
                  "end": 383
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 385,
                "end": 388
              },
              "expression": false,
              "start": 369,
              "end": 388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 366,
            "end": 388
          }
        ],
        "start": 360,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 352,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 403
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 415
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 417,
                    "end": 424
                  },
                  "start": 415,
                  "end": 424
                },
                "value": null,
                "start": 411,
                "end": 424
              }
            ],
            "returnType": null,
            "start": 410,
            "end": 426
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 434
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 439
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 448
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 448
                  },
                  "start": 439,
                  "end": 448
                },
                "value": null,
                "start": 435,
                "end": 448
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 454
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 456,
                    "end": 463
                  },
                  "start": 454,
                  "end": 463
                },
                "value": null,
                "start": 450,
                "end": 463
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 431,
            "end": 465
          }
        ],
        "start": 404,
        "end": 467
      },
      "declare": false,
      "start": 392,
      "end": 467
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
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 486,
                          "end": 487
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 489,
                              "end": 496
                            },
                            "typeArguments": null,
                            "start": 489,
                            "end": 496
                          },
                          "start": 487,
                          "end": 496
                        },
                        "value": null,
                        "start": 483,
                        "end": 496
                      }
                    ],
                    "returnType": null,
                    "start": 482,
                    "end": 498
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 506
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 510,
                          "end": 511
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 513,
                              "end": 520
                            },
                            "typeArguments": null,
                            "start": 513,
                            "end": 520
                          },
                          "start": 511,
                          "end": 520
                        },
                        "value": null,
                        "start": 507,
                        "end": 520
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 503,
                    "end": 522
                  }
                ],
                "start": 476,
                "end": 524
              },
              "start": 474,
              "end": 524
            },
            "start": 473,
            "end": 524
          },
          "init": null,
          "definite": false,
          "start": 473,
          "end": 524
        }
      ],
      "declare": false,
      "start": 469,
      "end": 524
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
            "typeAnnotation": null,
            "start": 530,
            "end": 531
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 543
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
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 547,
                        "end": 548
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 557
                          },
                          "typeArguments": null,
                          "start": 550,
                          "end": 557
                        },
                        "start": 548,
                        "end": 557
                      },
                      "value": null,
                      "start": 544,
                      "end": 557
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 559,
                    "end": 562
                  },
                  "expression": false,
                  "start": 543,
                  "end": 562
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 540,
                "end": 562
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 583
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 588
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 590,
                            "end": 597
                          },
                          "typeArguments": null,
                          "start": 590,
                          "end": 597
                        },
                        "start": 588,
                        "end": 597
                      },
                      "value": null,
                      "start": 584,
                      "end": 597
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 602,
                        "end": 603
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 605,
                            "end": 612
                          },
                          "typeArguments": null,
                          "start": 605,
                          "end": 612
                        },
                        "start": 603,
                        "end": 612
                      },
                      "value": null,
                      "start": 599,
                      "end": 612
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 614,
                    "end": 617
                  },
                  "expression": false,
                  "start": 571,
                  "end": 617
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 568,
                "end": 617
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 624
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 630,
                        "end": 631
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 633,
                            "end": 640
                          },
                          "typeArguments": null,
                          "start": 633,
                          "end": 640
                        },
                        "start": 631,
                        "end": 640
                      },
                      "value": null,
                      "start": 627,
                      "end": 640
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 645,
                    "end": 648
                  },
                  "id": null,
                  "generator": false,
                  "start": 626,
                  "end": 648
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 623,
                "end": 648
              }
            ],
            "start": 534,
            "end": 650
          },
          "definite": false,
          "start": 530,
          "end": 650
        }
      ],
      "declare": false,
      "start": 526,
      "end": 650
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 668
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 673
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyThing2",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 683
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 684,
                    "end": 690
                  }
                ],
                "start": 683,
                "end": 691
              },
              "start": 675,
              "end": 691
            },
            "start": 673,
            "end": 691
          },
          "value": null,
          "start": 669,
          "end": 691
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 693,
        "end": 696
      },
      "expression": false,
      "start": 655,
      "end": 696
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 703
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 718
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 723
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 733
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 734,
                          "end": 740
                        }
                      ],
                      "start": 733,
                      "end": 741
                    },
                    "start": 725,
                    "end": 741
                  },
                  "start": 723,
                  "end": 741
                },
                "value": null,
                "start": 719,
                "end": 741
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 743,
              "end": 746
            },
            "expression": false,
            "start": 706,
            "end": 746
          },
          "definite": false,
          "start": 701,
          "end": 746
        }
      ],
      "declare": false,
      "start": 697,
      "end": 746
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 753
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 761
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 763,
                      "end": 771
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 772,
                          "end": 778
                        }
                      ],
                      "start": 771,
                      "end": 779
                    },
                    "start": 763,
                    "end": 779
                  },
                  "start": 761,
                  "end": 779
                },
                "value": null,
                "start": 757,
                "end": 779
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 785
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 787,
                      "end": 795
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 796,
                          "end": 802
                        }
                      ],
                      "start": 795,
                      "end": 803
                    },
                    "start": 787,
                    "end": 803
                  },
                  "start": 785,
                  "end": 803
                },
                "value": null,
                "start": 781,
                "end": 803
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 808,
              "end": 811
            },
            "id": null,
            "generator": false,
            "start": 756,
            "end": 811
          },
          "definite": false,
          "start": 751,
          "end": 811
        }
      ],
      "declare": false,
      "start": 747,
      "end": 811
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 821
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 831
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 835,
                    "end": 836
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyThing2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 838,
                        "end": 846
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 847,
                            "end": 853
                          }
                        ],
                        "start": 846,
                        "end": 854
                      },
                      "start": 838,
                      "end": 854
                    },
                    "start": 836,
                    "end": 854
                  },
                  "value": null,
                  "start": 832,
                  "end": 854
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 856,
                "end": 859
              },
              "expression": false,
              "start": 831,
              "end": 859
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 828,
            "end": 859
          }
        ],
        "start": 822,
        "end": 861
      },
      "abstract": false,
      "declare": false,
      "start": 813,
      "end": 861
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 875
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 887
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 889,
                      "end": 897
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 898,
                          "end": 904
                        }
                      ],
                      "start": 897,
                      "end": 905
                    },
                    "start": 889,
                    "end": 905
                  },
                  "start": 887,
                  "end": 905
                },
                "value": null,
                "start": 883,
                "end": 905
              }
            ],
            "returnType": null,
            "start": 882,
            "end": 907
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 915
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 920
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 930
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 931,
                          "end": 937
                        }
                      ],
                      "start": 930,
                      "end": 938
                    },
                    "start": 922,
                    "end": 938
                  },
                  "start": 920,
                  "end": 938
                },
                "value": null,
                "start": 916,
                "end": 938
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 946,
                      "end": 954
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 955,
                          "end": 961
                        }
                      ],
                      "start": 954,
                      "end": 962
                    },
                    "start": 946,
                    "end": 962
                  },
                  "start": 944,
                  "end": 962
                },
                "value": null,
                "start": 940,
                "end": 962
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 912,
            "end": 964
          }
        ],
        "start": 876,
        "end": 966
      },
      "declare": false,
      "start": 863,
      "end": 966
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 986,
                          "end": 987
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 989,
                              "end": 997
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 998,
                                  "end": 1004
                                }
                              ],
                              "start": 997,
                              "end": 1005
                            },
                            "start": 989,
                            "end": 1005
                          },
                          "start": 987,
                          "end": 1005
                        },
                        "value": null,
                        "start": 983,
                        "end": 1005
                      }
                    ],
                    "returnType": null,
                    "start": 982,
                    "end": 1007
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1012,
                      "end": 1015
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1019,
                          "end": 1020
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyThing2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1022,
                              "end": 1030
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1031,
                                  "end": 1037
                                }
                              ],
                              "start": 1030,
                              "end": 1038
                            },
                            "start": 1022,
                            "end": 1038
                          },
                          "start": 1020,
                          "end": 1038
                        },
                        "value": null,
                        "start": 1016,
                        "end": 1038
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1012,
                    "end": 1040
                  }
                ],
                "start": 976,
                "end": 1042
              },
              "start": 974,
              "end": 1042
            },
            "start": 972,
            "end": 1042
          },
          "init": null,
          "definite": false,
          "start": 972,
          "end": 1042
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1042
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1050
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1059,
                  "end": 1062
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
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1069,
                            "end": 1077
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1078,
                                "end": 1084
                              }
                            ],
                            "start": 1077,
                            "end": 1085
                          },
                          "start": 1069,
                          "end": 1085
                        },
                        "start": 1067,
                        "end": 1085
                      },
                      "value": null,
                      "start": 1063,
                      "end": 1085
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1087,
                    "end": 1090
                  },
                  "expression": false,
                  "start": 1062,
                  "end": 1090
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1059,
                "end": 1090
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1097
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1108,
                    "end": 1111
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1115,
                        "end": 1116
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1118,
                            "end": 1126
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1127,
                                "end": 1133
                              }
                            ],
                            "start": 1126,
                            "end": 1134
                          },
                          "start": 1118,
                          "end": 1134
                        },
                        "start": 1116,
                        "end": 1134
                      },
                      "value": null,
                      "start": 1112,
                      "end": 1134
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1139,
                        "end": 1140
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1142,
                            "end": 1150
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1151,
                                "end": 1157
                              }
                            ],
                            "start": 1150,
                            "end": 1158
                          },
                          "start": 1142,
                          "end": 1158
                        },
                        "start": 1140,
                        "end": 1158
                      },
                      "value": null,
                      "start": 1136,
                      "end": 1158
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1160,
                    "end": 1163
                  },
                  "expression": false,
                  "start": 1099,
                  "end": 1163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1096,
                "end": 1163
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1170
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1176,
                        "end": 1177
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1179,
                            "end": 1187
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1188,
                                "end": 1194
                              }
                            ],
                            "start": 1187,
                            "end": 1195
                          },
                          "start": 1179,
                          "end": 1195
                        },
                        "start": 1177,
                        "end": 1195
                      },
                      "value": null,
                      "start": 1173,
                      "end": 1195
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1200,
                    "end": 1203
                  },
                  "id": null,
                  "generator": false,
                  "start": 1172,
                  "end": 1203
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1169,
                "end": 1203
              }
            ],
            "start": 1053,
            "end": 1205
          },
          "definite": false,
          "start": 1048,
          "end": 1205
        }
      ],
      "declare": false,
      "start": 1044,
      "end": 1205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 147,
  "end": 1205
}
```
