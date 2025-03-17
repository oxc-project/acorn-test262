__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1160,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
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
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 75,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
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
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "name": "AA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 89,
        "end": 124,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 95,
            "end": 104,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 103,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 99,
                "end": 103
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 118,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 126,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "name": "BB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 136,
        "end": 153,
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 142,
            "end": 151,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "name": "foo",
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
          "start": 168,
          "end": 180,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 180,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 171,
              "end": 180,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 171,
                  "end": 172,
                  "typeName": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 175,
                  "end": 176,
                  "typeName": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 179,
                  "end": 180,
                  "typeName": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "name": "C",
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
          "start": 182,
          "end": 187,
          "name": "A",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 187,
                "name": "AA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 189,
          "end": 194,
          "name": "B",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 194,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 194,
                "name": "BB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 196,
          "end": 207,
          "name": "AB",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 207,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 200,
              "end": 207,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 200,
                  "end": 202,
                  "typeName": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 202,
                    "name": "AA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 205,
                  "end": 207,
                  "typeName": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 207,
                    "name": "BB",
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
        "start": 209,
        "end": 482,
        "body": [
          {
            "type": "IfStatement",
            "start": 215,
            "end": 297,
            "test": {
              "type": "BinaryExpression",
              "start": 219,
              "end": 233,
              "left": {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 235,
              "end": 259,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 245,
                  "end": 247,
                  "expression": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 246,
                    "name": "x",
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
              "start": 269,
              "end": 297,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 279,
                  "end": 281,
                  "expression": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
                    "name": "x",
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
            "type": "IfStatement",
            "start": 302,
            "end": 384,
            "test": {
              "type": "BinaryExpression",
              "start": 306,
              "end": 320,
              "left": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 319,
                "end": 320,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 322,
              "end": 346,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 332,
                  "end": 334,
                  "expression": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "name": "x",
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
              "start": 356,
              "end": 384,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 366,
                  "end": 368,
                  "expression": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "name": "x",
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
            "type": "IfStatement",
            "start": 389,
            "end": 480,
            "test": {
              "type": "BinaryExpression",
              "start": 393,
              "end": 408,
              "left": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 406,
                "end": 408,
                "name": "AB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 410,
              "end": 438,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 420,
                  "end": 422,
                  "expression": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 421,
                    "name": "x",
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
              "start": 448,
              "end": 480,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 458,
                  "end": 460,
                  "expression": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 459,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 496,
        "name": "bar",
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
          "start": 497,
          "end": 508,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 508,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 505,
              "end": 508
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 510,
          "end": 522,
          "name": "Promise",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 517,
            "end": 522,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 519,
              "end": 522
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 524,
        "end": 595,
        "body": [
          {
            "type": "IfStatement",
            "start": 530,
            "end": 593,
            "test": {
              "type": "BinaryExpression",
              "start": 534,
              "end": 559,
              "left": {
                "type": "Identifier",
                "start": 534,
                "end": 540,
                "name": "target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 552,
                "end": 559,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 561,
              "end": 593,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 571,
                  "end": 587,
                  "expression": {
                    "type": "CallExpression",
                    "start": 571,
                    "end": 586,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 571,
                      "end": 584,
                      "object": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 577,
                        "name": "target",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 584,
                        "name": "__then",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 619,
      "end": 769,
      "id": {
        "type": "Identifier",
        "start": 625,
        "end": 636,
        "name": "PersonMixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 645,
        "end": 653,
        "name": "Function",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 654,
        "end": 769,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 660,
            "end": 763,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 667,
              "end": 672,
              "name": "check",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 672,
              "end": 763,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 673,
                  "end": 679,
                  "name": "o",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 674,
                    "end": 679,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 676,
                      "end": 679
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 681,
                "end": 763,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 691,
                    "end": 757,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 698,
                      "end": 756,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 698,
                        "end": 733,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 698,
                          "end": 719,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 698,
                            "end": 706,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "Identifier",
                              "start": 705,
                              "end": 706,
                              "name": "o",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 711,
                            "end": 719,
                            "value": "object",
                            "raw": "\"object\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 723,
                          "end": 733,
                          "left": {
                            "type": "Identifier",
                            "start": 723,
                            "end": 724,
                            "name": "o",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "start": 729,
                            "end": 733,
                            "value": null,
                            "raw": "null"
                          }
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 737,
                        "end": 756,
                        "left": {
                          "type": "Identifier",
                          "start": 737,
                          "end": 738,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "start": 750,
                          "end": 756,
                          "name": "Person",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
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
            "accessibility": "public"
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
      "start": 771,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 777,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 777,
            "end": 780,
            "name": "cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 783,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 787,
              "end": 798,
              "name": "PersonMixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 803,
      "end": 900,
      "id": {
        "type": "Identifier",
        "start": 809,
        "end": 815,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 816,
        "end": 900,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 822,
            "end": 858,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 822,
              "end": 826,
              "name": "work",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 826,
              "end": 858,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 835,
                "end": 858,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 837,
                    "end": 856,
                    "expression": {
                      "type": "CallExpression",
                      "start": 837,
                      "end": 856,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 837,
                        "end": 848,
                        "object": {
                          "type": "Identifier",
                          "start": 837,
                          "end": 844,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 845,
                          "end": 848,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 849,
                          "end": 855,
                          "value": "work",
                          "raw": "\"work\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 828,
                "end": 834,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 830,
                  "end": 834
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 863,
            "end": 898,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 863,
              "end": 868,
              "name": "sayHi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 868,
              "end": 898,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 877,
                "end": 898,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 879,
                    "end": 896,
                    "expression": {
                      "type": "CallExpression",
                      "start": 879,
                      "end": 896,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 879,
                        "end": 890,
                        "object": {
                          "type": "Identifier",
                          "start": 879,
                          "end": 886,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 887,
                          "end": 890,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 891,
                          "end": 895,
                          "value": "Hi",
                          "raw": "\"Hi\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 870,
                "end": 876,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 872,
                  "end": 876
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 902,
      "end": 960,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 911,
        "name": "Car",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 912,
        "end": 960,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 918,
            "end": 958,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 918,
              "end": 923,
              "name": "sayHi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 923,
              "end": 958,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 932,
                "end": 958,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 934,
                    "end": 956,
                    "expression": {
                      "type": "CallExpression",
                      "start": 934,
                      "end": 956,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 934,
                        "end": 945,
                        "object": {
                          "type": "Identifier",
                          "start": 934,
                          "end": 941,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 942,
                          "end": 945,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 946,
                          "end": 955,
                          "value": "Wof Wof",
                          "raw": "\"Wof Wof\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 925,
                "end": 931,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 927,
                  "end": 931
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "FunctionDeclaration",
      "start": 962,
      "end": 1159,
      "id": {
        "type": "Identifier",
        "start": 971,
        "end": 975,
        "name": "test",
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
          "start": 976,
          "end": 991,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 977,
            "end": 991,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 979,
              "end": 991,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 979,
                  "end": 985,
                  "typeName": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 985,
                    "name": "Person",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 988,
                  "end": 991,
                  "typeName": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 991,
                    "name": "Car",
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
        "start": 993,
        "end": 1159,
        "body": [
          {
            "type": "IfStatement",
            "start": 999,
            "end": 1157,
            "test": {
              "type": "BinaryExpression",
              "start": 1003,
              "end": 1019,
              "left": {
                "type": "Identifier",
                "start": 1003,
                "end": 1004,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1016,
                "end": 1019,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1021,
              "end": 1091,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1031,
                  "end": 1056,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1031,
                    "end": 1055,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1031,
                      "end": 1042,
                      "object": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1038,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1039,
                        "end": 1042,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1043,
                        "end": 1054,
                        "value": "Is Person",
                        "raw": "\"Is Person\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1065,
                  "end": 1085,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1065,
                    "end": 1085,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1065,
                      "end": 1083,
                      "object": {
                        "type": "TSAsExpression",
                        "start": 1066,
                        "end": 1077,
                        "expression": {
                          "type": "Identifier",
                          "start": 1066,
                          "end": 1067,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1071,
                          "end": 1077,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1071,
                            "end": 1077,
                            "name": "Person",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1083,
                        "name": "work",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1101,
              "end": 1157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1111,
                  "end": 1132,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1111,
                    "end": 1132,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1111,
                      "end": 1122,
                      "object": {
                        "type": "Identifier",
                        "start": 1111,
                        "end": 1118,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1119,
                        "end": 1122,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1123,
                        "end": 1131,
                        "value": "Is Car",
                        "raw": "\"Is Car\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1141,
                  "end": 1151,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1141,
                    "end": 1150,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1141,
                      "end": 1148,
                      "object": {
                        "type": "Identifier",
                        "start": 1141,
                        "end": 1142,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1143,
                        "end": 1148,
                        "name": "sayHi",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
