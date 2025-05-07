__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 668,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 42,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 42,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 23,
                    "end": 40,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 33,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 28,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 30,
                            "end": 33
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 40,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 36,
                        "end": 40
                      }
                    },
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
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 184,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 184,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 72,
                "end": 92,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 75,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 78,
                  "end": 92,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 80,
                      "end": 84,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
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
                        "type": "Literal",
                        "start": 83,
                        "end": 84,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 86,
                      "end": 90,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
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
                        "type": "Literal",
                        "start": 89,
                        "end": 90,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 136,
            "end": 160,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 142,
                "end": 159,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 142,
                  "end": 153,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 143,
                      "end": 144,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 146,
                      "end": 152,
                      "argument": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 152,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 159,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 165,
            "end": 182,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 165,
              "end": 181,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 180,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 176,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 172,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "one",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 328,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 328,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 207,
            "end": 234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 213,
                "end": 233,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 216,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 219,
                  "end": 233,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 221,
                      "end": 225,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
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
                        "type": "Literal",
                        "start": 224,
                        "end": 225,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 227,
                      "end": 231,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
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
                        "type": "Literal",
                        "start": 230,
                        "end": 231,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 303,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 283,
                  "end": 297,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 284,
                      "end": 288,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
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
                        "type": "Identifier",
                        "start": 287,
                        "end": 288,
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 290,
                      "end": 296,
                      "argument": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 296,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 303,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 309,
            "end": 326,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 309,
              "end": 325,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 324,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 309,
                "end": 320,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 316,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 320,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 198,
        "decorators": [],
        "name": "two",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 330,
      "end": 497,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 347,
        "end": 497,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 353,
            "end": 380,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 379,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 362,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 365,
                  "end": 379,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 367,
                      "end": 371,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 368,
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
                        "type": "Literal",
                        "start": 370,
                        "end": 371,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 373,
                      "end": 377,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
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
                        "type": "Literal",
                        "start": 376,
                        "end": 377,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 447,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 429,
                "end": 446,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 429,
                  "end": 440,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 430,
                      "end": 431,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 433,
                      "end": 439,
                      "argument": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 439,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 446,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 344,
        "decorators": [],
        "name": "three",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 668,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 515,
        "end": 668,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 521,
            "end": 548,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 527,
                "end": 547,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 530,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 533,
                  "end": 547,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 535,
                      "end": 539,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
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
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 541,
                      "end": 545,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 542,
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
                        "type": "Literal",
                        "start": 544,
                        "end": 545,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 591,
            "end": 618,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 597,
                "end": 617,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 597,
                  "end": 611,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 598,
                      "end": 602,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
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
                        "type": "Identifier",
                        "start": 601,
                        "end": 602,
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 604,
                      "end": 610,
                      "argument": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 610,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 617,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 512,
        "decorators": [],
        "name": "four",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
