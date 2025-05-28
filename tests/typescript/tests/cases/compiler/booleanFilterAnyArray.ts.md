__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 673,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Bullean",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 21,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 50,
        "decorators": [],
        "name": "BulleanConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 108,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 57,
            "end": 80,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 69,
                "decorators": [],
                "name": "v1",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 66,
                    "end": 69
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 79,
                  "decorators": [],
                  "name": "Bullean",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 85,
            "end": 106,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 85,
              "end": 88,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 86,
                  "end": 87,
                  "name": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 89,
                "end": 95,
                "decorators": [],
                "name": "v2",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 98,
                "end": 105,
                "parameterName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 100,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 105,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 110,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "Ari",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 269,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 219,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 139,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 152,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 151,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 182,
                "decorators": [],
                "name": "cb1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 156,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 158,
                    "end": 182,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 167,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 182,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 172,
                        "end": 182,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 177,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 182,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 182,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 218,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 185,
                "end": 218,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 185,
                  "end": 186,
                  "typeName": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSAnyKeyword",
                  "start": 195,
                  "end": 198
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 209,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 204,
                    "decorators": [],
                    "name": "Ari",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 204,
                    "end": 209,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 205,
                        "end": 208
                      }
                    ]
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 215,
                    "decorators": [],
                    "name": "Ari",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 215,
                    "end": 218,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 216,
                        "end": 217,
                        "typeName": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 217,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 267,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 230,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 231,
                "end": 257,
                "decorators": [],
                "name": "cb2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 234,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 236,
                    "end": 257,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 237,
                        "end": 245,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 242,
                          "end": 245,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 244,
                            "end": 245,
                            "typeName": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 245,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 250,
                        "end": 257
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 263,
                  "decorators": [],
                  "name": "Ari",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 263,
                  "end": 266,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 264,
                      "end": 265,
                      "typeName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 310,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 309,
            "decorators": [],
            "name": "Bullean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 309,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 309,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 309,
                  "decorators": [],
                  "name": "BulleanConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 338,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 337,
            "decorators": [],
            "name": "anys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 332,
                  "decorators": [],
                  "name": "Ari",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 332,
                  "end": 337,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 333,
                      "end": 336
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 356,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 355,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 347,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 350,
                  "decorators": [],
                  "name": "Ari",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 350,
                  "end": 355,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 351,
                      "end": 354
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 386,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 366,
            "end": 386,
            "callee": {
              "type": "MemberExpression",
              "start": 366,
              "end": 377,
              "object": {
                "type": "Identifier",
                "start": 366,
                "end": 370,
                "decorators": [],
                "name": "anys",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 371,
                "end": 377,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 378,
                "end": 385,
                "decorators": [],
                "name": "Bullean",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 416,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 415,
            "decorators": [],
            "name": "realanys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 415,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 410,
                "end": 415,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 410,
                  "end": 413
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 431,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 430,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 430,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 425,
                "end": 430,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 425,
                  "end": 428
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 465,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 438,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 441,
            "end": 465,
            "callee": {
              "type": "MemberExpression",
              "start": 441,
              "end": 456,
              "object": {
                "type": "Identifier",
                "start": 441,
                "end": 449,
                "decorators": [],
                "name": "realanys",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 450,
                "end": 456,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 457,
                "end": 464,
                "decorators": [],
                "name": "Boolean",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 492,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 477,
            "end": 492,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 478,
                "end": 491,
                "properties": [
                  {
                    "type": "Property",
                    "start": 480,
                    "end": 489,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 484,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 486,
                      "end": 489,
                      "value": "x",
                      "raw": "'x'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 524,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 524,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 524,
            "decorators": [],
            "name": "foor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 503,
                "end": 524,
                "typeName": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 508,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 508,
                  "end": 524,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 509,
                      "end": 523,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 510,
                          "end": 522,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 510,
                            "end": 514,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 514,
                            "end": 522,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 516,
                              "end": 522
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 525,
      "end": 559,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 533,
            "decorators": [],
            "name": "foor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 536,
            "end": 559,
            "callee": {
              "type": "MemberExpression",
              "start": 536,
              "end": 546,
              "object": {
                "type": "Identifier",
                "start": 536,
                "end": 539,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 540,
                "end": 546,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 547,
                "end": 558,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 552,
                  "end": 558,
                  "object": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 558,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 584,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 584,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 584,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 584,
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 575,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 575,
                  "end": 584,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 576,
                      "end": 583
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 593,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 596,
            "end": 673,
            "callee": {
              "type": "MemberExpression",
              "start": 596,
              "end": 628,
              "object": {
                "type": "ArrayExpression",
                "start": 596,
                "end": 621,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 597,
                    "end": 601,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 603,
                    "end": 607,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 609,
                    "end": 614,
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "start": 616,
                    "end": 620,
                    "value": null,
                    "raw": "null"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 622,
                "end": 628,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 629,
                "end": 672,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 630,
                    "end": 635,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 636,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 638,
                    "end": 654,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 643,
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 647,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 647,
                        "end": 654
                      }
                    }
                  }
                },
                "body": {
                  "type": "BinaryExpression",
                  "start": 658,
                  "end": 672,
                  "left": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 663,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 668,
                    "end": 672,
                    "value": null,
                    "raw": "null"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
