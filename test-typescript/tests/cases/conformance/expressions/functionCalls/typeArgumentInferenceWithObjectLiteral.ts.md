__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 766,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 61,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 61,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "decorators": [],
              "name": "read",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 37,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 43,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "decorators": [],
              "name": "write",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 57,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 54,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 56,
                    "end": 57,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 98,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 95,
        "end": 98,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 93,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 93,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 82,
              "end": 93,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 90,
                "end": 93,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 92,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 82,
                "end": 90,
                "decorators": [],
                "name": "Computed",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
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
      "type": "VariableDeclaration",
      "start": 100,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 113,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 264,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 263,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 210,
            "end": 262,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 220,
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 222,
                  "end": 229,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 235,
                "end": 260,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 242,
                  "end": 260,
                  "async": false,
                  "body": {
                    "type": "AssignmentExpression",
                    "start": 251,
                    "end": 260,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 252,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 260,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 242,
                      "end": 247,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 209,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 323,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 265,
        "end": 322,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 269,
            "end": 321,
            "properties": [
              {
                "type": "Property",
                "start": 275,
                "end": 300,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 280,
                  "decorators": [],
                  "name": "write",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 282,
                  "end": 300,
                  "async": false,
                  "body": {
                    "type": "AssignmentExpression",
                    "start": 291,
                    "end": 300,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 300,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 282,
                      "end": 287,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 306,
                "end": 319,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 310,
                  "decorators": [],
                  "name": "read",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 312,
                  "end": 319,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 265,
          "end": 268,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 325,
      "end": 338,
      "body": {
        "type": "TSEnumBody",
        "start": 333,
        "end": 338,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 335,
            "end": 336,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 332,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 339,
      "end": 352,
      "body": {
        "type": "TSEnumBody",
        "start": 347,
        "end": 352,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 349,
            "end": 350,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 346,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 421,
      "end": 492,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 440,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 447,
          "end": 481,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 448,
            "end": 481,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 450,
              "end": 481,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 452,
                  "end": 467,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 453,
                    "end": 466,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 455,
                      "end": 466,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 456,
                          "end": 460,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 457,
                            "end": 460,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 459,
                              "end": 460,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 460,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 462,
                        "end": 466,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 465,
                          "end": 466,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 465,
                            "end": 466,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 468,
                  "end": 479,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 469,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 478,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 471,
                      "end": 478,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 474,
                        "end": 478,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 477,
                          "end": 478,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 478,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 483,
          "end": 487,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 484,
            "end": 487,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 486,
              "end": 487,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 486,
                "end": 487,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 488,
        "end": 491,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 490,
          "end": 491,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 490,
            "end": 491,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 440,
        "end": 446,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 441,
            "end": 442,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 444,
            "end": 445,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 508,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 508,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 502,
                "end": 508
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 551,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 516,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 519,
            "end": 551,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 522,
                "end": 547,
                "properties": [
                  {
                    "type": "Property",
                    "start": 524,
                    "end": 533,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 525,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 527,
                      "end": 533,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 533,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 527,
                          "end": 528,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 535,
                    "end": 545,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 535,
                      "end": 536,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 538,
                      "end": 545,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 544,
                        "end": 545,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 549,
                "end": 550,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 519,
              "end": 521,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 553,
      "end": 598,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 557,
          "end": 597,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 557,
            "end": 559,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 562,
            "end": 597,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 565,
                "end": 590,
                "properties": [
                  {
                    "type": "Property",
                    "start": 567,
                    "end": 576,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 568,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 570,
                      "end": 576,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 576,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 570,
                          "end": 571,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 578,
                    "end": 588,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 581,
                      "end": 588,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 587,
                        "end": 588,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              {
                "type": "MemberExpression",
                "start": 592,
                "end": 596,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 594,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 596,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 562,
              "end": 564,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 603,
          "end": 643,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 603,
            "end": 605,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 608,
            "end": 643,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 611,
                "end": 639,
                "properties": [
                  {
                    "type": "Property",
                    "start": 613,
                    "end": 622,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 613,
                      "end": 614,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 616,
                      "end": 622,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 622,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 616,
                          "end": 617,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 624,
                    "end": 637,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 624,
                      "end": 625,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 627,
                      "end": 637,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 633,
                        "end": 637,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 635,
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 637,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 641,
                "end": 642,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 608,
              "end": 610,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 646,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 656,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 656,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 654,
                "end": 656,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 656,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 706,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 705,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 664,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 667,
            "end": 705,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 670,
                "end": 698,
                "properties": [
                  {
                    "type": "Property",
                    "start": 672,
                    "end": 681,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 675,
                      "end": 681,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 675,
                          "end": 676,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 683,
                    "end": 696,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 684,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 686,
                      "end": 696,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 692,
                        "end": 696,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 692,
                          "end": 694,
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 695,
                          "end": 696,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              {
                "type": "MemberExpression",
                "start": 700,
                "end": 704,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 700,
                  "end": 702,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 704,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 667,
              "end": 669,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 756,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 755,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 714,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 717,
            "end": 755,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 720,
                "end": 748,
                "properties": [
                  {
                    "type": "Property",
                    "start": 722,
                    "end": 731,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 722,
                      "end": 723,
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 725,
                      "end": 731,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 730,
                        "end": 731,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 725,
                          "end": 726,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 733,
                    "end": 746,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 733,
                      "end": 734,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 736,
                      "end": 746,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 742,
                        "end": 746,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 744,
                          "decorators": [],
                          "name": "E1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 745,
                          "end": 746,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              {
                "type": "MemberExpression",
                "start": 750,
                "end": 754,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 752,
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 754,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 717,
              "end": 719,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
