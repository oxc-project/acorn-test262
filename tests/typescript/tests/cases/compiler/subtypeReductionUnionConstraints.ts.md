__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 753,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "FooNode",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Node",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "BarNode",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "FooNode",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "BarNode",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Node",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "isNode",
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
          "start": 241,
          "end": 254,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 254,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 247,
              "end": 254
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Node",
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
      "type": "TSDeclareFunction",
      "start": 271,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 293,
        "decorators": [],
        "name": "isBar",
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
          "start": 294,
          "end": 304,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                "decorators": [],
                "name": "Node",
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
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "BarNode",
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
          "decorators": [],
          "name": "visitNodes",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 362,
                "end": 366,
                "typeName": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 366,
                  "decorators": [],
                  "name": "Node",
                  "optional": false,
                  "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 368,
            "end": 389,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                      "decorators": [],
                      "name": "Document",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Node",
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
            "start": 391,
            "end": 435,
            "decorators": [],
            "name": "predicate",
            "optional": false,
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
                    "decorators": [],
                    "name": "testNode",
                    "optional": false,
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
                          "decorators": [],
                          "name": "Node",
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
                      "decorators": [],
                      "name": "testNode",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 436,
          "end": 442,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 438,
            "end": 442
          }
        },
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
                    "decorators": [],
                    "name": "isNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 456,
                      "end": 460,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
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
                    "decorators": [],
                    "name": "predicate",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 475,
                      "end": 479,
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
                  "argument": {
                    "type": "CallExpression",
                    "start": 491,
                    "end": 503,
                    "callee": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 497,
                      "decorators": [],
                      "name": "isNode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 498,
                        "end": 502,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "prefix": true
                },
                "operator": "||",
                "right": {
                  "type": "UnaryExpression",
                  "start": 507,
                  "end": 519,
                  "operator": "!",
                  "argument": {
                    "type": "CallExpression",
                    "start": 508,
                    "end": 519,
                    "callee": {
                      "type": "Identifier",
                      "start": 508,
                      "end": 513,
                      "decorators": [],
                      "name": "isBar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 514,
                        "end": 518,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "prefix": true
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 537,
                        "end": 566,
                        "id": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 550,
                          "decorators": [],
                          "name": "nodes",
                          "optional": false,
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
                                  "decorators": [],
                                  "name": "Node",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 553,
                          "end": 566,
                          "object": {
                            "type": "Identifier",
                            "start": 553,
                            "end": 557,
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 558,
                            "end": 566,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 599,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 605,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 677,
          "end": 681,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 683,
          "end": 691,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 693,
        "end": 753,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 699,
            "end": 716,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 705,
                "end": 715,
                "id": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 713,
                      "end": 714,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
