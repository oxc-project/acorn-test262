modularizeLibrary_TargetES6UsingES6Lib.ts
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
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 111,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 101,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 96,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "from",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 54,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 54,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            }
          }
        },
        {
          "type": "Identifier",
          "start": 56,
          "end": 65,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 76,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 76,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 70,
              "end": 76
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 127,
        "arguments": [
          {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 125,
            "end": 126,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 175,
            "end": 200,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "Map",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 212,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 211,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 209,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 209,
            "decorators": [],
            "name": "clear",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 244,
      "expression": {
        "type": "CallExpression",
        "start": 235,
        "end": 243,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 235,
          "end": 241,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "keys",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 286,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 283,
        "end": 286,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 280,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 296,
      "expression": {
        "type": "MemberExpression",
        "start": 287,
        "end": 295,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 287,
          "end": 290,
          "decorators": [],
          "name": "Baz",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 291,
          "end": 295,
          "decorators": [],
          "name": "name",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 329,
      "expression": {
        "type": "CallExpression",
        "start": 316,
        "end": 328,
        "arguments": [
          {
            "type": "Literal",
            "start": 326,
            "end": 327,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 316,
          "end": 325,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 320,
            "decorators": [],
            "name": "Math",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 321,
            "end": 325,
            "decorators": [],
            "name": "sign",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "decorators": [],
            "name": "o",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 366,
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
                  "start": 368,
                  "end": 369,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 375,
                "end": 437,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 376,
                  "end": 394,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 382,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 394,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 395,
                  "end": 437,
                  "async": false,
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
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 396,
                      "end": 406,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 401,
                        "end": 406,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 403,
                          "end": 406
                        }
                      }
                    }
                  ]
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
      "type": "ExpressionStatement",
      "start": 441,
      "end": 478,
      "expression": {
        "type": "CallExpression",
        "start": 441,
        "end": 477,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 458,
            "end": 476,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 458,
              "end": 464,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 465,
              "end": 476,
              "decorators": [],
              "name": "hasInstance",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 441,
          "end": 457,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 443,
            "end": 457,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 507,
            "end": 509,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 515,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 518,
            "end": 534,
            "arguments": [
              {
                "type": "Identifier",
                "start": 528,
                "end": 529,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 531,
                "end": 533,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 522,
              "end": 527,
              "decorators": [],
              "name": "Proxy",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 558,
      "end": 583,
      "expression": {
        "type": "CallExpression",
        "start": 558,
        "end": 582,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 579,
            "end": 581,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 558,
          "end": 578,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 558,
            "end": 565,
            "decorators": [],
            "name": "Reflect",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 566,
            "end": 578,
            "decorators": [],
            "name": "isExtensible",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 612,
            "decorators": [],
            "name": "reg",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 615,
            "end": 631,
            "arguments": [
              {
                "type": "Literal",
                "start": 626,
                "end": 630,
                "raw": "\"/s\"",
                "value": "/s"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 619,
              "end": 625,
              "decorators": [],
              "name": "RegExp",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 643,
      "expression": {
        "type": "MemberExpression",
        "start": 633,
        "end": 642,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 633,
          "end": 636,
          "decorators": [],
          "name": "reg",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 637,
          "end": 642,
          "decorators": [],
          "name": "flags",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 672,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 675,
            "end": 688,
            "raw": "\"Hello world\"",
            "value": "Hello world"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 715,
      "expression": {
        "type": "CallExpression",
        "start": 690,
        "end": 714,
        "arguments": [
          {
            "type": "Literal",
            "start": 703,
            "end": 710,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 712,
            "end": 713,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 690,
          "end": 702,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 690,
            "end": 693,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 694,
            "end": 702,
            "decorators": [],
            "name": "includes",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 741,
            "end": 742,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 745,
            "end": 753,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 745,
              "end": 751,
              "decorators": [],
              "name": "Symbol",
              "optional": false
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
      "start": 786,
      "end": 867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 792,
          "end": 867,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 792,
            "end": 794,
            "decorators": [],
            "name": "o1",
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 804,
                  "end": 822,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 810,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 822,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 823,
                  "end": 865,
                  "async": false,
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
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 824,
                      "end": 834,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 829,
                        "end": 834,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 831,
                          "end": 834
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
