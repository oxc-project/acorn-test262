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
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 70,
        "decorators": [],
        "name": "oneArg",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 492,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 130,
        "end": 492,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 144,
          "end": 492,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 150,
              "end": 212,
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
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 163,
                "end": 212,
                "id": null,
                "generator": false,
                "async": false,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 167,
                      "end": 168,
                      "name": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "U",
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
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 184,
                                  "end": 185,
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
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
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
                    "typeParameters": null,
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 204,
                              "end": 205,
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
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 217,
              "end": 295,
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
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 230,
                "end": 295,
                "id": null,
                "generator": false,
                "async": false,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 234,
                      "end": 235,
                      "name": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
                        "decorators": [],
                        "name": "U",
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
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 253,
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
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
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
                          "value": true,
                          "raw": "true"
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
                    "typeParameters": null,
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
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
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 301,
              "end": 379,
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
              "value": {
                "type": "FunctionExpression",
                "start": 314,
                "end": 379,
                "id": null,
                "generator": false,
                "async": false,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 318,
                      "end": 319,
                      "name": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "U",
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
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 335,
                                  "end": 336,
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
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 385,
              "end": 490,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 392,
                "end": 399,
                "decorators": [],
                "name": "Proxies",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 419,
                      "decorators": [],
                      "name": "Failure",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "proxy",
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
                          "value": true,
                          "raw": "true"
                        }
                      ],
                      "optional": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 455,
                    "end": 482,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 462,
                      "decorators": [],
                      "name": "Success",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "proxy",
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
                          "start": 475,
                          "end": 481,
                          "decorators": [],
                          "name": "oneArg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
