__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 754,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "name": "FooNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 37,
        "end": 79,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 54,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 49,
                "end": 54,
                "literal": {
                  "type": "Literal",
                  "start": 49,
                  "end": 54,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 77,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 68,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 70,
                "end": 76,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 74,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 74,
                    "name": "Node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
      "start": 82,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 94,
        "name": "BarNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 97,
        "end": 117,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 107,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 114,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 109,
                "end": 114,
                "literal": {
                  "type": "Literal",
                  "start": 109,
                  "end": 114,
                  "value": "bar",
                  "raw": "'bar'"
                }
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
      "start": 119,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "name": "Node",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 131,
        "end": 148,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 131,
            "end": 138,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 138,
              "name": "FooNode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 141,
            "end": 148,
            "typeName": {
              "type": "Identifier",
              "start": 141,
              "end": 148,
              "name": "BarNode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 151,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 164,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 167,
        "end": 214,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 190,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 177,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 189,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 179,
                "end": 189,
                "literal": {
                  "type": "Literal",
                  "start": 179,
                  "end": 189,
                  "value": "document",
                  "raw": "'document'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 195,
            "end": 212,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 203,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 205,
                "end": 211,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 205,
                  "end": 209,
                  "typeName": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 209,
                    "name": "Node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
      "type": "TSDeclareFunction",
      "start": 217,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 240,
        "name": "isNode",
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
          "start": 241,
          "end": 254,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 254,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 247,
              "end": 254
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 255,
        "end": 269,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 257,
          "end": 269,
          "parameterName": {
            "type": "Identifier",
            "start": 257,
            "end": 261,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 269,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 265,
              "end": 269,
              "typeName": {
                "type": "Identifier",
                "start": 265,
                "end": 269,
                "name": "Node",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 271,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 293,
        "name": "isBar",
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
          "start": 294,
          "end": 304,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 304,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 300,
              "end": 304,
              "typeName": {
                "type": "Identifier",
                "start": 300,
                "end": 304,
                "name": "Node",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 305,
        "end": 322,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 307,
          "end": 322,
          "parameterName": {
            "type": "Identifier",
            "start": 307,
            "end": 311,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 315,
              "end": 322,
              "typeName": {
                "type": "Identifier",
                "start": 315,
                "end": 322,
                "name": "BarNode",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 325,
      "end": 575,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 332,
        "end": 575,
        "id": {
          "type": "Identifier",
          "start": 341,
          "end": 351,
          "name": "visitNodes",
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
            "start": 368,
            "end": 389,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 389,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 374,
                "end": 389,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 374,
                    "end": 382,
                    "typeName": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 382,
                      "name": "Document",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 385,
                    "end": 389,
                    "typeName": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 389,
                      "name": "Node",
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
            "start": 391,
            "end": 435,
            "name": "predicate",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 435,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 402,
                "end": 435,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 403,
                    "end": 417,
                    "name": "testNode",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 411,
                      "end": 417,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 413,
                        "end": 417,
                        "typeName": {
                          "type": "Identifier",
                          "start": 413,
                          "end": 417,
                          "name": "Node",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 419,
                  "end": 435,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 422,
                    "end": 435,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 430,
                      "name": "testNode",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 435,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 434,
                        "end": 435,
                        "typeName": {
                          "type": "Identifier",
                          "start": 434,
                          "end": 435,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 443,
          "end": 575,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 449,
              "end": 481,
              "expression": {
                "type": "LogicalExpression",
                "start": 449,
                "end": 480,
                "left": {
                  "type": "CallExpression",
                  "start": 449,
                  "end": 461,
                  "callee": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 455,
                    "name": "isNode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 456,
                      "end": 460,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "start": 465,
                  "end": 480,
                  "callee": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 474,
                    "name": "predicate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 475,
                      "end": 479,
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
            },
            {
              "type": "IfStatement",
              "start": 486,
              "end": 573,
              "test": {
                "type": "LogicalExpression",
                "start": 490,
                "end": 519,
                "left": {
                  "type": "UnaryExpression",
                  "start": 490,
                  "end": 503,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 491,
                    "end": 503,
                    "callee": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 497,
                      "name": "isNode",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 498,
                        "end": 502,
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
                "operator": "||",
                "right": {
                  "type": "UnaryExpression",
                  "start": 507,
                  "end": 519,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 508,
                    "end": 519,
                    "callee": {
                      "type": "Identifier",
                      "start": 508,
                      "end": 513,
                      "name": "isBar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 514,
                        "end": 518,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 521,
                "end": 573,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 531,
                    "end": 567,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 537,
                        "end": 566,
                        "id": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 550,
                          "name": "nodes",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 542,
                            "end": 550,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 544,
                              "end": 550,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 544,
                                "end": 548,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 544,
                                  "end": 548,
                                  "name": "Node",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 553,
                          "end": 566,
                          "object": {
                            "type": "Identifier",
                            "start": 553,
                            "end": 557,
                            "name": "node",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 558,
                            "end": 566,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 351,
          "end": 367,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 352,
              "end": 366,
              "name": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 362,
                "end": 366,
                "typeName": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 366,
                  "name": "Node",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 436,
          "end": 442,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 438,
            "end": 442
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 599,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 605,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 608,
        "end": 621,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 610,
            "end": 619,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 610,
              "end": 611,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 619,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 613,
                "end": 619
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
      "start": 623,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 629,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 632,
        "end": 645,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 634,
            "end": 643,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 634,
              "end": 635,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 643,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
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
      "type": "FunctionDeclaration",
      "start": 648,
      "end": 753,
      "id": {
        "type": "Identifier",
        "start": 657,
        "end": 659,
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
          "start": 677,
          "end": 681,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 678,
            "end": 681,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 680,
              "end": 681,
              "typeName": {
                "type": "Identifier",
                "start": 680,
                "end": 681,
                "name": "T",
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
          "start": 683,
          "end": 691,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 684,
            "end": 691,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 686,
              "end": 691,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 686,
                  "end": 687,
                  "typeName": {
                    "type": "Identifier",
                    "start": 686,
                    "end": 687,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 690,
                  "end": 691,
                  "typeName": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 691,
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
        "start": 693,
        "end": 753,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 699,
            "end": 716,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 705,
                "end": 715,
                "id": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 709,
                  "end": 715,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 710,
                      "end": 711,
                      "name": "t",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 713,
                      "end": 714,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 659,
        "end": 676,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 660,
            "end": 675,
            "name": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 670,
              "end": 675,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 670,
                  "end": 671,
                  "typeName": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 671,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 674,
                  "end": 675,
                  "typeName": {
                    "type": "Identifier",
                    "start": 674,
                    "end": 675,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
