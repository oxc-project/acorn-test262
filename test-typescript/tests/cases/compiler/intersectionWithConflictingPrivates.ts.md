__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1129,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 21,
                "end": 28
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 87,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 73,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 65,
                "end": 72
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 110,
            "name": "ab",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 110,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 105,
                "end": 110,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 105,
                    "end": 106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 109,
                    "end": 110,
                    "typeName": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 116,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "name": "ab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 119,
          "end": 126,
          "value": "hello",
          "raw": "'hello'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 136,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 128,
          "end": 130,
          "name": "ab",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 133,
          "end": 135,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 150,
          "end": 161,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 154,
            "end": 161,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 156,
              "end": 161,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 156,
                  "end": 157,
                  "typeName": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 160,
                  "end": 161,
                  "typeName": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 281,
        "body": [
          {
            "type": "IfStatement",
            "start": 167,
            "end": 261,
            "test": {
              "type": "LogicalExpression",
              "start": 171,
              "end": 209,
              "left": {
                "type": "BinaryExpression",
                "start": 171,
                "end": 188,
                "left": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 175,
                  "name": "node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 192,
                "end": 209,
                "left": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 196,
                  "name": "node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 211,
              "end": 232,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 217,
                  "end": 222,
                  "expression": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 221,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 240,
              "end": 261,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 246,
                  "end": 251,
                  "expression": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 250,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 264,
            "end": 269,
            "expression": {
              "type": "Identifier",
              "start": 264,
              "end": 268,
              "name": "node",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 328,
        "name": "ViewNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 329,
        "end": 332,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 333,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 359,
        "name": "ViewRefNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 368,
        "end": 376,
        "name": "ViewNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 377,
        "end": 380,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 381,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 411,
        "name": "ViewRefFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 420,
        "end": 431,
        "name": "ViewRefNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 432,
        "end": 435,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 437,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 457,
        "name": "CommitFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 466,
        "end": 481,
        "name": "ViewRefFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 482,
        "end": 505,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 486,
            "end": 503,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 494,
              "end": 497,
              "name": "_id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 502,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 499,
                "end": 502
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 507,
      "end": 576,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 528,
        "name": "ResultsFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 537,
        "end": 552,
        "name": "ViewRefFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 576,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 557,
            "end": 574,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 568,
              "name": "_id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 573,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 570,
                "end": 573
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 578,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 597,
        "name": "StashFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 606,
        "end": 620,
        "name": "CommitFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 621,
        "end": 646,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 626,
            "end": 644,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 634,
              "end": 638,
              "name": "_id2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 643,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 640,
                "end": 643
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 648,
      "end": 709,
      "id": {
        "type": "Identifier",
        "start": 654,
        "end": 668,
        "name": "StatusFileNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 677,
        "end": 685,
        "name": "ViewNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 709,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 690,
            "end": 707,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 698,
              "end": 701,
              "name": "_id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 701,
              "end": 706,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 703,
                "end": 706
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 711,
      "end": 1128,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 720,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 721,
        "end": 1128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 725,
            "end": 973,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 739,
              "end": 742,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 742,
              "end": 973,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "Identifier",
                  "start": 743,
                  "end": 797,
                  "name": "node",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 747,
                    "end": 797,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 749,
                      "end": 797,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 749,
                          "end": 763,
                          "typeName": {
                            "type": "Identifier",
                            "start": 749,
                            "end": 763,
                            "name": "CommitFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 766,
                          "end": 781,
                          "typeName": {
                            "type": "Identifier",
                            "start": 766,
                            "end": 781,
                            "name": "ResultsFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 784,
                          "end": 797,
                          "typeName": {
                            "type": "Identifier",
                            "start": 784,
                            "end": 797,
                            "name": "StashFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 799,
                "end": 973,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 803,
                    "end": 945,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 811,
                      "end": 924,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 811,
                        "end": 883,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 811,
                          "end": 844,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 813,
                            "end": 843,
                            "left": {
                              "type": "Identifier",
                              "start": 813,
                              "end": 817,
                              "name": "node",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "start": 829,
                              "end": 843,
                              "name": "CommitFileNode",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "UnaryExpression",
                          "start": 851,
                          "end": 883,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 853,
                            "end": 882,
                            "left": {
                              "type": "Identifier",
                              "start": 853,
                              "end": 857,
                              "name": "node",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 882,
                              "name": "StashFileNode",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "UnaryExpression",
                        "start": 890,
                        "end": 924,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 892,
                          "end": 923,
                          "left": {
                            "type": "Identifier",
                            "start": 892,
                            "end": 896,
                            "name": "node",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "start": 908,
                            "end": 923,
                            "name": "ResultsFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 929,
                      "end": 945,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 934,
                          "end": 941,
                          "argument": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 949,
                    "end": 970,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 949,
                      "end": 969,
                      "argument": {
                        "type": "CallExpression",
                        "start": 955,
                        "end": 969,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 955,
                          "end": 963,
                          "object": {
                            "type": "ThisExpression",
                            "start": 955,
                            "end": 959
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 960,
                            "end": 963,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 964,
                            "end": 968,
                            "name": "node",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 977,
            "end": 1126,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 991,
              "end": 994,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 994,
              "end": 1126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [
                {
                  "type": "Identifier",
                  "start": 995,
                  "end": 1066,
                  "name": "node",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 999,
                    "end": 1066,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1001,
                      "end": 1066,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1001,
                          "end": 1015,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1001,
                            "end": 1015,
                            "name": "CommitFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1018,
                          "end": 1033,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1018,
                            "end": 1033,
                            "name": "ResultsFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1036,
                          "end": 1049,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1036,
                            "end": 1049,
                            "name": "StashFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1052,
                          "end": 1066,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1052,
                            "end": 1066,
                            "name": "StatusFileNode",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1068,
                  "end": 1080,
                  "name": "options",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1076,
                    "end": 1080,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1078,
                      "end": 1080,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1082,
                "end": 1126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1088,
                    "end": 1122,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1095,
                      "end": 1121,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1095,
                        "end": 1110,
                        "object": {
                          "type": "Identifier",
                          "start": 1095,
                          "end": 1102,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1103,
                          "end": 1110,
                          "name": "resolve",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1111,
                          "end": 1120,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
