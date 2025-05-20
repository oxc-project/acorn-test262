__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 98,
  "end": 494,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 128,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 128,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 111,
          "end": 123,
          "argument": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 123,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 117,
              "end": 123
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 137,
            "end": 167,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 164,
              "end": 167,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "RestElement",
                "start": 150,
                "end": 162,
                "argument": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 177,
            "end": 211,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 208,
              "end": 211,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 178,
                "end": 188,
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 188,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 188,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 190,
                "end": 203,
                "argument": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 194,
                  "end": 203,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 196,
                    "end": 203
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 213,
      "end": 245,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 245,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 243,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 243,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 231,
                  "end": 238,
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 220,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 247,
      "end": 319,
      "body": {
        "type": "TSInterfaceBody",
        "start": 259,
        "end": 319,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 265,
            "end": 280,
            "params": [
              {
                "type": "RestElement",
                "start": 266,
                "end": 278,
                "argument": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 270,
                  "end": 278,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 272,
                    "end": 278
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 285,
            "end": 317,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 288,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 289,
                "end": 301,
                "argument": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 293,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 303,
                "end": 315,
                "argument": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 307,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 307,
                  "end": 315,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 309,
                    "end": 315
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 374,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 374,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 374,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 328,
                "end": 374,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 334,
                    "end": 349,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 335,
                        "end": 347,
                        "argument": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 339,
                          "end": 347,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 341,
                            "end": 347
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 354,
                    "end": 372,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 357,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 358,
                        "end": 370,
                        "argument": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 362,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 362,
                          "end": 370,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 364,
                            "end": 370
                          }
                        },
                        "value": null
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 384,
            "end": 494,
            "properties": [
              {
                "type": "Property",
                "start": 390,
                "end": 411,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 393,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 393,
                  "end": 411,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 408,
                    "end": 411,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 394,
                      "end": 406,
                      "argument": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 398,
                        "end": 406,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 400,
                          "end": 406
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 417,
                "end": 462,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
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
                  "type": "FunctionExpression",
                  "start": 420,
                  "end": 462,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 459,
                    "end": 462,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 433,
                      "end": 445,
                      "argument": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 437,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 437,
                        "end": 445,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 439,
                          "end": 445
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "RestElement",
                      "start": 447,
                      "end": 457,
                      "argument": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 457,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 453,
                          "end": 457,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 457,
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 468,
                "end": 492,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
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
                  "type": "ArrowFunctionExpression",
                  "start": 471,
                  "end": 492,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 489,
                    "end": 492,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 472,
                      "end": 484,
                      "argument": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 476,
                        "end": 484,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 478,
                          "end": 484
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
