__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedSimpleVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 43
            },
            "init": null,
            "definite": false,
            "start": 26,
            "end": 43
          }
        ],
        "declare": false,
        "start": 22,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 15,
      "end": 44
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 62,
                "end": 65
              },
              "start": 60,
              "end": 65
            },
            "start": 50,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 65
        }
      ],
      "declare": false,
      "start": 46,
      "end": 66
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 71,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 96
        }
      ],
      "declare": false,
      "start": 67,
      "end": 97
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 120,
                  "end": 126
                },
                "start": 120,
                "end": 128
              },
              "start": 118,
              "end": 128
            },
            "start": 102,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 128
        }
      ],
      "declare": false,
      "start": 98,
      "end": 129
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
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 154
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 157,
            "end": 159
          },
          "definite": false,
          "start": 135,
          "end": 159
        }
      ],
      "declare": false,
      "start": 131,
      "end": 160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedVarWithInitialValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 199
            },
            "init": {
              "type": "Literal",
              "value": 70,
              "raw": "70",
              "start": 202,
              "end": 204
            },
            "definite": false,
            "start": 172,
            "end": 204
          }
        ],
        "declare": false,
        "start": 168,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 205
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
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 231
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 239,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 236,
                "end": 241
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "value": {
                  "type": "Literal",
                  "value": 70,
                  "raw": "70",
                  "start": 246,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 248
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 254
                },
                "value": {
                  "type": "Literal",
                  "value": "position",
                  "raw": "\"position\"",
                  "start": 256,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 266
              }
            ],
            "start": 234,
            "end": 268
          },
          "definite": false,
          "start": 211,
          "end": 268
        }
      ],
      "declare": false,
      "start": 207,
      "end": 269
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedWithComplicatedValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 309
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "value": {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30",
                    "start": 317,
                    "end": 319
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 314,
                  "end": 319
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 322
                  },
                  "value": {
                    "type": "Literal",
                    "value": 70,
                    "raw": "70",
                    "start": 324,
                    "end": 326
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 321,
                  "end": 326
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "desc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 332
                  },
                  "value": {
                    "type": "Literal",
                    "value": "position",
                    "raw": "\"position\"",
                    "start": 334,
                    "end": 344
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 328,
                  "end": 344
                }
              ],
              "start": 312,
              "end": 346
            },
            "definite": false,
            "start": 281,
            "end": 346
          }
        ],
        "declare": false,
        "start": 277,
        "end": 347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 270,
      "end": 347
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 372
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 372
        }
      ],
      "declare": true,
      "start": 349,
      "end": 373
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
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 386,
          "end": 397
        }
      ],
      "declare": true,
      "start": 374,
      "end": 397
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 422
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 422
        }
      ],
      "declare": true,
      "start": 399,
      "end": 423
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 456,
                "end": 462
              },
              "start": 454,
              "end": 462
            },
            "start": 436,
            "end": 462
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 462
        }
      ],
      "declare": true,
      "start": 424,
      "end": 463
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedDeclaredVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 504,
                  "end": 510
                },
                "start": 502,
                "end": 510
              },
              "start": 483,
              "end": 510
            },
            "init": null,
            "definite": false,
            "start": 483,
            "end": 510
          }
        ],
        "declare": true,
        "start": 471,
        "end": 511
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 464,
      "end": 511
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 527,
                  "end": 533
                },
                "start": 527,
                "end": 535
              },
              "start": 525,
              "end": 535
            },
            "start": 517,
            "end": 535
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 539,
                "end": 542
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 544,
                "end": 547
              }
            ],
            "start": 538,
            "end": 548
          },
          "definite": false,
          "start": 517,
          "end": 548
        }
      ],
      "declare": false,
      "start": 513,
      "end": 549
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exportedArrayVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 582,
                          "end": 583
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 585,
                            "end": 591
                          },
                          "start": 583,
                          "end": 591
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 582,
                        "end": 592
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 594
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 596,
                            "end": 602
                          },
                          "start": 594,
                          "end": 602
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 593,
                        "end": 603
                      }
                    ],
                    "start": 580,
                    "end": 605
                  },
                  "start": 580,
                  "end": 607
                },
                "start": 578,
                "end": 607
              },
              "start": 562,
              "end": 607
            },
            "init": null,
            "definite": false,
            "start": 562,
            "end": 607
          }
        ],
        "declare": false,
        "start": 558,
        "end": 609
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 551,
      "end": 609
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exportedArrayVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 626
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 627,
            "end": 631
          },
          "optional": false,
          "computed": false,
          "start": 610,
          "end": 631
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 635
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 637,
                  "end": 639
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 634,
                "end": 639
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                },
                "value": {
                  "type": "Literal",
                  "value": "hello world",
                  "raw": "'hello world'",
                  "start": 645,
                  "end": 658
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 641,
                "end": 658
              }
            ],
            "start": 632,
            "end": 660
          }
        ],
        "optional": false,
        "start": 610,
        "end": 661
      },
      "directive": null,
      "start": 610,
      "end": 662
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 687
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 714
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 716,
                    "end": 723
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 713,
                  "end": 723
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 734
                  },
                  "value": {
                    "type": "Literal",
                    "value": "word",
                    "raw": "\"word\"",
                    "start": 736,
                    "end": 742
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 733,
                  "end": 742
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 753
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 755,
                    "end": 756
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 752,
                  "end": 756
                }
              ],
              "start": 703,
              "end": 762
            },
            "start": 696,
            "end": 763
          }
        ],
        "start": 690,
        "end": 765
      },
      "expression": false,
      "start": 664,
      "end": 765
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 783,
          "end": 799
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 829
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 815,
                "end": 831
              },
              "start": 808,
              "end": 832
            }
          ],
          "start": 802,
          "end": 834
        },
        "expression": false,
        "start": 774,
        "end": 834
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 767,
      "end": 834
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 848
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 874
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 894,
                      "end": 901
                    },
                    "start": 887,
                    "end": 902
                  }
                ],
                "start": 877,
                "end": 908
              },
              "expression": false,
              "start": 862,
              "end": 908
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 855,
            "end": 908
          }
        ],
        "start": 849,
        "end": 910
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 836,
      "end": 910
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 936,
          "end": 938
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
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
                          "type": "TSNumberKeyword",
                          "start": 960,
                          "end": 966
                        },
                        "start": 958,
                        "end": 966
                      },
                      "start": 957,
                      "end": 966
                    },
                    "init": null,
                    "definite": false,
                    "start": 957,
                    "end": 966
                  }
                ],
                "declare": false,
                "start": 953,
                "end": 967
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 946,
              "end": 967
            }
          ],
          "start": 939,
          "end": 969
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 918,
        "end": 969
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 911,
      "end": 969
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 989,
          "end": 991
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1015,
                  "end": 1018
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1040
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1041,
                            "end": 1044
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1038,
                          "end": 1044
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1038,
                        "end": 1046
                      },
                      "start": 1031,
                      "end": 1047
                    }
                  ],
                  "start": 1021,
                  "end": 1053
                },
                "expression": false,
                "start": 1006,
                "end": 1053
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 999,
              "end": 1053
            }
          ],
          "start": 992,
          "end": 1055
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 979,
        "end": 1055
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 972,
      "end": 1055
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1073
            },
            "init": null,
            "definite": false,
            "start": 1068,
            "end": 1073
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1080
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1083,
              "end": 1085
            },
            "definite": false,
            "start": 1075,
            "end": 1085
          }
        ],
        "declare": false,
        "start": 1064,
        "end": 1086
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1057,
      "end": 1086
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
            "name": "eVar22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1091,
            "end": 1097
          },
          "init": null,
          "definite": false,
          "start": 1091,
          "end": 1097
        }
      ],
      "declare": false,
      "start": 1087,
      "end": 1098
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1115
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1118,
              "end": 1120
            },
            "definite": false,
            "start": 1110,
            "end": 1120
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1127
            },
            "init": null,
            "definite": false,
            "start": 1122,
            "end": 1127
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1134
            },
            "init": null,
            "definite": false,
            "start": 1129,
            "end": 1134
          }
        ],
        "declare": false,
        "start": 1106,
        "end": 1135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1099,
      "end": 1135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1135
}
```
