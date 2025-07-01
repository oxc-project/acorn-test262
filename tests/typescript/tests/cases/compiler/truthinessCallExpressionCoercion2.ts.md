__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
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
              "name": "from",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 33
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "body": null,
              "expression": false,
              "start": 33,
              "end": 44
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 22,
            "end": 44
          }
        ],
        "start": 16,
        "end": 46
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
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
              "name": "from",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 81
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 85,
                  "end": 91
                },
                "start": 83,
                "end": 91
              },
              "body": null,
              "expression": false,
              "start": 81,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 92
          }
        ],
        "start": 64,
        "end": 94
      },
      "abstract": false,
      "declare": true,
      "start": 48,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 109
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 127,
                  "end": 134
                },
                "start": 124,
                "end": 134
              },
              "start": 121,
              "end": 134
            },
            "start": 119,
            "end": 134
          },
          "start": 110,
          "end": 134
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "required2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 153,
                  "end": 160
                },
                "start": 150,
                "end": 160
              },
              "start": 147,
              "end": 160
            },
            "start": 145,
            "end": 160
          },
          "start": 136,
          "end": 160
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 165,
              "end": 172
            },
            "start": 163,
            "end": 172
          },
          "start": 162,
          "end": 172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 191,
                  "end": 198
                },
                "start": 188,
                "end": 198
              },
              "start": 185,
              "end": 198
            },
            "start": 183,
            "end": 198
          },
          "start": 174,
          "end": 198
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 228
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required",
                    "raw": "'required'",
                    "start": 244,
                    "end": 254
                  }
                ],
                "optional": false,
                "start": 232,
                "end": 255
              },
              "start": 219,
              "end": 255
            },
            "directive": null,
            "start": 219,
            "end": 256
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 275,
                  "end": 276
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 289
                },
                "start": 275,
                "end": 289
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 300
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 304
                  },
                  "optional": false,
                  "computed": false,
                  "start": 293,
                  "end": 304
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required",
                    "raw": "'required'",
                    "start": 305,
                    "end": 315
                  }
                ],
                "optional": false,
                "start": 293,
                "end": 316
              },
              "start": 275,
              "end": 316
            },
            "directive": null,
            "start": 275,
            "end": 317
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 342
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 355
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 346,
                "end": 357
              },
              "start": 333,
              "end": 357
            },
            "directive": null,
            "start": 333,
            "end": 358
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 383
                },
                "operator": "&&",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 387,
                  "end": 388
                },
                "start": 374,
                "end": 388
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 401
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 392,
                "end": 403
              },
              "start": 374,
              "end": 403
            },
            "directive": null,
            "start": 374,
            "end": 404
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "optional",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 428
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 439
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 443
                  },
                  "optional": false,
                  "computed": false,
                  "start": 432,
                  "end": 443
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "'optional'",
                    "start": 444,
                    "end": 454
                  }
                ],
                "optional": false,
                "start": 432,
                "end": 455
              },
              "start": 420,
              "end": 455
            },
            "directive": null,
            "start": 420,
            "end": 456
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 472,
                  "end": 473
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 477,
                  "end": 485
                },
                "start": 472,
                "end": 485
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 496
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 500
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "'optional'",
                    "start": 501,
                    "end": 511
                  }
                ],
                "optional": false,
                "start": 489,
                "end": 512
              },
              "start": 472,
              "end": 512
            },
            "directive": null,
            "start": 472,
            "end": 513
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 540
                  },
                  "prefix": true,
                  "start": 530,
                  "end": 540
                },
                "prefix": true,
                "start": 529,
                "end": 540
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 555
                  },
                  "optional": false,
                  "computed": false,
                  "start": 544,
                  "end": 555
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "not required",
                    "raw": "'not required'",
                    "start": 556,
                    "end": 570
                  }
                ],
                "optional": false,
                "start": 544,
                "end": 571
              },
              "start": 529,
              "end": 571
            },
            "directive": null,
            "start": 529,
            "end": 572
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 588,
                  "end": 597
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 588,
                "end": 599
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 610
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 614
                  },
                  "optional": false,
                  "computed": false,
                  "start": 603,
                  "end": 614
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "required call",
                    "raw": "'required call'",
                    "start": 615,
                    "end": 630
                  }
                ],
                "optional": false,
                "start": 603,
                "end": 631
              },
              "start": 588,
              "end": 631
            },
            "directive": null,
            "start": 588,
            "end": 632
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 648,
                    "end": 657
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 670
                  },
                  "start": 648,
                  "end": 670
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 674,
                    "end": 683
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 674,
                  "end": 685
                },
                "start": 648,
                "end": 685
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 698
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 689,
                "end": 700
              },
              "start": 648,
              "end": 700
            },
            "directive": null,
            "start": 648,
            "end": 701
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 717,
                  "end": 719
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 727
                },
                "optional": false,
                "computed": false,
                "start": 717,
                "end": 727
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 738,
                              "end": 742
                            },
                            "start": 735,
                            "end": 742
                          },
                          "start": 732,
                          "end": 742
                        },
                        "start": 730,
                        "end": 742
                      },
                      "start": 729,
                      "end": 742
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 748
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 753
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 759
                        },
                        "optional": false,
                        "computed": false,
                        "start": 752,
                        "end": 759
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 766
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 768,
                          "end": 770
                        }
                      ],
                      "optional": false,
                      "start": 752,
                      "end": 771
                    },
                    "start": 747,
                    "end": 771
                  },
                  "id": null,
                  "generator": false,
                  "start": 728,
                  "end": 771
                }
              ],
              "optional": false,
              "start": 717,
              "end": 772
            },
            "directive": null,
            "start": 717,
            "end": 773
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 801
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 814
                  },
                  "start": 792,
                  "end": 814
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 827
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 818,
                  "end": 829
                },
                "start": 792,
                "end": 829
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 833,
                    "end": 840
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 844
                  },
                  "optional": false,
                  "computed": false,
                  "start": 833,
                  "end": 844
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 845,
                    "end": 850
                  }
                ],
                "optional": false,
                "start": 833,
                "end": 851
              },
              "start": 792,
              "end": 851
            },
            "directive": null,
            "start": 792,
            "end": 852
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 884
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 889
              },
              "start": 875,
              "end": 889
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 891,
              "end": 898
            },
            "alternate": null,
            "start": 871,
            "end": 898
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 930
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 934,
                "end": 935
              },
              "start": 921,
              "end": 935
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 937,
              "end": 944
            },
            "alternate": null,
            "start": 917,
            "end": 944
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 976
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "required2",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 989
              },
              "start": 967,
              "end": 989
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 991,
              "end": 998
            },
            "alternate": null,
            "start": 963,
            "end": 998
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1021,
                "end": 1030
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1035
              },
              "start": 1021,
              "end": 1035
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1037,
              "end": 1044
            },
            "alternate": null,
            "start": 1017,
            "end": 1044
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1076
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "required2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1089
              },
              "start": 1067,
              "end": 1089
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1091,
              "end": 1098
            },
            "alternate": null,
            "start": 1063,
            "end": 1098
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1132
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1137
              },
              "start": 1123,
              "end": 1137
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1141,
              "end": 1148
            },
            "alternate": null,
            "start": 1117,
            "end": 1148
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1177
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1181,
                "end": 1182
              },
              "start": 1168,
              "end": 1182
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1194,
                      "end": 1203
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1194,
                    "end": 1205
                  },
                  "directive": null,
                  "start": 1194,
                  "end": 1206
                }
              ],
              "start": 1184,
              "end": 1212
            },
            "alternate": null,
            "start": 1164,
            "end": 1212
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1232,
                "end": 1241
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1246
              },
              "start": 1232,
              "end": 1246
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1258,
                      "end": 1267
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1258,
                    "end": 1269
                  },
                  "directive": null,
                  "start": 1258,
                  "end": 1270
                }
              ],
              "start": 1248,
              "end": 1276
            },
            "alternate": null,
            "start": 1228,
            "end": 1276
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1296,
                "end": 1305
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1309,
                "end": 1310
              },
              "start": 1296,
              "end": 1310
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1322,
                      "end": 1331
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1322,
                    "end": 1333
                  },
                  "directive": null,
                  "start": 1322,
                  "end": 1334
                }
              ],
              "start": 1312,
              "end": 1340
            },
            "alternate": null,
            "start": 1292,
            "end": 1340
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1361
              },
              "operator": "??",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1374
              },
              "start": 1360,
              "end": 1374
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1395
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1386,
                    "end": 1397
                  },
                  "directive": null,
                  "start": 1386,
                  "end": 1398
                }
              ],
              "start": 1376,
              "end": 1404
            },
            "alternate": null,
            "start": 1356,
            "end": 1404
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "required1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1426,
                "end": 1435
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "start": 1426,
              "end": 1440
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "required1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1454,
                      "end": 1463
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1454,
                    "end": 1465
                  },
                  "directive": null,
                  "start": 1454,
                  "end": 1466
                }
              ],
              "start": 1444,
              "end": 1472
            },
            "alternate": null,
            "start": 1420,
            "end": 1472
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "required1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1539
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1542,
              "end": 1549
            },
            "alternate": null,
            "start": 1525,
            "end": 1549
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1573
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1578,
                  "end": 1587
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1591,
                  "end": 1600
                },
                "start": 1578,
                "end": 1600
              },
              "start": 1572,
              "end": 1601
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1603,
              "end": 1610
            },
            "alternate": null,
            "start": 1568,
            "end": 1610
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1634,
                  "end": 1643
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1647,
                  "end": 1656
                },
                "start": 1634,
                "end": 1656
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1661,
                "end": 1662
              },
              "start": 1633,
              "end": 1662
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1664,
              "end": 1671
            },
            "alternate": null,
            "start": 1629,
            "end": 1671
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1695
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1709
                },
                "operator": "??",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1713,
                  "end": 1722
                },
                "start": 1700,
                "end": 1722
              },
              "start": 1694,
              "end": 1723
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1725,
              "end": 1732
            },
            "alternate": null,
            "start": 1690,
            "end": 1732
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1756,
                  "end": 1765
                },
                "operator": "??",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1769,
                  "end": 1778
                },
                "start": 1756,
                "end": 1778
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1784
              },
              "start": 1755,
              "end": 1784
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 1786,
              "end": 1793
            },
            "alternate": null,
            "start": 1751,
            "end": 1793
          }
        ],
        "start": 200,
        "end": 1795
      },
      "expression": false,
      "start": 96,
      "end": 1795
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksConsole",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1819
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1848,
                      "end": 1854
                    },
                    "prefix": true,
                    "start": 1841,
                    "end": 1854
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "undefined",
                    "raw": "'undefined'",
                    "start": 1859,
                    "end": 1870
                  },
                  "start": 1841,
                  "end": 1870
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1874,
                    "end": 1880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1888
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1874,
                  "end": 1888
                },
                "start": 1841,
                "end": 1888
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1902,
                        "end": 1908
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1909,
                        "end": 1916
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1902,
                      "end": 1916
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1920,
                      "end": 1923
                    },
                    "start": 1902,
                    "end": 1923
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "firebug",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1925,
                    "end": 1932
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1901,
                  "end": 1932
                },
                "operator": "||",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1937,
                        "end": 1943
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1944,
                        "end": 1951
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1937,
                      "end": 1951
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1957
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1937,
                    "end": 1957
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "window",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1961,
                        "end": 1967
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1968,
                        "end": 1975
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1961,
                      "end": 1975
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1976,
                      "end": 1981
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1961,
                    "end": 1981
                  },
                  "start": 1937,
                  "end": 1981
                },
                "start": 1901,
                "end": 1982
              },
              "start": 1841,
              "end": 1983
            },
            "directive": null,
            "start": 1841,
            "end": 1984
          }
        ],
        "start": 1822,
        "end": 1986
      },
      "expression": false,
      "start": 1797,
      "end": 1986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checksPropertyAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 1997,
        "end": 2017
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2032,
                  "end": 2033
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
                        "start": 2046,
                        "end": 2049
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2065,
                              "end": 2068
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
                                      "value": true,
                                      "raw": "true",
                                      "start": 2080,
                                      "end": 2084
                                    },
                                    "start": 2073,
                                    "end": 2085
                                  }
                                ],
                                "start": 2071,
                                "end": 2087
                              },
                              "expression": false,
                              "start": 2068,
                              "end": 2087
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2065,
                            "end": 2087
                          }
                        ],
                        "start": 2051,
                        "end": 2097
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2046,
                      "end": 2097
                    }
                  ],
                  "start": 2036,
                  "end": 2103
                },
                "definite": false,
                "start": 2032,
                "end": 2103
              }
            ],
            "declare": false,
            "start": 2026,
            "end": 2103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2122,
                    "end": 2123
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2124,
                    "end": 2127
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2122,
                  "end": 2127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2128,
                  "end": 2131
                },
                "optional": false,
                "computed": false,
                "start": 2122,
                "end": 2131
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2135,
                    "end": 2142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2143,
                    "end": 2146
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2135,
                  "end": 2146
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'",
                    "start": 2147,
                    "end": 2158
                  }
                ],
                "optional": false,
                "start": 2135,
                "end": 2159
              },
              "start": 2122,
              "end": 2159
            },
            "directive": null,
            "start": 2122,
            "end": 2160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2179,
                  "end": 2180
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2184,
                      "end": 2185
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2186,
                      "end": 2189
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2184,
                    "end": 2189
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2190,
                    "end": 2193
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2184,
                  "end": 2193
                },
                "start": 2179,
                "end": 2193
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2197,
                    "end": 2204
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2205,
                    "end": 2208
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2197,
                  "end": 2208
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x.foo.bar",
                    "raw": "'x.foo.bar'",
                    "start": 2209,
                    "end": 2220
                  }
                ],
                "optional": false,
                "start": 2197,
                "end": 2221
              },
              "start": 2179,
              "end": 2221
            },
            "directive": null,
            "start": 2179,
            "end": 2222
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2238,
                    "end": 2239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2240,
                    "end": 2243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2238,
                  "end": 2243
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2244,
                  "end": 2247
                },
                "optional": false,
                "computed": false,
                "start": 2238,
                "end": 2247
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2251,
                      "end": 2252
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2253,
                      "end": 2256
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2251,
                    "end": 2256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2257,
                    "end": 2260
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2251,
                  "end": 2260
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2251,
                "end": 2262
              },
              "start": 2238,
              "end": 2262
            },
            "directive": null,
            "start": 2238,
            "end": 2263
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2281,
                      "end": 2284
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2279,
                    "end": 2284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2285,
                    "end": 2288
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2279,
                  "end": 2288
                },
                "operator": "&&",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2292,
                  "end": 2293
                },
                "start": 2279,
                "end": 2293
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2297,
                      "end": 2298
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2297,
                    "end": 2302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2303,
                    "end": 2306
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2297,
                  "end": 2306
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2297,
                "end": 2308
              },
              "start": 2279,
              "end": 2308
            },
            "directive": null,
            "start": 2279,
            "end": 2309
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2332
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2336
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2337,
                        "end": 2341
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2335,
                      "end": 2341
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2346,
                            "end": 2347
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "from",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2348,
                            "end": 2352
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2346,
                          "end": 2352
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2364
                          },
                          "typeArguments": null,
                          "start": 2356,
                          "end": 2364
                        },
                        "start": 2346,
                        "end": 2364
                      },
                      "operator": "!==",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2370,
                          "end": 2371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2372,
                          "end": 2376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2370,
                        "end": 2376
                      },
                      "start": 2345,
                      "end": 2376
                    },
                    "start": 2335,
                    "end": 2376
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2379,
                    "end": 2383
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 2386,
                    "end": 2391
                  },
                  "start": 2335,
                  "end": 2391
                },
                "definite": false,
                "start": 2331,
                "end": 2391
              }
            ],
            "declare": false,
            "start": 2325,
            "end": 2392
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2397,
              "end": 2398
            },
            "directive": null,
            "start": 2397,
            "end": 2399
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2411,
                  "end": 2413
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2426,
                        "end": 2427
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2431,
                              "end": 2432
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2436,
                                    "end": 2437
                                  },
                                  "value": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "start": 2445,
                                      "end": 2447
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 2439,
                                    "end": 2447
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2436,
                                  "end": 2447
                                }
                              ],
                              "start": 2434,
                              "end": 2449
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2431,
                            "end": 2449
                          }
                        ],
                        "start": 2429,
                        "end": 2451
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2426,
                      "end": 2451
                    }
                  ],
                  "start": 2416,
                  "end": 2457
                },
                "definite": false,
                "start": 2411,
                "end": 2457
              }
            ],
            "declare": false,
            "start": 2405,
            "end": 2457
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2468,
                  "end": 2470
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2483,
                        "end": 2484
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2488,
                              "end": 2489
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2493,
                                    "end": 2494
                                  },
                                  "value": {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "start": 2502,
                                      "end": 2504
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 2496,
                                    "end": 2504
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2493,
                                  "end": 2504
                                }
                              ],
                              "start": 2491,
                              "end": 2506
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2488,
                            "end": 2506
                          }
                        ],
                        "start": 2486,
                        "end": 2508
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2483,
                      "end": 2508
                    }
                  ],
                  "start": 2473,
                  "end": 2514
                },
                "definite": false,
                "start": 2468,
                "end": 2514
              }
            ],
            "declare": false,
            "start": 2462,
            "end": 2514
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2533,
                      "end": 2535
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2536,
                      "end": 2537
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2533,
                    "end": 2537
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2539
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2533,
                  "end": 2539
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2540,
                  "end": 2541
                },
                "optional": false,
                "computed": false,
                "start": 2533,
                "end": 2541
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2545,
                        "end": 2547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2548,
                        "end": 2549
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2545,
                      "end": 2549
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2550,
                      "end": 2551
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2545,
                    "end": 2551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2553
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2545,
                  "end": 2553
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2545,
                "end": 2555
              },
              "start": 2533,
              "end": 2555
            },
            "directive": null,
            "start": 2533,
            "end": 2556
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2614,
                    "end": 2616
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2618
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2614,
                  "end": 2618
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2619,
                  "end": 2620
                },
                "optional": false,
                "computed": false,
                "start": 2614,
                "end": 2620
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2621,
                "end": 2622
              },
              "optional": false,
              "computed": false,
              "start": 2614,
              "end": 2622
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2625,
              "end": 2632
            },
            "alternate": null,
            "start": 2609,
            "end": 2632
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2655,
                "end": 2656
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2661,
                        "end": 2663
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2664,
                        "end": 2665
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2661,
                      "end": 2665
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2666,
                      "end": 2667
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2661,
                    "end": 2667
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2668,
                    "end": 2669
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2661,
                  "end": 2669
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2673,
                        "end": 2675
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2676,
                        "end": 2677
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2673,
                      "end": 2677
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2678,
                      "end": 2679
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2673,
                    "end": 2679
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2680,
                    "end": 2681
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2673,
                  "end": 2681
                },
                "start": 2661,
                "end": 2681
              },
              "start": 2655,
              "end": 2682
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2684,
              "end": 2691
            },
            "alternate": null,
            "start": 2651,
            "end": 2691
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2715,
                        "end": 2717
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2718,
                        "end": 2719
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2715,
                      "end": 2719
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2720,
                      "end": 2721
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2715,
                    "end": 2721
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2722,
                    "end": 2723
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2715,
                  "end": 2723
                },
                "operator": "||",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2727,
                        "end": 2729
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2730,
                        "end": 2731
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2727,
                      "end": 2731
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2732,
                      "end": 2733
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2727,
                    "end": 2733
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2734,
                    "end": 2735
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2727,
                  "end": 2735
                },
                "start": 2715,
                "end": 2735
              },
              "operator": "&&",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2740,
                "end": 2741
              },
              "start": 2714,
              "end": 2741
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2743,
              "end": 2750
            },
            "alternate": null,
            "start": 2710,
            "end": 2750
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2773,
                "end": 2774
              },
              "operator": "&&",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2779,
                        "end": 2781
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2782,
                        "end": 2783
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2779,
                      "end": 2783
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2784,
                      "end": 2785
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2779,
                    "end": 2785
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2786,
                    "end": 2787
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2779,
                  "end": 2787
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2793
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2794,
                        "end": 2795
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2791,
                      "end": 2795
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2796,
                      "end": 2797
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2791,
                    "end": 2797
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2798,
                    "end": 2799
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2791,
                  "end": 2799
                },
                "start": 2779,
                "end": 2799
              },
              "start": 2773,
              "end": 2800
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2802,
              "end": 2809
            },
            "alternate": null,
            "start": 2769,
            "end": 2809
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2833,
                        "end": 2835
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2836,
                        "end": 2837
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2833,
                      "end": 2837
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2838,
                      "end": 2839
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2833,
                    "end": 2839
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2840,
                    "end": 2841
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2833,
                  "end": 2841
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2845,
                        "end": 2847
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2848,
                        "end": 2849
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2845,
                      "end": 2849
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2850,
                      "end": 2851
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2845,
                    "end": 2851
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2853
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2845,
                  "end": 2853
                },
                "start": 2833,
                "end": 2853
              },
              "operator": "&&",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2858,
                "end": 2859
              },
              "start": 2832,
              "end": 2859
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 2861,
              "end": 2868
            },
            "alternate": null,
            "start": 2828,
            "end": 2868
          }
        ],
        "start": 2020,
        "end": 2870
      },
      "expression": false,
      "start": 1988,
      "end": 2870
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2878,
        "end": 2881
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 2888,
              "end": 2896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2905,
                    "end": 2912
                  },
                  "start": 2902,
                  "end": 2912
                },
                "start": 2899,
                "end": 2912
              },
              "start": 2897,
              "end": 2912
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2888,
            "end": 2913
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2926
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
                      "value": true,
                      "raw": "true",
                      "start": 2946,
                      "end": 2950
                    },
                    "start": 2939,
                    "end": 2951
                  }
                ],
                "start": 2929,
                "end": 2957
              },
              "expression": false,
              "start": 2926,
              "end": 2957
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2918,
            "end": 2957
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 2962,
              "end": 2966
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2996,
                          "end": 3000
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3001,
                          "end": 3009
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2996,
                        "end": 3009
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3013,
                            "end": 3020
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3021,
                            "end": 3024
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3013,
                          "end": 3024
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "required",
                            "raw": "'required'",
                            "start": 3025,
                            "end": 3035
                          }
                        ],
                        "optional": false,
                        "start": 3013,
                        "end": 3036
                      },
                      "start": 2996,
                      "end": 3036
                    },
                    "directive": null,
                    "start": 2996,
                    "end": 3037
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3064,
                          "end": 3065
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3069,
                            "end": 3073
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3074,
                            "end": 3082
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3069,
                          "end": 3082
                        },
                        "start": 3064,
                        "end": 3082
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3086,
                            "end": 3093
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3094,
                            "end": 3097
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3086,
                          "end": 3097
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "required",
                            "raw": "'required'",
                            "start": 3098,
                            "end": 3108
                          }
                        ],
                        "optional": false,
                        "start": 3086,
                        "end": 3109
                      },
                      "start": 3064,
                      "end": 3109
                    },
                    "directive": null,
                    "start": 3064,
                    "end": 3110
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3134,
                          "end": 3138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3139,
                          "end": 3147
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3134,
                        "end": 3147
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3151,
                            "end": 3155
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3156,
                            "end": 3164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3151,
                          "end": 3164
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3151,
                        "end": 3166
                      },
                      "start": 3134,
                      "end": 3166
                    },
                    "directive": null,
                    "start": 3134,
                    "end": 3167
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3191,
                            "end": 3195
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3196,
                            "end": 3204
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3191,
                          "end": 3204
                        },
                        "operator": "&&",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3208,
                          "end": 3209
                        },
                        "start": 3191,
                        "end": 3209
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3213,
                            "end": 3217
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3218,
                            "end": 3226
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3213,
                          "end": 3226
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3213,
                        "end": 3228
                      },
                      "start": 3191,
                      "end": 3228
                    },
                    "directive": null,
                    "start": 3191,
                    "end": 3229
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3253,
                          "end": 3254
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3258,
                            "end": 3262
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3263,
                            "end": 3271
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3258,
                          "end": 3271
                        },
                        "start": 3253,
                        "end": 3271
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3275,
                            "end": 3282
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3283,
                            "end": 3286
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3275,
                          "end": 3286
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "optional",
                            "raw": "'optional'",
                            "start": 3287,
                            "end": 3297
                          }
                        ],
                        "optional": false,
                        "start": 3275,
                        "end": 3298
                      },
                      "start": 3253,
                      "end": 3298
                    },
                    "directive": null,
                    "start": 3253,
                    "end": 3299
                  }
                ],
                "start": 2969,
                "end": 3305
              },
              "expression": false,
              "start": 2966,
              "end": 3305
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2962,
            "end": 3305
          }
        ],
        "start": 2882,
        "end": 3307
      },
      "abstract": false,
      "declare": false,
      "start": 2872,
      "end": 3307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3307
}
```
