__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 803,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 148,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 65,
        "decorators": [],
        "name": "MappedModel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 91,
        "end": 147,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 103,
          "end": 114,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 114,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 118,
          "end": 133,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 118,
              "end": 121,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 122,
              "end": 125,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 131,
              "end": 133,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 121,
              "end": 122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 125,
              "end": 131,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 131,
                "decorators": [],
                "name": "Suffix",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 136,
          "end": 144,
          "indexType": {
            "type": "TSTypeReference",
            "start": 142,
            "end": 143,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 136,
            "end": 141,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 87,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 81,
              "end": 87
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 72,
              "decorators": [],
              "name": "Suffix",
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
      "start": 150,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 180,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 180,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 173,
                  "end": 180,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 174,
                      "end": 179,
                      "literal": {
                        "type": "Literal",
                        "start": 174,
                        "end": 179,
                        "raw": "'Foo'",
                        "value": "Foo"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 173,
                  "decorators": [],
                  "name": "MappedModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 183,
            "end": 209,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 197,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 189,
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 191,
                  "end": 197,
                  "raw": "'test'",
                  "value": "test"
                }
              },
              {
                "type": "Property",
                "start": 199,
                "end": 207,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 203,
                  "decorators": [],
                  "name": "bFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 205,
                  "end": 207,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 241,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 241,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 241,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 235,
                      "end": 240,
                      "literal": {
                        "type": "Literal",
                        "start": 235,
                        "end": 240,
                        "raw": "'Foo'",
                        "value": "Foo"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 234,
                  "decorators": [],
                  "name": "MappedModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 244,
            "end": 259,
            "properties": [
              {
                "type": "Property",
                "start": 246,
                "end": 257,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 250,
                  "decorators": [],
                  "name": "bFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 252,
                  "end": 257,
                  "raw": "'bar'",
                  "value": "bar"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 615,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 615,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 310,
            "end": 340,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 339,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 334,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 318,
                    "end": 334,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 320,
                      "end": 334,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 331,
                        "end": 334,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 332,
                            "end": 333,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 332,
                              "end": 333,
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
                        "start": 320,
                        "end": 331,
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 337,
                  "end": 339,
                  "raw": "42",
                  "value": 42
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 389,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 361,
                "end": 388,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 379,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 379,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 365,
                      "end": 379,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 376,
                        "end": 379,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 377,
                            "end": 378,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 378,
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
                        "start": 365,
                        "end": 376,
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 382,
                  "end": 388,
                  "raw": "'test'",
                  "value": "test"
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 441,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 410,
                "end": 440,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 428,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 428,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 428,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 425,
                        "end": 428,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 426,
                            "end": 427,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 426,
                              "end": 427,
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
                        "start": 414,
                        "end": 425,
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 431,
                  "end": 440,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 432,
                      "end": 433,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 435,
                      "end": 436,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 438,
                      "end": 439,
                      "raw": "3",
                      "value": 3
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 456,
            "end": 489,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 462,
                "end": 488,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 480,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 464,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 466,
                      "end": 480,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 477,
                        "end": 480,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 478,
                            "end": 479,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 478,
                              "end": 479,
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
                        "start": 466,
                        "end": 477,
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 483,
                  "end": 488,
                  "raw": "false",
                  "value": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 504,
            "end": 551,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 550,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 528,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 528,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 528,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 525,
                        "end": 528,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 526,
                            "end": 527,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 526,
                              "end": 527,
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
                        "start": 514,
                        "end": 525,
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 531,
                  "end": 550,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 533,
                      "end": 541,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 534,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 536,
                        "end": 541,
                        "raw": "'bar'",
                        "value": "bar"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 543,
                      "end": 548,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 544,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 546,
                        "end": 548,
                        "raw": "42",
                        "value": 42
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 566,
            "end": 603,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 572,
                "end": 602,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 590,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 590,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 576,
                      "end": 590,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 587,
                        "end": 590,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 588,
                            "end": 589,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 588,
                              "end": 589,
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
                        "start": 576,
                        "end": 587,
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 602,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 283,
        "end": 301,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 284,
            "end": 300,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 294,
              "end": 300
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
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
      "type": "TSTypeAliasDeclaration",
      "start": 639,
      "end": 706,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 655,
        "decorators": [],
        "name": "RemapRecord",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 682,
        "end": 706,
        "constraint": {
          "type": "TSNeverKeyword",
          "start": 690,
          "end": 695
        },
        "key": {
          "type": "Identifier",
          "start": 685,
          "end": 686,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 699,
          "end": 700,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 699,
            "end": 700,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 703,
          "end": 704,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 703,
            "end": 704,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 655,
        "end": 679,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 656,
            "end": 675,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 666,
              "end": 675,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 672,
                "end": 675
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 656,
              "end": 657,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 677,
            "end": 678,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 677,
              "end": 678,
              "decorators": [],
              "name": "V",
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
      "start": 707,
      "end": 786,
      "body": {
        "type": "TSInterfaceBody",
        "start": 784,
        "end": 786,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 766,
          "end": 783,
          "expression": {
            "type": "Identifier",
            "start": 766,
            "end": 777,
            "decorators": [],
            "name": "RemapRecord",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 777,
            "end": 783,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 778,
                "end": 779,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 779,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 781,
                "end": 782,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 782,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 733,
        "decorators": [],
        "name": "RecordInterface2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 733,
        "end": 757,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 734,
            "end": 753,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 744,
              "end": 753,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 750,
                "end": 753
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 755,
            "end": 756,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 755,
              "end": 756,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
