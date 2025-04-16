__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 867,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "f",
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
          "start": 45,
          "end": 54,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 54,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 56,
          "end": 65,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 76,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 76,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 70,
              "end": 76
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 115,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 84,
            "end": 113,
            "argument": {
              "type": "CallExpression",
              "start": 91,
              "end": 112,
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 101,
                "object": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 96,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "name": "from",
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
                  "start": 102,
                  "end": 111,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 125,
            "end": 126,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 175,
            "end": 200,
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 182,
              "end": 198,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 191,
                  "end": 197
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 212,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 211,
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 209,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 209,
            "name": "clear",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 244,
      "expression": {
        "type": "CallExpression",
        "start": 235,
        "end": 243,
        "callee": {
          "type": "MemberExpression",
          "start": 235,
          "end": 241,
          "object": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "name": "keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 280,
        "name": "Baz",
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
        "start": 283,
        "end": 286,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 296,
      "expression": {
        "type": "MemberExpression",
        "start": 287,
        "end": 295,
        "object": {
          "type": "Identifier",
          "start": 287,
          "end": 290,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 291,
          "end": 295,
          "name": "name",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 329,
      "expression": {
        "type": "CallExpression",
        "start": 316,
        "end": 328,
        "callee": {
          "type": "MemberExpression",
          "start": 316,
          "end": 325,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 320,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 321,
            "end": 325,
            "name": "sign",
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
            "start": 326,
            "end": 327,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 439,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 359,
            "end": 439,
            "properties": [
              {
                "type": "Property",
                "start": 365,
                "end": 369,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 366,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 368,
                  "end": 369,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 375,
                "end": 437,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 376,
                  "end": 394,
                  "object": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 382,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 394,
                    "name": "hasInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 395,
                  "end": 437,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 396,
                      "end": 406,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 401,
                        "end": 406,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 403,
                          "end": 406
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 408,
                    "end": 437,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 418,
                        "end": 431,
                        "argument": {
                          "type": "Literal",
                          "start": 425,
                          "end": 430,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
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
      "type": "ExpressionStatement",
      "start": 441,
      "end": 478,
      "expression": {
        "type": "CallExpression",
        "start": 441,
        "end": 477,
        "callee": {
          "type": "MemberExpression",
          "start": 441,
          "end": 457,
          "object": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 443,
            "end": 457,
            "name": "hasOwnProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 458,
            "end": 476,
            "object": {
              "type": "Identifier",
              "start": 458,
              "end": 464,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 465,
              "end": 476,
              "name": "hasInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
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
      "start": 499,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 507,
            "end": 509,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 515,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 518,
            "end": 534,
            "callee": {
              "type": "Identifier",
              "start": 522,
              "end": 527,
              "name": "Proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 528,
                "end": 529,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 531,
                "end": 533,
                "properties": []
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 558,
      "end": 583,
      "expression": {
        "type": "CallExpression",
        "start": 558,
        "end": 582,
        "callee": {
          "type": "MemberExpression",
          "start": 558,
          "end": 578,
          "object": {
            "type": "Identifier",
            "start": 558,
            "end": 565,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 566,
            "end": 578,
            "name": "isExtensible",
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
            "start": 579,
            "end": 581,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 612,
            "name": "reg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 615,
            "end": 631,
            "callee": {
              "type": "Identifier",
              "start": 619,
              "end": 625,
              "name": "RegExp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 626,
                "end": 630,
                "value": "/s",
                "raw": "\"/s\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 643,
      "expression": {
        "type": "MemberExpression",
        "start": 633,
        "end": 642,
        "object": {
          "type": "Identifier",
          "start": 633,
          "end": 636,
          "name": "reg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 637,
          "end": 642,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 665,
      "end": 689,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 688,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 672,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 675,
            "end": 688,
            "value": "Hello world",
            "raw": "\"Hello world\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 715,
      "expression": {
        "type": "CallExpression",
        "start": 690,
        "end": 714,
        "callee": {
          "type": "MemberExpression",
          "start": 690,
          "end": 702,
          "object": {
            "type": "Identifier",
            "start": 690,
            "end": 693,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 694,
            "end": 702,
            "name": "includes",
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
            "start": 703,
            "end": 710,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 712,
            "end": 713,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 737,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 741,
          "end": 753,
          "id": {
            "type": "Identifier",
            "start": 741,
            "end": 742,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 745,
            "end": 753,
            "callee": {
              "type": "Identifier",
              "start": 745,
              "end": 751,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 786,
      "end": 867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 792,
          "end": 867,
          "id": {
            "type": "Identifier",
            "start": 792,
            "end": 794,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 797,
            "end": 867,
            "properties": [
              {
                "type": "Property",
                "start": 803,
                "end": 865,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 804,
                  "end": 822,
                  "object": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 810,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 822,
                    "name": "hasInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 823,
                  "end": 865,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 824,
                      "end": 834,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 829,
                        "end": 834,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 831,
                          "end": 834
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 836,
                    "end": 865,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 846,
                        "end": 859,
                        "argument": {
                          "type": "Literal",
                          "start": 853,
                          "end": 858,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
