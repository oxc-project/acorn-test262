__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
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
            "value": 10000,
            "regex": null,
            "bigint": null
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
            "value": "my name",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 92,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 79,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 72,
                        "end": 78
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 90,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 82,
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
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 84,
                        "end": 90
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 95,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 97,
                "end": 101,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
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
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 103,
                "end": 105,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 105,
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
                  "start": 103,
                  "end": 105,
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
      "start": 119,
      "end": 212,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 212,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 190,
            "end": 210,
            "argument": {
              "type": "ObjectExpression",
              "start": 197,
              "end": 209,
              "properties": [
                {
                  "type": "Property",
                  "start": 199,
                  "end": 203,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
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
                    "start": 199,
                    "end": 203,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 205,
                  "end": 207,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 207,
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
                    "start": 205,
                    "end": 207,
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
        "start": 128,
        "end": 131,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 132,
          "end": 144,
          "decorators": [],
          "name": "name",
          "optional": false,
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
        },
        {
          "type": "Identifier",
          "start": 146,
          "end": 156,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 156,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 150,
              "end": 156
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 157,
        "end": 187,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 159,
          "end": 187,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 161,
              "end": 174,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 161,
                "end": 165,
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
                "start": 165,
                "end": 173,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 167,
                  "end": 173
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 185,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 177,
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
                "start": 177,
                "end": 185,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 179,
                  "end": 185
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 316,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 292,
        "end": 316,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 294,
            "end": 314,
            "argument": {
              "type": "ObjectExpression",
              "start": 301,
              "end": 313,
              "properties": [
                {
                  "type": "Property",
                  "start": 303,
                  "end": 307,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
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
                    "start": 303,
                    "end": 307,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 309,
                  "end": 311,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 311,
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
                    "start": 309,
                    "end": 311,
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
        "start": 232,
        "end": 235,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 236,
          "end": 248,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 248,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 242,
              "end": 248
            }
          }
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 260,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 260,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 254,
              "end": 260
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 261,
        "end": 291,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 263,
          "end": 291,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 265,
              "end": 278,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 265,
                "end": 269,
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
                "start": 269,
                "end": 277,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 271,
                  "end": 277
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 279,
              "end": 289,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 279,
                "end": 281,
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
                "start": 281,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 283,
                  "end": 289
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 352,
            "decorators": [],
            "name": "person1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 340,
                "end": 352,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 342,
                    "end": 347,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 346,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 348,
                    "end": 350,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 350,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
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
      "start": 360,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 401,
            "decorators": [],
            "name": "person2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 401,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 373,
                "end": 401,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 375,
                    "end": 388,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 379,
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
                      "start": 379,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 381,
                        "end": 387
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 389,
                    "end": 399,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 391,
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
                      "start": 391,
                      "end": 399,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 393,
                        "end": 399
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 404,
            "end": 419,
            "arguments": [
              {
                "type": "Literal",
                "start": 408,
                "end": 415,
                "raw": "\"hello\"",
                "value": "hello",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 417,
                "end": 418,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 404,
              "end": 407,
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
