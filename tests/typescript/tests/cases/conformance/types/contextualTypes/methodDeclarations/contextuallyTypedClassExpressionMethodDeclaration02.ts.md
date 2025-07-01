__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "numProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 34
          }
        ],
        "start": 12,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 73
          }
        ],
        "start": 51,
        "end": 75
      },
      "declare": false,
      "start": 38,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 108
                },
                "typeArguments": null,
                "start": 105,
                "end": 108
              },
              "start": 103,
              "end": 108
            },
            "start": 97,
            "end": 109
          }
        ],
        "start": 91,
        "end": 111
      },
      "declare": false,
      "start": 77,
      "end": 111
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 140
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "typeArguments": null,
                    "start": 146,
                    "end": 147
                  },
                  "start": 144,
                  "end": 147
                },
                "start": 141,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 150,
                "end": 154
              },
              "start": 148,
              "end": 154
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 133,
            "end": 155
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 167
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 174
                  },
                  "start": 171,
                  "end": 174
                },
                "start": 168,
                "end": 174
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 177,
                "end": 181
              },
              "start": 175,
              "end": 181
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 160,
            "end": 182
          }
        ],
        "start": 127,
        "end": 184
      },
      "declare": false,
      "start": 113,
      "end": 184
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 202
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 209
          },
          "typeArguments": null,
          "start": 206,
          "end": 209
        },
        "start": 204,
        "end": 209
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 246
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 250
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 269
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 270,
                                  "end": 277
                                },
                                "optional": false,
                                "computed": false,
                                "start": 266,
                                "end": 277
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 280,
                                "end": 282
                              },
                              "start": 266,
                              "end": 282
                            },
                            "directive": null,
                            "start": 266,
                            "end": 283
                          }
                        ],
                        "start": 252,
                        "end": 293
                      },
                      "expression": false,
                      "start": 246,
                      "end": 293
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 239,
                    "end": 293
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 309
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 313
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 329,
                                  "end": 332
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 333,
                                  "end": 340
                                },
                                "optional": false,
                                "computed": false,
                                "start": 329,
                                "end": 340
                              },
                              "right": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 343,
                                "end": 350
                              },
                              "start": 329,
                              "end": 350
                            },
                            "directive": null,
                            "start": 329,
                            "end": 351
                          }
                        ],
                        "start": 315,
                        "end": 361
                      },
                      "expression": false,
                      "start": 309,
                      "end": 361
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 302,
                    "end": 361
                  }
                ],
                "start": 229,
                "end": 367
              },
              "abstract": false,
              "declare": false,
              "start": 223,
              "end": 367
            },
            "start": 216,
            "end": 367
          }
        ],
        "start": 210,
        "end": 369
      },
      "expression": false,
      "start": 186,
      "end": 369
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 394
          },
          "typeArguments": null,
          "start": 391,
          "end": 394
        },
        "start": 389,
        "end": 394
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 431
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 435,
                          "end": 438
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 457,
                                  "end": 460
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 461,
                                  "end": 468
                                },
                                "optional": false,
                                "computed": false,
                                "start": 457,
                                "end": 468
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 471,
                                "end": 473
                              },
                              "start": 457,
                              "end": 473
                            },
                            "directive": null,
                            "start": 457,
                            "end": 474
                          }
                        ],
                        "start": 443,
                        "end": 484
                      },
                      "id": null,
                      "generator": false,
                      "start": 434,
                      "end": 484
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 424,
                    "end": 484
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 500
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 504,
                          "end": 507
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 526,
                                  "end": 529
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 530,
                                  "end": 537
                                },
                                "optional": false,
                                "computed": false,
                                "start": 526,
                                "end": 537
                              },
                              "right": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 540,
                                "end": 547
                              },
                              "start": 526,
                              "end": 547
                            },
                            "directive": null,
                            "start": 526,
                            "end": 548
                          }
                        ],
                        "start": 512,
                        "end": 558
                      },
                      "id": null,
                      "generator": false,
                      "start": 503,
                      "end": 558
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 493,
                    "end": 558
                  }
                ],
                "start": 414,
                "end": 564
              },
              "abstract": false,
              "declare": false,
              "start": 408,
              "end": 564
            },
            "start": 401,
            "end": 564
          }
        ],
        "start": 395,
        "end": 566
      },
      "expression": false,
      "start": 371,
      "end": 566
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 584
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 591
          },
          "typeArguments": null,
          "start": 588,
          "end": 591
        },
        "start": 586,
        "end": 591
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 628
                    },
                    "typeAnnotation": null,
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 641,
                          "end": 644
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 660,
                                  "end": 663
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 664,
                                  "end": 671
                                },
                                "optional": false,
                                "computed": false,
                                "start": 660,
                                "end": 671
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 674,
                                "end": 676
                              },
                              "start": 660,
                              "end": 676
                            },
                            "directive": null,
                            "start": 660,
                            "end": 677
                          }
                        ],
                        "start": 646,
                        "end": 687
                      },
                      "expression": false,
                      "start": 631,
                      "end": 687
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 621,
                    "end": 687
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 703
                    },
                    "typeAnnotation": null,
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 719
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 735,
                                  "end": 738
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 739,
                                  "end": 746
                                },
                                "optional": false,
                                "computed": false,
                                "start": 735,
                                "end": 746
                              },
                              "right": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 749,
                                "end": 756
                              },
                              "start": 735,
                              "end": 756
                            },
                            "directive": null,
                            "start": 735,
                            "end": 757
                          }
                        ],
                        "start": 721,
                        "end": 767
                      },
                      "expression": false,
                      "start": 706,
                      "end": 767
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 696,
                    "end": 767
                  }
                ],
                "start": 611,
                "end": 773
              },
              "abstract": false,
              "declare": false,
              "start": 605,
              "end": 773
            },
            "start": 598,
            "end": 773
          }
        ],
        "start": 592,
        "end": 775
      },
      "expression": false,
      "start": 568,
      "end": 775
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 775
}
```
