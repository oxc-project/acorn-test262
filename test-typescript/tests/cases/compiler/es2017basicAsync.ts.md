__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 777,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 43,
      "directive": null,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 0,
        "end": 43,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 43,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 33,
              "end": 41,
              "directive": null,
              "expression": {
                "type": "AwaitExpression",
                "start": 33,
                "end": 40,
                "argument": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          ]
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 8,
          "end": 23,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 10,
            "end": 23,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 17,
              "end": 23,
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 18,
                  "end": 22
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 88,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 88,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 86,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 78,
              "end": 85,
              "argument": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 69,
        "decorators": [],
        "name": "asyncFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 110,
            "decorators": [],
            "name": "asyncArrowFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 156,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 140,
              "end": 156,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 146,
                  "end": 154,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 146,
                    "end": 153,
                    "argument": {
                      "type": "Literal",
                      "start": 152,
                      "end": 153,
                      "raw": "0",
                      "value": 0
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 130,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 131,
                      "end": 135
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 130,
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
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 438,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 185,
        "end": 438,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 199,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 191,
              "end": 198,
              "argument": {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 272,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 205,
              "end": 271,
              "argument": {
                "type": "CallExpression",
                "start": 211,
                "end": 271,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 212,
                  "end": 268,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 244,
                    "end": 268,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 254,
                        "end": 262,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 254,
                          "end": 261,
                          "argument": {
                            "type": "Literal",
                            "start": 260,
                            "end": 261,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 243,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 237,
                        "end": 243,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 238,
                            "end": 242
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 237,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 282,
            "end": 364,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 282,
              "end": 363,
              "argument": {
                "type": "CallExpression",
                "start": 288,
                "end": 363,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 289,
                  "end": 360,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 336,
                    "end": 360,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 346,
                        "end": 354,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 346,
                          "end": 353,
                          "argument": {
                            "type": "Literal",
                            "start": 352,
                            "end": 353,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 318,
                    "decorators": [],
                    "name": "asyncNamedFunc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 335,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 329,
                        "end": 335,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 330,
                            "end": 334
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 329,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 374,
            "end": 436,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 374,
              "end": 435,
              "argument": {
                "type": "CallExpression",
                "start": 380,
                "end": 435,
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 381,
                  "end": 432,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 408,
                    "end": 432,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 418,
                        "end": 426,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 418,
                          "end": 425,
                          "argument": {
                            "type": "Literal",
                            "start": 424,
                            "end": 425,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 404,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 398,
                        "end": 404,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 399,
                            "end": 403
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 398,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 182,
        "decorators": [],
        "name": "asyncIIFE",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 440,
      "end": 777,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 457,
        "end": 777,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 463,
            "end": 535,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 476,
              "decorators": [],
              "name": "asyncPropFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 479,
              "end": 535,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 511,
                "end": 535,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 521,
                    "end": 529,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 521,
                      "end": 528,
                      "argument": {
                        "type": "Literal",
                        "start": 527,
                        "end": 528,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 495,
                "end": 510,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 497,
                  "end": 510,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 504,
                    "end": 510,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 505,
                        "end": 509
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 504,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 545,
            "end": 632,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 563,
              "decorators": [],
              "name": "asyncPropNamedFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 566,
              "end": 632,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 608,
                "end": 632,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 618,
                    "end": 626,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 618,
                      "end": 625,
                      "argument": {
                        "type": "Literal",
                        "start": 624,
                        "end": 625,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 581,
                "end": 590,
                "decorators": [],
                "name": "namedFunc",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 592,
                "end": 607,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 594,
                  "end": 607,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 601,
                    "end": 607,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 602,
                        "end": 606
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 601,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 638,
            "end": 710,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 638,
              "end": 656,
              "decorators": [],
              "name": "asyncPropArrowFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 659,
              "end": 710,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 686,
                "end": 710,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 696,
                    "end": 704,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 696,
                      "end": 703,
                      "argument": {
                        "type": "Literal",
                        "start": 702,
                        "end": 703,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 667,
                "end": 682,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 669,
                  "end": 682,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 676,
                    "end": 682,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 677,
                        "end": 681
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 669,
                    "end": 676,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 716,
            "end": 775,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 733,
              "decorators": [],
              "name": "asyncMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 733,
              "end": 775,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 775,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 761,
                    "end": 769,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 761,
                      "end": 768,
                      "argument": {
                        "type": "Literal",
                        "start": 767,
                        "end": 768,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 735,
                "end": 750,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 737,
                  "end": 750,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 744,
                    "end": 750,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 745,
                        "end": 749
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 737,
                    "end": 744,
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
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 456,
        "decorators": [],
        "name": "AsyncClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
