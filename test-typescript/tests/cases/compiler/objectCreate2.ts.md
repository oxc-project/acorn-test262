__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
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
      "start": 101,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 109,
            "end": 139,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 123,
                "end": 138,
                "properties": [
                  {
                    "type": "Property",
                    "start": 125,
                    "end": 129,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
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
                      "start": 128,
                      "end": 129,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 131,
                    "end": 136,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
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
                      "start": 134,
                      "end": 136,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 109,
              "end": 122,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 109,
                "end": 115,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
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
      "start": 169,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 177,
            "end": 197,
            "arguments": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "decorators": [],
                "name": "union",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 177,
              "end": 190,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 183,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
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
      "start": 237,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 262,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 259,
                "end": 261,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 245,
              "end": 258,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 258,
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
      "start": 284,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 289,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 317,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 306,
                "end": 316,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 314,
                  "end": 316,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 307,
                  "end": 313
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 292,
              "end": 305,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 292,
                "end": 298,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 299,
                "end": 305,
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
      "start": 336,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 344,
            "end": 367,
            "arguments": [
              {
                "type": "Literal",
                "start": 358,
                "end": 362,
                "raw": "null",
                "value": null
              },
              {
                "type": "ObjectExpression",
                "start": 364,
                "end": 366,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 344,
              "end": 357,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 344,
                "end": 350,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 351,
                "end": 357,
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
      "start": 386,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 394,
            "end": 428,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 408,
                "end": 423,
                "properties": [
                  {
                    "type": "Property",
                    "start": 410,
                    "end": 414,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
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
                      "start": 413,
                      "end": 414,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 416,
                    "end": 421,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
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
                      "start": 419,
                      "end": 421,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 425,
                "end": 427,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 394,
              "end": 407,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 394,
                "end": 400,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 401,
                "end": 407,
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
      "start": 430,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 435,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 462,
            "arguments": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 457,
                "decorators": [],
                "name": "union",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 459,
                "end": 461,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 438,
              "end": 451,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 438,
                "end": 444,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 445,
                "end": 451,
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
      "start": 464,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 493,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 472,
            "end": 493,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 486,
                "end": 488,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 490,
                "end": 492,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 472,
              "end": 485,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 472,
                "end": 478,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 479,
                "end": 485,
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
      "start": 495,
      "end": 533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 532,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 532,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 517,
                "end": 527,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 525,
                  "end": 527,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 518,
                  "end": 524
                }
              },
              {
                "type": "ObjectExpression",
                "start": 529,
                "end": 531,
                "properties": []
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 503,
              "end": 516,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 503,
                "end": 509,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 510,
                "end": 516,
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
  "sourceType": "script",
  "hashbang": null
}
```
