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
      "async": false,
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
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 17,
        "end": 25,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 19,
          "end": 25
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 121,
      "async": false,
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
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 70,
        "decorators": [],
        "name": "oneArg",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 84,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 93,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 87,
          "end": 93
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 492,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 130,
        "end": 492,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 144,
          "end": 492,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 150,
              "end": 212,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 158,
                "end": 163,
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 163,
                "end": 212,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 170,
                    "end": 191,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 172,
                      "end": 191,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 174,
                        "end": 191,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 175,
                            "end": 185,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 182,
                              "end": 185,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 184,
                                "end": 185,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 184,
                                  "end": 185,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 190,
                              "end": 191,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 192,
                  "end": 211,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 194,
                    "end": 211,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 195,
                        "end": 205,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 202,
                          "end": 205,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 204,
                            "end": 205,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 204,
                              "end": 205,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 163,
                  "end": 169,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 164,
                      "end": 165,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 167,
                      "end": 168,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 217,
              "end": 295,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 230,
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 230,
                "end": 295,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 237,
                    "end": 259,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 239,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 241,
                        "end": 259,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 242,
                            "end": 253,
                            "decorators": [],
                            "name": "options",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 250,
                              "end": 253,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 252,
                                "end": 253,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 253,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 258,
                              "end": 259,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 261,
                    "end": 273,
                    "decorators": [],
                    "name": "noArgs",
                    "optional": false,
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
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 276,
                    "end": 294,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 277,
                        "end": 288,
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 285,
                          "end": 288,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 287,
                            "end": 288,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 294,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 230,
                  "end": 236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 231,
                      "end": 232,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 232,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 234,
                      "end": 235,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 301,
              "end": 379,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 309,
                "end": 314,
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 314,
                "end": 379,
                "async": false,
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
                          "raw": "null",
                          "value": null,
                          "regex": null,
                          "bigint": null
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
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 321,
                    "end": 342,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 323,
                      "end": 342,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 325,
                        "end": 342,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 326,
                            "end": 336,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 336,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 335,
                                "end": 336,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 336,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 341,
                              "end": 342,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 314,
                  "end": 320,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 315,
                      "end": 316,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 316,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 318,
                      "end": 319,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 385,
              "end": 490,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 392,
                "end": 399,
                "decorators": [],
                "name": "Proxies",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "start": 402,
                "end": 489,
                "properties": [
                  {
                    "type": "Property",
                    "start": 412,
                    "end": 445,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 419,
                      "decorators": [],
                      "name": "Failure",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 421,
                      "end": 445,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 432,
                          "end": 438,
                          "decorators": [],
                          "name": "noArgs",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 440,
                          "end": 444,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 421,
                        "end": 431,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 421,
                          "end": 425
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 431,
                          "decorators": [],
                          "name": "proxy",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 455,
                    "end": 482,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 462,
                      "decorators": [],
                      "name": "Success",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 464,
                      "end": 482,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 475,
                          "end": 481,
                          "decorators": [],
                          "name": "oneArg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 464,
                        "end": 474,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 474,
                          "decorators": [],
                          "name": "proxy",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 143,
          "decorators": [],
          "name": "Wrapper",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
