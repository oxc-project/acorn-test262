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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
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
                "value": "",
                "raw": "\"\"",
                "start": 78,
                "end": 80
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 82,
                "end": 87
              }
            ],
            "start": 77,
            "end": 88
          },
          "definite": false,
          "start": 57,
          "end": 88
        }
      ],
      "declare": false,
      "start": 53,
      "end": 89
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 103
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
          "start": 107,
          "end": 113
        },
        "start": 105,
        "end": 113
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
              "start": 123,
              "end": 128
            },
            "start": 116,
            "end": 129
          }
        ],
        "start": 114,
        "end": 131
      },
      "expression": false,
      "start": 91,
      "end": 131
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
        "start": 139,
        "end": 140
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
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
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
            "start": 147,
            "end": 164
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
              "start": 176,
              "end": 179
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
                      "start": 191,
                      "end": 193
                    },
                    "start": 184,
                    "end": 194
                  }
                ],
                "start": 182,
                "end": 196
              },
              "expression": false,
              "start": 179,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 169,
            "end": 196
          }
        ],
        "start": 141,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 207
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
                        "start": 228,
                        "end": 234
                      },
                      "start": 226,
                      "end": 234
                    },
                    "start": 225,
                    "end": 234
                  },
                  "init": null,
                  "definite": false,
                  "start": 225,
                  "end": 234
                }
              ],
              "declare": false,
              "start": 221,
              "end": 235
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 214,
            "end": 235
          }
        ],
        "start": 208,
        "end": 237
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 199,
      "end": 237
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
            "start": 243,
            "end": 247
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [],
            "start": 250,
            "end": 257
          },
          "definite": false,
          "start": 243,
          "end": 257
        }
      ],
      "declare": false,
      "start": 239,
      "end": 258
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
            "start": 283,
            "end": 295
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 309
            },
            "prefix": true,
            "start": 298,
            "end": 309
          },
          "definite": false,
          "start": 283,
          "end": 309
        }
      ],
      "declare": false,
      "start": 279,
      "end": 310
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
            "start": 315,
            "end": 327
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 342
            },
            "prefix": true,
            "start": 330,
            "end": 342
          },
          "definite": false,
          "start": 315,
          "end": 342
        }
      ],
      "declare": false,
      "start": 311,
      "end": 343
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
            "start": 372,
            "end": 384
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 392,
              "end": 394
            },
            "prefix": true,
            "start": 387,
            "end": 394
          },
          "definite": false,
          "start": 372,
          "end": 394
        }
      ],
      "declare": false,
      "start": 368,
      "end": 395
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
            "start": 400,
            "end": 412
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
                    "start": 422,
                    "end": 423
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 425,
                    "end": 427
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 422,
                  "end": 427
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
                    "start": 429,
                    "end": 430
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 432,
                    "end": 434
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 429,
                  "end": 434
                }
              ],
              "start": 420,
              "end": 436
            },
            "prefix": true,
            "start": 415,
            "end": 436
          },
          "definite": false,
          "start": 400,
          "end": 436
        }
      ],
      "declare": false,
      "start": 396,
      "end": 437
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
            "start": 442,
            "end": 454
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
                    "start": 464,
                    "end": 465
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 467,
                    "end": 469
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 464,
                  "end": 469
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
                    "start": 471,
                    "end": 472
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
                            "start": 478,
                            "end": 484
                          },
                          "start": 476,
                          "end": 484
                        },
                        "start": 475,
                        "end": 484
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
                            "start": 498,
                            "end": 499
                          },
                          "start": 491,
                          "end": 500
                        }
                      ],
                      "start": 489,
                      "end": 502
                    },
                    "id": null,
                    "generator": false,
                    "start": 474,
                    "end": 502
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 471,
                  "end": 502
                }
              ],
              "start": 462,
              "end": 504
            },
            "prefix": true,
            "start": 457,
            "end": 504
          },
          "definite": false,
          "start": 442,
          "end": 504
        }
      ],
      "declare": false,
      "start": 438,
      "end": 505
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
            "start": 538,
            "end": 550
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
                "start": 558,
                "end": 562
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 564
              },
              "optional": false,
              "computed": false,
              "start": 558,
              "end": 564
            },
            "prefix": true,
            "start": 553,
            "end": 564
          },
          "definite": false,
          "start": 538,
          "end": 564
        }
      ],
      "declare": false,
      "start": 534,
      "end": 565
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
            "start": 570,
            "end": 582
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
                "start": 590,
                "end": 591
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 593
              },
              "optional": false,
              "computed": false,
              "start": 590,
              "end": 593
            },
            "prefix": true,
            "start": 585,
            "end": 593
          },
          "definite": false,
          "start": 570,
          "end": 593
        }
      ],
      "declare": false,
      "start": 566,
      "end": 594
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
            "start": 599,
            "end": 611
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 619,
                "end": 626
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 627,
                "end": 628
              },
              "optional": false,
              "computed": true,
              "start": 619,
              "end": 629
            },
            "prefix": true,
            "start": 614,
            "end": 629
          },
          "definite": false,
          "start": 599,
          "end": 629
        }
      ],
      "declare": false,
      "start": 595,
      "end": 630
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
            "start": 635,
            "end": 647
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
                "start": 655,
                "end": 658
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 655,
              "end": 660
            },
            "prefix": true,
            "start": 650,
            "end": 660
          },
          "definite": false,
          "start": 635,
          "end": 660
        }
      ],
      "declare": false,
      "start": 631,
      "end": 661
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
            "start": 666,
            "end": 679
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
                  "start": 687,
                  "end": 688
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 692
                },
                "optional": false,
                "computed": false,
                "start": 687,
                "end": 692
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 687,
              "end": 694
            },
            "prefix": true,
            "start": 682,
            "end": 694
          },
          "definite": false,
          "start": 666,
          "end": 694
        }
      ],
      "declare": false,
      "start": 662,
      "end": 695
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
            "start": 700,
            "end": 713
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 728
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 737
              },
              "start": 722,
              "end": 737
            },
            "prefix": true,
            "start": 716,
            "end": 738
          },
          "definite": false,
          "start": 700,
          "end": 738
        }
      ],
      "declare": false,
      "start": 696,
      "end": 739
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
            "start": 744,
            "end": 757
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
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 771
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 772,
                  "end": 778
                },
                "optional": false,
                "computed": false,
                "start": 765,
                "end": 778
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 779,
                  "end": 780
                }
              ],
              "optional": false,
              "start": 765,
              "end": 781
            },
            "prefix": true,
            "start": 760,
            "end": 781
          },
          "definite": false,
          "start": 744,
          "end": 781
        }
      ],
      "declare": false,
      "start": 740,
      "end": 782
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
            "start": 816,
            "end": 829
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
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 848
              },
              "prefix": true,
              "start": 837,
              "end": 848
            },
            "prefix": true,
            "start": 832,
            "end": 848
          },
          "definite": false,
          "start": 816,
          "end": 848
        }
      ],
      "declare": false,
      "start": 812,
      "end": 849
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
            "name": "ResultIsAny14",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 867
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
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 886,
                    "end": 892
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 901
                  },
                  "start": 886,
                  "end": 901
                },
                "prefix": true,
                "start": 880,
                "end": 902
              },
              "prefix": true,
              "start": 875,
              "end": 902
            },
            "prefix": true,
            "start": 870,
            "end": 902
          },
          "definite": false,
          "start": 854,
          "end": 902
        }
      ],
      "declare": false,
      "start": 850,
      "end": 903
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 939,
          "end": 941
        },
        "prefix": true,
        "start": 934,
        "end": 941
      },
      "directive": null,
      "start": 934,
      "end": 942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 948,
          "end": 954
        },
        "prefix": true,
        "start": 943,
        "end": 954
      },
      "directive": null,
      "start": 943,
      "end": 955
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 961,
          "end": 968
        },
        "prefix": true,
        "start": 956,
        "end": 968
      },
      "directive": null,
      "start": 956,
      "end": 969
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
            "start": 975,
            "end": 978
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 975,
          "end": 980
        },
        "prefix": true,
        "start": 970,
        "end": 980
      },
      "directive": null,
      "start": 970,
      "end": 981
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
                "start": 987,
                "end": 991
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 992,
                "end": 993
              },
              "optional": false,
              "computed": false,
              "start": 987,
              "end": 993
            },
            "prefix": true,
            "start": 982,
            "end": 993
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 995
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "optional": false,
            "computed": false,
            "start": 994,
            "end": 997
          }
        ],
        "start": 982,
        "end": 997
      },
      "directive": null,
      "start": 982,
      "end": 998
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 998
}
```
