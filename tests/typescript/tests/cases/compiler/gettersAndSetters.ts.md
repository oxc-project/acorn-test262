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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
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
              "name": "fooBack",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 42,
              "end": 44
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 25,
            "end": 45
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "barBack",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              },
              "start": 64,
              "end": 71
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 74,
              "end": 76
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 77
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bazBack",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 96
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 99,
              "end": 101
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 82,
            "end": 102
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 126
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
                        "start": 138,
                        "end": 142
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fooBack",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 150
                      },
                      "optional": false,
                      "computed": false,
                      "start": 138,
                      "end": 150
                    },
                    "start": 131,
                    "end": 151
                  }
                ],
                "start": 129,
                "end": 152
              },
              "expression": false,
              "start": 126,
              "end": 152
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 112,
            "end": 152
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 182,
                      "end": 188
                    },
                    "start": 181,
                    "end": 188
                  },
                  "start": 178,
                  "end": 188
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
                          "start": 191,
                          "end": 195
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fooBack",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 203
                        },
                        "optional": false,
                        "computed": false,
                        "start": 191,
                        "end": 203
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 209
                      },
                      "start": 191,
                      "end": 209
                    },
                    "directive": null,
                    "start": 191,
                    "end": 210
                  }
                ],
                "start": 190,
                "end": 211
              },
              "expression": false,
              "start": 177,
              "end": 211
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 163,
            "end": 211
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 249
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "barBack",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 257
                      },
                      "optional": false,
                      "computed": false,
                      "start": 248,
                      "end": 257
                    },
                    "start": 241,
                    "end": 258
                  }
                ],
                "start": 240,
                "end": 259
              },
              "expression": false,
              "start": 237,
              "end": 259
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 223,
            "end": 259
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 284
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 289,
                      "end": 295
                    },
                    "start": 288,
                    "end": 295
                  },
                  "start": 285,
                  "end": 295
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
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 299
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "barBack",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 307
                        },
                        "optional": false,
                        "computed": false,
                        "start": 298,
                        "end": 307
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 313
                      },
                      "start": 298,
                      "end": 313
                    },
                    "directive": null,
                    "start": 298,
                    "end": 314
                  }
                ],
                "start": 297,
                "end": 315
              },
              "expression": false,
              "start": 284,
              "end": 315
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 270,
            "end": 315
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 337
            },
            "typeAnnotation": null,
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
                "start": 351,
                "end": 353
              },
              "expression": false,
              "start": 340,
              "end": 353
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 327,
            "end": 353
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 374
            },
            "typeAnnotation": null,
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
                "start": 388,
                "end": 390
              },
              "expression": false,
              "start": 377,
              "end": 390
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 364,
            "end": 390
          }
        ],
        "start": 19,
        "end": 398
      },
      "abstract": false,
      "declare": false,
      "start": 11,
      "end": 398
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 413
            },
            "typeArguments": null,
            "arguments": [],
            "start": 408,
            "end": 415
          },
          "definite": false,
          "start": 404,
          "end": 415
        }
      ],
      "declare": false,
      "start": 400,
      "end": 416
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 425
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 433
            },
            "optional": false,
            "computed": false,
            "start": 428,
            "end": 433
          },
          "definite": false,
          "start": 422,
          "end": 433
        }
      ],
      "declare": false,
      "start": 418,
      "end": 434
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 436
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 440
          },
          "optional": false,
          "computed": false,
          "start": 435,
          "end": 440
        },
        "right": {
          "type": "Literal",
          "value": "foov",
          "raw": "\"foov\"",
          "start": 443,
          "end": 449
        },
        "start": 435,
        "end": 449
      },
      "directive": null,
      "start": 435,
      "end": 450
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 459
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 463
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 467
            },
            "optional": false,
            "computed": false,
            "start": 462,
            "end": 467
          },
          "definite": false,
          "start": 456,
          "end": 467
        }
      ],
      "declare": false,
      "start": 452,
      "end": 468
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 470
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 474
          },
          "optional": false,
          "computed": false,
          "start": 469,
          "end": 474
        },
        "right": {
          "type": "Literal",
          "value": "barv",
          "raw": "\"barv\"",
          "start": 477,
          "end": 483
        },
        "start": 469,
        "end": 483
      },
      "directive": null,
      "start": 469,
      "end": 484
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
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 493
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 497
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 501
            },
            "optional": false,
            "computed": false,
            "start": 496,
            "end": 501
          },
          "definite": false,
          "start": 490,
          "end": 501
        }
      ],
      "declare": false,
      "start": 486,
      "end": 502
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 508
          },
          "optional": false,
          "computed": false,
          "start": 503,
          "end": 508
        },
        "right": {
          "type": "Literal",
          "value": "bazv",
          "raw": "\"bazv\"",
          "start": 511,
          "end": 517
        },
        "start": 503,
        "end": 517
      },
      "directive": null,
      "start": 503,
      "end": 518
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 623
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 624,
                        "end": 630
                      },
                      "start": 623,
                      "end": 630
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 620,
                    "end": 631
                  }
                ],
                "start": 619,
                "end": 632
              },
              "start": 617,
              "end": 632
            },
            "start": 615,
            "end": 632
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 654,
                          "end": 655
                        },
                        "start": 647,
                        "end": 656
                      }
                    ],
                    "start": 646,
                    "end": 657
                  },
                  "expression": false,
                  "start": 643,
                  "end": 657
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 636,
                "end": 657
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 666
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
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 671,
                          "end": 677
                        },
                        "start": 670,
                        "end": 677
                      },
                      "start": 667,
                      "end": 677
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 682
                        },
                        "directive": null,
                        "start": 679,
                        "end": 682
                      }
                    ],
                    "start": 678,
                    "end": 683
                  },
                  "expression": false,
                  "start": 666,
                  "end": 683
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 659,
                "end": 683
              }
            ],
            "start": 635,
            "end": 684
          },
          "definite": false,
          "start": 615,
          "end": 684
        }
      ],
      "declare": false,
      "start": 611,
      "end": 685
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
            "name": "ofg",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 699
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 703
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 707
            },
            "optional": false,
            "computed": false,
            "start": 702,
            "end": 707
          },
          "definite": false,
          "start": 696,
          "end": 707
        }
      ],
      "declare": false,
      "start": 692,
      "end": 708
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 709,
            "end": 710
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 714
          },
          "optional": false,
          "computed": false,
          "start": 709,
          "end": 714
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 717,
          "end": 718
        },
        "start": 709,
        "end": 718
      },
      "directive": null,
      "start": 709,
      "end": 719
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 734
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 744,
                    "end": 750
                  },
                  "start": 743,
                  "end": 750
                },
                "start": 742,
                "end": 750
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 752,
                "end": 758
              },
              "start": 751,
              "end": 758
            },
            "start": 741,
            "end": 759
          }
        ],
        "start": 735,
        "end": 761
      },
      "declare": false,
      "start": 722,
      "end": 761
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 771
                },
                "typeArguments": null,
                "start": 769,
                "end": 771
              },
              "start": 768,
              "end": 771
            },
            "start": 767,
            "end": 771
          },
          "init": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
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
                    "start": 795,
                    "end": 796
                  },
                  "start": 788,
                  "end": 797
                }
              ],
              "start": 787,
              "end": 798
            },
            "expression": false,
            "start": 774,
            "end": 798
          },
          "definite": false,
          "start": 767,
          "end": 798
        }
      ],
      "declare": false,
      "start": 763,
      "end": 798
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 830,
                    "end": 836
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 839,
                    "end": 845
                  }
                ],
                "start": 830,
                "end": 845
              },
              "start": 828,
              "end": 845
            },
            "start": 827,
            "end": 845
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 848,
                    "end": 852
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 853,
                    "end": 859
                  },
                  "optional": false,
                  "computed": false,
                  "start": 848,
                  "end": 859
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 848,
                "end": 861
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 864,
                "end": 867
              },
              "start": 848,
              "end": 867
            },
            "consequent": {
              "type": "Literal",
              "value": "str",
              "raw": "\"str\"",
              "start": 870,
              "end": 875
            },
            "alternate": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 878,
              "end": 881
            },
            "start": 848,
            "end": 881
          },
          "definite": false,
          "start": 827,
          "end": 881
        }
      ],
      "declare": false,
      "start": 821,
      "end": 882
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 894,
            "end": 895
          },
          "prefix": true,
          "start": 887,
          "end": 895
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 900,
          "end": 908
        },
        "start": 887,
        "end": 908
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 918,
                  "end": 921
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 934,
                        "end": 938
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
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 942,
                                "end": 945
                              },
                              "start": 940,
                              "end": 945
                            },
                            "start": 939,
                            "end": 945
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 949,
                                    "end": 950
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 951,
                                    "end": 962
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 949,
                                  "end": 962
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 949,
                                "end": 964
                              },
                              "directive": null,
                              "start": 949,
                              "end": 965
                            }
                          ],
                          "start": 947,
                          "end": 967
                        },
                        "expression": false,
                        "start": 938,
                        "end": 967
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 930,
                      "end": 967
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
                        "start": 977,
                        "end": 981
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 993,
                                    "end": 994
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 995,
                                    "end": 1006
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 993,
                                  "end": 1006
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 993,
                                "end": 1008
                              },
                              "start": 986,
                              "end": 1008
                            }
                          ],
                          "start": 984,
                          "end": 1010
                        },
                        "expression": false,
                        "start": 981,
                        "end": 1010
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 973,
                      "end": 1010
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
                        "start": 1016,
                        "end": 1022
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1034,
                                    "end": 1035
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1036,
                                    "end": 1047
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1034,
                                  "end": 1047
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1034,
                                "end": 1049
                              },
                              "start": 1027,
                              "end": 1049
                            }
                          ],
                          "start": 1025,
                          "end": 1051
                        },
                        "expression": false,
                        "start": 1022,
                        "end": 1051
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1016,
                      "end": 1051
                    }
                  ],
                  "start": 924,
                  "end": 1055
                },
                "definite": false,
                "start": 918,
                "end": 1055
              }
            ],
            "declare": false,
            "start": 914,
            "end": 1055
          }
        ],
        "start": 910,
        "end": 1057
      },
      "alternate": null,
      "start": 883,
      "end": 1057
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 1057
}
```
