__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 30,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 38,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 47,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 67,
    "end": 68
  },
  {
    "type": "Null",
    "value": "null",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumberOrNull",
    "start": 92,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 135,
    "end": 136
  },
  {
    "type": "Null",
    "value": "null",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178
  },
  {
    "type": "Null",
    "value": "null",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 200,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 216,
    "end": 219
  },
  {
    "type": "Null",
    "value": "null",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 258,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 292,
    "end": 293
  },
  {
    "type": "Null",
    "value": "null",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 318,
    "end": 319
  },
  {
    "type": "Null",
    "value": "null",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 342,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 371,
    "end": 374
  },
  {
    "type": "Null",
    "value": "null",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 479,
    "end": 480
  },
  {
    "type": "Null",
    "value": "null",
    "start": 481,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 502,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 518,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 558,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 601,
    "end": 602
  },
  {
    "type": "Null",
    "value": "null",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumberOrNull",
    "start": 629,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 656,
    "end": 659
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 660,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 713,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "re",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "RegularExpression",
    "value": "/./g",
    "regex": {
      "flags": "g",
      "pattern": "."
    },
    "start": 724,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 729,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 733,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "RegExpExecArray",
    "start": 740,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 756,
    "end": 757
  },
  {
    "type": "Null",
    "value": "null",
    "start": 758,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 764,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "re",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "exec",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "String",
    "value": "\"xxx\"",
    "start": 788,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 796,
    "end": 798
  },
  {
    "type": "Null",
    "value": "null",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 811,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 817,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 826,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 831,
    "end": 832
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 835,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 844,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 849,
    "end": 850
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861
  }
]
```
