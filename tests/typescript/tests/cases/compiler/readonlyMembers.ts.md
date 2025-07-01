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
        "name": "X",
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 62
          }
        ],
        "start": 12,
        "end": 64
      },
      "declare": false,
      "start": 0,
      "end": 64
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "typeArguments": null,
                "start": 72,
                "end": 73
              },
              "start": 70,
              "end": 73
            },
            "start": 69,
            "end": 73
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
                  "start": 78,
                  "end": 79
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 81,
                  "end": 82
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 78,
                "end": 82
              }
            ],
            "start": 76,
            "end": 84
          },
          "definite": false,
          "start": 69,
          "end": 84
        }
      ],
      "declare": false,
      "start": 65,
      "end": 85
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 89
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 92,
          "end": 93
        },
        "start": 86,
        "end": 93
      },
      "directive": null,
      "start": 86,
      "end": 94
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 108
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 111,
          "end": 112
        },
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 113
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
        "start": 131,
        "end": 132
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
              "start": 148,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 151,
                "end": 157
              },
              "start": 149,
              "end": 157
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 139,
            "end": 158
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 176,
              "end": 177
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 163,
            "end": 178
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
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
                      "start": 200,
                      "end": 201
                    },
                    "start": 193,
                    "end": 201
                  }
                ],
                "start": 191,
                "end": 203
              },
              "expression": false,
              "start": 188,
              "end": 203
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 183,
            "end": 203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 219
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 232,
                          "end": 236
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 238
                        },
                        "optional": false,
                        "computed": false,
                        "start": 232,
                        "end": 238
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 241,
                        "end": 242
                      },
                      "start": 232,
                      "end": 242
                    },
                    "directive": null,
                    "start": 232,
                    "end": 243
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 259,
                          "end": 263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 264,
                          "end": 265
                        },
                        "optional": false,
                        "computed": false,
                        "start": 259,
                        "end": 265
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 268,
                        "end": 269
                      },
                      "start": 259,
                      "end": 269
                    },
                    "directive": null,
                    "start": 259,
                    "end": 270
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 286,
                          "end": 290
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 291,
                          "end": 292
                        },
                        "optional": false,
                        "computed": false,
                        "start": 286,
                        "end": 292
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 295,
                        "end": 296
                      },
                      "start": 286,
                      "end": 296
                    },
                    "directive": null,
                    "start": 286,
                    "end": 297
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
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 323
                        },
                        "init": {
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
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 346,
                                      "end": 350
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 351,
                                      "end": 352
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 346,
                                    "end": 352
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 355,
                                    "end": 356
                                  },
                                  "start": 346,
                                  "end": 356
                                },
                                "directive": null,
                                "start": 346,
                                "end": 357
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 380,
                                      "end": 384
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 385,
                                      "end": 386
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 380,
                                    "end": 386
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 389,
                                    "end": 390
                                  },
                                  "start": 380,
                                  "end": 390
                                },
                                "directive": null,
                                "start": 380,
                                "end": 391
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 414,
                                      "end": 418
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 419,
                                      "end": 420
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 414,
                                    "end": 420
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 423,
                                    "end": 424
                                  },
                                  "start": 414,
                                  "end": 424
                                },
                                "directive": null,
                                "start": 414,
                                "end": 425
                              }
                            ],
                            "start": 332,
                            "end": 445
                          },
                          "id": null,
                          "generator": false,
                          "start": 326,
                          "end": 445
                        },
                        "definite": false,
                        "start": 322,
                        "end": 445
                      }
                    ],
                    "declare": false,
                    "start": 316,
                    "end": 446
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 476,
                                    "end": 480
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 481,
                                    "end": 482
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 476,
                                  "end": 482
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 485,
                                  "end": 486
                                },
                                "start": 476,
                                "end": 486
                              },
                              "directive": null,
                              "start": 476,
                              "end": 487
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 507,
                                    "end": 511
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 512,
                                    "end": 513
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 507,
                                  "end": 513
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 516,
                                  "end": 517
                                },
                                "start": 507,
                                "end": 517
                              },
                              "directive": null,
                              "start": 507,
                              "end": 518
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 538,
                                    "end": 542
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 543,
                                    "end": 544
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 538,
                                  "end": 544
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 547,
                                  "end": 548
                                },
                                "start": 538,
                                "end": 548
                              },
                              "directive": null,
                              "start": 538,
                              "end": 549
                            }
                          ],
                          "start": 462,
                          "end": 569
                        },
                        "id": null,
                        "generator": false,
                        "start": 456,
                        "end": 569
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 455,
                      "end": 572
                    },
                    "directive": null,
                    "start": 455,
                    "end": 573
                  }
                ],
                "start": 222,
                "end": 579
              },
              "expression": false,
              "start": 219,
              "end": 579
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 208,
            "end": 579
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
              "start": 584,
              "end": 587
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 600,
                          "end": 604
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 600,
                        "end": 606
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 609,
                        "end": 610
                      },
                      "start": 600,
                      "end": 610
                    },
                    "directive": null,
                    "start": 600,
                    "end": 611
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 630,
                          "end": 634
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 635,
                          "end": 636
                        },
                        "optional": false,
                        "computed": false,
                        "start": 630,
                        "end": 636
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 639,
                        "end": 640
                      },
                      "start": 630,
                      "end": 640
                    },
                    "directive": null,
                    "start": 630,
                    "end": 641
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 660,
                          "end": 664
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
                        "optional": false,
                        "computed": false,
                        "start": 660,
                        "end": 666
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 669,
                        "end": 670
                      },
                      "start": 660,
                      "end": 670
                    },
                    "directive": null,
                    "start": 660,
                    "end": 671
                  }
                ],
                "start": 590,
                "end": 687
              },
              "expression": false,
              "start": 587,
              "end": 687
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 584,
            "end": 687
          }
        ],
        "start": 133,
        "end": 689
      },
      "abstract": false,
      "declare": false,
      "start": 125,
      "end": 689
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
            "typeAnnotation": null,
            "start": 695,
            "end": 696
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 710
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
                          "start": 722,
                          "end": 723
                        },
                        "start": 715,
                        "end": 723
                      }
                    ],
                    "start": 713,
                    "end": 725
                  },
                  "expression": false,
                  "start": 710,
                  "end": 725
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 705,
                "end": 725
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 736
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
                          "start": 748,
                          "end": 749
                        },
                        "start": 741,
                        "end": 749
                      }
                    ],
                    "start": 739,
                    "end": 751
                  },
                  "expression": false,
                  "start": 736,
                  "end": 751
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 731,
                "end": 751
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
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
                      "start": 763,
                      "end": 768
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 770,
                    "end": 773
                  },
                  "expression": false,
                  "start": 762,
                  "end": 773
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 757,
                "end": 773
              }
            ],
            "start": 699,
            "end": 775
          },
          "definite": false,
          "start": 695,
          "end": 775
        }
      ],
      "declare": false,
      "start": 691,
      "end": 776
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
            "start": 777,
            "end": 778
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 780
          },
          "optional": false,
          "computed": false,
          "start": 777,
          "end": 780
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 783,
          "end": 784
        },
        "start": 777,
        "end": 784
      },
      "directive": null,
      "start": 777,
      "end": 785
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
            "start": 796,
            "end": 797
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 799
          },
          "optional": false,
          "computed": false,
          "start": 796,
          "end": 799
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 802,
          "end": 803
        },
        "start": 796,
        "end": 803
      },
      "directive": null,
      "start": 796,
      "end": 804
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
            "name": "p",
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
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 825
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 827,
                        "end": 833
                      },
                      "start": 825,
                      "end": 833
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 815,
                    "end": 834
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 835,
                      "end": 836
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 838,
                        "end": 844
                      },
                      "start": 836,
                      "end": 844
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 835,
                    "end": 844
                  }
                ],
                "start": 813,
                "end": 846
              },
              "start": 811,
              "end": 846
            },
            "start": 810,
            "end": 846
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
                  "start": 851,
                  "end": 852
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 854,
                  "end": 855
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 851,
                "end": 855
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 860,
                  "end": 861
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 857,
                "end": 861
              }
            ],
            "start": 849,
            "end": 863
          },
          "definite": false,
          "start": 810,
          "end": 863
        }
      ],
      "declare": false,
      "start": 806,
      "end": 864
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 866
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 868
          },
          "optional": false,
          "computed": false,
          "start": 865,
          "end": 868
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 871,
          "end": 872
        },
        "start": 865,
        "end": 872
      },
      "directive": null,
      "start": 865,
      "end": 873
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 885
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 887
          },
          "optional": false,
          "computed": false,
          "start": 884,
          "end": 887
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 890,
          "end": 891
        },
        "start": 884,
        "end": 891
      },
      "directive": null,
      "start": 884,
      "end": 892
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
            "name": "q",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 903
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 905,
                        "end": 911
                      },
                      "start": 903,
                      "end": 911
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 902,
                    "end": 912
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 914
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 916,
                        "end": 922
                      },
                      "start": 914,
                      "end": 922
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 913,
                    "end": 922
                  }
                ],
                "start": 900,
                "end": 924
              },
              "start": 898,
              "end": 924
            },
            "start": 897,
            "end": 924
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 927,
            "end": 928
          },
          "definite": false,
          "start": 897,
          "end": 928
        }
      ],
      "declare": false,
      "start": 893,
      "end": 929
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 931
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 932,
            "end": 933
          },
          "optional": false,
          "computed": false,
          "start": 930,
          "end": 933
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 936,
          "end": 937
        },
        "start": 930,
        "end": 937
      },
      "directive": null,
      "start": 930,
      "end": 938
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 940
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 942
          },
          "optional": false,
          "computed": false,
          "start": 939,
          "end": 942
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 945,
          "end": 946
        },
        "start": 939,
        "end": 946
      },
      "directive": null,
      "start": 939,
      "end": 947
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 954,
        "end": 955
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 963
            },
            "initializer": null,
            "computed": false,
            "start": 962,
            "end": 963
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 966
            },
            "initializer": null,
            "computed": false,
            "start": 965,
            "end": 966
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 969
            },
            "initializer": null,
            "computed": false,
            "start": 968,
            "end": 969
          }
        ],
        "start": 956,
        "end": 971
      },
      "const": false,
      "declare": false,
      "start": 949,
      "end": 971
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 973
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 975
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 975
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 978,
          "end": 979
        },
        "start": 972,
        "end": 979
      },
      "directive": null,
      "start": 972,
      "end": 980
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 1002,
        "end": 1003
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1024
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1027,
                    "end": 1028
                  },
                  "definite": false,
                  "start": 1023,
                  "end": 1028
                }
              ],
              "declare": false,
              "start": 1017,
              "end": 1029
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1010,
            "end": 1029
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1045,
                    "end": 1046
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1049,
                    "end": 1050
                  },
                  "definite": false,
                  "start": 1045,
                  "end": 1050
                }
              ],
              "declare": false,
              "start": 1041,
              "end": 1051
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1034,
            "end": 1051
          },
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1067,
                    "end": 1068
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1071,
                    "end": 1072
                  },
                  "definite": false,
                  "start": 1067,
                  "end": 1072
                }
              ],
              "declare": false,
              "start": 1063,
              "end": 1073
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1056,
            "end": 1073
          }
        ],
        "start": 1004,
        "end": 1075
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 992,
      "end": 1075
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
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1077
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1078,
            "end": 1079
          },
          "optional": false,
          "computed": false,
          "start": 1076,
          "end": 1079
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1082,
          "end": 1083
        },
        "start": 1076,
        "end": 1083
      },
      "directive": null,
      "start": 1076,
      "end": 1084
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
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1096
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1098
          },
          "optional": false,
          "computed": false,
          "start": 1095,
          "end": 1098
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1101,
          "end": 1102
        },
        "start": 1095,
        "end": 1102
      },
      "directive": null,
      "start": 1095,
      "end": 1103
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
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1107
          },
          "optional": false,
          "computed": false,
          "start": 1104,
          "end": 1107
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1110,
          "end": 1111
        },
        "start": 1104,
        "end": 1111
      },
      "directive": null,
      "start": 1104,
      "end": 1112
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1137,
                            "end": 1143
                          },
                          "start": 1135,
                          "end": 1143
                        },
                        "start": 1134,
                        "end": 1143
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1146,
                        "end": 1152
                      },
                      "start": 1144,
                      "end": 1152
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 1124,
                    "end": 1152
                  }
                ],
                "start": 1122,
                "end": 1154
              },
              "start": 1120,
              "end": 1154
            },
            "start": 1118,
            "end": 1154
          },
          "init": null,
          "definite": false,
          "start": 1118,
          "end": 1154
        }
      ],
      "declare": false,
      "start": 1114,
      "end": 1155
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1160,
            "end": 1161
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1166
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 1167,
              "end": 1172
            },
            "optional": false,
            "computed": true,
            "start": 1164,
            "end": 1173
          },
          "definite": false,
          "start": 1160,
          "end": 1173
        }
      ],
      "declare": false,
      "start": 1156,
      "end": 1174
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1177
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1178,
            "end": 1183
          },
          "optional": false,
          "computed": true,
          "start": 1175,
          "end": 1184
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 1187,
          "end": 1192
        },
        "start": 1175,
        "end": 1192
      },
      "directive": null,
      "start": 1175,
      "end": 1193
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1228,
                            "end": 1234
                          },
                          "start": 1226,
                          "end": 1234
                        },
                        "start": 1225,
                        "end": 1234
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1237,
                        "end": 1243
                      },
                      "start": 1235,
                      "end": 1243
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 1215,
                    "end": 1244
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1249,
                            "end": 1255
                          },
                          "start": 1247,
                          "end": 1255
                        },
                        "start": 1246,
                        "end": 1255
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1258,
                        "end": 1264
                      },
                      "start": 1256,
                      "end": 1264
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1245,
                    "end": 1264
                  }
                ],
                "start": 1213,
                "end": 1266
              },
              "start": 1211,
              "end": 1266
            },
            "start": 1209,
            "end": 1266
          },
          "init": null,
          "definite": false,
          "start": 1209,
          "end": 1266
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1267
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 1268,
            "end": 1270
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1271,
            "end": 1272
          },
          "optional": false,
          "computed": true,
          "start": 1268,
          "end": 1273
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 1276,
          "end": 1281
        },
        "start": 1268,
        "end": 1281
      },
      "directive": null,
      "start": 1268,
      "end": 1282
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 1293,
            "end": 1295
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1296,
            "end": 1301
          },
          "optional": false,
          "computed": true,
          "start": 1293,
          "end": 1302
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 1305,
          "end": 1310
        },
        "start": 1293,
        "end": 1310
      },
      "directive": null,
      "start": 1293,
      "end": 1311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1311
}
```
