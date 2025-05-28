__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 1086,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 17,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 36,
        "decorators": [],
        "name": "is",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 44,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 43,
              "end": 44,
              "typeName": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 45,
        "end": 53,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 47,
          "end": 53,
          "parameterName": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 53,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 104,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 98,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 98,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 64,
                "end": 98,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 64,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 70,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 70,
                      "end": 86,
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
                      ]
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 89,
                    "end": 98
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 101,
            "end": 103,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 105,
      "end": 205,
      "test": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 112,
        "end": 205,
        "body": [
          {
            "type": "ForInStatement",
            "start": 116,
            "end": 203,
            "left": {
              "type": "VariableDeclaration",
              "start": 121,
              "end": 130,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 127,
                  "end": 130,
                  "id": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 130,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 137,
              "end": 203,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 143,
                  "end": 164,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 149,
                      "end": 163,
                      "id": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 154,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 157,
                        "end": 163,
                        "object": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 158,
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 162,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 169,
                  "end": 199,
                  "test": {
                    "type": "CallExpression",
                    "start": 173,
                    "end": 190,
                    "callee": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 175,
                      "decorators": [],
                      "name": "is",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 175,
                      "end": 183,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 176,
                          "end": 182
                        }
                      ]
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 192,
                    "end": 199,
                    "body": []
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 207,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 222,
        "decorators": [],
        "name": "SomeRecord",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 225,
        "end": 238,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 227,
            "end": 236,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 319,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 318,
            "decorators": [],
            "name": "kPresentationInheritanceParents",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 287,
                "end": 318,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 289,
                    "end": 316,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 290,
                        "end": 305,
                        "decorators": [],
                        "name": "tagName",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 297,
                          "end": 305,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 299,
                            "end": 305
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 308,
                        "end": 316,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 308,
                          "end": 314
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 362,
        "decorators": [],
        "name": "parentElementOrShadowHost",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 363,
          "end": 382,
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 382,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 382,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 382,
                "decorators": [],
                "name": "SomeRecord",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 383,
        "end": 407,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 385,
          "end": 407,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 385,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 385,
                "end": 395,
                "decorators": [],
                "name": "SomeRecord",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 398,
              "end": 407
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 410,
      "end": 750,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 438,
        "decorators": [],
        "name": "getImplicitAriaRole",
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
          "start": 439,
          "end": 458,
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 446,
            "end": 458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 448,
              "end": 458,
              "typeName": {
                "type": "Identifier",
                "start": 448,
                "end": 458,
                "decorators": [],
                "name": "SomeRecord",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 460,
        "end": 750,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 464,
            "end": 506,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 505,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 495,
                  "decorators": [],
                  "name": "ancestor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 495,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 478,
                      "end": 495,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 478,
                          "end": 488,
                          "typeName": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 488,
                            "decorators": [],
                            "name": "SomeRecord",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 491,
                          "end": 495
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 505,
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 509,
            "end": 748,
            "test": {
              "type": "Identifier",
              "start": 516,
              "end": 524,
              "decorators": [],
              "name": "ancestor",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 526,
              "end": 748,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 532,
                  "end": 583,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 538,
                      "end": 582,
                      "id": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 544,
                        "decorators": [],
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 547,
                        "end": 582,
                        "callee": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 572,
                          "decorators": [],
                          "name": "parentElementOrShadowHost",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 573,
                            "end": 581,
                            "decorators": [],
                            "name": "ancestor",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 588,
                  "end": 648,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 594,
                      "end": 647,
                      "id": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 601,
                        "decorators": [],
                        "name": "parents",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 604,
                        "end": 647,
                        "object": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 635,
                          "decorators": [],
                          "name": "kPresentationInheritanceParents",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "MemberExpression",
                          "start": 636,
                          "end": 646,
                          "object": {
                            "type": "Identifier",
                            "start": 636,
                            "end": 644,
                            "decorators": [],
                            "name": "ancestor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 645,
                            "end": 646,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 653,
                  "end": 721,
                  "test": {
                    "type": "LogicalExpression",
                    "start": 657,
                    "end": 707,
                    "left": {
                      "type": "LogicalExpression",
                      "start": 657,
                      "end": 676,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 657,
                        "end": 665,
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 665,
                          "decorators": [],
                          "name": "parents",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "prefix": true
                      },
                      "operator": "||",
                      "right": {
                        "type": "UnaryExpression",
                        "start": 669,
                        "end": 676,
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 676,
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "prefix": true
                      }
                    },
                    "operator": "||",
                    "right": {
                      "type": "UnaryExpression",
                      "start": 680,
                      "end": 707,
                      "operator": "!",
                      "argument": {
                        "type": "CallExpression",
                        "start": 681,
                        "end": 707,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 681,
                          "end": 697,
                          "object": {
                            "type": "Identifier",
                            "start": 681,
                            "end": 688,
                            "decorators": [],
                            "name": "parents",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 697,
                            "decorators": [],
                            "name": "includes",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 698,
                            "end": 706,
                            "object": {
                              "type": "Identifier",
                              "start": 698,
                              "end": 704,
                              "decorators": [],
                              "name": "parent",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 705,
                              "end": 706,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "prefix": true
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 715,
                    "end": 721,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 726,
                  "end": 744,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 726,
                    "end": 743,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 726,
                      "end": 734,
                      "decorators": [],
                      "name": "ancestor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 743,
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 752,
      "end": 849,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 783,
        "decorators": [],
        "name": "isPlainObject2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 783,
        "end": 786,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 784,
            "end": 785,
            "name": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 792,
          "end": 805,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 796,
            "end": 805,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 798,
              "end": 805
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 810,
        "end": 848,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 812,
          "end": 848,
          "parameterName": {
            "type": "Identifier",
            "start": 812,
            "end": 816,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 820,
            "end": 848,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 820,
              "end": 848,
              "typeName": {
                "type": "Identifier",
                "start": 820,
                "end": 826,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 826,
                "end": 848,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 827,
                    "end": 838,
                    "typeName": {
                      "type": "Identifier",
                      "start": 827,
                      "end": 838,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 840,
                    "end": 847
                  }
                ]
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 885,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 869,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 869,
            "end": 884,
            "decorators": [],
            "name": "myObj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 875,
              "end": 884,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 877,
                "end": 884
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
      "type": "IfStatement",
      "start": 888,
      "end": 1086,
      "test": {
        "type": "CallExpression",
        "start": 892,
        "end": 914,
        "callee": {
          "type": "Identifier",
          "start": 892,
          "end": 906,
          "decorators": [],
          "name": "isPlainObject2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 907,
            "end": 913,
            "decorators": [],
            "name": "myObj2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 916,
        "end": 1086,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 924,
            "end": 1082,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 929,
              "end": 938,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 935,
                  "end": 938,
                  "id": {
                    "type": "Identifier",
                    "start": 935,
                    "end": 938,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 942,
              "end": 957,
              "elements": [
                {
                  "type": "Literal",
                  "start": 943,
                  "end": 946,
                  "value": "a",
                  "raw": "\"a\""
                },
                {
                  "type": "Literal",
                  "start": 948,
                  "end": 951,
                  "value": "b",
                  "raw": "\"b\""
                },
                {
                  "type": "Literal",
                  "start": 953,
                  "end": 956,
                  "value": "c",
                  "raw": "\"c\""
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 959,
              "end": 1082,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 969,
                  "end": 996,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 975,
                      "end": 995,
                      "id": {
                        "type": "Identifier",
                        "start": 975,
                        "end": 981,
                        "decorators": [],
                        "name": "deeper",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 984,
                        "end": 995,
                        "object": {
                          "type": "Identifier",
                          "start": 984,
                          "end": 990,
                          "decorators": [],
                          "name": "myObj2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 991,
                          "end": 994,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1005,
                  "end": 1074,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1011,
                      "end": 1073,
                      "id": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1021,
                        "decorators": [],
                        "name": "deeperKeys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1024,
                        "end": 1073,
                        "test": {
                          "type": "CallExpression",
                          "start": 1024,
                          "end": 1046,
                          "callee": {
                            "type": "Identifier",
                            "start": 1024,
                            "end": 1038,
                            "decorators": [],
                            "name": "isPlainObject2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1039,
                              "end": 1045,
                              "decorators": [],
                              "name": "deeper",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "consequent": {
                          "type": "CallExpression",
                          "start": 1049,
                          "end": 1068,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1049,
                            "end": 1060,
                            "object": {
                              "type": "Identifier",
                              "start": 1049,
                              "end": 1055,
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1056,
                              "end": 1060,
                              "decorators": [],
                              "name": "keys",
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
                              "start": 1061,
                              "end": 1067,
                              "decorators": [],
                              "name": "deeper",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "alternate": {
                          "type": "ArrayExpression",
                          "start": 1071,
                          "end": 1073,
                          "elements": []
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
