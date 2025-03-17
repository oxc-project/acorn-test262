__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 674,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "Bullean",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
        "name": "BulleanConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "v1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 66,
                    "end": 69
                  }
                },
                "decorators": [],
                "optional": true
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
                  "name": "Bullean",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "start": 89,
                "end": 95,
                "name": "v2",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
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
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "Ari",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
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
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 182,
                "name": "cb1",
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
                        "name": "value",
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
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "Ari",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "Ari",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "cb2",
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
                        "name": "value",
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
                      "start": 247,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 250,
                        "end": 257
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
                  "name": "Ari",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 309,
            "name": "Bullean",
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
                  "name": "BulleanConstructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 337,
            "name": "anys",
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
                  "name": "Ari",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 339,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 355,
            "name": "xs",
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
                  "name": "Ari",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "name": "xs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "anys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 371,
                "end": 377,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 378,
                "end": 385,
                "name": "Bullean",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 415,
            "name": "realanys",
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
      "start": 417,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 430,
            "name": "ys",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 438,
            "name": "ys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "realanys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 450,
                "end": 456,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 457,
                "end": 464,
                "name": "Boolean",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 484,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 486,
                      "end": 489,
                      "value": "x",
                      "raw": "'x'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 524,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 524,
            "name": "foor",
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
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 525,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 533,
            "name": "foor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 540,
                "end": 546,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 547,
                "end": 558,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 552,
                  "end": 558,
                  "object": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 558,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 584,
            "name": "foos",
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
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 593,
            "name": "foos",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 629,
                "end": 672,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 630,
                    "end": 635,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 658,
                  "end": 672,
                  "left": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 663,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "typeParameters": null,
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
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
