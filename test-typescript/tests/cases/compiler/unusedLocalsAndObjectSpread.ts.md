__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 669,
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 42,
            "name": "console",
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
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 26,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 33,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 28,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 30,
                            "end": 33
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "name": "one",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 75,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 83,
                        "end": 84,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 86,
                      "end": 90,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 89,
                        "end": 90,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 142,
                  "end": 153,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 143,
                      "end": 144,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 146,
                      "end": 152,
                      "argument": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 152,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 159,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 165,
            "end": 182,
            "expression": {
              "type": "CallExpression",
              "start": 165,
              "end": 181,
              "callee": {
                "type": "MemberExpression",
                "start": 165,
                "end": 176,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 172,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "name": "log",
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
                  "start": 177,
                  "end": 180,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 328,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 198,
        "name": "two",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 216,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 224,
                        "end": 225,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 227,
                      "end": 231,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 230,
                        "end": 231,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 283,
                  "end": 297,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 284,
                      "end": 288,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 285,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 288,
                        "name": "_",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 290,
                      "end": 296,
                      "argument": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 296,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 303,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 309,
            "end": 326,
            "expression": {
              "type": "CallExpression",
              "start": 309,
              "end": 325,
              "callee": {
                "type": "MemberExpression",
                "start": 309,
                "end": 320,
                "object": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 316,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 320,
                  "name": "log",
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
                  "start": 321,
                  "end": 324,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 330,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 344,
        "name": "three",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 362,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 368,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 370,
                        "end": 371,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 373,
                      "end": 377,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 376,
                        "end": 377,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 429,
                  "end": 440,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 430,
                      "end": 431,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 433,
                      "end": 439,
                      "argument": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 439,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 446,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 668,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 512,
        "name": "four",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 530,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 541,
                      "end": 545,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 542,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 544,
                        "end": 545,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 597,
                  "end": 611,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 598,
                      "end": 602,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 601,
                        "end": 602,
                        "name": "_",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 604,
                      "end": 610,
                      "argument": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 610,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 617,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
