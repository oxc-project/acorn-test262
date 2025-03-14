requiredMappedTypeModifierTrumpsVariance.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 735,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 34,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 34,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 17,
                  "end": 34,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 18,
                      "end": 33,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 20,
                          "end": 26,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 20,
                            "end": 21,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 22,
                            "end": 25,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 24,
                              "end": 25,
                              "literal": {
                                "type": "Literal",
                                "start": 24,
                                "end": 25,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 27,
                          "end": 31,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 27,
                            "end": 28,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 28,
                            "end": 31,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 30,
                              "end": 31,
                              "literal": {
                                "type": "Literal",
                                "start": 30,
                                "end": 31,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 17,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 37,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 39,
                "end": 43,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
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
                  "start": 42,
                  "end": 43,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 45,
                "end": 49,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "raw": "1",
                  "value": 1
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
      "start": 53,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 87,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 87,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 70,
                  "end": 87,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 71,
                      "end": 86,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 73,
                          "end": 79,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 75,
                            "end": 78,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 77,
                              "end": 78,
                              "literal": {
                                "type": "Literal",
                                "start": 77,
                                "end": 78,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 80,
                          "end": 84,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 80,
                            "end": 81,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 81,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 83,
                              "end": 84,
                              "literal": {
                                "type": "Literal",
                                "start": 83,
                                "end": 84,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 70,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 90,
            "end": 104,
            "properties": [
              {
                "type": "Property",
                "start": 92,
                "end": 96,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
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
                  "start": 95,
                  "end": 96,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 98,
                "end": 102,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "raw": "1",
                  "value": 1
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
      "type": "ExportNamedDeclaration",
      "start": 106,
      "end": 123,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 113,
        "end": 123,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 117,
            "end": 122,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 141,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 135,
            "end": 140,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 170,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 193,
      "expression": {
        "type": "MemberExpression",
        "start": 189,
        "end": 192,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 267,
      "expression": {
        "type": "MemberExpression",
        "start": 263,
        "end": 266,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 263,
          "end": 264,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 265,
          "end": 266,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 338,
      "end": 378,
      "body": {
        "type": "TSInterfaceBody",
        "start": 355,
        "end": 378,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 361,
            "end": 376,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 375,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 372,
                  "end": 375,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 372,
                  "decorators": [],
                  "name": "Required",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 351,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 351,
        "end": 354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 352,
            "end": 353,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
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
      "start": 379,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 409,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 389,
                "end": 409,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 392,
                  "end": 409,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 393,
                      "end": 408,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 395,
                          "end": 401,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 396,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 397,
                            "end": 400,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 399,
                              "end": 400,
                              "literal": {
                                "type": "Literal",
                                "start": 399,
                                "end": 400,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 402,
                          "end": 406,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 402,
                            "end": 403,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 403,
                            "end": 406,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 405,
                              "end": 406,
                              "literal": {
                                "type": "Literal",
                                "start": 405,
                                "end": 406,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 392,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 412,
            "end": 433,
            "properties": [
              {
                "type": "Property",
                "start": 414,
                "end": 431,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 415,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 417,
                  "end": 431,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 419,
                      "end": 423,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 419,
                        "end": 420,
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
                        "start": 422,
                        "end": 423,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 425,
                      "end": 429,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 425,
                        "end": 426,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 428,
                        "end": 429,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
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
      "start": 435,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 489,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 465,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 445,
                "end": 465,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 448,
                  "end": 465,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 449,
                      "end": 464,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 451,
                          "end": 457,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 451,
                            "end": 452,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 453,
                            "end": 456,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 455,
                              "end": 456,
                              "literal": {
                                "type": "Literal",
                                "start": 455,
                                "end": 456,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 458,
                          "end": 462,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 459,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 459,
                            "end": 462,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 461,
                              "end": 462,
                              "literal": {
                                "type": "Literal",
                                "start": 461,
                                "end": 462,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 448,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 468,
            "end": 489,
            "properties": [
              {
                "type": "Property",
                "start": 470,
                "end": 487,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 471,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 473,
                  "end": 487,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 475,
                      "end": 479,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
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
                        "start": 478,
                        "end": 479,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 481,
                      "end": 485,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 482,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 484,
                        "end": 485,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
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
      "type": "ExportNamedDeclaration",
      "start": 491,
      "end": 510,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 498,
        "end": 510,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 502,
            "end": 509,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 502,
              "end": 504,
              "decorators": [],
              "name": "AA",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 507,
              "end": 509,
              "decorators": [],
              "name": "aa",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 511,
      "end": 530,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 518,
        "end": 530,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 522,
            "end": 529,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 522,
              "end": 524,
              "decorators": [],
              "name": "BB",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "decorators": [],
              "name": "bb",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 539,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 538,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 531,
          "end": 533,
          "decorators": [],
          "name": "AA",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 536,
          "end": 538,
          "decorators": [],
          "name": "bb",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 564,
      "expression": {
        "type": "AssignmentExpression",
        "start": 556,
        "end": 563,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 556,
          "end": 558,
          "decorators": [],
          "name": "BB",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 561,
          "end": 563,
          "decorators": [],
          "name": "aa",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 582,
      "end": 589,
      "expression": {
        "type": "MemberExpression",
        "start": 582,
        "end": 588,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 582,
          "end": 586,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 582,
            "end": 584,
            "decorators": [],
            "name": "aa",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 585,
            "end": 586,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 587,
          "end": 588,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 666,
      "expression": {
        "type": "MemberExpression",
        "start": 659,
        "end": 665,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 659,
          "end": 663,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 659,
            "end": 661,
            "decorators": [],
            "name": "bb",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 662,
            "end": 663,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 664,
          "end": 665,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
