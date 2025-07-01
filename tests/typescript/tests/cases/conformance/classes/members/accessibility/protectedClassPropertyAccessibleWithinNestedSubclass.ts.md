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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 14,
            "end": 34
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 39,
            "end": 66
          }
        ],
        "start": 8,
        "end": 68
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 68
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
        "start": 76,
        "end": 77
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 121,
                        "end": 125
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 127
                      },
                      "optional": false,
                      "computed": false,
                      "start": 121,
                      "end": 127
                    },
                    "start": 114,
                    "end": 128
                  }
                ],
                "start": 112,
                "end": 130
              },
              "expression": false,
              "start": 109,
              "end": 130
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 94,
            "end": 130
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 156,
                          "end": 160
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 161,
                          "end": 162
                        },
                        "optional": false,
                        "computed": false,
                        "start": 156,
                        "end": 162
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 165,
                          "end": 169
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 171
                        },
                        "optional": false,
                        "computed": false,
                        "start": 165,
                        "end": 171
                      },
                      "start": 156,
                      "end": 171
                    },
                    "directive": null,
                    "start": 156,
                    "end": 172
                  }
                ],
                "start": 154,
                "end": 174
              },
              "expression": false,
              "start": 150,
              "end": 174
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 135,
            "end": 174
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
              "start": 189,
              "end": 192
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 204,
                        "end": 208
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 210
                      },
                      "optional": false,
                      "computed": false,
                      "start": 204,
                      "end": 210
                    },
                    "start": 197,
                    "end": 211
                  }
                ],
                "start": 195,
                "end": 213
              },
              "expression": false,
              "start": 192,
              "end": 213
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 179,
            "end": 213
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 241
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 253,
                        "end": 257
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 259
                      },
                      "optional": false,
                      "computed": false,
                      "start": 253,
                      "end": 259
                    },
                    "start": 246,
                    "end": 260
                  }
                ],
                "start": 244,
                "end": 262
              },
              "expression": false,
              "start": 241,
              "end": 262
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 219,
            "end": 262
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 295,
                          "end": 299
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 301
                        },
                        "optional": false,
                        "computed": false,
                        "start": 295,
                        "end": 301
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 304,
                          "end": 308
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 309,
                          "end": 310
                        },
                        "optional": false,
                        "computed": false,
                        "start": 304,
                        "end": 310
                      },
                      "start": 295,
                      "end": 310
                    },
                    "directive": null,
                    "start": 295,
                    "end": 311
                  }
                ],
                "start": 293,
                "end": 313
              },
              "expression": false,
              "start": 289,
              "end": 313
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 267,
            "end": 313
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
              "start": 335,
              "end": 338
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 350,
                        "end": 354
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 356
                      },
                      "optional": false,
                      "computed": false,
                      "start": 350,
                      "end": 356
                    },
                    "start": 343,
                    "end": 357
                  }
                ],
                "start": 341,
                "end": 359
              },
              "expression": false,
              "start": 338,
              "end": 359
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 318,
            "end": 359
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 384
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
                          "type": "ThisExpression",
                          "start": 389,
                          "end": 393
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 397
                        },
                        "optional": false,
                        "computed": false,
                        "start": 389,
                        "end": 397
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 389,
                      "end": 399
                    },
                    "directive": null,
                    "start": 389,
                    "end": 400
                  }
                ],
                "start": 387,
                "end": 402
              },
              "expression": false,
              "start": 384,
              "end": 402
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 364,
            "end": 402
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 425
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 446
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
                            "start": 471,
                            "end": 474
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
                                        "name": "c",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 499,
                                        "end": 500
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 507,
                                          "end": 508
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 503,
                                        "end": 510
                                      },
                                      "definite": false,
                                      "start": 499,
                                      "end": 510
                                    }
                                  ],
                                  "declare": false,
                                  "start": 495,
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
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 532,
                                        "end": 534
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 537,
                                          "end": 538
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 539,
                                          "end": 540
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 537,
                                        "end": 540
                                      },
                                      "definite": false,
                                      "start": 532,
                                      "end": 540
                                    }
                                  ],
                                  "declare": false,
                                  "start": 528,
                                  "end": 541
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
                                        "name": "c2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 562,
                                        "end": 564
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 567,
                                          "end": 568
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
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
                                      "definite": false,
                                      "start": 562,
                                      "end": 570
                                    }
                                  ],
                                  "declare": false,
                                  "start": 558,
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
                                        "name": "c3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 592,
                                        "end": 594
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 597,
                                          "end": 598
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 599,
                                          "end": 602
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 597,
                                        "end": 602
                                      },
                                      "definite": false,
                                      "start": 592,
                                      "end": 602
                                    }
                                  ],
                                  "declare": false,
                                  "start": 588,
                                  "end": 603
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
                                        "name": "c4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 624,
                                        "end": 626
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 629,
                                          "end": 630
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 631,
                                          "end": 634
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 629,
                                        "end": 634
                                      },
                                      "definite": false,
                                      "start": 624,
                                      "end": 634
                                    }
                                  ],
                                  "declare": false,
                                  "start": 620,
                                  "end": 635
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
                                        "name": "c5",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 656,
                                        "end": 658
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 661,
                                          "end": 662
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "z",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 663,
                                          "end": 664
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 661,
                                        "end": 664
                                      },
                                      "definite": false,
                                      "start": 656,
                                      "end": 664
                                    }
                                  ],
                                  "declare": false,
                                  "start": 652,
                                  "end": 665
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
                                        "name": "sc1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 712,
                                        "end": 715
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 718,
                                          "end": 719
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 720,
                                          "end": 721
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 718,
                                        "end": 721
                                      },
                                      "definite": false,
                                      "start": 712,
                                      "end": 721
                                    }
                                  ],
                                  "declare": false,
                                  "start": 708,
                                  "end": 722
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
                                        "name": "sc2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 743,
                                        "end": 746
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 749,
                                          "end": 750
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 751,
                                          "end": 752
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 749,
                                        "end": 752
                                      },
                                      "definite": false,
                                      "start": 743,
                                      "end": 752
                                    }
                                  ],
                                  "declare": false,
                                  "start": 739,
                                  "end": 753
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
                                        "name": "sc3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 774,
                                        "end": 777
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 780,
                                          "end": 781
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 782,
                                          "end": 785
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 780,
                                        "end": 785
                                      },
                                      "definite": false,
                                      "start": 774,
                                      "end": 785
                                    }
                                  ],
                                  "declare": false,
                                  "start": 770,
                                  "end": 786
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
                                        "name": "sc4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 807,
                                        "end": 810
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 813,
                                          "end": 814
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 815,
                                          "end": 818
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 813,
                                        "end": 818
                                      },
                                      "definite": false,
                                      "start": 807,
                                      "end": 818
                                    }
                                  ],
                                  "declare": false,
                                  "start": 803,
                                  "end": 819
                                }
                              ],
                              "start": 477,
                              "end": 833
                            },
                            "expression": false,
                            "start": 474,
                            "end": 833
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "protected",
                          "start": 461,
                          "end": 833
                        }
                      ],
                      "start": 447,
                      "end": 843
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 439,
                    "end": 843
                  }
                ],
                "start": 428,
                "end": 849
              },
              "expression": false,
              "start": 425,
              "end": 849
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 412,
            "end": 849
          }
        ],
        "start": 88,
        "end": 851
      },
      "abstract": false,
      "declare": false,
      "start": 70,
      "end": 851
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 860
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 870
      },
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 890,
                "end": 896
              },
              "start": 888,
              "end": 896
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 877,
            "end": 897
          }
        ],
        "start": 871,
        "end": 899
      },
      "abstract": false,
      "declare": false,
      "start": 853,
      "end": 899
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 899
}
```
