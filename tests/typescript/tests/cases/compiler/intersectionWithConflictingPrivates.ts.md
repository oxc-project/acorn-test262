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
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 10,
            "end": 29
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
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
            "start": 30,
            "end": 41
          }
        ],
        "start": 8,
        "end": 43
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 43
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
        "start": 50,
        "end": 51
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
              "start": 62,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 65,
                "end": 72
              },
              "start": 63,
              "end": 72
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 54,
            "end": 73
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
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
            "start": 74,
            "end": 85
          }
        ],
        "start": 52,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 87
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
            "name": "ab",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 105,
                    "end": 106
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 110
                    },
                    "typeArguments": null,
                    "start": 109,
                    "end": 110
                  }
                ],
                "start": 105,
                "end": 110
              },
              "start": 103,
              "end": 110
            },
            "start": 101,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 101,
          "end": 110
        }
      ],
      "declare": true,
      "start": 89,
      "end": 111
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 116
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "'hello'",
          "start": 119,
          "end": 126
        },
        "start": 112,
        "end": 126
      },
      "directive": null,
      "start": 112,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 130
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 133,
          "end": 135
        },
        "start": 128,
        "end": 135
      },
      "directive": null,
      "start": 128,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "typeArguments": null,
                  "start": 156,
                  "end": 157
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "typeArguments": null,
                  "start": 160,
                  "end": 161
                }
              ],
              "start": 156,
              "end": 161
            },
            "start": 154,
            "end": 161
          },
          "start": 150,
          "end": 161
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 175
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "start": 171,
                "end": 188
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 196
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 209
                },
                "start": 192,
                "end": 209
              },
              "start": 171,
              "end": 209
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 221
                  },
                  "directive": null,
                  "start": 217,
                  "end": 222
                }
              ],
              "start": 211,
              "end": 232
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 250
                  },
                  "directive": null,
                  "start": 246,
                  "end": 251
                }
              ],
              "start": 240,
              "end": 261
            },
            "start": 167,
            "end": 261
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 268
            },
            "directive": null,
            "start": 264,
            "end": 269
          }
        ],
        "start": 163,
        "end": 281
      },
      "expression": false,
      "start": 138,
      "end": 281
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 328
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 329,
        "end": 332
      },
      "abstract": true,
      "declare": false,
      "start": 305,
      "end": 332
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewRefNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 359
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 376
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 377,
        "end": 380
      },
      "abstract": true,
      "declare": false,
      "start": 333,
      "end": 380
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewRefFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 411
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewRefNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 431
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 432,
        "end": 435
      },
      "abstract": true,
      "declare": false,
      "start": 381,
      "end": 435
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommitFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 457
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewRefFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 481
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
              "name": "_id",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 499,
                "end": 502
              },
              "start": 497,
              "end": 502
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 486,
            "end": 503
          }
        ],
        "start": 482,
        "end": 505
      },
      "abstract": false,
      "declare": false,
      "start": 437,
      "end": 505
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResultsFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 528
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewRefFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 552
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
              "name": "_id",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 568
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 570,
                "end": 573
              },
              "start": 568,
              "end": 573
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 557,
            "end": 574
          }
        ],
        "start": 553,
        "end": 576
      },
      "abstract": false,
      "declare": false,
      "start": 507,
      "end": 576
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StashFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 584,
        "end": 597
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommitFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 620
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
              "name": "_id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 638
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 640,
                "end": 643
              },
              "start": 638,
              "end": 643
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 626,
            "end": 644
          }
        ],
        "start": 621,
        "end": 646
      },
      "abstract": false,
      "declare": false,
      "start": 578,
      "end": 646
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StatusFileNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 654,
        "end": 668
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 685
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
              "name": "_id",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 701
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 703,
                "end": 706
              },
              "start": 701,
              "end": 706
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 690,
            "end": 707
          }
        ],
        "start": 686,
        "end": 709
      },
      "abstract": false,
      "declare": false,
      "start": 648,
      "end": 709
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
        "start": 717,
        "end": 720
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
              "start": 739,
              "end": 742
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
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
                            "name": "CommitFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 749,
                            "end": 763
                          },
                          "typeArguments": null,
                          "start": 749,
                          "end": 763
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ResultsFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 766,
                            "end": 781
                          },
                          "typeArguments": null,
                          "start": 766,
                          "end": 781
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StashFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 784,
                            "end": 797
                          },
                          "typeArguments": null,
                          "start": 784,
                          "end": 797
                        }
                      ],
                      "start": 749,
                      "end": 797
                    },
                    "start": 747,
                    "end": 797
                  },
                  "start": 743,
                  "end": 797
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 813,
                              "end": 817
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CommitFileNode",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 829,
                              "end": 843
                            },
                            "start": 813,
                            "end": 843
                          },
                          "prefix": true,
                          "start": 811,
                          "end": 844
                        },
                        "operator": "&&",
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 853,
                              "end": 857
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "StashFileNode",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 869,
                              "end": 882
                            },
                            "start": 853,
                            "end": 882
                          },
                          "prefix": true,
                          "start": 851,
                          "end": 883
                        },
                        "start": 811,
                        "end": 883
                      },
                      "operator": "&&",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 892,
                            "end": 896
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ResultsFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 908,
                            "end": 923
                          },
                          "start": 892,
                          "end": 923
                        },
                        "prefix": true,
                        "start": 890,
                        "end": 924
                      },
                      "start": 811,
                      "end": 924
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 934,
                          "end": 941
                        }
                      ],
                      "start": 929,
                      "end": 945
                    },
                    "alternate": null,
                    "start": 803,
                    "end": 945
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 955,
                            "end": 959
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 960,
                            "end": 963
                          },
                          "optional": false,
                          "computed": false,
                          "start": 955,
                          "end": 963
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 964,
                            "end": 968
                          }
                        ],
                        "optional": false,
                        "start": 955,
                        "end": 969
                      },
                      "start": 949,
                      "end": 969
                    },
                    "directive": null,
                    "start": 949,
                    "end": 970
                  }
                ],
                "start": 799,
                "end": 973
              },
              "expression": false,
              "start": 742,
              "end": 973
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 725,
            "end": 973
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
              "start": 991,
              "end": 994
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
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
                            "name": "CommitFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1001,
                            "end": 1015
                          },
                          "typeArguments": null,
                          "start": 1001,
                          "end": 1015
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ResultsFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1018,
                            "end": 1033
                          },
                          "typeArguments": null,
                          "start": 1018,
                          "end": 1033
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StashFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1036,
                            "end": 1049
                          },
                          "typeArguments": null,
                          "start": 1036,
                          "end": 1049
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StatusFileNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1052,
                            "end": 1066
                          },
                          "typeArguments": null,
                          "start": 1052,
                          "end": 1066
                        }
                      ],
                      "start": 1001,
                      "end": 1066
                    },
                    "start": 999,
                    "end": 1066
                  },
                  "start": 995,
                  "end": 1066
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1078,
                      "end": 1080
                    },
                    "start": 1076,
                    "end": 1080
                  },
                  "start": 1068,
                  "end": 1080
                }
              ],
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1095,
                          "end": 1102
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1103,
                          "end": 1110
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1095,
                        "end": 1110
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1111,
                          "end": 1120
                        }
                      ],
                      "optional": false,
                      "start": 1095,
                      "end": 1121
                    },
                    "start": 1088,
                    "end": 1122
                  }
                ],
                "start": 1082,
                "end": 1126
              },
              "expression": false,
              "start": 994,
              "end": 1126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 977,
            "end": 1126
          }
        ],
        "start": 721,
        "end": 1128
      },
      "abstract": false,
      "declare": false,
      "start": 711,
      "end": 1128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1128
}
```
