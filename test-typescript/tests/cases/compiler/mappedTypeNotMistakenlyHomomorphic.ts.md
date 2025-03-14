__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 555,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 17,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 11,
            "end": 12,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "ABC",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 19,
      "end": 134,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "Gen",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 45,
        "end": 134,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 45,
            "end": 54,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 47,
                "end": 52,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 51,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 61,
            "end": 132,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 61,
                "end": 95,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 76,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 70,
                        "end": 75,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 70,
                          "end": 75,
                          "left": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 73,
                            "decorators": [],
                            "name": "ABC",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 75,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 81,
                    "end": 91,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 84,
                        "end": 90
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 132,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 104,
                    "end": 113,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 107,
                        "end": 112,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 107,
                          "end": 112,
                          "left": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 110,
                            "decorators": [],
                            "name": "ABC",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 118,
                    "end": 128,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 119,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 41,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 41,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "decorators": [],
                "name": "ABC",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
      "type": "TSTypeAliasDeclaration",
      "start": 215,
      "end": 284,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 224,
        "decorators": [],
        "name": "Gen2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 242,
        "end": 283,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 259,
          "end": 271,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 265,
            "end": 271,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 268,
              "end": 271,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 270,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 270,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "decorators": [],
              "name": "Gen",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 247,
          "end": 255,
          "decorators": [],
          "name": "Property",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 274,
          "end": 280
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 224,
        "end": 239,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 225,
            "end": 238,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "decorators": [],
                "name": "ABC",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
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
      "start": 326,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 354,
            "decorators": [],
            "name": "gen2TypeA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 343,
                "end": 354,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 347,
                  "end": 354,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 348,
                      "end": 353,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 348,
                        "end": 353,
                        "left": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 351,
                          "decorators": [],
                          "name": "ABC",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 347,
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 357,
            "end": 380,
            "properties": [
              {
                "type": "Property",
                "start": 359,
                "end": 371,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 363,
                  "end": 371,
                  "raw": "\"I am A\"",
                  "value": "I am A"
                }
              },
              {
                "type": "Property",
                "start": 373,
                "end": 378,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 376,
                  "end": 378,
                  "raw": "\"\"",
                  "value": ""
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
      "start": 382,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 410,
            "decorators": [],
            "name": "gen2TypeB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 410,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 399,
                "end": 410,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 403,
                  "end": 410,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 404,
                      "end": 409,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 404,
                        "end": 409,
                        "left": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 407,
                          "decorators": [],
                          "name": "ABC",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 409,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 413,
            "end": 436,
            "properties": [
              {
                "type": "Property",
                "start": 415,
                "end": 427,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 419,
                  "end": 427,
                  "raw": "\"I am B\"",
                  "value": "I am B"
                }
              },
              {
                "type": "Property",
                "start": 429,
                "end": 434,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 430,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 432,
                  "end": 434,
                  "raw": "\"\"",
                  "value": ""
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
      "type": "TSTypeAliasDeclaration",
      "start": 450,
      "end": 477,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 456,
        "decorators": [],
        "name": "K",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 459,
        "end": 476,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 465,
          "end": 476,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 469,
            "end": 476,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 470,
                "end": 475,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 470,
                  "end": 475,
                  "left": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 473,
                    "decorators": [],
                    "name": "ABC",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 465,
            "end": 469,
            "decorators": [],
            "name": "Gen2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 485,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 511,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 511,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 511,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 511,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 504,
                  "end": 511,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 505,
                      "end": 510,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 505,
                        "end": 510,
                        "left": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 508,
                          "decorators": [],
                          "name": "ABC",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 509,
                          "end": 510,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 525,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 525,
            "end": 539,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 528,
                "end": 539,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 532,
                  "end": 539,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 533,
                      "end": 538,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 533,
                        "end": 538,
                        "left": {
                          "type": "Identifier",
                          "start": 533,
                          "end": 536,
                          "decorators": [],
                          "name": "ABC",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 538,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 532,
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 547,
      "expression": {
        "type": "AssignmentExpression",
        "start": 541,
        "end": 546,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 541,
          "end": 542,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 545,
          "end": 546,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 548,
      "end": 554,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 553,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
