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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "ABC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 11,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 14,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 17,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 19,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "name": "Gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 41,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "name": "ABC",
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "ABC",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 75,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 81,
                    "end": 91,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 84,
                        "end": 90
                      }
                    },
                    "accessibility": null,
                    "static": false
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "ABC",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 118,
                    "end": 128,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 119,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 215,
      "end": 284,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 224,
        "name": "Gen2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "name": "ABC",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 242,
        "end": 283,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 247,
          "end": 271,
          "name": {
            "type": "Identifier",
            "start": 247,
            "end": 255,
            "name": "Property",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 259,
            "end": 271,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 265,
              "end": 271,
              "typeName": {
                "type": "Identifier",
                "start": 265,
                "end": 268,
                "name": "Gen",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 274,
          "end": 280
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 259,
          "end": 271,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 265,
            "end": 271,
            "typeName": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "name": "Gen",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 247,
          "end": 255,
          "name": "Property",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 354,
            "name": "gen2TypeA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 343,
                "end": 354,
                "typeName": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 347,
                  "name": "Gen2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "name": "ABC",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 363,
                  "end": 371,
                  "value": "I am A",
                  "raw": "\"I am A\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 373,
                "end": 378,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 376,
                  "end": 378,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 410,
            "name": "gen2TypeB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 410,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 399,
                "end": 410,
                "typeName": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "name": "Gen2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "name": "ABC",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 409,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 419,
                  "end": 427,
                  "value": "I am B",
                  "raw": "\"I am B\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 429,
                "end": 434,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 430,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 432,
                  "end": 434,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 450,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 456,
        "name": "K",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 459,
        "end": 476,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 465,
          "end": 476,
          "typeName": {
            "type": "Identifier",
            "start": 465,
            "end": 469,
            "name": "Gen2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                    "name": "ABC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 511,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 511,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 500,
                "end": 511,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "name": "Gen2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "name": "ABC",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 509,
                          "end": 510,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 525,
            "end": 539,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 528,
                "end": 539,
                "typeName": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 532,
                  "name": "Gen2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "name": "ABC",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 538,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
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
      "kind": "let",
      "declare": true
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 545,
          "end": 546,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
