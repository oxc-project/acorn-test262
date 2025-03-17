__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 778,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 43,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 0,
        "end": 43,
        "id": null,
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 43,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 33,
              "end": 41,
              "expression": {
                "type": "AwaitExpression",
                "start": 33,
                "end": 40,
                "argument": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "value": 0,
                  "raw": "0"
                }
              },
              "directive": null
            }
          ]
        },
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 8,
          "end": 23,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 10,
            "end": 23,
            "typeName": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 69,
        "name": "asyncFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 88,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 78,
            "end": 86,
            "expression": {
              "type": "AwaitExpression",
              "start": 78,
              "end": 85,
              "argument": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 110,
            "name": "asyncArrowFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 156,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 140,
              "end": 156,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 146,
                  "end": 154,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 146,
                    "end": 153,
                    "argument": {
                      "type": "Literal",
                      "start": 152,
                      "end": 153,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 130,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 182,
        "name": "asyncIIFE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 185,
        "end": 438,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 199,
            "expression": {
              "type": "AwaitExpression",
              "start": 191,
              "end": 198,
              "argument": {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 272,
            "expression": {
              "type": "AwaitExpression",
              "start": 205,
              "end": 271,
              "argument": {
                "type": "CallExpression",
                "start": 211,
                "end": 271,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 212,
                  "end": 268,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 244,
                    "end": 268,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 254,
                        "end": 262,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 254,
                          "end": 261,
                          "argument": {
                            "type": "Literal",
                            "start": 260,
                            "end": 261,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 243,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 237,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  }
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 282,
            "end": 364,
            "expression": {
              "type": "AwaitExpression",
              "start": 282,
              "end": 363,
              "argument": {
                "type": "CallExpression",
                "start": 288,
                "end": 363,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 289,
                  "end": 360,
                  "id": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 318,
                    "name": "asyncNamedFunc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 336,
                    "end": 360,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 346,
                        "end": 354,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 346,
                          "end": 353,
                          "argument": {
                            "type": "Literal",
                            "start": 352,
                            "end": 353,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 335,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 329,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  }
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 374,
            "end": 436,
            "expression": {
              "type": "AwaitExpression",
              "start": 374,
              "end": 435,
              "argument": {
                "type": "CallExpression",
                "start": 380,
                "end": 435,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 381,
                  "end": 432,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 408,
                    "end": 432,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 418,
                        "end": 426,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 418,
                          "end": 425,
                          "argument": {
                            "type": "Literal",
                            "start": 424,
                            "end": 425,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 404,
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 398,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  }
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 440,
      "end": 777,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 456,
        "name": "AsyncClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 457,
        "end": 777,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 463,
            "end": 535,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 476,
              "name": "asyncPropFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 479,
              "end": 535,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 511,
                "end": 535,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 521,
                    "end": 529,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 521,
                      "end": 528,
                      "argument": {
                        "type": "Literal",
                        "start": 527,
                        "end": 528,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 495,
                "end": 510,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 497,
                  "end": 510,
                  "typeName": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 504,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 545,
            "end": 632,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 563,
              "name": "asyncPropNamedFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 566,
              "end": 632,
              "id": {
                "type": "Identifier",
                "start": 581,
                "end": 590,
                "name": "namedFunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 608,
                "end": 632,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 618,
                    "end": 626,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 618,
                      "end": 625,
                      "argument": {
                        "type": "Literal",
                        "start": 624,
                        "end": 625,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 592,
                "end": 607,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 594,
                  "end": 607,
                  "typeName": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 601,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 638,
            "end": 710,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 638,
              "end": 656,
              "name": "asyncPropArrowFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 659,
              "end": 710,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 686,
                "end": 710,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 696,
                    "end": 704,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 696,
                      "end": 703,
                      "argument": {
                        "type": "Literal",
                        "start": 702,
                        "end": 703,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 667,
                "end": 682,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 669,
                  "end": 682,
                  "typeName": {
                    "type": "Identifier",
                    "start": 669,
                    "end": 676,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 716,
            "end": 775,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 733,
              "name": "asyncMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 733,
              "end": 775,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 775,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 761,
                    "end": 769,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 761,
                      "end": 768,
                      "argument": {
                        "type": "Literal",
                        "start": 767,
                        "end": 768,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 735,
                "end": 750,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 737,
                  "end": 750,
                  "typeName": {
                    "type": "Identifier",
                    "start": 737,
                    "end": 744,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
