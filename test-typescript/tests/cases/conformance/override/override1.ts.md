__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 590,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 58,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 32,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 19,
                  "end": 28,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 22,
                      "end": 28
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 32,
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
          },
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 56,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "fooo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 56,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 56,
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
      "type": "ClassDeclaration",
      "start": 60,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 111,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 111,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 107,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 111,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": true,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "name": "fooo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 122,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 126,
                      "end": 132
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 136,
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
          },
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 155,
                  "end": 164,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 168,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": true,
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
      "type": "ClassDeclaration",
      "start": 172,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 214,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 212,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 208,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 200,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 210,
                "end": 212,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": true,
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
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 226,
        "name": "f",
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
        "start": 230,
        "end": 377,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 236,
            "end": 375,
            "argument": {
              "type": "ClassExpression",
              "start": 243,
              "end": 375,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 259,
                "end": 375,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 269,
                    "end": 296,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 281,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 282,
                      "end": 296,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 283,
                          "end": 292,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 284,
                            "end": 292,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 286,
                              "end": 292
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 294,
                        "end": 296,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": true,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 310,
                    "end": 329,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 314,
                      "name": "fooo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 315,
                      "end": 329,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 316,
                          "end": 325,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 317,
                            "end": 325,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 319,
                              "end": 325
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 327,
                        "end": 329,
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 343,
                    "end": 369,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 355,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 355,
                      "end": 369,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 356,
                          "end": 365,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 357,
                            "end": 365,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 359,
                              "end": 365
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 367,
                        "end": 369,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": true,
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 379,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 386,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "ClassExpression",
        "start": 396,
        "end": 435,
        "id": null,
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 402,
          "end": 435,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 408,
              "end": 418,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 408,
                "end": 411,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 412,
                "end": 418,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 415,
                  "end": 418,
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
            },
            {
              "type": "MethodDefinition",
              "start": 423,
              "end": 433,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 423,
                "end": 426,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 427,
                "end": 433,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 430,
                  "end": 433,
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
      "body": {
        "type": "ClassBody",
        "start": 437,
        "end": 518,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 443,
            "end": 462,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 455,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 456,
              "end": 462,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "decorators": [],
            "override": true,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 467,
            "end": 477,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 470,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 477,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 474,
                "end": 477,
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
          },
          {
            "type": "MethodDefinition",
            "start": 483,
            "end": 491,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 486,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 486,
              "end": 491,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 489,
                "end": 491,
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
          },
          {
            "type": "MethodDefinition",
            "start": 497,
            "end": 516,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 510,
              "name": "bazz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 511,
              "end": 516,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 514,
                "end": 516,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": true,
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
      "type": "FunctionDeclaration",
      "start": 520,
      "end": 590,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 531,
        "name": "ff",
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
        "start": 535,
        "end": 590,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 541,
            "end": 588,
            "argument": {
              "type": "ClassExpression",
              "start": 548,
              "end": 588,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 554,
                "end": 588,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 564,
                    "end": 582,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 576,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 577,
                      "end": 582,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 580,
                        "end": 582,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": true,
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
