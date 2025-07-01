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
        "start": 196,
        "end": 197
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
                        "start": 218,
                        "end": 224
                      },
                      "start": 216,
                      "end": 224
                    },
                    "start": 215,
                    "end": 224
                  },
                  "init": null,
                  "definite": false,
                  "start": 215,
                  "end": 224
                }
              ],
              "declare": false,
              "start": 211,
              "end": 225
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 204,
            "end": 225
          }
        ],
        "start": 198,
        "end": 227
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 189,
      "end": 227
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
            "start": 233,
            "end": 237
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [],
            "start": 240,
            "end": 247
          },
          "definite": false,
          "start": 233,
          "end": 247
        }
      ],
      "declare": false,
      "start": 229,
      "end": 248
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
            "start": 273,
            "end": 285
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
              "start": 293,
              "end": 299
            },
            "prefix": true,
            "start": 288,
            "end": 299
          },
          "definite": false,
          "start": 273,
          "end": 299
        }
      ],
      "declare": false,
      "start": 269,
      "end": 300
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
            "start": 305,
            "end": 317
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
              "start": 325,
              "end": 332
            },
            "prefix": true,
            "start": 320,
            "end": 332
          },
          "definite": false,
          "start": 305,
          "end": 332
        }
      ],
      "declare": false,
      "start": 301,
      "end": 333
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
            "start": 362,
            "end": 374
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 382,
              "end": 383
            },
            "prefix": true,
            "start": 377,
            "end": 383
          },
          "definite": false,
          "start": 362,
          "end": 383
        }
      ],
      "declare": false,
      "start": 358,
      "end": 384
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
            "start": 389,
            "end": 401
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
                    "start": 411,
                    "end": 412
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 414,
                    "end": 415
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 411,
                  "end": 415
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
                    "start": 417,
                    "end": 418
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 420,
                    "end": 421
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 417,
                  "end": 421
                }
              ],
              "start": 409,
              "end": 422
            },
            "prefix": true,
            "start": 404,
            "end": 422
          },
          "definite": false,
          "start": 389,
          "end": 422
        }
      ],
      "declare": false,
      "start": 385,
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
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 440
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
                    "start": 450,
                    "end": 451
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 453,
                    "end": 454
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 450,
                  "end": 454
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
                    "start": 456,
                    "end": 457
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
                            "start": 463,
                            "end": 469
                          },
                          "start": 461,
                          "end": 469
                        },
                        "start": 460,
                        "end": 469
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
                            "start": 483,
                            "end": 484
                          },
                          "start": 476,
                          "end": 485
                        }
                      ],
                      "start": 474,
                      "end": 487
                    },
                    "id": null,
                    "generator": false,
                    "start": 459,
                    "end": 487
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 456,
                  "end": 487
                }
              ],
              "start": 448,
              "end": 489
            },
            "prefix": true,
            "start": 443,
            "end": 489
          },
          "definite": false,
          "start": 428,
          "end": 489
        }
      ],
      "declare": false,
      "start": 424,
      "end": 490
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
            "start": 523,
            "end": 535
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
                "start": 543,
                "end": 547
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "optional": false,
              "computed": false,
              "start": 543,
              "end": 549
            },
            "prefix": true,
            "start": 538,
            "end": 549
          },
          "definite": false,
          "start": 523,
          "end": 549
        }
      ],
      "declare": false,
      "start": 519,
      "end": 550
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
            "start": 555,
            "end": 567
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
                "start": 575,
                "end": 576
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 578
              },
              "optional": false,
              "computed": false,
              "start": 575,
              "end": 578
            },
            "prefix": true,
            "start": 570,
            "end": 578
          },
          "definite": false,
          "start": 555,
          "end": 578
        }
      ],
      "declare": false,
      "start": 551,
      "end": 579
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
            "start": 584,
            "end": 596
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
                "start": 604,
                "end": 611
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 612,
                "end": 613
              },
              "optional": false,
              "computed": true,
              "start": 604,
              "end": 614
            },
            "prefix": true,
            "start": 599,
            "end": 614
          },
          "definite": false,
          "start": 584,
          "end": 614
        }
      ],
      "declare": false,
      "start": 580,
      "end": 615
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
            "start": 620,
            "end": 632
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
                "start": 640,
                "end": 643
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 640,
              "end": 645
            },
            "prefix": true,
            "start": 635,
            "end": 645
          },
          "definite": false,
          "start": 620,
          "end": 645
        }
      ],
      "declare": false,
      "start": 616,
      "end": 646
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
            "start": 651,
            "end": 664
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
                  "start": 672,
                  "end": 673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 677
                },
                "optional": false,
                "computed": false,
                "start": 672,
                "end": 677
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 672,
              "end": 679
            },
            "prefix": true,
            "start": 667,
            "end": 679
          },
          "definite": false,
          "start": 651,
          "end": 679
        }
      ],
      "declare": false,
      "start": 647,
      "end": 680
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
            "start": 685,
            "end": 698
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
                "start": 707,
                "end": 713
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 722
              },
              "start": 707,
              "end": 722
            },
            "prefix": true,
            "start": 701,
            "end": 723
          },
          "definite": false,
          "start": 685,
          "end": 723
        }
      ],
      "declare": false,
      "start": 681,
      "end": 724
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
            "start": 758,
            "end": 771
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
                "start": 784,
                "end": 790
              },
              "prefix": true,
              "start": 779,
              "end": 790
            },
            "prefix": true,
            "start": 774,
            "end": 790
          },
          "definite": false,
          "start": 758,
          "end": 790
        }
      ],
      "declare": false,
      "start": 754,
      "end": 791
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
            "start": 796,
            "end": 809
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
                    "start": 828,
                    "end": 834
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 843
                  },
                  "start": 828,
                  "end": 843
                },
                "prefix": true,
                "start": 822,
                "end": 844
              },
              "prefix": true,
              "start": 817,
              "end": 844
            },
            "prefix": true,
            "start": 812,
            "end": 844
          },
          "definite": false,
          "start": 796,
          "end": 844
        }
      ],
      "declare": false,
      "start": 792,
      "end": 845
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
          "start": 881,
          "end": 882
        },
        "prefix": true,
        "start": 876,
        "end": 882
      },
      "directive": null,
      "start": 876,
      "end": 883
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
          "start": 889,
          "end": 895
        },
        "prefix": true,
        "start": 884,
        "end": 895
      },
      "directive": null,
      "start": 884,
      "end": 896
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
          "start": 902,
          "end": 909
        },
        "prefix": true,
        "start": 897,
        "end": 909
      },
      "directive": null,
      "start": 897,
      "end": 910
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
            "start": 916,
            "end": 919
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 916,
          "end": 921
        },
        "prefix": true,
        "start": 911,
        "end": 921
      },
      "directive": null,
      "start": 911,
      "end": 922
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
            "start": 928,
            "end": 932
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 934
          },
          "optional": false,
          "computed": false,
          "start": 928,
          "end": 934
        },
        "prefix": true,
        "start": 923,
        "end": 934
      },
      "directive": null,
      "start": 923,
      "end": 935
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
            "start": 941,
            "end": 942
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 944
          },
          "optional": false,
          "computed": false,
          "start": 941,
          "end": 944
        },
        "prefix": true,
        "start": 936,
        "end": 944
      },
      "directive": null,
      "start": 936,
      "end": 945
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
                "start": 951,
                "end": 955
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 957
              },
              "optional": false,
              "computed": false,
              "start": 951,
              "end": 957
            },
            "prefix": true,
            "start": 946,
            "end": 957
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 960
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 962
            },
            "optional": false,
            "computed": false,
            "start": 959,
            "end": 962
          }
        ],
        "start": 946,
        "end": 962
      },
      "directive": null,
      "start": 946,
      "end": 963
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 963
}
```
