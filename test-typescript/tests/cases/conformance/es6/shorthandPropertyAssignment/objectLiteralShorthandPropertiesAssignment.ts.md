__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 546,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 36,
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
      "start": 38,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 54,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 66,
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
      "start": 69,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 109,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 81,
                "end": 109,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 83,
                    "end": 96,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 87,
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
                      "start": 87,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 89,
                        "end": 95
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 107,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 99,
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
                      "start": 99,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 101,
                        "end": 107
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 112,
            "end": 124,
            "properties": [
              {
                "type": "Property",
                "start": 114,
                "end": 118,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
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
                  "start": 114,
                  "end": 118,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 120,
                "end": 122,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 122,
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
                  "start": 120,
                  "end": 122,
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
      "start": 126,
      "end": 171,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 171,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 160,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 160,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 144,
              "end": 160,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 146,
                  "end": 158,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 150,
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
                    "start": 150,
                    "end": 158,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
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
        "start": 161,
        "end": 167,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 171,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 236,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 236,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 214,
            "end": 234,
            "argument": {
              "type": "ObjectExpression",
              "start": 221,
              "end": 233,
              "properties": [
                {
                  "type": "Property",
                  "start": 223,
                  "end": 227,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 227,
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
                    "start": 223,
                    "end": 227,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 229,
                  "end": 231,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 231,
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
                    "start": 229,
                    "end": 231,
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
        "start": 182,
        "end": 185,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 186,
          "end": 198,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 198,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            }
          }
        },
        {
          "type": "Identifier",
          "start": 200,
          "end": 210,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 210,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 204,
              "end": 210
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 237,
      "end": 297,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 297,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 279,
            "end": 295,
            "argument": {
              "type": "ObjectExpression",
              "start": 286,
              "end": 294,
              "properties": [
                {
                  "type": "Property",
                  "start": 288,
                  "end": 292,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
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
                    "start": 288,
                    "end": 292,
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
        "start": 246,
        "end": 250,
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 251,
          "end": 263,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 263,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 257,
              "end": 263
            }
          }
        },
        {
          "type": "Identifier",
          "start": 265,
          "end": 275,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 275,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 269,
              "end": 275
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 298,
      "end": 391,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 367,
        "end": 391,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 369,
            "end": 389,
            "argument": {
              "type": "ObjectExpression",
              "start": 376,
              "end": 388,
              "properties": [
                {
                  "type": "Property",
                  "start": 378,
                  "end": 382,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 382,
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
                    "start": 378,
                    "end": 382,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 384,
                  "end": 386,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 386,
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
                    "start": 384,
                    "end": 386,
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
        "start": 307,
        "end": 310,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 323,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 323,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 317,
              "end": 323
            }
          }
        },
        {
          "type": "Identifier",
          "start": 325,
          "end": 335,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 335,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 329,
              "end": 335
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 336,
        "end": 366,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 338,
          "end": 366,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 340,
              "end": 353,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
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
                "start": 344,
                "end": 352,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 346,
                  "end": 352
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 354,
              "end": 364,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 354,
                "end": 356,
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
                "start": 356,
                "end": 364,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 358,
                  "end": 364
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
      "start": 393,
      "end": 405,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 393,
        "end": 404,
        "arguments": [
          {
            "type": "Identifier",
            "start": 397,
            "end": 403,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 393,
          "end": 396,
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
      "start": 406,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 417,
            "decorators": [],
            "name": "person1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 420,
            "end": 435,
            "arguments": [
              {
                "type": "Literal",
                "start": 424,
                "end": 431,
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 433,
                "end": 434,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
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
      "start": 437,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 484,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 466,
            "decorators": [],
            "name": "person2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 448,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 450,
                "end": 466,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 452,
                    "end": 464,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 456,
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
                      "start": 456,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 458,
                        "end": 464
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 469,
            "end": 484,
            "arguments": [
              {
                "type": "Literal",
                "start": 473,
                "end": 480,
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 482,
                "end": 483,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 469,
              "end": 472,
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
      "start": 486,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 544,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 526,
            "decorators": [],
            "name": "person3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 526,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 499,
                "end": 526,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 501,
                    "end": 514,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 505,
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
                      "start": 505,
                      "end": 513,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 507,
                        "end": 513
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 515,
                    "end": 524,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 517,
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
                      "start": 517,
                      "end": 524,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 518,
                        "end": 524
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 529,
            "end": 544,
            "arguments": [
              {
                "type": "Literal",
                "start": 533,
                "end": 540,
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 542,
                "end": 543,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 529,
              "end": 532,
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
