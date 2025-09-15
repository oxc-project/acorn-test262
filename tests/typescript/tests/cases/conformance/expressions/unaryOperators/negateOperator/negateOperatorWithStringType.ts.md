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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
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
                "value": "",
                "raw": "\"\"",
                "start": 74,
                "end": 76
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 78,
                "end": 83
              }
            ],
            "start": 73,
            "end": 84
          },
          "definite": false,
          "start": 53,
          "end": 84
        }
      ],
      "declare": false,
      "start": 49,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 103,
          "end": 109
        },
        "start": 101,
        "end": 109
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 119,
              "end": 124
            },
            "start": 112,
            "end": 125
          }
        ],
        "start": 110,
        "end": 127
      },
      "expression": false,
      "start": 87,
      "end": 127
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
        "start": 135,
        "end": 136
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
              "start": 150,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
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
            "start": 143,
            "end": 160
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
              "start": 172,
              "end": 175
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 187,
                      "end": 189
                    },
                    "start": 180,
                    "end": 190
                  }
                ],
                "start": 178,
                "end": 192
              },
              "expression": false,
              "start": 175,
              "end": 192
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 165,
            "end": 192
          }
        ],
        "start": 137,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 129,
      "end": 194
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
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
                        "type": "TSStringKeyword",
                        "start": 227,
                        "end": 233
                      },
                      "start": 225,
                      "end": 233
                    },
                    "start": 224,
                    "end": 233
                  },
                  "init": null,
                  "definite": false,
                  "start": 224,
                  "end": 233
                }
              ],
              "declare": false,
              "start": 220,
              "end": 234
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 213,
            "end": 234
          }
        ],
        "start": 207,
        "end": 236
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 195,
      "end": 236
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
            "start": 242,
            "end": 246
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 254
            },
            "typeArguments": null,
            "arguments": [],
            "start": 249,
            "end": 256
          },
          "definite": false,
          "start": 242,
          "end": 256
        }
      ],
      "declare": false,
      "start": 238,
      "end": 257
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
            "start": 282,
            "end": 297
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 307
            },
            "prefix": true,
            "start": 300,
            "end": 307
          },
          "definite": false,
          "start": 282,
          "end": 307
        }
      ],
      "declare": false,
      "start": 278,
      "end": 308
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
            "start": 313,
            "end": 328
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 339
            },
            "prefix": true,
            "start": 331,
            "end": 339
          },
          "definite": false,
          "start": 313,
          "end": 339
        }
      ],
      "declare": false,
      "start": 309,
      "end": 340
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
            "start": 369,
            "end": 384
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 388,
              "end": 390
            },
            "prefix": true,
            "start": 387,
            "end": 390
          },
          "definite": false,
          "start": 369,
          "end": 390
        }
      ],
      "declare": false,
      "start": 365,
      "end": 391
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
            "start": 396,
            "end": 411
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
                    "start": 417,
                    "end": 418
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 420,
                    "end": 422
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 417,
                  "end": 422
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
                    "start": 424,
                    "end": 425
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 427,
                    "end": 429
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 424,
                  "end": 429
                }
              ],
              "start": 415,
              "end": 431
            },
            "prefix": true,
            "start": 414,
            "end": 431
          },
          "definite": false,
          "start": 396,
          "end": 431
        }
      ],
      "declare": false,
      "start": 392,
      "end": 432
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
            "start": 437,
            "end": 452
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
                    "start": 458,
                    "end": 459
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 461,
                    "end": 463
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 458,
                  "end": 463
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
                    "start": 465,
                    "end": 466
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 472,
                            "end": 478
                          },
                          "start": 470,
                          "end": 478
                        },
                        "start": 469,
                        "end": 478
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 493
                          },
                          "start": 485,
                          "end": 494
                        }
                      ],
                      "start": 483,
                      "end": 496
                    },
                    "id": null,
                    "generator": false,
                    "start": 468,
                    "end": 496
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 465,
                  "end": 496
                }
              ],
              "start": 456,
              "end": 498
            },
            "prefix": true,
            "start": 455,
            "end": 498
          },
          "definite": false,
          "start": 437,
          "end": 498
        }
      ],
      "declare": false,
      "start": 433,
      "end": 499
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
            "start": 532,
            "end": 547
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
                "start": 551,
                "end": 555
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 557
              },
              "optional": false,
              "computed": false,
              "start": 551,
              "end": 557
            },
            "prefix": true,
            "start": 550,
            "end": 557
          },
          "definite": false,
          "start": 532,
          "end": 557
        }
      ],
      "declare": false,
      "start": 528,
      "end": 558
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
            "start": 563,
            "end": 578
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
                "start": 582,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 585
              },
              "optional": false,
              "computed": false,
              "start": 582,
              "end": 585
            },
            "prefix": true,
            "start": 581,
            "end": 585
          },
          "definite": false,
          "start": 563,
          "end": 585
        }
      ],
      "declare": false,
      "start": 559,
      "end": 586
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
            "start": 591,
            "end": 606
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 610,
                "end": 617
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 618,
                "end": 619
              },
              "optional": false,
              "computed": true,
              "start": 610,
              "end": 620
            },
            "prefix": true,
            "start": 609,
            "end": 620
          },
          "definite": false,
          "start": 591,
          "end": 620
        }
      ],
      "declare": false,
      "start": 587,
      "end": 621
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
            "start": 626,
            "end": 641
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
                "start": 645,
                "end": 648
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 645,
              "end": 650
            },
            "prefix": true,
            "start": 644,
            "end": 650
          },
          "definite": false,
          "start": 626,
          "end": 650
        }
      ],
      "declare": false,
      "start": 622,
      "end": 651
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
            "start": 656,
            "end": 672
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
                  "start": 676,
                  "end": 677
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 681
                },
                "optional": false,
                "computed": false,
                "start": 676,
                "end": 681
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 676,
              "end": 683
            },
            "prefix": true,
            "start": 675,
            "end": 683
          },
          "definite": false,
          "start": 656,
          "end": 683
        }
      ],
      "declare": false,
      "start": 652,
      "end": 684
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
            "start": 689,
            "end": 705
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 716
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 725
              },
              "start": 710,
              "end": 725
            },
            "prefix": true,
            "start": 708,
            "end": 726
          },
          "definite": false,
          "start": 689,
          "end": 726
        }
      ],
      "declare": false,
      "start": 685,
      "end": 727
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
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null,
            "start": 732,
            "end": 748
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
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 758
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 765
                },
                "optional": false,
                "computed": false,
                "start": 752,
                "end": 765
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 766,
                  "end": 767
                }
              ],
              "optional": false,
              "start": 752,
              "end": 768
            },
            "prefix": true,
            "start": 751,
            "end": 768
          },
          "definite": false,
          "start": 732,
          "end": 768
        }
      ],
      "declare": false,
      "start": 728,
      "end": 769
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 801,
          "end": 803
        },
        "prefix": true,
        "start": 800,
        "end": 803
      },
      "directive": null,
      "start": 800,
      "end": 804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 806,
          "end": 812
        },
        "prefix": true,
        "start": 805,
        "end": 812
      },
      "directive": null,
      "start": 805,
      "end": 813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 815,
          "end": 822
        },
        "prefix": true,
        "start": 814,
        "end": 822
      },
      "directive": null,
      "start": 814,
      "end": 823
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
            "start": 825,
            "end": 828
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 825,
          "end": 830
        },
        "prefix": true,
        "start": 824,
        "end": 830
      },
      "directive": null,
      "start": 824,
      "end": 831
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
                "start": 833,
                "end": 837
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "optional": false,
              "computed": false,
              "start": 833,
              "end": 839
            },
            "prefix": true,
            "start": 832,
            "end": 839
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 841
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 843
            },
            "optional": false,
            "computed": false,
            "start": 840,
            "end": 843
          }
        ],
        "start": 832,
        "end": 843
      },
      "directive": null,
      "start": 832,
      "end": 844
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 844
}
```
