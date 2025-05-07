__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 1575,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 138,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 95,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 104,
              "end": 136,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 124,
                  "end": 128,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 127,
                      "end": 128,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 128,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 131,
                  "end": 135,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 134,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 132,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 104,
                "end": 123,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 105,
                    "end": 122,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 115,
                      "end": 122,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 121,
                        "end": 122,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 79,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 162,
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 162,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 160,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 160,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 157,
                "end": 160,
                "literal": {
                  "type": "Literal",
                  "start": 157,
                  "end": 160,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 163,
      "end": 185,
      "body": {
        "type": "TSInterfaceBody",
        "start": 175,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 183,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 180,
                "end": 183,
                "literal": {
                  "type": "Literal",
                  "start": 180,
                  "end": 183,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 223,
            "decorators": [],
            "name": "tmp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 223,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 206,
                "end": 223,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 213,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 210,
                      "end": 213,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 211,
                          "end": 212,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 212,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 210,
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 216,
                    "end": 223,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 220,
                      "end": 223,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 221,
                          "end": 222,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 222,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 220,
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "SwitchStatement",
      "start": 226,
      "end": 293,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 254,
          "end": 270,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 264,
              "end": 270,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 259,
            "end": 262,
            "raw": "'A'",
            "value": "A",
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 275,
          "end": 291,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 285,
              "end": 291,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 280,
            "end": 283,
            "raw": "'B'",
            "value": "B",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "discriminant": {
        "type": "CallExpression",
        "start": 234,
        "end": 246,
        "arguments": [
          {
            "type": "Literal",
            "start": 242,
            "end": 245,
            "raw": "'t'",
            "value": "t",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 234,
          "end": 241,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 234,
            "end": 237,
            "decorators": [],
            "name": "tmp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 238,
            "end": 241,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 387,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 387,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 368,
                "end": 387,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 368,
                    "end": 376,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 379,
                    "end": 387,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 379,
                      "end": 385
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 390,
            "end": 392,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 458,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 452,
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 452,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 444,
                "end": 452,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 444,
                  "end": 450
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 456,
            "end": 458,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 486,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 481,
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 481,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 473,
                "end": 481,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 473,
                  "end": 479
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 484,
            "end": 486,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 489,
      "end": 558,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 489,
        "end": 558,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 497,
            "end": 557,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 536,
              "end": 557,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 543,
                  "end": 555,
                  "argument": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 555,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 498,
                "end": 516,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 499,
                  "end": 516,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 501,
                    "end": 516,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 501,
                        "end": 507
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 510,
                        "end": 516
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 518,
                "end": 531,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 523,
                  "end": 531,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 525,
                    "end": 531
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 489,
          "end": 496,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 489,
            "end": 492,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 493,
            "end": 496,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 728,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 635,
        "end": 728,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 646,
            "end": 723,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 705,
              "end": 723,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 712,
                  "end": 721,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 719,
                    "end": 721,
                    "elements": []
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 647,
                "end": 665,
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 650,
                  "end": 665,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 665,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 657,
                      "end": 665,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 657,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 667,
                "end": 685,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 668,
                  "end": 685,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 670,
                    "end": 685,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 670,
                        "end": 676
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 679,
                        "end": 685
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 687,
                "end": 700,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 692,
                  "end": 700,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 694,
                    "end": 700
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrayExpression",
            "start": 725,
            "end": 727,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 635,
          "end": 645,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 635,
            "end": 638,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 639,
            "end": 645,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 730,
      "end": 803,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 730,
        "end": 803,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 742,
            "end": 802,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 781,
              "end": 802,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 788,
                  "end": 800,
                  "argument": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 800,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 743,
                "end": 761,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 744,
                  "end": 761,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 746,
                    "end": 761,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 746,
                        "end": 752
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 755,
                        "end": 761
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 763,
                "end": 776,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 768,
                  "end": 776,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 770,
                    "end": 776
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 730,
          "end": 741,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 730,
            "end": 733,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 734,
            "end": 741,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 805,
      "end": 866,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 805,
        "end": 866,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 814,
            "end": 865,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 844,
              "end": 865,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 851,
                  "end": 863,
                  "argument": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 863,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 815,
                "end": 824,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 816,
                  "end": 824,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 818,
                    "end": 824
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 826,
                "end": 839,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 831,
                  "end": 839,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 805,
          "end": 813,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 805,
            "end": 809,
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 810,
            "end": 813,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 868,
      "end": 949,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 868,
        "end": 949,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 880,
            "end": 944,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 925,
              "end": 944,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 932,
                  "end": 942,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 939,
                    "end": 942,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 940,
                        "end": 941,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 881,
                "end": 894,
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 884,
                  "end": 894,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 886,
                    "end": 894,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 886,
                      "end": 892
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 896,
                "end": 905,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 897,
                  "end": 905,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 899,
                    "end": 905
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 907,
                "end": 920,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 912,
                  "end": 920,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 914,
                    "end": 920
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrayExpression",
            "start": 946,
            "end": 948,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 868,
          "end": 879,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 868,
            "end": 872,
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 873,
            "end": 879,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 951,
      "end": 1016,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 951,
        "end": 1016,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 964,
            "end": 1015,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 994,
              "end": 1015,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1001,
                  "end": 1013,
                  "argument": {
                    "type": "Identifier",
                    "start": 1008,
                    "end": 1013,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 965,
                "end": 974,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 966,
                  "end": 974,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 968,
                    "end": 974
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 976,
                "end": 989,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 981,
                  "end": 989,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 983,
                    "end": 989
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 951,
          "end": 963,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 951,
            "end": 955,
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 956,
            "end": 963,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1017,
      "end": 1079,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1017,
        "end": 1079,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1026,
            "end": 1078,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1057,
              "end": 1078,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1064,
                  "end": 1076,
                  "argument": {
                    "type": "Identifier",
                    "start": 1071,
                    "end": 1076,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1027,
                "end": 1037,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1028,
                  "end": 1037,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1031,
                    "end": 1037
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1039,
                "end": 1052,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1044,
                  "end": 1052,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1046,
                    "end": 1052
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1017,
          "end": 1025,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1017,
            "end": 1021,
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1022,
            "end": 1025,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1081,
      "end": 1161,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1081,
        "end": 1161,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1093,
            "end": 1156,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1138,
              "end": 1156,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1145,
                  "end": 1154,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 1152,
                    "end": 1154,
                    "elements": []
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1094,
                "end": 1107,
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1097,
                  "end": 1107,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1099,
                    "end": 1107,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1099,
                      "end": 1105
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1109,
                "end": 1118,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1110,
                  "end": 1118,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1112,
                    "end": 1118
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1120,
                "end": 1133,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1125,
                  "end": 1133,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1127,
                    "end": 1133
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrayExpression",
            "start": 1158,
            "end": 1160,
            "elements": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1081,
          "end": 1092,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1081,
            "end": 1085,
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1086,
            "end": 1092,
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1163,
      "end": 1228,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1163,
        "end": 1228,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1176,
            "end": 1227,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1206,
              "end": 1227,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1213,
                  "end": 1225,
                  "argument": {
                    "type": "Identifier",
                    "start": 1220,
                    "end": 1225,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1177,
                "end": 1186,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1178,
                  "end": 1186,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1180,
                    "end": 1186
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1188,
                "end": 1201,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1193,
                  "end": 1201,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1195,
                    "end": 1201
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1163,
          "end": 1175,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1163,
            "end": 1167,
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1168,
            "end": 1175,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1292,
      "end": 1342,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1310,
        "end": 1342,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1316,
            "end": 1340,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1316,
              "end": 1323,
              "decorators": [],
              "name": "doThing",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1323,
              "end": 1340,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1325,
                "end": 1340,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1327,
                  "end": 1340,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1334,
                    "end": 1340,
                    "params": [
                      {
                        "type": "TSThisType",
                        "start": 1335,
                        "end": 1339
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1334,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1306,
        "end": 1309,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1344,
      "end": 1394,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1374,
        "end": 1394,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1380,
            "end": 1392,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1380,
              "end": 1383,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1383,
              "end": 1391,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1385,
                "end": 1391
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1361,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1370,
        "end": 1373,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1395,
      "end": 1445,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1425,
        "end": 1445,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1431,
            "end": 1443,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1431,
              "end": 1434,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1434,
              "end": 1442,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1436,
                "end": 1442
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1409,
        "end": 1412,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1421,
        "end": 1424,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1447,
      "end": 1472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1459,
          "end": 1471,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1459,
            "end": 1471,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1460,
              "end": 1471,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1462,
                "end": 1471,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1462,
                    "end": 1465,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1462,
                      "end": 1465,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1468,
                    "end": 1471,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1468,
                      "end": 1471,
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1517,
      "end": 1575,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1517,
        "end": 1574,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1534,
            "end": 1573,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1557,
              "end": 1573,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1535,
                "end": 1552,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1541,
                  "end": 1552,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1543,
                    "end": 1552,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1543,
                        "end": 1546,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1543,
                          "end": 1546,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1549,
                        "end": 1552,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1549,
                          "end": 1552,
                          "decorators": [],
                          "name": "Baz",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1517,
          "end": 1533,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 1517,
            "end": 1528,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1517,
              "end": 1526,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1517,
                "end": 1518,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1519,
                "end": 1526,
                "decorators": [],
                "name": "doThing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1529,
            "end": 1533,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
