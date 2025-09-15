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
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "start": 37,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 51
        }
      ],
      "declare": false,
      "start": 33,
      "end": 52
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
                  "start": 66,
                  "end": 72
                },
                "start": 66,
                "end": 74
              },
              "start": 64,
              "end": 74
            },
            "start": 57,
            "end": 74
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 78,
                "end": 79
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 81,
                "end": 82
              }
            ],
            "start": 77,
            "end": 83
          },
          "definite": false,
          "start": 57,
          "end": 83
        }
      ],
      "declare": false,
      "start": 53,
      "end": 84
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
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
          "start": 102,
          "end": 108
        },
        "start": 100,
        "end": 108
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
              "start": 118,
              "end": 119
            },
            "start": 111,
            "end": 120
          }
        ],
        "start": 109,
        "end": 122
      },
      "expression": false,
      "start": 86,
      "end": 122
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
        "start": 130,
        "end": 131
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
              "start": 145,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 148,
                "end": 154
              },
              "start": 146,
              "end": 154
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
            "start": 138,
            "end": 155
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
              "start": 167,
              "end": 170
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
                      "start": 182,
                      "end": 183
                    },
                    "start": 175,
                    "end": 184
                  }
                ],
                "start": 173,
                "end": 186
              },
              "expression": false,
              "start": 170,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 160,
            "end": 186
          }
        ],
        "start": 132,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 124,
      "end": 188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 200
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
                        "start": 221,
                        "end": 227
                      },
                      "start": 219,
                      "end": 227
                    },
                    "start": 218,
                    "end": 227
                  },
                  "init": null,
                  "definite": false,
                  "start": 218,
                  "end": 227
                }
              ],
              "declare": false,
              "start": 214,
              "end": 228
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 207,
            "end": 228
          }
        ],
        "start": 201,
        "end": 230
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 189,
      "end": 230
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
            "start": 236,
            "end": 240
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeArguments": null,
            "arguments": [],
            "start": 243,
            "end": 250
          },
          "definite": false,
          "start": 236,
          "end": 250
        }
      ],
      "declare": false,
      "start": 232,
      "end": 251
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
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 288
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 302
            },
            "prefix": true,
            "start": 291,
            "end": 302
          },
          "definite": false,
          "start": 276,
          "end": 302
        }
      ],
      "declare": false,
      "start": 272,
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
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 320
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 335
            },
            "prefix": true,
            "start": 323,
            "end": 335
          },
          "definite": false,
          "start": 308,
          "end": 335
        }
      ],
      "declare": false,
      "start": 304,
      "end": 336
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
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 377
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 385,
              "end": 386
            },
            "prefix": true,
            "start": 380,
            "end": 386
          },
          "definite": false,
          "start": 365,
          "end": 386
        }
      ],
      "declare": false,
      "start": 361,
      "end": 387
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
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 404
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
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
                    "start": 414,
                    "end": 415
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 417,
                    "end": 418
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 414,
                  "end": 418
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
                    "start": 420,
                    "end": 421
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 423,
                    "end": 424
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 420,
                  "end": 424
                }
              ],
              "start": 412,
              "end": 425
            },
            "prefix": true,
            "start": 407,
            "end": 425
          },
          "definite": false,
          "start": 392,
          "end": 425
        }
      ],
      "declare": false,
      "start": 388,
      "end": 426
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
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 443
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
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
                    "start": 453,
                    "end": 454
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 456,
                    "end": 457
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 453,
                  "end": 457
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
                    "start": 459,
                    "end": 460
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
                            "start": 466,
                            "end": 472
                          },
                          "start": 464,
                          "end": 472
                        },
                        "start": 463,
                        "end": 472
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
                            "start": 486,
                            "end": 487
                          },
                          "start": 479,
                          "end": 488
                        }
                      ],
                      "start": 477,
                      "end": 490
                    },
                    "id": null,
                    "generator": false,
                    "start": 462,
                    "end": 490
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 459,
                  "end": 490
                }
              ],
              "start": 451,
              "end": 492
            },
            "prefix": true,
            "start": 446,
            "end": 492
          },
          "definite": false,
          "start": 431,
          "end": 492
        }
      ],
      "declare": false,
      "start": 427,
      "end": 493
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
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 538
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 550
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 552
              },
              "optional": false,
              "computed": false,
              "start": 546,
              "end": 552
            },
            "prefix": true,
            "start": 541,
            "end": 552
          },
          "definite": false,
          "start": 526,
          "end": 552
        }
      ],
      "declare": false,
      "start": 522,
      "end": 553
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
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 570
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 579
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "optional": false,
              "computed": false,
              "start": 578,
              "end": 581
            },
            "prefix": true,
            "start": 573,
            "end": 581
          },
          "definite": false,
          "start": 558,
          "end": 581
        }
      ],
      "declare": false,
      "start": 554,
      "end": 582
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
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 599
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 614
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 615,
                "end": 616
              },
              "optional": false,
              "computed": true,
              "start": 607,
              "end": 617
            },
            "prefix": true,
            "start": 602,
            "end": 617
          },
          "definite": false,
          "start": 587,
          "end": 617
        }
      ],
      "declare": false,
      "start": 583,
      "end": 618
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
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 635
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 646
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 643,
              "end": 648
            },
            "prefix": true,
            "start": 638,
            "end": 648
          },
          "definite": false,
          "start": 623,
          "end": 648
        }
      ],
      "declare": false,
      "start": 619,
      "end": 649
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
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 667
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
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
                  "start": 675,
                  "end": 676
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 680
                },
                "optional": false,
                "computed": false,
                "start": 675,
                "end": 680
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 675,
              "end": 682
            },
            "prefix": true,
            "start": 670,
            "end": 682
          },
          "definite": false,
          "start": 654,
          "end": 682
        }
      ],
      "declare": false,
      "start": 650,
      "end": 683
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
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 701
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 716
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 725
              },
              "start": 710,
              "end": 725
            },
            "prefix": true,
            "start": 704,
            "end": 726
          },
          "definite": false,
          "start": 688,
          "end": 726
        }
      ],
      "declare": false,
      "start": 684,
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
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 774
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 793
              },
              "prefix": true,
              "start": 782,
              "end": 793
            },
            "prefix": true,
            "start": 777,
            "end": 793
          },
          "definite": false,
          "start": 761,
          "end": 793
        }
      ],
      "declare": false,
      "start": 757,
      "end": 794
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
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 812
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 831,
                    "end": 837
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 846
                  },
                  "start": 831,
                  "end": 846
                },
                "prefix": true,
                "start": 825,
                "end": 847
              },
              "prefix": true,
              "start": 820,
              "end": 847
            },
            "prefix": true,
            "start": 815,
            "end": 847
          },
          "definite": false,
          "start": 799,
          "end": 847
        }
      ],
      "declare": false,
      "start": 795,
      "end": 848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 884,
          "end": 885
        },
        "prefix": true,
        "start": 879,
        "end": 885
      },
      "directive": null,
      "start": 879,
      "end": 886
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 892,
          "end": 898
        },
        "prefix": true,
        "start": 887,
        "end": 898
      },
      "directive": null,
      "start": 887,
      "end": 899
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 905,
          "end": 912
        },
        "prefix": true,
        "start": 900,
        "end": 912
      },
      "directive": null,
      "start": 900,
      "end": 913
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 919,
            "end": 922
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 919,
          "end": 924
        },
        "prefix": true,
        "start": 914,
        "end": 924
      },
      "directive": null,
      "start": 914,
      "end": 925
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 935
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 937
          },
          "optional": false,
          "computed": false,
          "start": 931,
          "end": 937
        },
        "prefix": true,
        "start": 926,
        "end": 937
      },
      "directive": null,
      "start": 926,
      "end": 938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 944,
            "end": 945
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 947
          },
          "optional": false,
          "computed": false,
          "start": 944,
          "end": 947
        },
        "prefix": true,
        "start": 939,
        "end": 947
      },
      "directive": null,
      "start": 939,
      "end": 948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 960
              },
              "optional": false,
              "computed": false,
              "start": 954,
              "end": 960
            },
            "prefix": true,
            "start": 949,
            "end": 960
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 963
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 965
            },
            "optional": false,
            "computed": false,
            "start": 962,
            "end": 965
          }
        ],
        "start": 949,
        "end": 965
      },
      "directive": null,
      "start": 949,
      "end": 966
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 966
}
```
