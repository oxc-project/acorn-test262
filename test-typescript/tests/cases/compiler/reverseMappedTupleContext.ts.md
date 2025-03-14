__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1115,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 120,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 79,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 83,
          "end": 115,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 115,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 88,
              "end": 115,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 98,
                "end": 105,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 108,
                "end": 112,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 110,
                  "end": 111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 108,
                  "end": 109,
                  "typeName": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 119,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 119,
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 134,
            "decorators": [],
            "name": "result1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 137,
            "end": 155,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 143,
                "end": 154,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 144,
                    "end": 149,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  {
                    "type": "Literal",
                    "start": 151,
                    "end": 153,
                    "raw": "42",
                    "value": 42
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 137,
              "end": 142,
              "decorators": [],
              "name": "test1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 248,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 180,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 211,
          "end": 243,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 214,
            "end": 243,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 216,
              "end": 243,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 226,
                "end": 233,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 232,
                  "end": 233,
                  "typeName": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 236,
                "end": 240,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 238,
                  "end": 239,
                  "typeName": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 236,
                  "end": 237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 244,
        "end": 247,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 246,
          "end": 247,
          "typeName": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 209,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 191,
              "end": 209,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 200,
                "end": 209,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 200,
                  "end": 207
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 262,
            "decorators": [],
            "name": "result2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 265,
            "end": 283,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 271,
                "end": 282,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 272,
                    "end": 277,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  {
                    "type": "Literal",
                    "start": 279,
                    "end": 281,
                    "raw": "42",
                    "value": 42
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 265,
              "end": 270,
              "decorators": [],
              "name": "test2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 286,
      "end": 345,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 297,
        "decorators": [],
        "name": "Schema",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 300,
        "end": 344,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 300,
            "end": 323,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 306,
              "end": 323,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 307,
                  "end": 313
                },
                {
                  "type": "TSUnknownKeyword",
                  "start": 315,
                  "end": 322
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
              "decorators": [],
              "name": "Record",
              "optional": false
            }
          },
          {
            "type": "TSTypeOperator",
            "start": 326,
            "end": 344,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 335,
              "end": 344,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 335,
                "end": 342
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 346,
      "end": 422,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 361,
        "decorators": [],
        "name": "Definition",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 367,
        "end": 421,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 377,
          "end": 384,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 383,
            "end": 384,
            "typeName": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 372,
          "end": 373,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 387,
          "end": 418,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 388,
              "end": 398,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 391,
                "end": 398,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 394,
                  "end": 398,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 397,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 394,
                    "end": 395,
                    "typeName": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 402,
              "end": 418,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 412,
                "end": 418,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 413,
                    "end": 417,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 415,
                      "end": 416,
                      "typeName": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 402,
                "end": 412,
                "decorators": [],
                "name": "Definition",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 364,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 363,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 423,
      "end": 495,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 446,
        "decorators": [],
        "name": "create",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 465,
          "end": 490,
          "decorators": [],
          "name": "definition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 475,
            "end": 490,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 477,
              "end": 490,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 487,
                "end": 490,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 488,
                    "end": 489,
                    "typeName": {
                      "type": "Identifier",
                      "start": 488,
                      "end": 489,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 477,
                "end": 487,
                "decorators": [],
                "name": "Definition",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 491,
        "end": 494,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 493,
          "end": 494,
          "typeName": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 446,
        "end": 464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 447,
            "end": 463,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 457,
              "end": 463,
              "typeName": {
                "type": "Identifier",
                "start": 457,
                "end": 463,
                "decorators": [],
                "name": "Schema",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 542,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 510,
            "decorators": [],
            "name": "created1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 513,
            "end": 542,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 520,
                "end": 541,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 521,
                    "end": 528,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 527,
                      "end": 528,
                      "raw": "1",
                      "value": 1
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 530,
                    "end": 540,
                    "elements": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 531,
                        "end": 539,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 537,
                          "end": 539,
                          "raw": "\"\"",
                          "value": ""
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 513,
              "end": 519,
              "decorators": [],
              "name": "create",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 544,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 603,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 558,
            "decorators": [],
            "name": "created2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 561,
            "end": 603,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 568,
                "end": 602,
                "properties": [
                  {
                    "type": "Property",
                    "start": 572,
                    "end": 582,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 573,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 575,
                      "end": 582,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 581,
                        "end": 582,
                        "raw": "1",
                        "value": 1
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "Property",
                    "start": 586,
                    "end": 599,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 589,
                      "end": 599,
                      "elements": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 590,
                          "end": 598,
                          "async": false,
                          "body": {
                            "type": "Literal",
                            "start": 596,
                            "end": 598,
                            "raw": "\"\"",
                            "value": ""
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 561,
              "end": 567,
              "decorators": [],
              "name": "create",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 606,
      "end": 726,
      "body": {
        "type": "TSInterfaceBody",
        "start": 632,
        "end": 726,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 636,
            "end": 667,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 656,
              "decorators": [],
              "name": "allowUnreachableCode",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 666,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 659,
                "end": 666
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 670,
            "end": 698,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 670,
              "end": 687,
              "decorators": [],
              "name": "allowUnusedLabels",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 697,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 690,
                "end": 697
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 701,
            "end": 724,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 701,
              "end": 713,
              "decorators": [],
              "name": "alwaysStrict",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 723,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 716,
                "end": 723
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 616,
        "end": 631,
        "decorators": [],
        "name": "CompilerOptions",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 727,
      "end": 801,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 750,
        "decorators": [],
        "name": "KeepLiteralStrings",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 773,
        "end": 800,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 783,
          "end": 790,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 789,
            "end": 790,
            "typeName": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 778,
          "end": 779,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 793,
          "end": 797,
          "indexType": {
            "type": "TSTypeReference",
            "start": 795,
            "end": 796,
            "typeName": {
              "type": "Identifier",
              "start": 795,
              "end": 796,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 793,
            "end": 794,
            "typeName": {
              "type": "Identifier",
              "start": 793,
              "end": 794,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 750,
        "end": 770,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 751,
            "end": 769,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 761,
              "end": 769,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 751,
              "end": 752,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 802,
      "end": 967,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 819,
        "end": 824,
        "decorators": [],
        "name": "test4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 861,
          "end": 962,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 864,
            "end": 962,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 866,
              "end": 962,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 876,
                "end": 907,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 876,
                    "end": 883,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 882,
                      "end": 883,
                      "typeName": {
                        "type": "Identifier",
                        "start": 882,
                        "end": 883,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 886,
                    "end": 907,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 892,
                      "end": 907,
                      "typeName": {
                        "type": "Identifier",
                        "start": 892,
                        "end": 907,
                        "decorators": [],
                        "name": "CompilerOptions",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 871,
                "end": 872,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 910,
                "end": 959,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 916,
                    "end": 955,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 916,
                      "end": 928,
                      "decorators": [],
                      "name": "dependencies",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 928,
                      "end": 954,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 930,
                        "end": 954,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 948,
                          "end": 954,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 949,
                              "end": 953,
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 951,
                                "end": 952,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 951,
                                  "end": 952,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 949,
                                "end": 950,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 949,
                                  "end": 950,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 930,
                          "end": 948,
                          "decorators": [],
                          "name": "KeepLiteralStrings",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 963,
        "end": 966,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 965,
          "end": 966,
          "typeName": {
            "type": "Identifier",
            "start": 965,
            "end": 966,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 824,
        "end": 860,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 825,
            "end": 859,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 835,
              "end": 859,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 841,
                "end": 859,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 842,
                    "end": 848
                  },
                  {
                    "type": "TSArrayType",
                    "start": 850,
                    "end": 858,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 850,
                      "end": 856
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 841,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 825,
              "end": 826,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 968,
      "end": 1114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 974,
          "end": 1113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 974,
            "end": 981,
            "decorators": [],
            "name": "result4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 984,
            "end": 1113,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 990,
                "end": 1112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 994,
                    "end": 1047,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 994,
                      "end": 1006,
                      "decorators": [],
                      "name": "alwaysStrict",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1008,
                      "end": 1047,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1014,
                          "end": 1042,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1014,
                            "end": 1026,
                            "decorators": [],
                            "name": "dependencies",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 1028,
                            "end": 1042,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 1029,
                                "end": 1034,
                                "raw": "\"foo\"",
                                "value": "foo"
                              },
                              {
                                "type": "Literal",
                                "start": 1036,
                                "end": 1041,
                                "raw": "\"bar\"",
                                "value": "bar"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1051,
                    "end": 1109,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1051,
                      "end": 1068,
                      "decorators": [],
                      "name": "allowUnusedLabels",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1070,
                      "end": 1109,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1076,
                          "end": 1104,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1076,
                            "end": 1088,
                            "decorators": [],
                            "name": "dependencies",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 1090,
                            "end": 1104,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 1091,
                                "end": 1096,
                                "raw": "\"baz\"",
                                "value": "baz"
                              },
                              {
                                "type": "Literal",
                                "start": 1098,
                                "end": 1103,
                                "raw": "\"qwe\"",
                                "value": "qwe"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 984,
              "end": 989,
              "decorators": [],
              "name": "test4",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
