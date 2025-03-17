__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 50,
            "name": "union",
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 79,
                "value": null,
                "raw": "null"
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
      "start": 104,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 142,
            "callee": {
              "type": "MemberExpression",
              "start": 112,
              "end": 125,
              "object": {
                "type": "Identifier",
                "start": 112,
                "end": 118,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 119,
                "end": 125,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 131,
                      "end": 132,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 134,
                    "end": 139,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 137,
                      "end": 139,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 172,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "u",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 180,
            "end": 200,
            "callee": {
              "type": "MemberExpression",
              "start": 180,
              "end": 193,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 186,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 187,
                "end": 193,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 194,
                "end": 199,
                "name": "union",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 249,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 274,
            "callee": {
              "type": "MemberExpression",
              "start": 257,
              "end": 270,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 263,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 270,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 271,
                "end": 273,
                "properties": []
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
      "start": 296,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 329,
            "callee": {
              "type": "MemberExpression",
              "start": 304,
              "end": 317,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 310,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 317,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
      "start": 348,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 379,
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 369,
              "object": {
                "type": "Identifier",
                "start": 356,
                "end": 362,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 363,
                "end": 369,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 370,
                "end": 374,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ObjectExpression",
                "start": 376,
                "end": 378,
                "properties": []
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
      "start": 398,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 406,
            "end": 440,
            "callee": {
              "type": "MemberExpression",
              "start": 406,
              "end": 419,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 412,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 413,
                "end": 419,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 423,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 425,
                      "end": 426,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 428,
                    "end": 433,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 431,
                      "end": 433,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
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
      "start": 442,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 450,
            "end": 474,
            "callee": {
              "type": "MemberExpression",
              "start": 450,
              "end": 463,
              "object": {
                "type": "Identifier",
                "start": 450,
                "end": 456,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 457,
                "end": 463,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 464,
                "end": 469,
                "name": "union",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 471,
                "end": 473,
                "properties": []
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
      "start": 476,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 481,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 484,
            "end": 505,
            "callee": {
              "type": "MemberExpression",
              "start": 484,
              "end": 497,
              "object": {
                "type": "Identifier",
                "start": 484,
                "end": 490,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 491,
                "end": 497,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
      "start": 507,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 544,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 515,
            "end": 544,
            "callee": {
              "type": "MemberExpression",
              "start": 515,
              "end": 528,
              "object": {
                "type": "Identifier",
                "start": 515,
                "end": 521,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 522,
                "end": 528,
                "name": "create",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
