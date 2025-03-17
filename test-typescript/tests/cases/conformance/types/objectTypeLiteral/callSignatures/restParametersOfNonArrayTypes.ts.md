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
          "type": "RestElement",
          "start": 111,
          "end": 123,
          "argument": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 128,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 137,
            "end": 167,
            "id": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
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
                "type": "RestElement",
                "start": 150,
                "end": 162,
                "argument": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "body": {
              "type": "BlockStatement",
              "start": 164,
              "end": 167,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 177,
            "end": 211,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 178,
                "end": 188,
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 188,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "argument": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "body": {
              "type": "BlockStatement",
              "start": 208,
              "end": 211,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 213,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 220,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 245,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 243,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 243,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 231,
                  "end": 238,
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 243,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 247,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "argument": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "foo",
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
                "type": "RestElement",
                "start": 289,
                "end": 301,
                "argument": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 374,
            "name": "a",
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
                        "argument": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                      "name": "foo",
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
                        "type": "RestElement",
                        "start": 358,
                        "end": 370,
                        "argument": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 362,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 376,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 393,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 393,
                  "end": 411,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 394,
                      "end": 406,
                      "argument": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 408,
                    "end": 411,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 417,
                "end": 462,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 420,
                  "end": 462,
                  "id": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
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
                      "type": "RestElement",
                      "start": 433,
                      "end": 445,
                      "argument": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 437,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 457,
                            "name": "Date",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 459,
                    "end": 462,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 468,
                "end": 492,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 471,
                  "end": 492,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 472,
                      "end": 484,
                      "argument": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 476,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 489,
                    "end": 492,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
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
