__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 533,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 50,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 29,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 29,
                          "end": 37,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 31,
                            "end": 37
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 39,
                        "end": 48,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 42,
                            "end": 48
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 81,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 61,
            "end": 80,
            "callee": {
              "type": "MemberExpression",
              "start": 61,
              "end": 74,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 79,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 140,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 109,
            "end": 139,
            "callee": {
              "type": "MemberExpression",
              "start": 109,
              "end": 122,
              "object": {
                "type": "Identifier",
                "start": 109,
                "end": 115,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 128,
                      "end": 129,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 131,
                    "end": 136,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 134,
                      "end": 136,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 177,
            "end": 197,
            "callee": {
              "type": "MemberExpression",
              "start": 177,
              "end": 190,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 183,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 263,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 245,
            "end": 262,
            "callee": {
              "type": "MemberExpression",
              "start": 245,
              "end": 258,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 258,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 259,
                "end": 261,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 289,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 317,
            "callee": {
              "type": "MemberExpression",
              "start": 292,
              "end": 305,
              "object": {
                "type": "Identifier",
                "start": 292,
                "end": 298,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 299,
                "end": 305,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 306,
                "end": 316,
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 307,
                  "end": 313
                },
                "expression": {
                  "type": "ObjectExpression",
                  "start": 314,
                  "end": 316,
                  "properties": []
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 344,
            "end": 367,
            "callee": {
              "type": "MemberExpression",
              "start": 344,
              "end": 357,
              "object": {
                "type": "Identifier",
                "start": 344,
                "end": 350,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 351,
                "end": 357,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 358,
                "end": 362,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ObjectExpression",
                "start": 364,
                "end": 366,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 429,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 394,
            "end": 428,
            "callee": {
              "type": "MemberExpression",
              "start": 394,
              "end": 407,
              "object": {
                "type": "Identifier",
                "start": 394,
                "end": 400,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 401,
                "end": 407,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 413,
                      "end": 414,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 416,
                    "end": 421,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 419,
                      "end": 421,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 462,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 435,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 462,
            "callee": {
              "type": "MemberExpression",
              "start": 438,
              "end": 451,
              "object": {
                "type": "Identifier",
                "start": 438,
                "end": 444,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 445,
                "end": 451,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 457,
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 459,
                "end": 461,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 472,
            "end": 493,
            "callee": {
              "type": "MemberExpression",
              "start": 472,
              "end": 485,
              "object": {
                "type": "Identifier",
                "start": 472,
                "end": 478,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 479,
                "end": 485,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 533,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 532,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 532,
            "callee": {
              "type": "MemberExpression",
              "start": 503,
              "end": 516,
              "object": {
                "type": "Identifier",
                "start": 503,
                "end": 509,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 510,
                "end": 516,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 517,
                "end": 527,
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 518,
                  "end": 524
                },
                "expression": {
                  "type": "ObjectExpression",
                  "start": 525,
                  "end": 527,
                  "properties": []
                }
              },
              {
                "type": "ObjectExpression",
                "start": 529,
                "end": 531,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
