__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4245,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "StateConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 24,
              "name": "TAction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 43,
        "end": 113,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 62,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "name": "entry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 62,
                  "name": "TAction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 111,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "states",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 80,
                  "end": 110,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 109,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 100,
                        "name": "StateConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 100,
                        "end": 109,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 101,
                            "end": 108,
                            "typeName": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 108,
                              "name": "TAction",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
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
      "start": 116,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 132,
        "name": "StateSchema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 135,
        "end": 178,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 139,
            "end": 176,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "name": "states",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 154,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 154,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 163,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 174,
                        "name": "StateSchema",
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 181,
      "end": 434,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 211,
        "name": "createMachine",
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
          "start": 343,
          "end": 412,
          "name": "config",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 412,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 351,
              "end": 412,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 354,
                "end": 397,
                "name": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 359,
                  "end": 397,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 359,
                      "end": 372,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 365,
                        "end": 372,
                        "typeName": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 372,
                          "name": "TConfig",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 375,
                      "end": 397,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 381,
                        "end": 397,
                        "typeName": {
                          "type": "Identifier",
                          "start": 381,
                          "end": 392,
                          "name": "StateConfig",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 392,
                          "end": 397,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 393,
                              "end": 396
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 400,
                "end": 410,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 400,
                  "end": 407,
                  "typeName": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 407,
                    "name": "TConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 408,
                  "end": 409,
                  "typeName": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 409,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 359,
                "end": 397,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 359,
                    "end": 372,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 365,
                      "end": 372,
                      "typeName": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 372,
                        "name": "TConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 375,
                    "end": 397,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 381,
                      "end": 397,
                      "typeName": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 392,
                        "name": "StateConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 392,
                        "end": 397,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 393,
                            "end": 396
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 354,
                "end": 355,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 211,
        "end": 342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 222,
              "name": "TConfig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 231,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 231,
                "end": 242,
                "name": "StateConfig",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 242,
                "end": 251,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 250,
                      "name": "TAction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 255,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 255,
              "end": 262,
              "name": "TAction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
            },
            "default": {
              "type": "TSConditionalType",
              "start": 280,
              "end": 339,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 280,
                "end": 296,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 280,
                  "end": 287,
                  "typeName": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 287,
                    "name": "TConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 288,
                  "end": 295,
                  "literal": {
                    "type": "Literal",
                    "start": 288,
                    "end": 295,
                    "value": "entry",
                    "raw": "\"entry\""
                  }
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 314,
                "end": 330,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 314,
                  "end": 321,
                  "typeName": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 321,
                    "name": "TConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 322,
                  "end": 329,
                  "literal": {
                    "type": "Literal",
                    "start": 322,
                    "end": 329,
                    "value": "entry",
                    "raw": "\"entry\""
                  }
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 333,
                "end": 339
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 413,
        "end": 433,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 415,
          "end": 433,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 416,
              "end": 423,
              "typeName": {
                "type": "Identifier",
                "start": 416,
                "end": 423,
                "name": "TAction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 425,
              "end": 432,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 432,
                "name": "TConfig",
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
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 457,
            "name": "inferredParams1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 460,
            "end": 560,
            "callee": {
              "type": "Identifier",
              "start": 460,
              "end": 473,
              "name": "createMachine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 474,
                "end": 559,
                "properties": [
                  {
                    "type": "Property",
                    "start": 478,
                    "end": 490,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 478,
                      "end": 483,
                      "name": "entry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 485,
                      "end": 490,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 494,
                    "end": 543,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 500,
                      "name": "states",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 502,
                      "end": 543,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 508,
                          "end": 538,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 509,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 511,
                            "end": 538,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 519,
                                "end": 531,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 519,
                                  "end": 524,
                                  "name": "entry",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 526,
                                  "end": 531,
                                  "value": "bar",
                                  "raw": "\"bar\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 547,
                    "end": 556,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 552,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 554,
                      "end": 556,
                      "value": 12,
                      "raw": "12"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 563,
      "end": 688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 687,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 584,
            "name": "inferredParams2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 587,
            "end": 687,
            "callee": {
              "type": "Identifier",
              "start": 587,
              "end": 600,
              "name": "createMachine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 601,
                "end": 686,
                "properties": [
                  {
                    "type": "Property",
                    "start": 605,
                    "end": 617,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 610,
                      "name": "entry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 612,
                      "end": 617,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 621,
                    "end": 670,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 627,
                      "name": "states",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 629,
                      "end": 670,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 635,
                          "end": 665,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 635,
                            "end": 636,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 638,
                            "end": 665,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 646,
                                "end": 658,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 646,
                                  "end": 651,
                                  "name": "entry",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 653,
                                  "end": 658,
                                  "value": "foo",
                                  "raw": "\"foo\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 674,
                    "end": 683,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 679,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 681,
                      "end": 683,
                      "value": 12,
                      "raw": "12"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 785,
      "end": 878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 877,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 800,
            "name": "checkType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 803,
            "end": 877,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 812,
              "end": 877,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 826,
                  "end": 867,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 831,
                    "end": 867,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 833,
                      "end": 867,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 836,
                        "end": 858,
                        "name": {
                          "type": "Identifier",
                          "start": 836,
                          "end": 837,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSIntersectionType",
                          "start": 841,
                          "end": 858,
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "start": 841,
                              "end": 848,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 847,
                                "end": 848,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 847,
                                  "end": 848,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            {
                              "type": "TSTypeOperator",
                              "start": 851,
                              "end": 858,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 857,
                                "end": 858,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 857,
                                  "end": 858,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 861,
                        "end": 865,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 861,
                          "end": 862,
                          "typeName": {
                            "type": "Identifier",
                            "start": 861,
                            "end": 862,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 863,
                          "end": 864,
                          "typeName": {
                            "type": "Identifier",
                            "start": 863,
                            "end": 864,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSIntersectionType",
                        "start": 841,
                        "end": 858,
                        "types": [
                          {
                            "type": "TSTypeOperator",
                            "start": 841,
                            "end": 848,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 847,
                              "end": 848,
                              "typeName": {
                                "type": "Identifier",
                                "start": 847,
                                "end": 848,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSTypeOperator",
                            "start": 851,
                            "end": 858,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 857,
                              "end": 858,
                              "typeName": {
                                "type": "Identifier",
                                "start": 857,
                                "end": 858,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 836,
                        "end": 837,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 872,
                "end": 877,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 812,
                "end": 825,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 813,
                    "end": 824,
                    "name": {
                      "type": "Identifier",
                      "start": 813,
                      "end": 814,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 823,
                      "end": 824,
                      "typeName": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 824,
                        "name": "T",
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
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 803,
              "end": 806,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 804,
                  "end": 805,
                  "name": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 805,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 880,
      "end": 1018,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 886,
          "end": 1017,
          "id": {
            "type": "Identifier",
            "start": 886,
            "end": 893,
            "name": "checked",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 896,
            "end": 1017,
            "callee": {
              "type": "CallExpression",
              "start": 896,
              "end": 931,
              "callee": {
                "type": "Identifier",
                "start": 896,
                "end": 905,
                "name": "checkType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 905,
                "end": 929,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 906,
                    "end": 928,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 907,
                        "end": 917,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 907,
                          "end": 908,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 908,
                          "end": 916,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 910,
                            "end": 916
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 918,
                        "end": 927,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 918,
                          "end": 919,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 919,
                          "end": 927,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 921,
                            "end": 927
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 932,
                "end": 1016,
                "properties": [
                  {
                    "type": "Property",
                    "start": 936,
                    "end": 950,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 936,
                      "end": 937,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "start": 939,
                      "end": 950,
                      "expression": {
                        "type": "Literal",
                        "start": 939,
                        "end": 940,
                        "value": 1,
                        "raw": "1"
                      },
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 944,
                        "end": 950
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 954,
                    "end": 960,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 954,
                      "end": 955,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 957,
                      "end": 960,
                      "value": "y",
                      "raw": "\"y\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 964,
                    "end": 970,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 964,
                      "end": 965,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 967,
                      "end": 970,
                      "value": "z",
                      "raw": "\"z\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 1020,
      "end": 1028,
      "expression": {
        "type": "Identifier",
        "start": 1020,
        "end": 1027,
        "name": "checked",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1124,
      "end": 1188,
      "id": {
        "type": "Identifier",
        "start": 1134,
        "end": 1139,
        "name": "Stuff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1140,
        "end": 1188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1146,
            "end": 1160,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1146,
              "end": 1151,
              "name": "field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1151,
              "end": 1159,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1153,
                "end": 1159
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1165,
            "end": 1186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1165,
              "end": 1177,
              "name": "anotherField",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1177,
              "end": 1185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1179,
                "end": 1185
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
      "start": 1190,
      "end": 1367,
      "id": {
        "type": "Identifier",
        "start": 1199,
        "end": 1215,
        "name": "doStuffWithStuff",
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
          "start": 1233,
          "end": 1274,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1234,
            "end": 1274,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1236,
              "end": 1274,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1239,
                "end": 1265,
                "name": {
                  "type": "Identifier",
                  "start": 1239,
                  "end": 1240,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 1244,
                  "end": 1265,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 1244,
                      "end": 1251,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1250,
                        "end": 1251,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1250,
                          "end": 1251,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 1254,
                      "end": 1265,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1260,
                        "end": 1265,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1260,
                          "end": 1265,
                          "name": "Stuff",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1268,
                "end": 1272,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1268,
                  "end": 1269,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1268,
                    "end": 1269,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1270,
                  "end": 1271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1270,
                    "end": 1271,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 1244,
                "end": 1265,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 1244,
                    "end": 1251,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1250,
                      "end": 1251,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1250,
                        "end": 1251,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 1254,
                    "end": 1265,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1260,
                      "end": 1265,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1260,
                        "end": 1265,
                        "name": "Stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 1239,
                "end": 1240,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1280,
        "end": 1367,
        "body": [
          {
            "type": "IfStatement",
            "start": 1286,
            "end": 1365,
            "test": {
              "type": "BinaryExpression",
              "start": 1289,
              "end": 1308,
              "left": {
                "type": "CallExpression",
                "start": 1289,
                "end": 1302,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1289,
                  "end": 1300,
                  "object": {
                    "type": "Identifier",
                    "start": 1289,
                    "end": 1293,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1294,
                    "end": 1300,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 1305,
                "end": 1308,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1310,
              "end": 1337,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1318,
                  "end": 1331,
                  "argument": {
                    "type": "TSAsExpression",
                    "start": 1325,
                    "end": 1331,
                    "expression": {
                      "type": "Identifier",
                      "start": 1325,
                      "end": 1326,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1330,
                      "end": 1331,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1330,
                        "end": 1331,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1343,
              "end": 1365,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1351,
                  "end": 1359,
                  "argument": {
                    "type": "Identifier",
                    "start": 1358,
                    "end": 1359,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1215,
        "end": 1232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1216,
            "end": 1231,
            "name": {
              "type": "Identifier",
              "start": 1216,
              "end": 1217,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1226,
              "end": 1231,
              "typeName": {
                "type": "Identifier",
                "start": 1226,
                "end": 1231,
                "name": "Stuff",
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
        "start": 1276,
        "end": 1279,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1278,
          "end": 1279,
          "typeName": {
            "type": "Identifier",
            "start": 1278,
            "end": 1279,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1369,
      "end": 1430,
      "expression": {
        "type": "CallExpression",
        "start": 1369,
        "end": 1430,
        "callee": {
          "type": "Identifier",
          "start": 1369,
          "end": 1385,
          "name": "doStuffWithStuff",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1386,
            "end": 1429,
            "properties": [
              {
                "type": "Property",
                "start": 1388,
                "end": 1396,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1388,
                  "end": 1393,
                  "name": "field",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1395,
                  "end": 1396,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1398,
                "end": 1415,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1398,
                  "end": 1410,
                  "name": "anotherField",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1412,
                  "end": 1415,
                  "value": "a",
                  "raw": "'a'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1417,
                "end": 1427,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1422,
                  "name": "extra",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1424,
                  "end": 1427,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1432,
      "end": 1623,
      "id": {
        "type": "Identifier",
        "start": 1441,
        "end": 1460,
        "name": "doStuffWithStuffArr",
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
          "start": 1478,
          "end": 1523,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1481,
            "end": 1523,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1483,
              "end": 1523,
              "elementType": {
                "type": "TSMappedType",
                "start": 1483,
                "end": 1521,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1486,
                  "end": 1512,
                  "name": {
                    "type": "Identifier",
                    "start": 1486,
                    "end": 1487,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "start": 1491,
                    "end": 1512,
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "start": 1491,
                        "end": 1498,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1497,
                          "end": 1498,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1497,
                            "end": 1498,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "start": 1501,
                        "end": 1512,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1507,
                          "end": 1512,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1507,
                            "end": 1512,
                            "name": "Stuff",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1515,
                  "end": 1519,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1515,
                    "end": 1516,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1516,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1517,
                    "end": 1518,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1517,
                      "end": 1518,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 1491,
                  "end": 1512,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 1491,
                      "end": 1498,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1497,
                        "end": 1498,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1497,
                          "end": 1498,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 1501,
                      "end": 1512,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1507,
                        "end": 1512,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1507,
                          "end": 1512,
                          "name": "Stuff",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "key": {
                  "type": "Identifier",
                  "start": 1486,
                  "end": 1487,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "start": 1530,
        "end": 1623,
        "body": [
          {
            "type": "IfStatement",
            "start": 1536,
            "end": 1621,
            "test": {
              "type": "BinaryExpression",
              "start": 1539,
              "end": 1558,
              "left": {
                "type": "CallExpression",
                "start": 1539,
                "end": 1552,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1539,
                  "end": 1550,
                  "object": {
                    "type": "Identifier",
                    "start": 1539,
                    "end": 1543,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1544,
                    "end": 1550,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 1555,
                "end": 1558,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1560,
              "end": 1591,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1568,
                  "end": 1585,
                  "argument": {
                    "type": "TSAsExpression",
                    "start": 1575,
                    "end": 1585,
                    "expression": {
                      "type": "Identifier",
                      "start": 1575,
                      "end": 1578,
                      "name": "arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1582,
                      "end": 1585,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1582,
                        "end": 1583,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1582,
                          "end": 1583,
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
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1597,
              "end": 1621,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1605,
                  "end": 1615,
                  "argument": {
                    "type": "Identifier",
                    "start": 1612,
                    "end": 1615,
                    "name": "arr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1460,
        "end": 1477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1461,
            "end": 1476,
            "name": {
              "type": "Identifier",
              "start": 1461,
              "end": 1462,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1471,
              "end": 1476,
              "typeName": {
                "type": "Identifier",
                "start": 1471,
                "end": 1476,
                "name": "Stuff",
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
        "start": 1524,
        "end": 1529,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 1526,
          "end": 1529,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1526,
            "end": 1527,
            "typeName": {
              "type": "Identifier",
              "start": 1526,
              "end": 1527,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1625,
      "end": 1698,
      "expression": {
        "type": "CallExpression",
        "start": 1625,
        "end": 1698,
        "callee": {
          "type": "Identifier",
          "start": 1625,
          "end": 1644,
          "name": "doStuffWithStuffArr",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1645,
            "end": 1697,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 1651,
                "end": 1694,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1653,
                    "end": 1661,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1653,
                      "end": 1658,
                      "name": "field",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1660,
                      "end": 1661,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1663,
                    "end": 1680,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1663,
                      "end": 1675,
                      "name": "anotherField",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1677,
                      "end": 1680,
                      "value": "a",
                      "raw": "'a'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1682,
                    "end": 1692,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1682,
                      "end": 1687,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1689,
                      "end": 1692,
                      "value": 123,
                      "raw": "123"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1794,
      "end": 1822,
      "id": {
        "type": "Identifier",
        "start": 1799,
        "end": 1806,
        "name": "XNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1809,
        "end": 1822,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1811,
            "end": 1820,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1811,
              "end": 1812,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1812,
              "end": 1820,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1814,
                "end": 1820
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
      "start": 1824,
      "end": 1917,
      "id": {
        "type": "Identifier",
        "start": 1841,
        "end": 1844,
        "name": "foo",
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
          "start": 1864,
          "end": 1909,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1869,
            "end": 1909,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1871,
              "end": 1909,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1873,
                "end": 1901,
                "name": {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1874,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 1878,
                  "end": 1901,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 1878,
                      "end": 1885,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1884,
                        "end": 1885,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1884,
                          "end": 1885,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 1888,
                      "end": 1901,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1894,
                        "end": 1901,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1894,
                          "end": 1901,
                          "name": "XNumber",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1904,
                "end": 1908,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1904,
                  "end": 1905,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1904,
                    "end": 1905,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1906,
                  "end": 1907,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1907,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 1878,
                "end": 1901,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 1878,
                    "end": 1885,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1884,
                      "end": 1885,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1884,
                        "end": 1885,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 1888,
                    "end": 1901,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1894,
                      "end": 1901,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1894,
                        "end": 1901,
                        "name": "XNumber",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 1873,
                "end": 1874,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 1844,
        "end": 1863,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1845,
            "end": 1862,
            "name": {
              "type": "Identifier",
              "start": 1845,
              "end": 1846,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1855,
              "end": 1862,
              "typeName": {
                "type": "Identifier",
                "start": 1855,
                "end": 1862,
                "name": "XNumber",
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
        "start": 1910,
        "end": 1916,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1912,
          "end": 1916
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1919,
      "end": 2047,
      "id": {
        "type": "Identifier",
        "start": 1928,
        "end": 1931,
        "name": "bar",
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
          "start": 1932,
          "end": 1961,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1937,
            "end": 1961,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1939,
              "end": 1961,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1940,
                  "end": 1950,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1940,
                    "end": 1941,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1941,
                    "end": 1949,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1943,
                      "end": 1949
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1951,
                  "end": 1960,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1951,
                    "end": 1952,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1952,
                    "end": 1960,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1954,
                      "end": 1960
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
        "start": 1963,
        "end": 2047,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1967,
            "end": 1985,
            "argument": {
              "type": "CallExpression",
              "start": 1974,
              "end": 1984,
              "callee": {
                "type": "Identifier",
                "start": 1974,
                "end": 1977,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1978,
                  "end": 1983,
                  "name": "props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2049,
      "end": 2071,
      "expression": {
        "type": "CallExpression",
        "start": 2049,
        "end": 2070,
        "callee": {
          "type": "Identifier",
          "start": 2049,
          "end": 2052,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2053,
            "end": 2069,
            "properties": [
              {
                "type": "Property",
                "start": 2054,
                "end": 2058,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2054,
                  "end": 2055,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2057,
                  "end": 2058,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2060,
                "end": 2068,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2060,
                  "end": 2061,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2063,
                  "end": 2068,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2073,
      "end": 2100,
      "expression": {
        "type": "CallExpression",
        "start": 2073,
        "end": 2099,
        "callee": {
          "type": "Identifier",
          "start": 2073,
          "end": 2076,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2077,
            "end": 2098,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2078,
                "end": 2097,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 2081,
                  "end": 2097,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2082,
                      "end": 2086,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2082,
                        "end": 2083,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2085,
                        "end": 2086,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2088,
                      "end": 2096,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2088,
                        "end": 2089,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2091,
                        "end": 2096,
                        "value": "foo",
                        "raw": "'foo'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2256,
      "end": 2306,
      "id": {
        "type": "Identifier",
        "start": 2261,
        "end": 2278,
        "name": "NoErrWithOptProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2281,
        "end": 2306,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2283,
            "end": 2293,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2283,
              "end": 2284,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2284,
              "end": 2292,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2286,
                "end": 2292
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2294,
            "end": 2304,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2294,
              "end": 2295,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2296,
              "end": 2304,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2298,
                "end": 2304
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
      "start": 2308,
      "end": 2421,
      "id": {
        "type": "Identifier",
        "start": 2325,
        "end": 2328,
        "name": "baz",
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
          "start": 2358,
          "end": 2413,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2363,
            "end": 2413,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2365,
              "end": 2413,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2367,
                "end": 2405,
                "name": {
                  "type": "Identifier",
                  "start": 2367,
                  "end": 2368,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 2372,
                  "end": 2405,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 2372,
                      "end": 2379,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2378,
                        "end": 2379,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2378,
                          "end": 2379,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 2382,
                      "end": 2405,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2388,
                        "end": 2405,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2388,
                          "end": 2405,
                          "name": "NoErrWithOptProps",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2408,
                "end": 2412,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2408,
                  "end": 2409,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2408,
                    "end": 2409,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2410,
                  "end": 2411,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2410,
                    "end": 2411,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 2372,
                "end": 2405,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 2372,
                    "end": 2379,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2378,
                      "end": 2379,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2378,
                        "end": 2379,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 2382,
                    "end": 2405,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2388,
                      "end": 2405,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2388,
                        "end": 2405,
                        "name": "NoErrWithOptProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 2367,
                "end": 2368,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 2328,
        "end": 2357,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2329,
            "end": 2356,
            "name": {
              "type": "Identifier",
              "start": 2329,
              "end": 2330,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2339,
              "end": 2356,
              "typeName": {
                "type": "Identifier",
                "start": 2339,
                "end": 2356,
                "name": "NoErrWithOptProps",
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
        "start": 2414,
        "end": 2420,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2416,
          "end": 2420
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2423,
      "end": 2435,
      "expression": {
        "type": "CallExpression",
        "start": 2423,
        "end": 2434,
        "callee": {
          "type": "Identifier",
          "start": 2423,
          "end": 2426,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2427,
            "end": 2433,
            "properties": [
              {
                "type": "Property",
                "start": 2428,
                "end": 2432,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2428,
                  "end": 2429,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2431,
                  "end": 2432,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2436,
      "end": 2456,
      "expression": {
        "type": "CallExpression",
        "start": 2436,
        "end": 2455,
        "callee": {
          "type": "Identifier",
          "start": 2436,
          "end": 2439,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2440,
            "end": 2454,
            "properties": [
              {
                "type": "Property",
                "start": 2441,
                "end": 2445,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2441,
                  "end": 2442,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2444,
                  "end": 2445,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2447,
                "end": 2453,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2447,
                  "end": 2448,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2450,
                  "end": 2453,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2457,
      "end": 2479,
      "expression": {
        "type": "CallExpression",
        "start": 2457,
        "end": 2478,
        "callee": {
          "type": "Identifier",
          "start": 2457,
          "end": 2460,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2461,
            "end": 2477,
            "properties": [
              {
                "type": "Property",
                "start": 2462,
                "end": 2466,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2462,
                  "end": 2463,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2465,
                  "end": 2466,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2468,
                "end": 2476,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2468,
                  "end": 2469,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2471,
                  "end": 2476,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2480,
      "end": 2510,
      "expression": {
        "type": "CallExpression",
        "start": 2480,
        "end": 2509,
        "callee": {
          "type": "Identifier",
          "start": 2480,
          "end": 2483,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2484,
            "end": 2508,
            "properties": [
              {
                "type": "Property",
                "start": 2485,
                "end": 2489,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2485,
                  "end": 2486,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2488,
                  "end": 2489,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2491,
                "end": 2499,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2491,
                  "end": 2492,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2494,
                  "end": 2499,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2501,
                "end": 2507,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2501,
                  "end": 2502,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2504,
                  "end": 2507,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2606,
      "end": 2684,
      "id": {
        "type": "Identifier",
        "start": 2616,
        "end": 2630,
        "name": "WithNestedProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2631,
        "end": 2684,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2635,
            "end": 2648,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2635,
              "end": 2639,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2639,
              "end": 2647,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2641,
                "end": 2647
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2651,
            "end": 2682,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2651,
              "end": 2657,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2657,
              "end": 2682,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2659,
                "end": 2682,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2665,
                    "end": 2678,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2665,
                      "end": 2669,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2669,
                      "end": 2677,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2671,
                        "end": 2677
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 2686,
      "end": 2801,
      "id": {
        "type": "Identifier",
        "start": 2703,
        "end": 2717,
        "name": "withNestedProp",
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
          "start": 2744,
          "end": 2796,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2749,
            "end": 2796,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2751,
              "end": 2796,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2753,
                "end": 2788,
                "name": {
                  "type": "Identifier",
                  "start": 2753,
                  "end": 2754,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 2758,
                  "end": 2788,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 2758,
                      "end": 2765,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2764,
                        "end": 2765,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2764,
                          "end": 2765,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 2768,
                      "end": 2788,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2774,
                        "end": 2788,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2774,
                          "end": 2788,
                          "name": "WithNestedProp",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2791,
                "end": 2795,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2791,
                  "end": 2792,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2791,
                    "end": 2792,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2793,
                  "end": 2794,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2793,
                    "end": 2794,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 2758,
                "end": 2788,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 2758,
                    "end": 2765,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2764,
                      "end": 2765,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2764,
                        "end": 2765,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 2768,
                    "end": 2788,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2774,
                      "end": 2788,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2774,
                        "end": 2788,
                        "name": "WithNestedProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 2753,
                "end": 2754,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 2717,
        "end": 2743,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2718,
            "end": 2742,
            "name": {
              "type": "Identifier",
              "start": 2718,
              "end": 2719,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2728,
              "end": 2742,
              "typeName": {
                "type": "Identifier",
                "start": 2728,
                "end": 2742,
                "name": "WithNestedProp",
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
        "start": 2797,
        "end": 2800,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2799,
          "end": 2800,
          "typeName": {
            "type": "Identifier",
            "start": 2799,
            "end": 2800,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2803,
      "end": 2882,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2809,
          "end": 2881,
          "id": {
            "type": "Identifier",
            "start": 2809,
            "end": 2812,
            "name": "wnp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2815,
            "end": 2881,
            "callee": {
              "type": "Identifier",
              "start": 2815,
              "end": 2829,
              "name": "withNestedProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2830,
                "end": 2880,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2831,
                    "end": 2842,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2831,
                      "end": 2835,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2837,
                      "end": 2842,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2844,
                    "end": 2867,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2844,
                      "end": 2850,
                      "name": "nested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2852,
                      "end": 2867,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2854,
                          "end": 2865,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2854,
                            "end": 2858,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2860,
                            "end": 2865,
                            "value": "bar",
                            "raw": "'bar'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2869,
                    "end": 2878,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2869,
                      "end": 2874,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2876,
                      "end": 2878,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 2978,
      "end": 3051,
      "id": {
        "type": "Identifier",
        "start": 2983,
        "end": 2998,
        "name": "IsLiteralString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2998,
        "end": 3016,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2999,
            "end": 3015,
            "name": {
              "type": "Identifier",
              "start": 2999,
              "end": 3000,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3009,
              "end": 3015
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3019,
        "end": 3050,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 3019,
          "end": 3025
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3034,
          "end": 3035,
          "typeName": {
            "type": "Identifier",
            "start": 3034,
            "end": 3035,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 3038,
          "end": 3043,
          "literal": {
            "type": "Literal",
            "start": 3038,
            "end": 3043,
            "value": false,
            "raw": "false"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 3046,
          "end": 3050,
          "literal": {
            "type": "Literal",
            "start": 3046,
            "end": 3050,
            "value": true,
            "raw": "true"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3053,
      "end": 3149,
      "id": {
        "type": "Identifier",
        "start": 3058,
        "end": 3070,
        "name": "DeepWritable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3070,
        "end": 3073,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3071,
            "end": 3072,
            "name": {
              "type": "Identifier",
              "start": 3071,
              "end": 3072,
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
        "start": 3076,
        "end": 3149,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3076,
          "end": 3077,
          "typeName": {
            "type": "Identifier",
            "start": 3076,
            "end": 3077,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3086,
          "end": 3094,
          "typeName": {
            "type": "Identifier",
            "start": 3086,
            "end": 3094,
            "name": "Function",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3097,
          "end": 3098,
          "typeName": {
            "type": "Identifier",
            "start": 3097,
            "end": 3098,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSMappedType",
          "start": 3101,
          "end": 3149,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3114,
            "end": 3126,
            "name": {
              "type": "Identifier",
              "start": 3114,
              "end": 3115,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3119,
              "end": 3126,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3125,
                "end": 3126,
                "typeName": {
                  "type": "Identifier",
                  "start": 3125,
                  "end": 3126,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3129,
            "end": 3147,
            "typeName": {
              "type": "Identifier",
              "start": 3129,
              "end": 3141,
              "name": "DeepWritable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3141,
              "end": 3147,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 3142,
                  "end": 3146,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3142,
                    "end": 3143,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3142,
                      "end": 3143,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3144,
                    "end": 3145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3144,
                      "end": 3145,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": null,
          "readonly": "-",
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3119,
            "end": 3126,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3125,
              "end": 3126,
              "typeName": {
                "type": "Identifier",
                "start": 3125,
                "end": 3126,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3114,
            "end": 3115,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3151,
      "end": 3226,
      "id": {
        "type": "Identifier",
        "start": 3161,
        "end": 3174,
        "name": "ProvidedActor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3175,
        "end": 3226,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3179,
            "end": 3191,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3179,
              "end": 3182,
              "name": "src",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3182,
              "end": 3190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3184,
                "end": 3190
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3194,
            "end": 3224,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3194,
              "end": 3199,
              "name": "logic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3199,
              "end": 3223,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3201,
                "end": 3223,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3204,
                  "end": 3223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3207,
                    "end": 3223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3207,
                      "end": 3214,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3214,
                      "end": 3223,
                      "params": [
                        {
                          "type": "TSUnknownKeyword",
                          "start": 3215,
                          "end": 3222
                        }
                      ]
                    }
                  }
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
      "start": 3228,
      "end": 3334,
      "id": {
        "type": "Identifier",
        "start": 3233,
        "end": 3249,
        "name": "DistributeActors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3249,
        "end": 3257,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3250,
            "end": 3256,
            "name": {
              "type": "Identifier",
              "start": 3250,
              "end": 3256,
              "name": "TActor",
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
        "start": 3260,
        "end": 3333,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3260,
          "end": 3266,
          "typeName": {
            "type": "Identifier",
            "start": 3260,
            "end": 3266,
            "name": "TActor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 3275,
          "end": 3294,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 3277,
              "end": 3292,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3277,
                "end": 3280,
                "name": "src",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3280,
                "end": 3292,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 3282,
                  "end": 3292,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 3288,
                    "end": 3292,
                    "name": {
                      "type": "Identifier",
                      "start": 3288,
                      "end": 3292,
                      "name": "TSrc",
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
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 3299,
          "end": 3323,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 3307,
              "end": 3317,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3307,
                "end": 3310,
                "name": "src",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3310,
                "end": 3316,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3312,
                  "end": 3316,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3312,
                    "end": 3316,
                    "name": "TSrc",
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
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3328,
          "end": 3333
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3336,
      "end": 3554,
      "id": {
        "type": "Identifier",
        "start": 3346,
        "end": 3359,
        "name": "MachineConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3359,
        "end": 3389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3360,
            "end": 3388,
            "name": {
              "type": "Identifier",
              "start": 3360,
              "end": 3366,
              "name": "TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3375,
              "end": 3388,
              "typeName": {
                "type": "Identifier",
                "start": 3375,
                "end": 3388,
                "name": "ProvidedActor",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 3390,
        "end": 3554,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3394,
            "end": 3429,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3394,
              "end": 3399,
              "name": "types",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3400,
              "end": 3428,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3402,
                "end": 3428,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3408,
                    "end": 3424,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3408,
                      "end": 3414,
                      "name": "actors",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3415,
                      "end": 3423,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3417,
                        "end": 3423,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3417,
                          "end": 3423,
                          "name": "TActor",
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3432,
            "end": 3552,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3432,
              "end": 3438,
              "name": "invoke",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3438,
              "end": 3551,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 3440,
                "end": 3551,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 3440,
                  "end": 3470,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3440,
                    "end": 3455,
                    "name": "IsLiteralString",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3455,
                    "end": 3470,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 3456,
                        "end": 3469,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 3456,
                          "end": 3462,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3456,
                            "end": 3462,
                            "name": "TActor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 3463,
                          "end": 3468,
                          "literal": {
                            "type": "Literal",
                            "start": 3463,
                            "end": 3468,
                            "value": "src",
                            "raw": "\"src\""
                          }
                        }
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "start": 3479,
                  "end": 3483,
                  "literal": {
                    "type": "Literal",
                    "start": 3479,
                    "end": 3483,
                    "value": true,
                    "raw": "true"
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 3490,
                  "end": 3514,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3490,
                    "end": 3506,
                    "name": "DistributeActors",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3506,
                    "end": 3514,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3507,
                        "end": 3513,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3507,
                          "end": 3513,
                          "name": "TActor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "falseType": {
                  "type": "TSTypeLiteral",
                  "start": 3521,
                  "end": 3551,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3531,
                      "end": 3543,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3531,
                        "end": 3534,
                        "name": "src",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3534,
                        "end": 3542,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3536,
                          "end": 3542
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
      "start": 3556,
      "end": 3645,
      "id": {
        "type": "Identifier",
        "start": 3561,
        "end": 3568,
        "name": "NoExtra",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3568,
        "end": 3571,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3569,
            "end": 3570,
            "name": {
              "type": "Identifier",
              "start": 3569,
              "end": 3570,
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
        "type": "TSMappedType",
        "start": 3574,
        "end": 3645,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 3579,
          "end": 3591,
          "name": {
            "type": "Identifier",
            "start": 3579,
            "end": 3580,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3584,
            "end": 3591,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3590,
              "end": 3591,
              "typeName": {
                "type": "Identifier",
                "start": 3590,
                "end": 3591,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 3594,
          "end": 3643,
          "checkType": {
            "type": "TSTypeReference",
            "start": 3594,
            "end": 3595,
            "typeName": {
              "type": "Identifier",
              "start": 3594,
              "end": 3595,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 3604,
            "end": 3628,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3610,
              "end": 3628,
              "typeName": {
                "type": "Identifier",
                "start": 3610,
                "end": 3623,
                "name": "MachineConfig",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3623,
                "end": 3628,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 3624,
                    "end": 3627
                  }
                ]
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 3631,
            "end": 3635,
            "objectType": {
              "type": "TSTypeReference",
              "start": 3631,
              "end": 3632,
              "typeName": {
                "type": "Identifier",
                "start": 3631,
                "end": 3632,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 3633,
              "end": 3634,
              "typeName": {
                "type": "Identifier",
                "start": 3633,
                "end": 3634,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3638,
            "end": 3643
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3584,
          "end": 3591,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3590,
            "end": 3591,
            "typeName": {
              "type": "Identifier",
              "start": 3590,
              "end": 3591,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3579,
          "end": 3580,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3647,
      "end": 3941,
      "id": {
        "type": "Identifier",
        "start": 3664,
        "end": 3678,
        "name": "createXMachine",
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
          "start": 3860,
          "end": 3930,
          "name": "config",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3866,
            "end": 3930,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3868,
              "end": 3930,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3870,
                "end": 3915,
                "name": {
                  "type": "Identifier",
                  "start": 3870,
                  "end": 3871,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "start": 3875,
                  "end": 3915,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 3875,
                      "end": 3899,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3881,
                        "end": 3899,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3881,
                          "end": 3894,
                          "name": "MachineConfig",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3894,
                          "end": 3899,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 3895,
                              "end": 3898
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 3902,
                      "end": 3915,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3908,
                        "end": 3915,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3908,
                          "end": 3915,
                          "name": "TConfig",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3918,
                "end": 3928,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3918,
                  "end": 3925,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3918,
                    "end": 3925,
                    "name": "TConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3926,
                  "end": 3927,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3926,
                    "end": 3927,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSIntersectionType",
                "start": 3875,
                "end": 3915,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 3875,
                    "end": 3899,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3881,
                      "end": 3899,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3881,
                        "end": 3894,
                        "name": "MachineConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3894,
                        "end": 3899,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 3895,
                            "end": 3898
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 3902,
                    "end": 3915,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3908,
                      "end": 3915,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3908,
                        "end": 3915,
                        "name": "TConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "key": {
                "type": "Identifier",
                "start": 3870,
                "end": 3871,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 3678,
        "end": 3859,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3682,
            "end": 3725,
            "name": {
              "type": "Identifier",
              "start": 3688,
              "end": 3695,
              "name": "TConfig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3704,
              "end": 3725,
              "typeName": {
                "type": "Identifier",
                "start": 3704,
                "end": 3717,
                "name": "MachineConfig",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3717,
                "end": 3725,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3718,
                    "end": 3724,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3718,
                      "end": 3724,
                      "name": "TActor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          },
          {
            "type": "TSTypeParameter",
            "start": 3729,
            "end": 3856,
            "name": {
              "type": "Identifier",
              "start": 3729,
              "end": 3735,
              "name": "TActor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3744,
              "end": 3757,
              "typeName": {
                "type": "Identifier",
                "start": 3744,
                "end": 3757,
                "name": "ProvidedActor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSConditionalType",
              "start": 3760,
              "end": 3856,
              "checkType": {
                "type": "TSTypeReference",
                "start": 3760,
                "end": 3767,
                "typeName": {
                  "type": "Identifier",
                  "start": 3760,
                  "end": 3767,
                  "name": "TConfig",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "start": 3776,
                "end": 3811,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3778,
                    "end": 3809,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3778,
                      "end": 3783,
                      "name": "types",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3783,
                      "end": 3809,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3785,
                        "end": 3809,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3787,
                            "end": 3808,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3787,
                              "end": 3793,
                              "name": "actors",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3793,
                              "end": 3808,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3795,
                                "end": 3808,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3795,
                                  "end": 3808,
                                  "name": "ProvidedActor",
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
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 3814,
                "end": 3840,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 3814,
                  "end": 3830,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3814,
                    "end": 3821,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3814,
                      "end": 3821,
                      "name": "TConfig",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 3822,
                    "end": 3829,
                    "literal": {
                      "type": "Literal",
                      "start": 3822,
                      "end": 3829,
                      "value": "types",
                      "raw": "\"types\""
                    }
                  }
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3831,
                  "end": 3839,
                  "literal": {
                    "type": "Literal",
                    "start": 3831,
                    "end": 3839,
                    "value": "actors",
                    "raw": "\"actors\""
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 3843,
                "end": 3856,
                "typeName": {
                  "type": "Identifier",
                  "start": 3843,
                  "end": 3856,
                  "name": "ProvidedActor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3931,
        "end": 3940,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3933,
          "end": 3940,
          "typeName": {
            "type": "Identifier",
            "start": 3933,
            "end": 3940,
            "name": "TConfig",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3943,
      "end": 3986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3949,
          "end": 3985,
          "id": {
            "type": "Identifier",
            "start": 3949,
            "end": 3954,
            "name": "child",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3957,
            "end": 3985,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 3963,
              "end": 3985,
              "callee": {
                "type": "MemberExpression",
                "start": 3963,
                "end": 3978,
                "object": {
                  "type": "Identifier",
                  "start": 3963,
                  "end": 3970,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3971,
                  "end": 3978,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 3979,
                  "end": 3984,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3988,
      "end": 4156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3994,
          "end": 4155,
          "id": {
            "type": "Identifier",
            "start": 3994,
            "end": 4000,
            "name": "config",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4003,
            "end": 4155,
            "callee": {
              "type": "Identifier",
              "start": 4003,
              "end": 4017,
              "name": "createXMachine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4018,
                "end": 4154,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4022,
                    "end": 4106,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4022,
                      "end": 4027,
                      "name": "types",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "start": 4029,
                      "end": 4106,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 4029,
                        "end": 4031,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 4035,
                        "end": 4106,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 4041,
                            "end": 4102,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4041,
                              "end": 4047,
                              "name": "actors",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4047,
                              "end": 4101,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 4049,
                                "end": 4101,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 4057,
                                    "end": 4068,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 4057,
                                      "end": 4060,
                                      "name": "src",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 4060,
                                      "end": 4067,
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "start": 4062,
                                        "end": 4067,
                                        "literal": {
                                          "type": "Literal",
                                          "start": 4062,
                                          "end": 4067,
                                          "value": "str",
                                          "raw": "\"str\""
                                        }
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 4075,
                                    "end": 4095,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 4075,
                                      "end": 4080,
                                      "name": "logic",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 4080,
                                      "end": 4094,
                                      "typeAnnotation": {
                                        "type": "TSTypeQuery",
                                        "start": 4082,
                                        "end": 4094,
                                        "exprName": {
                                          "type": "Identifier",
                                          "start": 4089,
                                          "end": 4094,
                                          "name": "child",
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
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4110,
                    "end": 4139,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4110,
                      "end": 4116,
                      "name": "invoke",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4118,
                      "end": 4139,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4124,
                          "end": 4134,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4124,
                            "end": 4127,
                            "name": "src",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4129,
                            "end": 4134,
                            "value": "str",
                            "raw": "\"str\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4143,
                    "end": 4152,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4143,
                      "end": 4148,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4150,
                      "end": 4152,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 4158,
      "end": 4244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4164,
          "end": 4243,
          "id": {
            "type": "Identifier",
            "start": 4164,
            "end": 4171,
            "name": "config2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4174,
            "end": 4243,
            "callee": {
              "type": "Identifier",
              "start": 4174,
              "end": 4188,
              "name": "createXMachine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4189,
                "end": 4242,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4193,
                    "end": 4227,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4193,
                      "end": 4199,
                      "name": "invoke",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4201,
                      "end": 4227,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4207,
                          "end": 4222,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4207,
                            "end": 4210,
                            "name": "src",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4212,
                            "end": 4222,
                            "value": "whatever",
                            "raw": "\"whatever\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4231,
                    "end": 4240,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4231,
                      "end": 4236,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4238,
                      "end": 4240,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
