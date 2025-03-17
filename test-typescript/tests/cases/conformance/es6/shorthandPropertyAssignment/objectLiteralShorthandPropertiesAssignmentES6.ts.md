__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 547,
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
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "name": "id",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 36,
            "value": 10000,
            "raw": "10000"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 54,
            "name": "name",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 66,
            "value": "my name",
            "raw": "\"my name\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 109,
            "name": "person",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 87,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 89,
                        "end": 95
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 107,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 99,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 101,
                        "end": 107
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 120,
                "end": 122,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 122,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 122,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
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
          "type": "Identifier",
          "start": 139,
          "end": 160,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 150,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 158,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 171,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 161,
        "end": 167,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        }
      }
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
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 185,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 186,
          "end": 198,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 198,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 200,
          "end": 210,
          "name": "id",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 210,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 204,
              "end": 210
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 227,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 227,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 229,
                  "end": 231,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 231,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 231,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 237,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 250,
        "name": "bar1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 251,
          "end": 263,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 263,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 257,
              "end": 263
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 265,
          "end": 275,
          "name": "id",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 275,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 269,
              "end": 275
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 298,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 310,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 323,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 323,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 317,
              "end": 323
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 325,
          "end": 335,
          "name": "id",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 335,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 329,
              "end": 335
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 382,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 382,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 384,
                  "end": 386,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 386,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 386,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 344,
                "end": 352,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 346,
                  "end": 352
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 354,
              "end": 364,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 354,
                "end": 356,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 356,
                "end": 364,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 358,
                  "end": 364
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 405,
      "expression": {
        "type": "CallExpression",
        "start": 393,
        "end": 404,
        "callee": {
          "type": "Identifier",
          "start": 393,
          "end": 396,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 397,
            "end": 403,
            "name": "person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 417,
            "name": "person1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 420,
            "end": 435,
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 424,
                "end": 431,
                "value": "Hello",
                "raw": "\"Hello\""
              },
              {
                "type": "Literal",
                "start": 433,
                "end": 434,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 466,
            "name": "person2",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 456,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 456,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 458,
                        "end": 464
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 469,
            "end": 484,
            "callee": {
              "type": "Identifier",
              "start": 469,
              "end": 472,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 473,
                "end": 480,
                "value": "Hello",
                "raw": "\"Hello\""
              },
              {
                "type": "Literal",
                "start": 482,
                "end": 483,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 545,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 527,
            "name": "person3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 527,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 499,
                "end": 527,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 501,
                    "end": 514,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 505,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 505,
                      "end": 513,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 507,
                        "end": 513
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 515,
                    "end": 525,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 517,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 517,
                      "end": 525,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 519,
                        "end": 525
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 530,
            "end": 545,
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 533,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 534,
                "end": 541,
                "value": "Hello",
                "raw": "\"Hello\""
              },
              {
                "type": "Literal",
                "start": 543,
                "end": 544,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false,
            "typeArguments": null
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
