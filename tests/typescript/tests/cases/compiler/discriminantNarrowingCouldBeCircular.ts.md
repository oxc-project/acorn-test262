__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "is",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 36
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "typeArguments": null,
              "start": 43,
              "end": 44
            },
            "start": 41,
            "end": 44
          },
          "start": 40,
          "end": 44
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 53
              },
              "typeArguments": null,
              "start": 52,
              "end": 53
            },
            "start": 52,
            "end": 53
          },
          "start": 47,
          "end": 53
        },
        "start": 45,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 17,
      "end": 54
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
            "name": "o",
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
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 70
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 71,
                          "end": 77
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      ],
                      "start": 70,
                      "end": 86
                    },
                    "start": 64,
                    "end": 86
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 89,
                    "end": 98
                  }
                ],
                "start": 64,
                "end": 98
              },
              "start": 62,
              "end": 98
            },
            "start": 61,
            "end": 98
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 101,
            "end": 103
          },
          "definite": false,
          "start": 61,
          "end": 103
        }
      ],
      "declare": false,
      "start": 55,
      "end": 104
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 110
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 130
                  },
                  "init": null,
                  "definite": false,
                  "start": 127,
                  "end": 130
                }
              ],
              "declare": false,
              "start": 121,
              "end": 130
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 154
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 158
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 162
                        },
                        "optional": false,
                        "computed": true,
                        "start": 157,
                        "end": 163
                      },
                      "definite": false,
                      "start": 149,
                      "end": 163
                    }
                  ],
                  "declare": false,
                  "start": 143,
                  "end": 164
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "is",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 175
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 176,
                          "end": 182
                        }
                      ],
                      "start": 175,
                      "end": 183
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 189
                      }
                    ],
                    "optional": false,
                    "start": 173,
                    "end": 190
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 192,
                    "end": 199
                  },
                  "alternate": null,
                  "start": 169,
                  "end": 199
                }
              ],
              "start": 137,
              "end": 203
            },
            "start": 116,
            "end": 203
          }
        ],
        "start": 112,
        "end": 205
      },
      "alternate": null,
      "start": 105,
      "end": 205
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 222
      },
      "typeParameters": null,
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
              "start": 227,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 227,
            "end": 236
          }
        ],
        "start": 225,
        "end": 238
      },
      "declare": false,
      "start": 207,
      "end": 239
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
            "name": "kPresentationInheritanceParents",
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
                        "name": "tagName",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 299,
                            "end": 305
                          },
                          "start": 297,
                          "end": 305
                        },
                        "start": 290,
                        "end": 305
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 308,
                          "end": 314
                        },
                        "start": 308,
                        "end": 316
                      },
                      "start": 306,
                      "end": 316
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 289,
                    "end": 316
                  }
                ],
                "start": 287,
                "end": 318
              },
              "start": 285,
              "end": 318
            },
            "start": 254,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 254,
          "end": 318
        }
      ],
      "declare": true,
      "start": 240,
      "end": 319
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parentElementOrShadowHost",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 362
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 382
              },
              "typeArguments": null,
              "start": 372,
              "end": 382
            },
            "start": 370,
            "end": 382
          },
          "start": 363,
          "end": 382
        }
      ],
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
                "name": "SomeRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 395
              },
              "typeArguments": null,
              "start": 385,
              "end": 395
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 398,
              "end": 407
            }
          ],
          "start": 385,
          "end": 407
        },
        "start": 383,
        "end": 407
      },
      "body": null,
      "expression": false,
      "start": 320,
      "end": 408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getImplicitAriaRole",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 438
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 458
              },
              "typeArguments": null,
              "start": 448,
              "end": 458
            },
            "start": 446,
            "end": 458
          },
          "start": 439,
          "end": 458
        }
      ],
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
                  "name": "ancestor",
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
                            "name": "SomeRecord",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 488
                          },
                          "typeArguments": null,
                          "start": 478,
                          "end": 488
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 491,
                          "end": 495
                        }
                      ],
                      "start": 478,
                      "end": 495
                    },
                    "start": 476,
                    "end": 495
                  },
                  "start": 468,
                  "end": 495
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 505
                },
                "definite": false,
                "start": 468,
                "end": 505
              }
            ],
            "declare": false,
            "start": 464,
            "end": 506
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "ancestor",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 524
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
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 544
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parentElementOrShadowHost",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 547,
                          "end": 572
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ancestor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 573,
                            "end": 581
                          }
                        ],
                        "optional": false,
                        "start": 547,
                        "end": 582
                      },
                      "definite": false,
                      "start": 538,
                      "end": 582
                    }
                  ],
                  "declare": false,
                  "start": 532,
                  "end": 583
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
                        "name": "parents",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 601
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "kPresentationInheritanceParents",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 604,
                          "end": 635
                        },
                        "property": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ancestor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 636,
                            "end": 644
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 646
                          },
                          "optional": false,
                          "computed": false,
                          "start": 636,
                          "end": 646
                        },
                        "optional": false,
                        "computed": true,
                        "start": 604,
                        "end": 647
                      },
                      "definite": false,
                      "start": 594,
                      "end": 647
                    }
                  ],
                  "declare": false,
                  "start": 588,
                  "end": 648
                },
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parents",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 665
                        },
                        "prefix": true,
                        "start": 657,
                        "end": 665
                      },
                      "operator": "||",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 670,
                          "end": 676
                        },
                        "prefix": true,
                        "start": 669,
                        "end": 676
                      },
                      "start": 657,
                      "end": 676
                    },
                    "operator": "||",
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parents",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 688
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "includes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 689,
                            "end": 697
                          },
                          "optional": false,
                          "computed": false,
                          "start": 681,
                          "end": 697
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parent",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 698,
                              "end": 704
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 705,
                              "end": 706
                            },
                            "optional": false,
                            "computed": false,
                            "start": 698,
                            "end": 706
                          }
                        ],
                        "optional": false,
                        "start": 681,
                        "end": 707
                      },
                      "prefix": true,
                      "start": 680,
                      "end": 707
                    },
                    "start": 657,
                    "end": 707
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 715,
                    "end": 721
                  },
                  "alternate": null,
                  "start": 653,
                  "end": 721
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ancestor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 726,
                      "end": 734
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 743
                    },
                    "start": 726,
                    "end": 743
                  },
                  "directive": null,
                  "start": 726,
                  "end": 744
                }
              ],
              "start": 526,
              "end": 748
            },
            "start": 509,
            "end": 748
          }
        ],
        "start": 460,
        "end": 750
      },
      "expression": false,
      "start": 410,
      "end": 750
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isPlainObject2",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 783
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 784,
            "end": 785
          }
        ],
        "start": 783,
        "end": 786
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 798,
              "end": 805
            },
            "start": 796,
            "end": 805
          },
          "start": 792,
          "end": 805
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 812,
            "end": 816
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 826
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 827,
                      "end": 838
                    },
                    "typeArguments": null,
                    "start": 827,
                    "end": 838
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 840,
                    "end": 847
                  }
                ],
                "start": 826,
                "end": 848
              },
              "start": 820,
              "end": 848
            },
            "start": 820,
            "end": 848
          },
          "start": 812,
          "end": 848
        },
        "start": 810,
        "end": 848
      },
      "body": null,
      "expression": false,
      "start": 752,
      "end": 849
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
            "name": "myObj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 877,
                "end": 884
              },
              "start": 875,
              "end": 884
            },
            "start": 869,
            "end": 884
          },
          "init": null,
          "definite": false,
          "start": 869,
          "end": 884
        }
      ],
      "declare": true,
      "start": 855,
      "end": 885
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isPlainObject2",
          "optional": false,
          "typeAnnotation": null,
          "start": 892,
          "end": 906
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "myObj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 913
          }
        ],
        "optional": false,
        "start": 892,
        "end": 914
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 938
                  },
                  "init": null,
                  "definite": false,
                  "start": 935,
                  "end": 938
                }
              ],
              "declare": false,
              "start": 929,
              "end": 938
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 943,
                  "end": 946
                },
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 948,
                  "end": 951
                },
                {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 953,
                  "end": 956
                }
              ],
              "start": 942,
              "end": 957
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
                        "name": "deeper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 975,
                        "end": 981
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myObj2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 990
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 991,
                          "end": 994
                        },
                        "optional": false,
                        "computed": true,
                        "start": 984,
                        "end": 995
                      },
                      "definite": false,
                      "start": 975,
                      "end": 995
                    }
                  ],
                  "declare": false,
                  "start": 969,
                  "end": 996
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
                        "name": "deeperKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1011,
                        "end": 1021
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isPlainObject2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1024,
                            "end": 1038
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deeper",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1039,
                              "end": 1045
                            }
                          ],
                          "optional": false,
                          "start": 1024,
                          "end": 1046
                        },
                        "consequent": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1049,
                              "end": 1055
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "keys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1056,
                              "end": 1060
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1049,
                            "end": 1060
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deeper",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1061,
                              "end": 1067
                            }
                          ],
                          "optional": false,
                          "start": 1049,
                          "end": 1068
                        },
                        "alternate": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 1071,
                          "end": 1073
                        },
                        "start": 1024,
                        "end": 1073
                      },
                      "definite": false,
                      "start": 1011,
                      "end": 1073
                    }
                  ],
                  "declare": false,
                  "start": 1005,
                  "end": 1074
                }
              ],
              "start": 959,
              "end": 1082
            },
            "start": 924,
            "end": 1082
          }
        ],
        "start": 916,
        "end": 1086
      },
      "alternate": null,
      "start": 888,
      "end": 1086
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 1086
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 17,
    "end": 24,
    "range": [
      17,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 25,
    "end": 33,
    "range": [
      25,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 34,
    "end": 36,
    "range": [
      34,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 49,
    "end": 51,
    "range": [
      49,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 55,
    "end": 60,
    "range": [
      55,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 89,
    "end": 98,
    "range": [
      89,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 105,
    "end": 107,
    "range": [
      105,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 127,
    "end": 130,
    "range": [
      127,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 131,
    "end": 133,
    "range": [
      131,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 149,
    "end": 154,
    "range": [
      149,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 184,
    "end": 189,
    "range": [
      184,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 207,
    "end": 211,
    "range": [
      207,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeRecord",
    "start": 212,
    "end": 222,
    "range": [
      212,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 230,
    "end": 236,
    "range": [
      230,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 240,
    "end": 247,
    "range": [
      240,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 248,
    "end": 253,
    "range": [
      248,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "kPresentationInheritanceParents",
    "start": 254,
    "end": 285,
    "range": [
      254,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 290,
    "end": 297,
    "range": [
      290,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 320,
    "end": 327,
    "range": [
      320,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336,
    "range": [
      328,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "parentElementOrShadowHost",
    "start": 337,
    "end": 362,
    "range": [
      337,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 363,
    "end": 370,
    "range": [
      363,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeRecord",
    "start": 372,
    "end": 382,
    "range": [
      372,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeRecord",
    "start": 385,
    "end": 395,
    "range": [
      385,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 398,
    "end": 407,
    "range": [
      398,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418,
    "range": [
      410,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "getImplicitAriaRole",
    "start": 419,
    "end": 438,
    "range": [
      419,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 439,
    "end": 446,
    "range": [
      439,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeRecord",
    "start": 448,
    "end": 458,
    "range": [
      448,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 464,
    "end": 467,
    "range": [
      464,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "ancestor",
    "start": 468,
    "end": 476,
    "range": [
      468,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeRecord",
    "start": 478,
    "end": 488,
    "range": [
      478,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 491,
    "end": 495,
    "range": [
      491,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 498,
    "end": 505,
    "range": [
      498,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 509,
    "end": 514,
    "range": [
      509,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "ancestor",
    "start": 516,
    "end": 524,
    "range": [
      516,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 532,
    "end": 537,
    "range": [
      532,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 538,
    "end": 544,
    "range": [
      538,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "parentElementOrShadowHost",
    "start": 547,
    "end": 572,
    "range": [
      547,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "ancestor",
    "start": 573,
    "end": 581,
    "range": [
      573,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 588,
    "end": 593,
    "range": [
      588,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "parents",
    "start": 594,
    "end": 601,
    "range": [
      594,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "kPresentationInheritanceParents",
    "start": 604,
    "end": 635,
    "range": [
      604,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "ancestor",
    "start": 636,
    "end": 644,
    "range": [
      636,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "parents",
    "start": 658,
    "end": 665,
    "range": [
      658,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 666,
    "end": 668,
    "range": [
      666,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 670,
    "end": 676,
    "range": [
      670,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 677,
    "end": 679,
    "range": [
      677,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "parents",
    "start": 681,
    "end": 688,
    "range": [
      681,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 689,
    "end": 697,
    "range": [
      689,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 715,
    "end": 720,
    "range": [
      715,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "ancestor",
    "start": 726,
    "end": 734,
    "range": [
      726,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 737,
    "end": 743,
    "range": [
      737,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 752,
    "end": 759,
    "range": [
      752,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 760,
    "end": 768,
    "range": [
      760,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "isPlainObject2",
    "start": 769,
    "end": 783,
    "range": [
      769,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 792,
    "end": 796,
    "range": [
      792,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 798,
    "end": 805,
    "range": [
      798,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 812,
    "end": 816,
    "range": [
      812,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 817,
    "end": 819,
    "range": [
      817,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 820,
    "end": 826,
    "range": [
      820,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 827,
    "end": 838,
    "range": [
      827,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 840,
    "end": 847,
    "range": [
      840,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 855,
    "end": 862,
    "range": [
      855,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 863,
    "end": 868,
    "range": [
      863,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "myObj2",
    "start": 869,
    "end": 875,
    "range": [
      869,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 877,
    "end": 884,
    "range": [
      877,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 888,
    "end": 890,
    "range": [
      888,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "isPlainObject2",
    "start": 892,
    "end": 906,
    "range": [
      892,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "myObj2",
    "start": 907,
    "end": 913,
    "range": [
      907,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 924,
    "end": 927,
    "range": [
      924,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 929,
    "end": 934,
    "range": [
      929,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 939,
    "end": 941,
    "range": [
      939,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 943,
    "end": 946,
    "range": [
      943,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 948,
    "end": 951,
    "range": [
      948,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 953,
    "end": 956,
    "range": [
      953,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 969,
    "end": 974,
    "range": [
      969,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 975,
    "end": 981,
    "range": [
      975,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "myObj2",
    "start": 984,
    "end": 990,
    "range": [
      984,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 991,
    "end": 994,
    "range": [
      991,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1005,
    "end": 1010,
    "range": [
      1005,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "deeperKeys",
    "start": 1011,
    "end": 1021,
    "range": [
      1011,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "isPlainObject2",
    "start": 1024,
    "end": 1038,
    "range": [
      1024,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1039,
    "end": 1045,
    "range": [
      1039,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1049,
    "end": 1055,
    "range": [
      1049,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 1056,
    "end": 1060,
    "range": [
      1056,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1061,
    "end": 1067,
    "range": [
      1061,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  }
]
```
