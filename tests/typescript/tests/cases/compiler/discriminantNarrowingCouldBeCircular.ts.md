__ESTREE_TEST__:PASS:
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
