__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 726,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 76,
        "name": "ComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 82,
        "end": 131,
        "checkType": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 83,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 92,
          "end": 119,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 93,
              "end": 107,
              "name": "props",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 98,
                "end": 107,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 100,
                  "end": 107,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 106,
                    "end": 107,
                    "name": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 119,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 112,
              "end": 119
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 123,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 126,
          "end": 131
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 134,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 164,
        "name": "wrapComponent",
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
          "start": 171,
          "end": 203,
          "name": "component",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 203,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 182,
              "end": 203,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 183,
                  "end": 191,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 188,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 191,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "name": "P",
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
                "start": 193,
                "end": 203,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 196,
                  "end": 203
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 206,
        "end": 229,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 208,
          "end": 229,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 209,
              "end": 217,
              "name": "props",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 214,
                "end": 217,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 216,
                  "end": 217,
                  "typeName": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "name": "P",
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
            "start": 219,
            "end": 229,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 222,
              "end": 229
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 254,
            "name": "WrappedComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 392,
            "callee": {
              "type": "Identifier",
              "start": 257,
              "end": 270,
              "name": "wrapComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 274,
                "end": 389,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 302,
                    "end": 362,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 307,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 309,
                        "end": 362,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 315,
                            "end": 334,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 315,
                              "end": 317,
                              "name": "as",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 318,
                              "end": 333,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 320,
                                "end": 333,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 320,
                                    "end": 321,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 320,
                                      "end": 321,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSUndefinedKeyword",
                                    "start": 324,
                                    "end": 333
                                  }
                                ]
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 339,
                            "end": 358,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 339,
                              "end": 348,
                              "name": "className",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 349,
                              "end": 357,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 351,
                                "end": 357
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 367,
                  "end": 389,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 373,
                      "end": 385,
                      "argument": {
                        "type": "Literal",
                        "start": 380,
                        "end": 384,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 274,
                  "end": 301,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 275,
                      "end": 300,
                      "name": {
                        "type": "Identifier",
                        "start": 275,
                        "end": 276,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 285,
                        "end": 291
                      },
                      "default": {
                        "type": "TSLiteralType",
                        "start": 294,
                        "end": 300,
                        "literal": {
                          "type": "Literal",
                          "start": 294,
                          "end": 300,
                          "value": "span",
                          "raw": "\"span\""
                        }
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 395,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 414,
        "name": "RetrievedProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 417,
        "end": 456,
        "typeName": {
          "type": "Identifier",
          "start": 417,
          "end": 431,
          "name": "ComponentProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 431,
          "end": 456,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 432,
              "end": 455,
              "exprName": {
                "type": "Identifier",
                "start": 439,
                "end": 455,
                "name": "WrappedComponent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 459,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 522,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 522,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 474,
              "end": 522,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 476,
                "end": 522,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 476,
                  "end": 479,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 477,
                      "end": 478,
                      "name": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 478,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "start": 480,
                    "end": 500,
                    "name": "f",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 481,
                      "end": 500,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 483,
                        "end": 500,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 484,
                            "end": 488,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 485,
                              "end": 488,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 487,
                                "end": 488,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 487,
                                  "end": 488,
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
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 490,
                          "end": 500,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 493,
                            "end": 500
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 502,
                  "end": 522,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 505,
                    "end": 522,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 506,
                        "end": 510,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 507,
                          "end": 510,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 509,
                            "end": 510,
                            "typeName": {
                              "type": "Identifier",
                              "start": 509,
                              "end": 510,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 512,
                      "end": 522,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 515,
                        "end": 522
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 594,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 594,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 540,
                "end": 594,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 540,
                  "end": 568,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 541,
                      "end": 567,
                      "name": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 542,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSUnknownKeyword",
                        "start": 551,
                        "end": 558
                      },
                      "default": {
                        "type": "TSStringKeyword",
                        "start": 561,
                        "end": 567
                      },
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 569,
                    "end": 582,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 582,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 572,
                        "end": 582,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 574,
                            "end": 580,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 574,
                              "end": 577,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 577,
                              "end": 580,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 579,
                                "end": 580,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 579,
                                  "end": 580,
                                  "name": "T",
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
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 584,
                  "end": 594,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 587,
                    "end": 594
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 596,
      "end": 610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 602,
          "end": 610,
          "id": {
            "type": "Identifier",
            "start": 602,
            "end": 603,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 606,
            "end": 610,
            "callee": {
              "type": "Identifier",
              "start": 606,
              "end": 607,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 608,
                "end": 609,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 612,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 631,
        "name": "FirstParameter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 631,
        "end": 634,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 633,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 637,
        "end": 684,
        "checkType": {
          "type": "TSTypeReference",
          "start": 637,
          "end": 638,
          "typeName": {
            "type": "Identifier",
            "start": 637,
            "end": 638,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 647,
          "end": 670,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 648,
              "end": 658,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 649,
                "end": 658,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 651,
                  "end": 658,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 657,
                    "end": 658,
                    "name": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 658,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 660,
            "end": 670,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 663,
              "end": 670
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 673,
          "end": 674,
          "typeName": {
            "type": "Identifier",
            "start": 673,
            "end": 674,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 677,
          "end": 684
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 685,
      "end": 725,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 691,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 694,
        "end": 725,
        "objectType": {
          "type": "TSTypeReference",
          "start": 694,
          "end": 718,
          "typeName": {
            "type": "Identifier",
            "start": 694,
            "end": 708,
            "name": "FirstParameter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 708,
            "end": 718,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 709,
                "end": 717,
                "exprName": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 717,
                  "name": "h",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 719,
          "end": 724,
          "literal": {
            "type": "Literal",
            "start": 719,
            "end": 724,
            "value": "foo",
            "raw": "'foo'"
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
