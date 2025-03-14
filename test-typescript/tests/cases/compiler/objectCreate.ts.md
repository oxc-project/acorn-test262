objectCreate.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 546,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 50,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 50,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 19,
                "end": 50,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 19,
                    "end": 23
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 26,
                    "end": 50,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 28,
                        "end": 38,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 29,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 29,
                          "end": 37,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 31,
                            "end": 37
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 39,
                        "end": 48,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 42,
                            "end": 48
                          }
                        }
                      }
                    ]
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
      "type": "VariableDeclaration",
      "start": 53,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 61,
            "end": 80,
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 79,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 61,
              "end": 74,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 142,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 126,
                "end": 141,
                "properties": [
                  {
                    "type": "Property",
                    "start": 128,
                    "end": 132,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 131,
                      "end": 132,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 134,
                    "end": 139,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 137,
                      "end": 139,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 112,
              "end": 125,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 112,
                "end": 118,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 119,
                "end": 125,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 200,
            "arguments": [
              {
                "type": "Identifier",
                "start": 194,
                "end": 199,
                "decorators": [],
                "name": "union",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 180,
              "end": 193,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 186,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 187,
                "end": 193,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 274,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 271,
                "end": 273,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 257,
              "end": 270,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 263,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 270,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 329,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 318,
                "end": 328,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 326,
                  "end": 328,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 319,
                  "end": 325
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 304,
              "end": 317,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 310,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 317,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 379,
            "arguments": [
              {
                "type": "Literal",
                "start": 370,
                "end": 374,
                "raw": "null",
                "value": null
              },
              {
                "type": "ObjectExpression",
                "start": 376,
                "end": 378,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 369,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 362,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 363,
                "end": 369,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 398,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 406,
            "end": 440,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 420,
                "end": 435,
                "properties": [
                  {
                    "type": "Property",
                    "start": 422,
                    "end": 426,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 423,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 425,
                      "end": 426,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 428,
                    "end": 433,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 431,
                      "end": 433,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 437,
                "end": 439,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 406,
              "end": 419,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 412,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 413,
                "end": 419,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 450,
            "end": 474,
            "arguments": [
              {
                "type": "Identifier",
                "start": 464,
                "end": 469,
                "decorators": [],
                "name": "union",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 471,
                "end": 473,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 450,
              "end": 463,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 450,
                "end": 456,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 457,
                "end": 463,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 505,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 481,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 484,
            "end": 505,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 498,
                "end": 500,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 502,
                "end": 504,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 484,
              "end": 497,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 484,
                "end": 490,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 491,
                "end": 497,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 507,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 544,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 515,
            "end": 544,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 529,
                "end": 539,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 537,
                  "end": 539,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 530,
                  "end": 536
                }
              },
              {
                "type": "ObjectExpression",
                "start": 541,
                "end": 543,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 515,
              "end": 528,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 515,
                "end": 521,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 522,
                "end": 528,
                "decorators": [],
                "name": "create",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
