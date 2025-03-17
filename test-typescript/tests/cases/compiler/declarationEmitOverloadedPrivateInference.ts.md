__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 492,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "noArgs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 53,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 32,
            "end": 51,
            "argument": {
              "type": "TSAsExpression",
              "start": 39,
              "end": 50,
              "expression": {
                "type": "Literal",
                "start": 39,
                "end": 43,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 17,
        "end": 25,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 19,
          "end": 25
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 70,
        "name": "oneArg",
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
          "start": 71,
          "end": 84,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 119,
            "argument": {
              "type": "TSAsExpression",
              "start": 107,
              "end": 118,
              "expression": {
                "type": "Literal",
                "start": 107,
                "end": 111,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 115,
                "end": 118
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 93,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 87,
          "end": 93
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 492,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 130,
        "end": 492,
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 143,
          "name": "Wrapper",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 144,
          "end": 492,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 150,
              "end": 212,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 158,
                "end": 163,
                "name": "proxy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 163,
                "end": 212,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 170,
                    "end": 191,
                    "name": "fn",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 172,
                      "end": 191,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 174,
                        "end": 191,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 175,
                            "end": 185,
                            "name": "options",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 182,
                              "end": 185,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 184,
                                "end": 185,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 184,
                                  "end": 185,
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
                          "start": 187,
                          "end": 191,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 190,
                            "end": 191,
                            "typeName": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 191,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 163,
                  "end": 169,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 164,
                      "end": 165,
                      "name": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 167,
                      "end": 168,
                      "name": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "name": "U",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 192,
                  "end": 211,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 194,
                    "end": 211,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 195,
                        "end": 205,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 202,
                          "end": 205,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 204,
                            "end": 205,
                            "typeName": {
                              "type": "Identifier",
                              "start": 204,
                              "end": 205,
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
                      "start": 207,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 210,
                        "end": 211,
                        "typeName": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 217,
              "end": 295,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 230,
                "name": "proxy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 230,
                "end": 295,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 237,
                    "end": 259,
                    "name": "fn",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 239,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 241,
                        "end": 259,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 242,
                            "end": 253,
                            "name": "options",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 250,
                              "end": 253,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 252,
                                "end": 253,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 253,
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
                          "start": 255,
                          "end": 259,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 258,
                            "end": 259,
                            "typeName": {
                              "type": "Identifier",
                              "start": 258,
                              "end": 259,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 261,
                    "end": 273,
                    "name": "noArgs",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 267,
                      "end": 273,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 269,
                        "end": 273,
                        "literal": {
                          "type": "Literal",
                          "start": 269,
                          "end": 273,
                          "value": true,
                          "raw": "true"
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 230,
                  "end": 236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 231,
                      "end": 232,
                      "name": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 232,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 234,
                      "end": 235,
                      "name": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "name": "U",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 276,
                    "end": 294,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 277,
                        "end": 288,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 285,
                          "end": 288,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 287,
                            "end": 288,
                            "typeName": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
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
                      "start": 290,
                      "end": 294,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 293,
                        "end": 294,
                        "typeName": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 294,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 301,
              "end": 379,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 309,
                "end": 314,
                "name": "proxy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 314,
                "end": 379,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 321,
                    "end": 342,
                    "name": "fn",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 323,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 325,
                        "end": 342,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 326,
                            "end": 336,
                            "name": "options",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 336,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 335,
                                "end": 336,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 336,
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
                          "start": 338,
                          "end": 342,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 341,
                            "end": 342,
                            "typeName": {
                              "type": "Identifier",
                              "start": 341,
                              "end": 342,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                  "start": 344,
                  "end": 379,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 354,
                      "end": 373,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 361,
                        "end": 372,
                        "expression": {
                          "type": "Literal",
                          "start": 361,
                          "end": 365,
                          "value": null,
                          "raw": "null"
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 369,
                          "end": 372
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 314,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 315,
                      "end": 316,
                      "name": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 316,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 318,
                      "end": 319,
                      "name": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "name": "U",
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
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 385,
              "end": 490,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 392,
                "end": 399,
                "name": "Proxies",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 402,
                "end": 489,
                "properties": [
                  {
                    "type": "Property",
                    "start": 412,
                    "end": 445,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 419,
                      "name": "Failure",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 421,
                      "end": 445,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 421,
                        "end": 431,
                        "object": {
                          "type": "ThisExpression",
                          "start": 421,
                          "end": 425
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 431,
                          "name": "proxy",
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
                          "start": 432,
                          "end": 438,
                          "name": "noArgs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 440,
                          "end": 444,
                          "value": true,
                          "raw": "true"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 455,
                    "end": 482,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 462,
                      "name": "Success",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 464,
                      "end": 482,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 464,
                        "end": 474,
                        "object": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 474,
                          "name": "proxy",
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
                          "start": 475,
                          "end": 481,
                          "name": "oneArg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
