__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1128,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 29,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 87,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 87,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 73,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 111,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 110,
            "decorators": [],
            "name": "ab",
            "optional": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 150,
          "end": 161,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 332,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 328,
        "decorators": [],
        "name": "ViewNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 329,
        "end": 332,
        "body": []
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 333,
      "end": 380,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 359,
        "decorators": [],
        "name": "ViewRefNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 368,
        "end": 376,
        "decorators": [],
        "name": "ViewNode",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 377,
        "end": 380,
        "body": []
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 381,
      "end": 435,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 411,
        "decorators": [],
        "name": "ViewRefFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 420,
        "end": 431,
        "decorators": [],
        "name": "ViewRefNode",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 432,
        "end": 435,
        "body": []
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 437,
      "end": 505,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 457,
        "decorators": [],
        "name": "CommitFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 466,
        "end": 481,
        "decorators": [],
        "name": "ViewRefFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 482,
        "end": 505,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 486,
            "end": 503,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 494,
              "end": 497,
              "decorators": [],
              "name": "_id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 507,
      "end": 576,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 528,
        "decorators": [],
        "name": "ResultsFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 537,
        "end": 552,
        "decorators": [],
        "name": "ViewRefFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 576,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 557,
            "end": 574,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 568,
              "decorators": [],
              "name": "_id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 578,
      "end": 646,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 597,
        "decorators": [],
        "name": "StashFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 606,
        "end": 620,
        "decorators": [],
        "name": "CommitFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 621,
        "end": 646,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 626,
            "end": 644,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 634,
              "end": 638,
              "decorators": [],
              "name": "_id2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 648,
      "end": 709,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 654,
        "end": 668,
        "decorators": [],
        "name": "StatusFileNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 677,
        "end": 685,
        "decorators": [],
        "name": "ViewNode",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 709,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 690,
            "end": 707,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 698,
              "end": 701,
              "decorators": [],
              "name": "_id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 711,
      "end": 1128,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 720,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 721,
        "end": 1128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 725,
            "end": 973,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 739,
              "end": 742,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 742,
              "end": 973,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 743,
                  "end": 797,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
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
                            "decorators": [],
                            "name": "CommitFileNode",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "ResultsFileNode",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "StashFileNode",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 813,
                            "end": 843,
                            "left": {
                              "type": "Identifier",
                              "start": 813,
                              "end": 817,
                              "decorators": [],
                              "name": "node",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "start": 829,
                              "end": 843,
                              "decorators": [],
                              "name": "CommitFileNode",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "prefix": true
                        },
                        "operator": "&&",
                        "right": {
                          "type": "UnaryExpression",
                          "start": 851,
                          "end": 883,
                          "operator": "!",
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 853,
                            "end": 882,
                            "left": {
                              "type": "Identifier",
                              "start": 853,
                              "end": 857,
                              "decorators": [],
                              "name": "node",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "instanceof",
                            "right": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 882,
                              "decorators": [],
                              "name": "StashFileNode",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "prefix": true
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "UnaryExpression",
                        "start": 890,
                        "end": 924,
                        "operator": "!",
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 892,
                          "end": 923,
                          "left": {
                            "type": "Identifier",
                            "start": 892,
                            "end": 896,
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "start": 908,
                            "end": 923,
                            "decorators": [],
                            "name": "ResultsFileNode",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "prefix": true
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
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 964,
                            "end": 968,
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 977,
            "end": 1126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 991,
              "end": 994,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 994,
              "end": 1126,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 995,
                  "end": 1066,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
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
                            "decorators": [],
                            "name": "CommitFileNode",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "ResultsFileNode",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "StashFileNode",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "StatusFileNode",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1068,
                  "end": 1080,
                  "decorators": [],
                  "name": "options",
                  "optional": true,
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
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1103,
                          "end": 1110,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1111,
                          "end": 1120,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
