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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "start": 33,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 47
        }
      ],
      "declare": false,
      "start": 29,
      "end": 48
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
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 62,
                  "end": 68
                },
                "start": 62,
                "end": 70
              },
              "start": 60,
              "end": 70
            },
            "start": 53,
            "end": 70
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 74,
                "end": 75
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 77,
                "end": 78
              }
            ],
            "start": 73,
            "end": 79
          },
          "definite": false,
          "start": 53,
          "end": 79
        }
      ],
      "declare": false,
      "start": 49,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 94
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 98,
          "end": 104
        },
        "start": 96,
        "end": 104
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 114,
              "end": 115
            },
            "start": 107,
            "end": 116
          }
        ],
        "start": 105,
        "end": 118
      },
      "expression": false,
      "start": 82,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
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
              "start": 141,
              "end": 142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              },
              "start": 142,
              "end": 150
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 134,
            "end": 151
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
              "start": 163,
              "end": 166
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "value": 1,
                      "raw": "1",
                      "start": 178,
                      "end": 179
                    },
                    "start": 171,
                    "end": 180
                  }
                ],
                "start": 169,
                "end": 182
              },
              "expression": false,
              "start": 166,
              "end": 182
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 156,
            "end": 182
          }
        ],
        "start": 128,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 184
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 196
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 217,
                        "end": 223
                      },
                      "start": 215,
                      "end": 223
                    },
                    "start": 214,
                    "end": 223
                  },
                  "init": null,
                  "definite": false,
                  "start": 214,
                  "end": 223
                }
              ],
              "declare": false,
              "start": 210,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 203,
            "end": 224
          }
        ],
        "start": 197,
        "end": 226
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 185,
      "end": 226
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 236
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "typeArguments": null,
            "arguments": [],
            "start": 239,
            "end": 246
          },
          "definite": false,
          "start": 232,
          "end": 246
        }
      ],
      "declare": false,
      "start": 228,
      "end": 247
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 287
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 297
            },
            "prefix": true,
            "start": 290,
            "end": 297
          },
          "definite": false,
          "start": 272,
          "end": 297
        }
      ],
      "declare": false,
      "start": 268,
      "end": 298
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 318
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 329
            },
            "prefix": true,
            "start": 321,
            "end": 329
          },
          "definite": false,
          "start": 303,
          "end": 329
        }
      ],
      "declare": false,
      "start": 299,
      "end": 330
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 374
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 378,
              "end": 379
            },
            "prefix": true,
            "start": 377,
            "end": 379
          },
          "definite": false,
          "start": 359,
          "end": 379
        }
      ],
      "declare": false,
      "start": 355,
      "end": 380
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 400
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
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
                    "start": 406,
                    "end": 407
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 409,
                    "end": 410
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 406,
                  "end": 410
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
                    "start": 412,
                    "end": 413
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 415,
                    "end": 416
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 412,
                  "end": 416
                }
              ],
              "start": 404,
              "end": 417
            },
            "prefix": true,
            "start": 403,
            "end": 417
          },
          "definite": false,
          "start": 385,
          "end": 417
        }
      ],
      "declare": false,
      "start": 381,
      "end": 418
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 438
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
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
                    "start": 444,
                    "end": 445
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 447,
                    "end": 448
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 444,
                  "end": 448
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
                    "start": 450,
                    "end": 451
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 457,
                            "end": 463
                          },
                          "start": 455,
                          "end": 463
                        },
                        "start": 454,
                        "end": 463
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 478
                          },
                          "start": 470,
                          "end": 479
                        }
                      ],
                      "start": 468,
                      "end": 481
                    },
                    "id": null,
                    "generator": false,
                    "start": 453,
                    "end": 481
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 450,
                  "end": 481
                }
              ],
              "start": 442,
              "end": 483
            },
            "prefix": true,
            "start": 441,
            "end": 483
          },
          "definite": false,
          "start": 423,
          "end": 483
        }
      ],
      "declare": false,
      "start": 419,
      "end": 484
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 532
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "optional": false,
              "computed": false,
              "start": 536,
              "end": 542
            },
            "prefix": true,
            "start": 535,
            "end": 542
          },
          "definite": false,
          "start": 517,
          "end": 542
        }
      ],
      "declare": false,
      "start": 513,
      "end": 543
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 563
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 568
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 570
              },
              "optional": false,
              "computed": false,
              "start": 567,
              "end": 570
            },
            "prefix": true,
            "start": 566,
            "end": 570
          },
          "definite": false,
          "start": 548,
          "end": 570
        }
      ],
      "declare": false,
      "start": 544,
      "end": 571
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 591
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 602
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 603,
                "end": 604
              },
              "optional": false,
              "computed": true,
              "start": 595,
              "end": 605
            },
            "prefix": true,
            "start": 594,
            "end": 605
          },
          "definite": false,
          "start": 576,
          "end": 605
        }
      ],
      "declare": false,
      "start": 572,
      "end": 606
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 626
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 633
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 630,
              "end": 635
            },
            "prefix": true,
            "start": 629,
            "end": 635
          },
          "definite": false,
          "start": 611,
          "end": 635
        }
      ],
      "declare": false,
      "start": 607,
      "end": 636
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 657
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 662
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 666
                },
                "optional": false,
                "computed": false,
                "start": 661,
                "end": 666
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 661,
              "end": 668
            },
            "prefix": true,
            "start": 660,
            "end": 668
          },
          "definite": false,
          "start": 641,
          "end": 668
        }
      ],
      "declare": false,
      "start": 637,
      "end": 669
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
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 690
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 701
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 710
              },
              "start": 695,
              "end": 710
            },
            "prefix": true,
            "start": 693,
            "end": 711
          },
          "definite": false,
          "start": 674,
          "end": 711
        }
      ],
      "declare": false,
      "start": 670,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 744,
          "end": 745
        },
        "prefix": true,
        "start": 743,
        "end": 745
      },
      "directive": null,
      "start": 743,
      "end": 746
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 754
        },
        "prefix": true,
        "start": 747,
        "end": 754
      },
      "directive": null,
      "start": 747,
      "end": 755
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 757,
          "end": 764
        },
        "prefix": true,
        "start": 756,
        "end": 764
      },
      "directive": null,
      "start": 756,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 770
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 767,
          "end": 772
        },
        "prefix": true,
        "start": 766,
        "end": 772
      },
      "directive": null,
      "start": 766,
      "end": 773
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 779
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 781
          },
          "optional": false,
          "computed": false,
          "start": 775,
          "end": 781
        },
        "prefix": true,
        "start": 774,
        "end": 781
      },
      "directive": null,
      "start": 774,
      "end": 782
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 785
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "optional": false,
          "computed": false,
          "start": 784,
          "end": 787
        },
        "prefix": true,
        "start": 783,
        "end": 787
      },
      "directive": null,
      "start": 783,
      "end": 788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 794
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 796
              },
              "optional": false,
              "computed": false,
              "start": 790,
              "end": 796
            },
            "prefix": true,
            "start": 789,
            "end": 796
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "optional": false,
            "computed": false,
            "start": 798,
            "end": 801
          }
        ],
        "start": 789,
        "end": 801
      },
      "directive": null,
      "start": 789,
      "end": 802
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 802
}
```
