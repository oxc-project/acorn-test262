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
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 111,
          "end": 123,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
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
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 128,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 167,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 167,
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
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 150,
                "end": 162,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
            "body": {
              "type": "BlockStatement",
              "start": 164,
              "end": 167,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 211,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 211,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 178,
                "end": 188,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 188,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 190,
                "end": 203,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
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
            "body": {
              "type": "BlockStatement",
              "start": 208,
              "end": 211,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 213,
      "end": 245,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 245,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 243,
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
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 243,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 231,
                  "end": 238,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 243,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 247,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 259,
        "end": 319,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 265,
            "end": 280,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 266,
                "end": 278,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 285,
            "end": 317,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 288,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 289,
                "end": 301,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 307,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
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
            "returnType": null,
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
      "start": 321,
      "end": 374,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 374,
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 335,
                        "end": 347,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 354,
                    "end": 372,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 357,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 358,
                        "end": 370,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 362,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 376,
      "end": 494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 494,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 393,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 393,
                  "end": 411,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 394,
                      "end": 406,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 408,
                    "end": 411,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 417,
                "end": 462,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 420,
                  "end": 462,
                  "id": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 433,
                      "end": 445,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 437,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 457,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 453,
                          "end": 457,
                          "typeName": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 457,
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 459,
                    "end": 462,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 468,
                "end": 492,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 471,
                  "end": 492,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 472,
                      "end": 484,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 489,
                    "end": 492,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
