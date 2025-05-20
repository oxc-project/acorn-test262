__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 531,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 14,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 8,
                "end": 14
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "raw": "10000",
            "value": 10000
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 40,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 52,
            "raw": "\"my name\"",
            "value": "my name"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 95,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 95,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 82,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 73,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 75,
                        "end": 81
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 83,
                    "end": 93,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 85,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 87,
                        "end": 93
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 98,
            "end": 110,
            "properties": [
              {
                "type": "Property",
                "start": 100,
                "end": 104,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 106,
                "end": 108,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 108,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 108,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 157,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 146,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 146,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 130,
              "end": 146,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 132,
                  "end": 144,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 144,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 138,
                      "end": 144
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 147,
        "end": 153,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 149,
          "end": 153
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 157,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 222,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 222,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 200,
            "end": 220,
            "argument": {
              "type": "ObjectExpression",
              "start": 207,
              "end": 219,
              "properties": [
                {
                  "type": "Property",
                  "start": 209,
                  "end": 213,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 215,
                  "end": 217,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 217,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 217,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 171,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 172,
          "end": 184,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 184,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 178,
              "end": 184
            }
          }
        },
        {
          "type": "Identifier",
          "start": 186,
          "end": 196,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 196,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 190,
              "end": 196
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 283,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 283,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 265,
            "end": 281,
            "argument": {
              "type": "ObjectExpression",
              "start": 272,
              "end": 280,
              "properties": [
                {
                  "type": "Property",
                  "start": 274,
                  "end": 278,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 278,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 278,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 236,
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 237,
          "end": 249,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 249,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 243,
              "end": 249
            }
          }
        },
        {
          "type": "Identifier",
          "start": 251,
          "end": 261,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 253,
            "end": 261,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 255,
              "end": 261
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 377,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 353,
        "end": 377,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 355,
            "end": 375,
            "argument": {
              "type": "ObjectExpression",
              "start": 362,
              "end": 374,
              "properties": [
                {
                  "type": "Property",
                  "start": 364,
                  "end": 368,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 368,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 368,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 370,
                  "end": 372,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 372,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 372,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 296,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 297,
          "end": 309,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 301,
            "end": 309,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 303,
              "end": 309
            }
          }
        },
        {
          "type": "Identifier",
          "start": 311,
          "end": 321,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 321,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 315,
              "end": 321
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 322,
        "end": 352,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 324,
          "end": 352,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 326,
              "end": 339,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 326,
                "end": 330,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 330,
                "end": 338,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 332,
                  "end": 338
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 340,
              "end": 350,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 342,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 342,
                "end": 350,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 344,
                  "end": 350
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 391,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 390,
        "arguments": [
          {
            "type": "Identifier",
            "start": 383,
            "end": 389,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 379,
          "end": 382,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 421,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 403,
            "decorators": [],
            "name": "person1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 406,
            "end": 421,
            "arguments": [
              {
                "type": "Literal",
                "start": 410,
                "end": 417,
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 419,
                "end": 420,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 406,
              "end": 409,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 470,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 452,
            "decorators": [],
            "name": "person2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 452,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 436,
                "end": 452,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 438,
                    "end": 450,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 442,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 442,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 444,
                        "end": 450
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 455,
            "end": 470,
            "arguments": [
              {
                "type": "Literal",
                "start": 459,
                "end": 466,
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 468,
                "end": 469,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 455,
              "end": 458,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 472,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 512,
            "decorators": [],
            "name": "person3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 512,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 485,
                "end": 512,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 487,
                    "end": 500,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 487,
                      "end": 491,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 491,
                      "end": 499,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 493,
                        "end": 499
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 501,
                    "end": 510,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 503,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 503,
                      "end": 510,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 504,
                        "end": 510
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 515,
            "end": 530,
            "arguments": [
              {
                "type": "Literal",
                "start": 519,
                "end": 526,
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 528,
                "end": 529,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 515,
              "end": 518,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
