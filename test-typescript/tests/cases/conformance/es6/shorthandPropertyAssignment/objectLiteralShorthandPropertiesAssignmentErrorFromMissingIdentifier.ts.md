__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 435,
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
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 106,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 81,
                "end": 106,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 83,
                    "end": 93,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
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
                      "start": 84,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 94,
                    "end": 104,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 96,
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
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 98,
                        "end": 104
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 109,
            "end": 121,
            "properties": [
              {
                "type": "Property",
                "start": 111,
                "end": 115,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 115,
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
                  "start": 111,
                  "end": 115,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 117,
                "end": 119,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 119,
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
                  "start": 117,
                  "end": 119,
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
      "start": 133,
      "end": 226,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 226,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 204,
            "end": 224,
            "argument": {
              "type": "ObjectExpression",
              "start": 211,
              "end": 223,
              "properties": [
                {
                  "type": "Property",
                  "start": 213,
                  "end": 217,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 217,
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
                    "start": 213,
                    "end": 217,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 219,
                  "end": 221,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 221,
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
                    "start": 219,
                    "end": 221,
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
        "start": 142,
        "end": 145,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 146,
          "end": 158,
          "decorators": [],
          "name": "name",
          "optional": false,
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
        },
        {
          "type": "Identifier",
          "start": 160,
          "end": 170,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 170,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 164,
              "end": 170
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 171,
        "end": 201,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 173,
          "end": 201,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 188,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 179,
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
                "start": 179,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 181,
                  "end": 187
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 189,
              "end": 199,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 189,
                "end": 191,
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
                "start": 191,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 193,
                  "end": 199
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
      "start": 237,
      "end": 330,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 308,
            "end": 328,
            "argument": {
              "type": "ObjectExpression",
              "start": 315,
              "end": 327,
              "properties": [
                {
                  "type": "Property",
                  "start": 317,
                  "end": 321,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 321,
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
                    "start": 317,
                    "end": 321,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 323,
                  "end": 325,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 325,
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
                    "start": 323,
                    "end": 325,
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
        "start": 246,
        "end": 249,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 250,
          "end": 262,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 254,
            "end": 262,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 256,
              "end": 262
            }
          }
        },
        {
          "type": "Identifier",
          "start": 264,
          "end": 274,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 268,
              "end": 274
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 275,
        "end": 305,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 277,
          "end": 305,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 279,
              "end": 292,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 279,
                "end": 283,
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
                "start": 283,
                "end": 291,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 285,
                  "end": 291
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 293,
              "end": 303,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 293,
                "end": 295,
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
                "start": 295,
                "end": 303,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 297,
                  "end": 303
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
      "start": 341,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 366,
            "decorators": [],
            "name": "person1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 354,
                "end": 366,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 356,
                    "end": 361,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 360,
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
                    "start": 362,
                    "end": 364,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 364,
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
      "start": 374,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 415,
            "decorators": [],
            "name": "person2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 415,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 387,
                "end": 415,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 389,
                    "end": 402,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 393,
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
                      "start": 393,
                      "end": 401,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 395,
                        "end": 401
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 403,
                    "end": 413,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 405,
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
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 433,
            "arguments": [
              {
                "type": "Literal",
                "start": 422,
                "end": 429,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 421,
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
