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
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
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
                  "start": 129,
                  "end": 135
                },
                "start": 127,
                "end": 135
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 145,
                      "end": 147
                    },
                    "start": 138,
                    "end": 148
                  }
                ],
                "start": 136,
                "end": 150
              },
              "expression": false,
              "start": 125,
              "end": 150
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 116,
            "end": 150
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 162
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 166,
                          "end": 172
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 175,
                          "end": 181
                        }
                      ],
                      "start": 166,
                      "end": 181
                    },
                    "start": 164,
                    "end": 181
                  },
                  "start": 163,
                  "end": 181
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 183,
                "end": 186
              },
              "expression": false,
              "start": 162,
              "end": 186
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 153,
            "end": 186
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 190,
            "end": 204
          }
        ],
        "start": 112,
        "end": 206
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 206
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 217
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 231
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 235,
                    "end": 242
                  },
                  "start": 235,
                  "end": 242
                },
                "start": 233,
                "end": 242
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 252,
                      "end": 259
                    },
                    "start": 245,
                    "end": 260
                  }
                ],
                "start": 243,
                "end": 262
              },
              "expression": false,
              "start": 231,
              "end": 262
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 262
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 274
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 278,
                            "end": 285
                          },
                          "start": 278,
                          "end": 285
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 288,
                          "end": 294
                        }
                      ],
                      "start": 278,
                      "end": 294
                    },
                    "start": 276,
                    "end": 294
                  },
                  "start": 275,
                  "end": 294
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 296,
                "end": 299
              },
              "expression": false,
              "start": 274,
              "end": 299
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 299
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 312
            },
            "value": {
              "type": "FunctionExpression",
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
                  "start": 316,
                  "end": 322
                },
                "start": 314,
                "end": 322
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 332,
                      "end": 334
                    },
                    "start": 325,
                    "end": 335
                  }
                ],
                "start": 323,
                "end": 337
              },
              "expression": false,
              "start": 312,
              "end": 337
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 303,
            "end": 337
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 349
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 353,
                          "end": 359
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 362,
                            "end": 364
                          },
                          "start": 362,
                          "end": 364
                        }
                      ],
                      "start": 353,
                      "end": 364
                    },
                    "start": 351,
                    "end": 364
                  },
                  "start": 350,
                  "end": 364
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 366,
                "end": 369
              },
              "expression": false,
              "start": 349,
              "end": 369
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 340,
            "end": 369
          }
        ],
        "start": 218,
        "end": 372
      },
      "abstract": false,
      "declare": false,
      "start": 208,
      "end": 372
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 385
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 399
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 403,
                    "end": 410
                  },
                  "start": 403,
                  "end": 410
                },
                "start": 401,
                "end": 410
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 420,
                      "end": 427
                    },
                    "start": 413,
                    "end": 428
                  }
                ],
                "start": 411,
                "end": 430
              },
              "expression": false,
              "start": 399,
              "end": 430
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 390,
            "end": 430
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 442
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 446,
                            "end": 453
                          },
                          "start": 446,
                          "end": 453
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 456,
                          "end": 463
                        }
                      ],
                      "start": 446,
                      "end": 463
                    },
                    "start": 444,
                    "end": 463
                  },
                  "start": 443,
                  "end": 463
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 465,
                "end": 468
              },
              "expression": false,
              "start": 442,
              "end": 468
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 433,
            "end": 468
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 481
            },
            "value": {
              "type": "FunctionExpression",
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
                  "start": 485,
                  "end": 491
                },
                "start": 483,
                "end": 491
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 501,
                      "end": 503
                    },
                    "start": 494,
                    "end": 504
                  }
                ],
                "start": 492,
                "end": 506
              },
              "expression": false,
              "start": 481,
              "end": 506
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 472,
            "end": 506
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 518
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 522,
                          "end": 528
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 531,
                          "end": 537
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 540,
                          "end": 547
                        }
                      ],
                      "start": 522,
                      "end": 547
                    },
                    "start": 520,
                    "end": 547
                  },
                  "start": 519,
                  "end": 547
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 549,
                "end": 552
              },
              "expression": false,
              "start": 518,
              "end": 552
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 509,
            "end": 552
          }
        ],
        "start": 386,
        "end": 554
      },
      "abstract": false,
      "declare": false,
      "start": 374,
      "end": 554
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 576
                    },
                    "typeArguments": null,
                    "start": 573,
                    "end": 576
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 579,
                      "end": 582
                    },
                    "typeArguments": null,
                    "start": 579,
                    "end": 582
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 590
                    },
                    "typeArguments": null,
                    "start": 585,
                    "end": 590
                  }
                ],
                "start": 573,
                "end": 590
              },
              "start": 571,
              "end": 590
            },
            "start": 570,
            "end": 590
          },
          "init": null,
          "definite": false,
          "start": 570,
          "end": 590
        }
      ],
      "declare": true,
      "start": 556,
      "end": 591
    },
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 605
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 611
          },
          "optional": false,
          "computed": false,
          "start": 604,
          "end": 611
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 614,
          "end": 616
        },
        "start": 604,
        "end": 616
      },
      "directive": null,
      "start": 604,
      "end": 617
    },
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 627,
            "end": 628
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 634
          },
          "optional": false,
          "computed": false,
          "start": 627,
          "end": 634
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 637,
          "end": 644
        },
        "start": 627,
        "end": 644
      },
      "directive": null,
      "start": 627,
      "end": 645
    },
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 660
          },
          "optional": false,
          "computed": false,
          "start": 653,
          "end": 660
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 663,
          "end": 665
        },
        "start": 653,
        "end": 665
      },
      "directive": null,
      "start": 653,
      "end": 666
    },
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 667,
            "end": 668
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 674
          },
          "optional": false,
          "computed": false,
          "start": 667,
          "end": 674
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 677,
          "end": 684
        },
        "start": 667,
        "end": 684
      },
      "directive": null,
      "start": 667,
      "end": 685
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 694
}
```
