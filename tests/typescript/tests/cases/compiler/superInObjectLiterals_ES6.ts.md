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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
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
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 25
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
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 37,
                        "end": 43
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
                          "body": [],
                          "start": 46,
                          "end": 57
                        },
                        "expression": false,
                        "start": 43,
                        "end": 57
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 37,
                      "end": 57
                    }
                  ],
                  "start": 27,
                  "end": 63
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 63
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 75
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 88,
                              "end": 93
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 94,
                              "end": 100
                            },
                            "optional": false,
                            "computed": false,
                            "start": 88,
                            "end": 100
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 88,
                          "end": 102
                        },
                        "directive": null,
                        "start": 88,
                        "end": 103
                      }
                    ],
                    "start": 78,
                    "end": 109
                  },
                  "expression": false,
                  "start": 75,
                  "end": 109
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 69,
                "end": 109
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 123
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 136,
                              "end": 141
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 142,
                              "end": 148
                            },
                            "optional": false,
                            "computed": false,
                            "start": 136,
                            "end": 148
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 136,
                          "end": 150
                        },
                        "directive": null,
                        "start": 136,
                        "end": 151
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 167,
                          "end": 169
                        },
                        "start": 160,
                        "end": 170
                      }
                    ],
                    "start": 126,
                    "end": 176
                  },
                  "expression": false,
                  "start": 123,
                  "end": 176
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 115,
                "end": 176
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 190
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 196
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 208,
                              "end": 213
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 214,
                              "end": 220
                            },
                            "optional": false,
                            "computed": false,
                            "start": 208,
                            "end": 220
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 208,
                          "end": 222
                        },
                        "directive": null,
                        "start": 208,
                        "end": 223
                      }
                    ],
                    "start": 198,
                    "end": 229
                  },
                  "expression": false,
                  "start": 190,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 182,
                "end": 229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 237
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 261,
                              "end": 266
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 267,
                              "end": 273
                            },
                            "optional": false,
                            "computed": false,
                            "start": 261,
                            "end": 273
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 261,
                          "end": 275
                        },
                        "directive": null,
                        "start": 261,
                        "end": 276
                      }
                    ],
                    "start": 251,
                    "end": 282
                  },
                  "expression": false,
                  "start": 239,
                  "end": 282
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 282
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 290
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 315,
                              "end": 320
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 321,
                              "end": 327
                            },
                            "optional": false,
                            "computed": false,
                            "start": 315,
                            "end": 327
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 315,
                          "end": 329
                        },
                        "directive": null,
                        "start": 315,
                        "end": 330
                      }
                    ],
                    "start": 305,
                    "end": 336
                  },
                  "expression": false,
                  "start": 292,
                  "end": 336
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 288,
                "end": 336
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 344
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
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 362,
                              "end": 367
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 368,
                              "end": 374
                            },
                            "optional": false,
                            "computed": false,
                            "start": 362,
                            "end": 374
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 362,
                          "end": 376
                        },
                        "directive": null,
                        "start": 362,
                        "end": 377
                      }
                    ],
                    "start": 352,
                    "end": 383
                  },
                  "id": null,
                  "generator": false,
                  "start": 346,
                  "end": 383
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 342,
                "end": 383
              }
            ],
            "start": 10,
            "end": 385
          },
          "definite": false,
          "start": 4,
          "end": 385
        }
      ],
      "declare": false,
      "start": 0,
      "end": 386
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
        "start": 394,
        "end": 395
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 408
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
                "body": [],
                "start": 411,
                "end": 414
              },
              "expression": false,
              "start": 408,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 402,
            "end": 414
          }
        ],
        "start": 396,
        "end": 416
      },
      "abstract": false,
      "declare": false,
      "start": 388,
      "end": 416
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
        "start": 424,
        "end": 425
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 435
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 443
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 463
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
                                "name": "__proto__",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 480,
                                "end": 489
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
                                      "name": "method",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 509,
                                      "end": 515
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
                                        "body": [],
                                        "start": 518,
                                        "end": 537
                                      },
                                      "expression": false,
                                      "start": 515,
                                      "end": 537
                                    },
                                    "method": true,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 509,
                                    "end": 537
                                  }
                                ],
                                "start": 491,
                                "end": 551
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 480,
                              "end": 551
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 565,
                                "end": 571
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 592,
                                            "end": 597
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 598,
                                            "end": 604
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 592,
                                          "end": 604
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 592,
                                        "end": 606
                                      },
                                      "directive": null,
                                      "start": 592,
                                      "end": 607
                                    }
                                  ],
                                  "start": 574,
                                  "end": 621
                                },
                                "expression": false,
                                "start": 571,
                                "end": 621
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 565,
                              "end": 621
                            },
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 639,
                                "end": 643
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 664,
                                            "end": 669
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 670,
                                            "end": 676
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 664,
                                          "end": 676
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 664,
                                        "end": 678
                                      },
                                      "directive": null,
                                      "start": 664,
                                      "end": 679
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": 10,
                                        "raw": "10",
                                        "start": 703,
                                        "end": 705
                                      },
                                      "start": 696,
                                      "end": 706
                                    }
                                  ],
                                  "start": 646,
                                  "end": 720
                                },
                                "expression": false,
                                "start": 643,
                                "end": 720
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 635,
                              "end": 720
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 738,
                                "end": 742
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 743,
                                    "end": 748
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 768,
                                            "end": 773
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 774,
                                            "end": 780
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 768,
                                          "end": 780
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 768,
                                        "end": 782
                                      },
                                      "directive": null,
                                      "start": 768,
                                      "end": 783
                                    }
                                  ],
                                  "start": 750,
                                  "end": 797
                                },
                                "expression": false,
                                "start": 742,
                                "end": 797
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 734,
                              "end": 797
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 811,
                                "end": 813
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 845,
                                            "end": 850
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 851,
                                            "end": 857
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 845,
                                          "end": 857
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 845,
                                        "end": 859
                                      },
                                      "directive": null,
                                      "start": 845,
                                      "end": 860
                                    }
                                  ],
                                  "start": 827,
                                  "end": 874
                                },
                                "expression": false,
                                "start": 815,
                                "end": 874
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 811,
                              "end": 874
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 888,
                                "end": 890
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 901,
                                  "end": 902
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 923,
                                            "end": 928
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 929,
                                            "end": 935
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 923,
                                          "end": 935
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 923,
                                        "end": 937
                                      },
                                      "directive": null,
                                      "start": 923,
                                      "end": 938
                                    }
                                  ],
                                  "start": 905,
                                  "end": 952
                                },
                                "expression": false,
                                "start": 892,
                                "end": 952
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 888,
                              "end": 952
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "p3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 966,
                                "end": 968
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
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 994,
                                            "end": 999
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "method",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1000,
                                            "end": 1006
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 994,
                                          "end": 1006
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 994,
                                        "end": 1008
                                      },
                                      "directive": null,
                                      "start": 994,
                                      "end": 1009
                                    }
                                  ],
                                  "start": 976,
                                  "end": 1023
                                },
                                "id": null,
                                "generator": false,
                                "start": 970,
                                "end": 1023
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 966,
                              "end": 1023
                            }
                          ],
                          "start": 466,
                          "end": 1033
                        },
                        "definite": false,
                        "start": 460,
                        "end": 1033
                      }
                    ],
                    "declare": false,
                    "start": 456,
                    "end": 1034
                  }
                ],
                "start": 446,
                "end": 1040
              },
              "expression": false,
              "start": 443,
              "end": 1040
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 442,
            "end": 1040
          }
        ],
        "start": 436,
        "end": 1042
      },
      "abstract": false,
      "declare": false,
      "start": 418,
      "end": 1042
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1042
}
```
