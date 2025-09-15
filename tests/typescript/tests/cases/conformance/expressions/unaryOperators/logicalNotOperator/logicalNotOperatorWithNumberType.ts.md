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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 288
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 298
            },
            "prefix": true,
            "start": 291,
            "end": 298
          },
          "definite": false,
          "start": 272,
          "end": 298
        }
      ],
      "declare": false,
      "start": 268,
      "end": 299
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 320
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 331
            },
            "prefix": true,
            "start": 323,
            "end": 331
          },
          "definite": false,
          "start": 304,
          "end": 331
        }
      ],
      "declare": false,
      "start": 300,
      "end": 332
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 377
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 381,
              "end": 382
            },
            "prefix": true,
            "start": 380,
            "end": 382
          },
          "definite": false,
          "start": 361,
          "end": 382
        }
      ],
      "declare": false,
      "start": 357,
      "end": 383
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 404
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                    "start": 410,
                    "end": 411
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 413,
                    "end": 414
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 410,
                  "end": 414
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
                    "start": 416,
                    "end": 417
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 419,
                    "end": 420
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 416,
                  "end": 420
                }
              ],
              "start": 408,
              "end": 421
            },
            "prefix": true,
            "start": 407,
            "end": 421
          },
          "definite": false,
          "start": 388,
          "end": 421
        }
      ],
      "declare": false,
      "start": 384,
      "end": 422
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 443
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                    "start": 449,
                    "end": 450
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 452,
                    "end": 453
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 449,
                  "end": 453
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
                    "start": 455,
                    "end": 456
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
                            "start": 462,
                            "end": 468
                          },
                          "start": 460,
                          "end": 468
                        },
                        "start": 459,
                        "end": 468
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
                            "start": 482,
                            "end": 483
                          },
                          "start": 475,
                          "end": 484
                        }
                      ],
                      "start": 473,
                      "end": 486
                    },
                    "id": null,
                    "generator": false,
                    "start": 458,
                    "end": 486
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 455,
                  "end": 486
                }
              ],
              "start": 447,
              "end": 488
            },
            "prefix": true,
            "start": 446,
            "end": 488
          },
          "definite": false,
          "start": 427,
          "end": 488
        }
      ],
      "declare": false,
      "start": 423,
      "end": 489
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 538
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 546
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 548
              },
              "optional": false,
              "computed": false,
              "start": 542,
              "end": 548
            },
            "prefix": true,
            "start": 541,
            "end": 548
          },
          "definite": false,
          "start": 522,
          "end": 548
        }
      ],
      "declare": false,
      "start": 518,
      "end": 549
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 570
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 577
              },
              "optional": false,
              "computed": false,
              "start": 574,
              "end": 577
            },
            "prefix": true,
            "start": 573,
            "end": 577
          },
          "definite": false,
          "start": 554,
          "end": 577
        }
      ],
      "declare": false,
      "start": 550,
      "end": 578
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 599
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 610
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 611,
                "end": 612
              },
              "optional": false,
              "computed": true,
              "start": 603,
              "end": 613
            },
            "prefix": true,
            "start": 602,
            "end": 613
          },
          "definite": false,
          "start": 583,
          "end": 613
        }
      ],
      "declare": false,
      "start": 579,
      "end": 614
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 635
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 642
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 639,
              "end": 644
            },
            "prefix": true,
            "start": 638,
            "end": 644
          },
          "definite": false,
          "start": 619,
          "end": 644
        }
      ],
      "declare": false,
      "start": 615,
      "end": 645
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 667
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                  "start": 671,
                  "end": 672
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 676
                },
                "optional": false,
                "computed": false,
                "start": 671,
                "end": 676
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 671,
              "end": 678
            },
            "prefix": true,
            "start": 670,
            "end": 678
          },
          "definite": false,
          "start": 650,
          "end": 678
        }
      ],
      "declare": false,
      "start": 646,
      "end": 679
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 701
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 712
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 721
              },
              "start": 706,
              "end": 721
            },
            "prefix": true,
            "start": 704,
            "end": 722
          },
          "definite": false,
          "start": 684,
          "end": 722
        }
      ],
      "declare": false,
      "start": 680,
      "end": 723
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 769
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 780
              },
              "prefix": true,
              "start": 773,
              "end": 780
            },
            "prefix": true,
            "start": 772,
            "end": 780
          },
          "definite": false,
          "start": 752,
          "end": 780
        }
      ],
      "declare": false,
      "start": 748,
      "end": 781
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 803
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 816
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 825
                  },
                  "start": 810,
                  "end": 825
                },
                "prefix": true,
                "start": 808,
                "end": 826
              },
              "prefix": true,
              "start": 807,
              "end": 826
            },
            "prefix": true,
            "start": 806,
            "end": 826
          },
          "definite": false,
          "start": 786,
          "end": 826
        }
      ],
      "declare": false,
      "start": 782,
      "end": 827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 859,
          "end": 860
        },
        "prefix": true,
        "start": 858,
        "end": 860
      },
      "directive": null,
      "start": 858,
      "end": 861
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 869
        },
        "prefix": true,
        "start": 862,
        "end": 869
      },
      "directive": null,
      "start": 862,
      "end": 870
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 872,
          "end": 879
        },
        "prefix": true,
        "start": 871,
        "end": 879
      },
      "directive": null,
      "start": 871,
      "end": 880
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 885
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 882,
          "end": 887
        },
        "prefix": true,
        "start": 881,
        "end": 887
      },
      "directive": null,
      "start": 881,
      "end": 888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 894
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 895,
            "end": 896
          },
          "optional": false,
          "computed": false,
          "start": 890,
          "end": 896
        },
        "prefix": true,
        "start": 889,
        "end": 896
      },
      "directive": null,
      "start": 889,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 900
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 902
          },
          "optional": false,
          "computed": false,
          "start": 899,
          "end": 902
        },
        "prefix": true,
        "start": 898,
        "end": 902
      },
      "directive": null,
      "start": 898,
      "end": 903
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 909
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 911
              },
              "optional": false,
              "computed": false,
              "start": 905,
              "end": 911
            },
            "prefix": true,
            "start": 904,
            "end": 911
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 914
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 916
            },
            "optional": false,
            "computed": false,
            "start": 913,
            "end": 916
          }
        ],
        "start": 904,
        "end": 916
      },
      "directive": null,
      "start": 904,
      "end": 917
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 917
}
```
