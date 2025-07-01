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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 16,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
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
            "start": 16,
            "end": 26
          }
        ],
        "start": 10,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFooOrNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 66
              },
              "typeArguments": null,
              "start": 63,
              "end": 66
            },
            {
              "type": "TSNullKeyword",
              "start": 69,
              "end": 73
            }
          ],
          "start": 63,
          "end": 73
        },
        "start": 61,
        "end": 73
      },
      "body": null,
      "expression": false,
      "start": 30,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStringOrNumberOrNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 115
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            {
              "type": "TSNumberKeyword",
              "start": 128,
              "end": 134
            },
            {
              "type": "TSNullKeyword",
              "start": 137,
              "end": 141
            }
          ],
          "start": 119,
          "end": 141
        },
        "start": 117,
        "end": 141
      },
      "body": null,
      "expression": false,
      "start": 75,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 155
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 176
                          },
                          "typeArguments": null,
                          "start": 173,
                          "end": 176
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 179,
                          "end": 183
                        }
                      ],
                      "start": 173,
                      "end": 183
                    },
                    "start": 171,
                    "end": 183
                  },
                  "start": 168,
                  "end": 183
                },
                "init": null,
                "definite": false,
                "start": 168,
                "end": 183
              }
            ],
            "declare": false,
            "start": 164,
            "end": 184
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 197
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 212
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 200,
                  "end": 214
                },
                "start": 194,
                "end": 214
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 220,
                "end": 224
              },
              "start": 193,
              "end": 224
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 239
                  },
                  "directive": null,
                  "start": 236,
                  "end": 240
                }
              ],
              "start": 226,
              "end": 254
            },
            "alternate": null,
            "start": 189,
            "end": 254
          }
        ],
        "start": 158,
        "end": 256
      },
      "expression": false,
      "start": 144,
      "end": 256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 269
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 288,
                            "end": 291
                          },
                          "typeArguments": null,
                          "start": 288,
                          "end": 291
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 294,
                          "end": 298
                        }
                      ],
                      "start": 288,
                      "end": 298
                    },
                    "start": 286,
                    "end": 298
                  },
                  "start": 282,
                  "end": 298
                },
                "init": null,
                "definite": false,
                "start": 282,
                "end": 298
              }
            ],
            "declare": false,
            "start": 278,
            "end": 299
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 317
                          },
                          "typeArguments": null,
                          "start": 314,
                          "end": 317
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 320,
                          "end": 324
                        }
                      ],
                      "start": 314,
                      "end": 324
                    },
                    "start": 312,
                    "end": 324
                  },
                  "start": 308,
                  "end": 324
                },
                "init": null,
                "definite": false,
                "start": 308,
                "end": 324
              }
            ],
            "declare": false,
            "start": 304,
            "end": 325
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 339
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getFooOrNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 342,
                        "end": 354
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 342,
                      "end": 356
                    },
                    "start": 335,
                    "end": 356
                  },
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 362
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 369
                    },
                    "start": 358,
                    "end": 369
                  }
                ],
                "start": 335,
                "end": 369
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 375,
                "end": 379
              },
              "start": 334,
              "end": 379
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 395
                  },
                  "directive": null,
                  "start": 391,
                  "end": 396
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 424
                  },
                  "directive": null,
                  "start": 420,
                  "end": 425
                }
              ],
              "start": 381,
              "end": 439
            },
            "alternate": null,
            "start": 330,
            "end": 439
          }
        ],
        "start": 272,
        "end": 441
      },
      "expression": false,
      "start": 258,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 454
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 472,
                            "end": 478
                          },
                          "typeArguments": null,
                          "start": 472,
                          "end": 478
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 481,
                          "end": 485
                        }
                      ],
                      "start": 472,
                      "end": 485
                    },
                    "start": 470,
                    "end": 485
                  },
                  "start": 467,
                  "end": 485
                },
                "init": null,
                "definite": false,
                "start": 467,
                "end": 485
              }
            ],
            "declare": false,
            "start": 463,
            "end": 486
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 499
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 514
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 502,
                  "end": 516
                },
                "start": 496,
                "end": 516
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 532
              },
              "start": 495,
              "end": 532
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 547
                  },
                  "directive": null,
                  "start": 544,
                  "end": 548
                }
              ],
              "start": 534,
              "end": 554
            },
            "alternate": null,
            "start": 491,
            "end": 554
          }
        ],
        "start": 457,
        "end": 556
      },
      "expression": false,
      "start": 443,
      "end": 556
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 569
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
            "kind": "let",
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
                          "start": 585,
                          "end": 591
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 594,
                          "end": 600
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 603,
                          "end": 607
                        }
                      ],
                      "start": 585,
                      "end": 607
                    },
                    "start": 583,
                    "end": 607
                  },
                  "start": 582,
                  "end": 607
                },
                "init": null,
                "definite": false,
                "start": 582,
                "end": 607
              }
            ],
            "declare": false,
            "start": 578,
            "end": 608
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 626
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getStringOrNumberOrNull",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 629,
                      "end": 652
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 629,
                    "end": 654
                  },
                  "start": 625,
                  "end": 654
                },
                "prefix": true,
                "start": 617,
                "end": 655
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 660,
                "end": 668
              },
              "start": 617,
              "end": 668
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 681
                  },
                  "directive": null,
                  "start": 680,
                  "end": 682
                }
              ],
              "start": 670,
              "end": 688
            },
            "alternate": null,
            "start": 613,
            "end": 688
          }
        ],
        "start": 572,
        "end": 690
      },
      "expression": false,
      "start": 558,
      "end": 690
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
            "name": "re",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 721
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/./g",
            "regex": {
              "pattern": ".",
              "flags": "g"
            },
            "start": 724,
            "end": 728
          },
          "definite": false,
          "start": 719,
          "end": 728
        }
      ],
      "declare": false,
      "start": 713,
      "end": 728
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "match",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExpExecArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 755
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 755
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 758,
                    "end": 762
                  }
                ],
                "start": 740,
                "end": 762
              },
              "start": 738,
              "end": 762
            },
            "start": 733,
            "end": 762
          },
          "init": null,
          "definite": false,
          "start": 733,
          "end": 762
        }
      ],
      "declare": false,
      "start": 729,
      "end": 762
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "match",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 777
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "re",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 782
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exec",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 787
              },
              "optional": false,
              "computed": false,
              "start": 780,
              "end": 787
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "xxx",
                "raw": "\"xxx\"",
                "start": 788,
                "end": 793
              }
            ],
            "optional": false,
            "start": 780,
            "end": 794
          },
          "start": 772,
          "end": 794
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 799,
          "end": 803
        },
        "start": 771,
        "end": 803
      },
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
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 817,
                  "end": 823
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 831
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 832,
                        "end": 833
                      },
                      "optional": false,
                      "computed": true,
                      "start": 826,
                      "end": 834
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 835,
                      "end": 841
                    },
                    "optional": false,
                    "computed": false,
                    "start": 826,
                    "end": 841
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 844,
                        "end": 849
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 850,
                        "end": 851
                      },
                      "optional": false,
                      "computed": true,
                      "start": 844,
                      "end": 852
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 853,
                      "end": 859
                    },
                    "optional": false,
                    "computed": false,
                    "start": 844,
                    "end": 859
                  },
                  "start": 826,
                  "end": 859
                },
                "definite": false,
                "start": 817,
                "end": 859
              }
            ],
            "declare": false,
            "start": 811,
            "end": 859
          }
        ],
        "start": 805,
        "end": 861
      },
      "start": 764,
      "end": 861
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 861
}
```
